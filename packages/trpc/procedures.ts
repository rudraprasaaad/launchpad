import { initTRPC, TRPCError } from "@trpc/server";
import { type Context } from "./context";
import superjson from "superjson";
import { logger } from "@repo/logger";

/**
 * Role types for authorization
 */
type UserRole = "ADMIN" | "MEMBER";

/**
 * Factory class for creating tRPC procedures with different authorization levels.
 * Implements the Factory pattern for creating API endpoints.
 *
 * @class ProcedureFactory
 */
export class ProcedureFactory {
  private readonly t;

  constructor() {
    this.t = initTRPC.context<Context>().create({
      transformer: superjson,
      errorFormatter: ({ shape, error }) => {
        logger.error({ error: error.message, code: error.code }, "tRPC error");
        return shape;
      },
    });
  }

  /**
   * Public procedure - no authentication required
   */
  public get public() {
    return this.t.procedure;
  }

  /**
   * Middleware to check if user is authenticated
   * @private
   */
  private get isAuthenticated() {
    return this.t.middleware(({ next, ctx }) => {
      if (!ctx.session?.user) {
        logger.warn("Unauthorized access attempt");
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "You must be logged in to access this resource",
        });
      }

      return next({
        ctx: {
          ...ctx,
          session: ctx.session,
        },
      });
    });
  }

  /**
   * Protected procedure - requires authentication
   */
  public get protected() {
    return this.t.procedure.use(this.isAuthenticated);
  }

  /**
   * Creates a role-based access control procedure
   * @param {UserRole} role - The required role
   */
  public withRole(role: UserRole) {
    const hasRole = this.t.middleware(({ next, ctx }) => {
      if (!ctx.session?.user) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "You must be logged in",
        });
      }

      if (ctx.session.user.role !== role) {
        logger.warn(
          {
            userId: ctx.session.user.id,
            requiredRole: role,
            userRole: ctx.session.user.role,
          },
          "Insufficient permissions"
        );
        throw new TRPCError({
          code: "FORBIDDEN",
          message: `This action requires ${role} role`,
        });
      }

      return next({
        ctx: {
          ...ctx,
          session: ctx.session,
        },
      });
    });

    return this.t.procedure.use(this.isAuthenticated).use(hasRole);
  }

  public get admin() {
    return this.withRole("ADMIN");
  }

  public get router() {
    return this.t.router;
  }

  public get middleware() {
    return this.t.middleware;
  }
}

export const procedureFactory = new ProcedureFactory();
