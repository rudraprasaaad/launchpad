import "dotenv/config";
import { defineConfig } from "drizzle-kit";
import * as path from "path";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set.");
}

export default defineConfig({
  schema: path.join(__dirname, "packages/db/schema.ts"),
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});
