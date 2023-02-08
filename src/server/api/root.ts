import { createTRPCRouter } from "./trpc";
import { travelRouter } from "./routers/crud/travel";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  travel: travelRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
