import { createRouter } from './context';
import { z } from 'zod';

export const userRouter = createRouter()
  .query('get-current', {
    resolve: async ({ ctx }) => {
      const user = await ctx.prisma.user.findUnique({
        where: {
          id: ctx.session?.user?.id,
        },
        select: {
          id: true,
          name: true,
          email: true,
          image: true,
        },
      });
      return {
        user,
      };
    },
  })
  .mutation('update-user', {
    input: z.object({
      name: z.string().nullable(),
      email: z.string().nullable(),
    }),
    resolve: async ({ ctx, input }) => {
      const updatedUser = await ctx.prisma.user.update({
        where: {
          id: ctx.session?.user?.id,
        },
        data: input,
      });

      return {
        updatedUser,
      };
    },
  });
