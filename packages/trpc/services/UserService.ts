import { db, users } from "@repo/db";
import { eq } from "drizzle-orm";
import { logger } from "@repo/logger";
import { TRPCError } from "@trpc/server";

export interface UpdateUserInput {
  name?: string;
  image?: string;
}

export interface PublicUserData {
  id: string;
  name: string;
  email: string;
  image: string | null;
  role: string;
  tenantId: number | null;
  createdAt: Date;
}

/**
 * Handling all user-related business logic.
 * Can be called by both tRPC routers and REST endpoints.
 * @class UserService
 */

export class UserService {
  /**
   * Retrieves a user by their ID with authorization check
   * @param {string} userId - The ID of the user to retrieve.
   * @param {string} requestingUserId - The ID of the uesr making the request
   * @returns {Promise<PublicUserData>} The user's public data
   * @throws {TRPCError} If user not found or unauthorized.
   */

  public async getUserById(
    userId: string,
    requestingUserId: string
  ): Promise<PublicUserData> {
    logger.debug({ userId, requestingUserId }, "Fetching user by ID");

    if (userId !== requestingUserId) {
      logger.warn(
        { userId, requestingUserId },
        "Unauthorized user access attempt."
      );
      throw new TRPCError({
        code: "FORBIDDEN",
        message: "You can only view your own profile",
      });
    }

    const user = await db.query.users.findFirst({
      where: eq(users.id, userId),
      with: {
        tenant: true,
      },
    });

    if (!user) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "User not found",
      });
    }

    return this.toPublisUserData(user);
  }

  /**
   * Updates a user's profile information
   * @param {string} userId - The ID of the user to update
   * @param {UpdateUserInput} data - The data to update
   * @returns {Promise<PublicUserData>} The updated user data
   * @throws {TRPCError} If update fails
   */
  public async updateUser(
    userId: string,
    data: UpdateUserInput
  ): Promise<PublicUserData> {
    logger.info({ userId, data }, "Updating user profile");

    try {
      const [updatedUser] = await db
        .update(users)
        .set({
          ...data,
          updatedAt: new Date(),
        })
        .where(eq(users.id, userId))
        .returning();

      if (!updatedUser) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "User not found",
        });
      }

      logger.info({ userId }, "User profile updated successfully");
      return this.toPublisUserData(updatedUser);
    } catch (error) {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to update user profile",
      });
    }
  }

  /**
   * Retrieves all users in a tenant (admin only)
   * @param {number} tenantId - The tenant ID
   * @param {string} requestignUserRole - The role of the requesting user
   * @returns {Promise<PublicUserData[]>} Array of users in the tenant
   * @throws {TRPCError} If not authorized
   */

  public async getUsersByTenant(
    tenantId: number,
    requestingUserRole: string
  ): Promise<PublicUserData[]> {
    logger.debug({ tenantId, requestingUserRole }, "Fetching users by tenant");

    if (requestingUserRole !== "ADMIN") {
      logger.warn(
        { tenantId, requestingUserRole },
        "Non-admin attempted to list users"
      );
      throw new TRPCError({
        code: "FORBIDDEN",
        message: "Only admins can view all users",
      });
    }

    const tenantUsers = await db.query.users.findMany({
      where: eq(users.tenantId, tenantId),
    });

    return tenantUsers.map((user) => this.toPublisUserData(user));
  }

  /**
   * Converts a database user object to public user data (removes sensitive fields)
   * @param {User} user - The user object from database
   * @returns {PublicUserData} Public user data
   * @private
   */
  private toPublisUserData(user: typeof users.$inferSelect): PublicUserData {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      image: user.image,
      role: user.role,
      tenantId: user.tenantId,
      createdAt: user.createdAt,
    };
  }
}

export const userService = new UserService();
