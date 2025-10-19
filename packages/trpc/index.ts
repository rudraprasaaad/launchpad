/**
 * @returns {AppRouter} The complete tRPC rotuer
 */

import { procedureFactory } from "./procedures";
import { userRouter } from "./routers/user";

export const appRouter = procedureFactory.router({
  health: procedureFactory.public.query(
    (): { status: string; timestamp: number } => {
      return {
        status: "ok",
        timestamp: Date.now(),
      };
    }
  ),

  user: userRouter,
});

export type AppRouter = typeof appRouter;

export { contextFactory } from "./context";
