import pino, { Level, Logger as PinoLogger } from "pino";

interface LoggerConfig {
  level?: Level;
  prettyPrint?: boolean;
}

export class Logger {
  private static instance: PinoLogger;

  private constructor() {}

  /**
   * @param {LoggerConfig} [config={}]
   * @returns {PinoLogger}
   *
   */
  public static getInstance(config: LoggerConfig = {}): PinoLogger {
    if (!Logger.instance) {
      const isProduction = process.env.NODE_ENV === "production";

      const options: pino.LoggerOptions = {
        level: config.level || process.env.LOG_LEVEL || "info",
      };

      if (!isProduction || config.prettyPrint) {
        options.transport = {
          target: "pino-pretty",
          options: {
            colorize: true,
            translateTime: "SYS:standard",
            ignore: "pid,hostname",
          },
        };
      }

      Logger.instance = pino(options);
      Logger.instance.info("Logger initialized.");
    }

    return Logger.instance;
  }
}

export const logger = Logger.getInstance();
