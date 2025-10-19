import { db, users } from "@repo/db";
import { auth } from "@repo/auth";
import { type CreateNextContextOptions } from "@trpc/server/adapters/next";
import { logger } from "@repo/logger";
import { eq } from "drizzle-orm";

/**
 * Extended session type with user data
 */
export interface SessionWithUser {
  session: {
    id: string;
    userId: string;
    expiresAt: Date;
  };
  user: {
    id: string;
    email: string;
    name: string;
    role: string;
    tenantId: number;
    image: string | null;
  };
}

/**
 * Converts Node.js IncomingHttpHeaders to Web API Headers
 * @param {import('http').IncomingHttpHeaders} nodeHeaders - Node.js headers object
 * @returns {Headers} Web API Headers object
 */
function convertToWebHeaders(
  nodeHeaders: import("http").IncomingHttpHeaders
): Headers {
  const webHeaders = new Headers();

  Object.entries(nodeHeaders).forEach(([key, value]) => {
    if (value !== undefined) {
      if (Array.isArray(value)) {
        webHeaders.set(key, value.join(", "));
      } else {
        webHeaders.set(key, value);
      }
    }
  });

  return webHeaders;
}

/**
 * Context factory class for creating tRPC request contexts.
 * Follows Single Responsibility Principle - only handles context creation.
 *
 * @class ContextFactory
 */
export class ContextFactory {
  /**
   * Fetches user data from database
   * @param {string} userId - The user ID from session
   * @returns {Promise<SessionWithUser['user'] | null>} User data or null
   * @private
   */
  private async getUserData(
    userId: string
  ): Promise<SessionWithUser["user"] | null> {
    const user = await db.query.users.findFirst({
      where: eq(users.id, userId),
      columns: {
        id: true,
        email: true,
        name: true,
        role: true,
        tenantId: true,
        image: true,
      },
    });

    return user || null;
  }

  /**
   * Creates the context for each tRPC request
   * @param {CreateNextContextOptions} opts - Next.js request options
   * @returns {Promise<{ db: typeof db; session: SessionWithUser | null }>} The request context
   */
  public async create(opts: CreateNextContextOptions): Promise<{
    db: typeof db;
    session: SessionWithUser | null;
  }> {
    logger.debug("Creating tRPC context");

    try {
      // Convert Node.js headers to Web API Headers
      const webHeaders = convertToWebHeaders(opts.req.headers);

      // Get session from Better Auth
      const authSession = await auth.api.getSession({
        headers: webHeaders,
      });

      if (!authSession) {
        logger.debug("No active session found");
        return {
          db,
          session: null,
        };
      }

      // Fetch user data from database
      const userData = await this.getUserData(authSession.user.id);

      if (!userData) {
        logger.warn(
          { userId: authSession.user.id },
          "User not found for session"
        );
        return {
          db,
          session: null,
        };
      }

      logger.debug({ userId: userData.id }, "Authenticated request");

      return {
        db,
        session: {
          session: {
            id: authSession.session.id,
            userId: authSession.user.id,
            expiresAt: authSession.session.expiresAt,
          },
          user: userData,
        },
      };
    } catch (error) {
      logger.error({ error }, "Error creating context");
      return {
        db,
        session: null,
      };
    }
  }
}

// Export singleton instance
export const contextFactory = new ContextFactory();

// Export the context type
export type Context = Awaited<ReturnType<typeof contextFactory.create>>;
