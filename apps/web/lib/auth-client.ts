import { createAuthClient } from "better-auth/react";

export type AuthClient = ReturnType<typeof createAuthClient>;

export const auth: AuthClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
});

export const signIn: AuthClient["signIn"] = auth.signIn;
export const signUp: AuthClient["signUp"] = auth.signUp;
export const signOut: AuthClient["signOut"] = auth.signOut;
export const useSession: AuthClient["useSession"] = auth.useSession;
export const resetPassword: AuthClient["resetPassword"] = auth.resetPassword;
export const forgetPassword: AuthClient["forgetPassword"] = auth.forgetPassword;
