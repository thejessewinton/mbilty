import { createRouter } from './context';
import { z } from 'zod';

export const workoutsRouter = createRouter().mutation('add-workout', {
  input: z.object({
    exercises: z.array(
      z.object({
        lift_id: z.string(),
        sets: z.number(),
        reps: z.number(),
        percentage: z.number(),
        variation: z.string(),
      })
    ),
  }),
  resolve: async ({ ctx, input }) => {
    const lift = await ctx.prisma.workout.create({
      data: {
        user_id: ctx.session?.user?.id as string,
        exercise: {
          create: input.exercises,
        },
      },
    });

    return {
      lift,
    };
  },
});
