import { z } from 'zod';

import { createRouter } from './context';

export const liftsRouter = createRouter()
    .query('get-lifts', {
        resolve: async ({ ctx }) => {
            const lifts = await ctx.prisma.lift.findMany({
                where: {
                    user_id: ctx.session?.user?.id as string,
                },
            });

            return {
                lifts,
            };
        },
    })
    .mutation('add-lift', {
        input: z.object({
            name: z.string(),
            current_max: z.number(),
        }),
        resolve: async ({ ctx, input }) => {
            const lift = await ctx.prisma.lift.create({
                data: {
                    name: input.name,
                    current_max: input.current_max,
                    user_id: ctx.session?.user?.id as string,
                },
            });

            return {
                lift,
            };
        },
    })
    .mutation('delete-lift', {
        input: z.object({
            id: z.string(),
        }),
        resolve: async ({ ctx, input }) => {
            const lift = await ctx.prisma.lift.delete({
                where: {
                    id: input.id,
                },
            });

            return {
                lift,
            };
        },
    });
