import { createRouter } from './context';

export const userRouter = createRouter().query('get-current', {
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
});
