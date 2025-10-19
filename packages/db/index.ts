import { drizzle } from "drizzle-orm/neon-http";
import { logger } from "@repo/logger";
import * as schema from "./schema";
import { neon } from "@neondatabase/serverless";

class Database {
  private static instance: ReturnType<typeof drizzle<typeof schema>>;

  private constructor() {}

  public static getInstance(): ReturnType<typeof drizzle<typeof schema>> {
    if (!Database.instance) {
      logger.info("Initializing Drizzle ORM with Neon...");

      if (!process.env.DATABASE_URL) {
        throw new Error("DATABASE_URL is not set");
      }

      const sql = neon(process.env.DATABASE_URL);

      Database.instance = drizzle(sql, {
        schema,
        logger: process.env.NODE_ENV !== "production",
      });
    }
    return Database.instance;
  }
}

export const db = Database.getInstance();
export * from "./schema";
