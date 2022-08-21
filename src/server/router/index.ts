// src/server/router/index.ts
import { createRouter } from './context';
import { userRouter } from './user';

import superjson from 'superjson';

export const appRouter = createRouter()
  .transformer(superjson)
  .merge('users.', userRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
