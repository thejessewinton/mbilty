// src/server/router/index.ts
import { createRouter } from './context';
import { userRouter } from './user';

import superjson from 'superjson';
import { liftsRouter } from './lifts';
import { workoutsRouter } from './workouts';

export const appRouter = createRouter()
  .transformer(superjson)
  .merge('users.', userRouter)
  .merge('lifts.', liftsRouter)
  .merge('workouts.', workoutsRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
