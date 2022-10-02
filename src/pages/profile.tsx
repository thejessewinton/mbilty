import { inferMutationInput, trpc } from 'src/client-data/utils/trpc';
import { NextPage } from 'next';
import { useForm } from 'react-hook-form';

import { Input } from '@components/shared/input/Input';
import toast from 'react-hot-toast';
import { NextSeo } from 'next-seo';
import { Button } from '@components/shared/button/Button';
import { Select } from '@components/shared/select/Select';
import { WeightUnit } from '@prisma/client';

const Profile: NextPage = () => {
  const query = trpc.useQuery(['users.get-current'], {
    onSettled: (data) => {
      console.log('success', data);
      reset({
        name: data?.user?.name as string,
        email: data?.user?.email as string,
        weight_unit: data?.user?.weight_unit as string,
      });
    },
  });

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: query.data?.user?.name || '',
      email: query.data?.user?.email || '',
      weight_unit: query.data?.user?.weight_unit || '',
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

  const onSubmit = (values: inferMutationInput<'users.update-user'>) => {
    update.mutate({ name: values.name, email: values.email });
  };

  return (
    <>
      <NextSeo title="Profile" />
      <div className="mx-auto max-w-2xl w-full mt-12">
        <h1 className="mb-10 text-lg font-medium">Edit Profile</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <Input label="Name" type="text" {...register('name')} />
          <Input label="Email" type="email" {...register('email')} />
          <Select label="Weight Unit" {...register('weight_unit')}>
            {Object.values(WeightUnit).map((unit) => (
              <Select.Option key={unit} value={unit}>
                {unit}
              </Select.Option>
            ))}
          </Select>

          <Button type="submit">Save</Button>
        </form>
      </div>
    </>
  );
};

export default Profile;
