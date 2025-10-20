import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter, contextFactory } from "@repo/trpc";
import { NextRequest } from "next/server";

async function handler(req: NextRequest): Promise<Response> {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: async () => {
      const headers: Record<string, string> = {};
      req.headers.forEach((value, key) => {
        headers[key] = value;
      });

      return await contextFactory.create({
        req: {
          headers,
        },
        res: {
          setHeader: () => {},
          getHeader: () => undefined,
        },
      } as any);
    },
    onError:
      process.env.NODE_ENV === "development"
        ? ({ path, error }) => {
            console.error(
              `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`,
            );
          }
        : undefined,
  });
}

export { handler as GET, handler as POST };
