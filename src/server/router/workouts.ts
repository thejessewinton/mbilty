import { createRouter } from './context';
import { z } from 'zod';

export const workoutsRouter = createRouter()
  .mutation('add-workout', {
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
  })
  .query('get-workouts', {
    resolve: async ({ ctx }) => {
      const data = await ctx.prisma.workout.findMany({
        where: {
          user_id: ctx.session?.user?.id as string,
        },
        include: {
          exercise: {
            include: {
              lift: true,
            },
          },
        },
      });

      // map through data and add a property to each exercise
      const lifts = data.map((workout) => {
        const exercises = workout.exercise.map((exercise) => {
          return {
            ...exercise,
            working_weight:
              (exercise.percentage * exercise.lift.current_max) / 100,
          };
        });
        return exercises;
      });

      return {
        lifts,
      };
    },
  })
  .query('get-single-workout', {
    input: z.object({
      id: z.string(),
    }),
    resolve: async ({ ctx, input }) => {
      const data = await ctx.prisma.workout.findUnique({
        where: {
          id: input.id,
        },
        include: {
          exercise: {
            include: {
              lift: true,
            },
          },
        },
      });

      const lifts = data?.exercise.forEach((exercise) => {
        return {
          ...exercise,
          weight: exercise.percentage * 0.01 * exercise.lift.current_max,
        };
      });

      return {
        lifts,
      };
    },
  });
