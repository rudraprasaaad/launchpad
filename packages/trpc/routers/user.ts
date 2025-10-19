import { logger } from "@repo/logger";
import { procedureFactory } from "../procedures";
import { userService } from "../services/UserService";
import { z } from "zod";

export const userRouter = procedureFactory.router({
  /**
   * Get current user profile
   * @protected requires authentication
   * @returns {PublicUserData} Current user's profile.
   */
  me: procedureFactory.protected.query(
    async ({ ctx }): Promise<ReturnType<typeof userService.getUserById>> => {
      logger.info(
        { userId: ctx.session.user.id },
        "Fetching current user profile"
      );
      return userService.getUserById(ctx.session.user.id, ctx.session.user.id);
    }
  ),

  /**
   * Update current user profile
   * @protected Requires authentication
   * @param {object} input - Update data
   * @param {string} [input.name] - New name
   * @param {string} [input.image] - New profile image URL
   * @returns {PublicUserData} Updated user profile
   */
  update: procedureFactory.protected
    .input(
      z.object({
        name: z.string().min(1).max(256).optional(),
        image: z.url().optional(),
      })
    )
    .mutation(
      async ({
        input,
        ctx,
      }): Promise<ReturnType<typeof userService.updateUser>> => {
        logger.info({ userId: ctx.session.user.id }, "Updating user profile");
        return userService.updateUser(ctx.session.user.id, input);
      }
    ),

  /**
   * List all users in the current tenant
   * @protected Requires authentication
   * @admin Only admins can access
   * @returns {PublicUserData[]} Array of users in the tenant
   */
  listInTenant: procedureFactory.admin.query(
    async ({
      ctx,
    }): Promise<ReturnType<typeof userService.getUsersByTenant>> => {
      logger.info(
        { tenantId: ctx.session.user.tenantId },
        "Listing users in tenant"
      );
      return userService.getUsersByTenant(
        ctx.session.user.tenantId,
        ctx.session.user.role
      );
    }
  ),
});
