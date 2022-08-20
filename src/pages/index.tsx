import type { NextPage } from 'next';
import Head from 'next/head';
import { trpc } from '../utils/trpc';

const Index: NextPage = () => {
  const user = trpc.useQuery(['users.get-current']);

  return (
    <>
      <Head>
        <title>Mbility</title>
        <meta
          name="description"
          content="Track your workouts, diet, and mobility routines easily."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
        <div className="pt-6 text-2xl text-blue-500 flex justify-center items-center w-full">
          {user.data ? <p>{user.data.user?.name}</p> : <p>Loading..</p>}
        </div>
      </main>
    </>
  );
};

export default Index;
