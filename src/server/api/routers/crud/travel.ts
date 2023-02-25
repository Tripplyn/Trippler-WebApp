import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const travelRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        travelName: z.string(),
        travelDateStart: z.date(),
        travelDateEnd: z.date(),
      })
    )
    .mutation(async ({ ctx: { prisma }, input }) => {
      await prisma.travel.create({
        data: {
          travelName: input?.travelName,
          travelDateStart: input.travelDateStart,
          travelDateEnd: input.travelDateEnd,
        },
      });
      return await prisma.travel.findMany();
    }),

  read: publicProcedure
    .input(
      z.object({
        id: z.number().optional(),
        travelId: z.string().optional(),
      })
    )
    .query(async ({ ctx: { prisma }, input }) => {
      return await prisma.travel.findMany({
        where: {
          id: input.id != null ? input?.id : undefined,
          travelID: input.travelId != null ? input?.travelId : undefined,
        },
      });
    }),

  update: publicProcedure
    .input(
      z.object({
        select: z.object({
          id: z.number().optional(),
          travelId: z.string().optional(),
        }),
        update: z.object({
          travelName: z.string().optional(),
          travelDateStart: z.date().optional(),
          travelDateEnd: z.date().optional(),
        }),
      })
    )
    .mutation(async ({ ctx: { prisma }, input }) => {
      await prisma.travel.update({
        where: {
          id: input.select.id != null ? input?.select?.id : undefined,
          travelID: input.select.travelId != null ? input?.select?.travelId : undefined,
        },
        data: {
          travelName: input.update.travelName,
          travelDateStart: input.update.travelDateStart,
          travelDateEnd: input.update.travelDateEnd,
        },
      });
      return await prisma.travel.findMany();
    }
  ),

  delete: publicProcedure
    .input(
      z.object({
        id: z.number().optional(),
        travelId: z.string().optional(),
      })
    )
    .mutation(async ({ ctx: { prisma }, input }) => {
      await prisma.travel.delete({
        where: {
          id: input.id != null ? input?.id : undefined,
          travelID: input.travelId != null ? input?.travelId : undefined,
        },
      });
      return await prisma.travel.findMany();
    })
});
