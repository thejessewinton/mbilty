import type { GetServerSideProps, NextPage } from 'next';
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]';

const Index: NextPage = () => {
  return (
    <>
      <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4"></main>
    </>
  );
};

export default Index;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await unstable_getServerSession(req, res, authOptions);

  return {
    props: {
      session,
    },
  };
};
