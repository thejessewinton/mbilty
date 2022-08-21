import { Button } from '@components/shared/button/Button';
import { trpc } from '@utils/trpc';
import { GetServerSideProps, NextPage } from 'next';
import { useForm } from 'react-hook-form';
import { prisma } from '@server/db/client';
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]';
import { Input } from '@components/shared/input/Input';
import toast from 'react-hot-toast';
import { NextSeo } from 'next-seo';

type ProfilePage = NextPage & { user: { name: string; email: string } };

const Profile = ({ user }: ProfilePage) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: user.name,
      email: user.email,
    },
  });

  const update = trpc.useMutation(['users.update-user'], {
    onSuccess: () => {
      toast.success('Profile updated');
    },
    onError: () => {
      toast.error('Error updating profile');
    },
  });

  const onSubmit = (values: { name: string; email: string }) => {
    update.mutate({ name: values.name, email: values.email });
  };

  return (
    <>
      <NextSeo title="Profile" />
      <div className="mx-auto max-w-2xl w-full">
        <h2 className="mb-10">Edit Profile</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <Input label="Name" showLabel type="text" {...register('name')} />
          <Input label="Email" showLabel type="email" {...register('email')} />

          <Button type="submit" className="max-w-[150px]">
            Save
          </Button>
        </form>
      </div>
    </>
  );
};

export default Profile;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await unstable_getServerSession(req, res, authOptions);
  const user = await prisma.user.findUnique({
    where: {
      id: session?.user?.id,
    },
  });

  return {
    props: {
      user,
    },
  };
};
