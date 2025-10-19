import { db } from "@repo/db";
import { logger } from "@repo/logger";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import type {
  Session as BetterAuthSession,
  User as BetterAuthUser,
} from "better-auth";

interface AuthConfig {
  baseURL: string;
  secret: string;
  emailAndPassword: {
    enabled: boolean;
    requireEmailVerification: boolean;
  };
  socialProviders: {
    google: {
      clientId: string;
      clientSecret: string;
    };
  };
}

/**
 *
 * @class AuthService
 * @implements {Singleton Pattern}
 * @implements {Single Responsibility Principle - handles only auth logic}
 *
 */

export class AuthService {
  private static instance: ReturnType<typeof betterAuth>;

  private constructor() {}

  /**
   * Validates that all required environment variables are set
   * @throws {Error} If any required environment variable is missing
   * @returns {void}
   */

  private static validateEnvironment(): void {
    const requiredVars: string[] = [
      "BETTER_AUTH_SECRET",
      "BETTER_AUTH_URL",
      "GOOGLE_CLIENT_ID",
      "GOOGLE_CLIENT_SECRET",
    ];

    const missingVars = requiredVars.filter((varName) => !process.env[varName]);

    if (missingVars.length > 0) {
      const errorMessage = `Missing required environment variables: ${missingVars.join(", ")}`;
      logger.error({ missingVars }, errorMessage);
      throw new Error(errorMessage);
    }
  }

  /**
   * @returns {AuthConfig}
   */
  private static createConfig(): ReturnType<typeof betterAuth> {
    this.validateEnvironment();

    const config: AuthConfig = {
      baseURL: process.env.BETTER_AUTH_URL!,
      secret: process.env.BETTER_AUTH_SECRET!,
      emailAndPassword: {
        enabled: true,
        requireEmailVerification: true,
      },
      socialProviders: {
        google: {
          clientId: process.env.GOOGLE_CLIENT_ID!,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        },
      },
    };

    return betterAuth({
      database: drizzleAdapter(db, {
        provider: "pg",
      }),
      emailAndPassword: config.emailAndPassword,
      socialProviders: config.socialProviders,
      session: {
        expiresIn: 60 * 60 * 24 * 7, // 7 days
        updateAge: 60 * 60 * 24, // 1 day
      },
      secret: config.secret,
      baseURL: config.baseURL,
    });
  }

  public static getInstance(): ReturnType<typeof betterAuth> {
    if (!AuthService.instance) {
      logger.info("Initializing Better Auth service...");
      AuthService.instance = this.createConfig();
    }

    return AuthService.instance;
  }
}

export const auth = AuthService.getInstance();

export type AuthSession = BetterAuthSession;
export type AuthUser = BetterAuthUser;
