// src/server/router/index.ts
import superjson from 'superjson';

import { createRouter } from './context';
import { liftsRouter } from './lifts';
import { userRouter } from './user';
import { workoutsRouter } from './workouts';

export const appRouter = createRouter()
    .transformer(superjson)
    .merge('users.', userRouter)
    .merge('lifts.', liftsRouter)
    .merge('workouts.', workoutsRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
