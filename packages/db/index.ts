import { PrismaClient, Prisma } from "@prisma/client";
import { logger } from "@repo/logger";

const logLevels: Prisma.LogLevel[] = ["query", "info", "warn", "error"];

type LogDefinition = {
  emit: "event";
  level: Prisma.LogLevel;
}[];

const prismaClientOptions: { log: LogDefinition } = {
  log: logLevels.map((level) => ({ emit: "event", level })),
};

class Database {
  private static instance: PrismaClient<typeof prismaClientOptions>;

  private constructor() {}

  public static getInstance(): PrismaClient<typeof prismaClientOptions> {
    if (!Database.instance) {
      logger.info("Initializing new PrismaClient instance...");

      const prismaInstance = new PrismaClient(prismaClientOptions);

      this.attachEventListeners(prismaInstance);
      Database.instance = prismaInstance;
    }
    return Database.instance;
  }

  private static attachEventListeners(
    prisma: PrismaClient<typeof prismaClientOptions>
  ): void {
    prisma.$on("query", (e: Prisma.QueryEvent) => {
      logger.debug(
        { query: e.query, params: e.params, duration: `${e.duration}ms` },
        "Prisma query"
      );
    });

    prisma.$on("warn", (e: Prisma.LogEvent) => {
      logger.warn({ target: e.target, message: e.message }, "Prisma warning");
    });

    prisma.$on("info", (e: Prisma.LogEvent) => {
      logger.info({ target: e.target, message: e.message }, "Prisma info");
    });

    prisma.$on("error", (e: Prisma.LogEvent) => {
      logger.error({ target: e.target, message: e.message }, "Prisma error");
    });
  }
}

export const prisma = Database.getInstance();

export * from "@prisma/client";
