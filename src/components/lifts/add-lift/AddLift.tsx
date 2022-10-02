import { Button } from '@components/shared/button/Button';
import { Input } from '@components/shared/input/Input';
import { Select } from '@components/shared/select/Select';
import { Spinner } from '@components/shared/spinner/Spinner';
import { WeightUnit } from '@prisma/client';
import { trpc } from 'src/client-data/utils/trpc';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { exercises } from 'src/client-data/data/exercises';
import { useDialogStore } from 'src/client-data/state/use-dialog-store';

export const AddLift = () => {
  const ctx = trpc.useContext();
  const { handleDialogClose } = useDialogStore();

  const lifts = trpc.useMutation(['lifts.add-lift'], {
    onSuccess: () => {
      ctx.invalidateQueries(['lifts.get-lifts']);
      toast.success('Lift added.');
      handleDialogClose();
    },
    onError: () => {
      toast.error('Error adding lift.');
    },
  });

  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      current_max: null,
      weight_unit: WeightUnit.LB,
    },
  });

  const onSubmit = (values: { name: string; current_max: number | null }) => {
    lifts.mutate({
      name: values.name,
      current_max: Number(values.current_max),
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="md:min-w-1/3 flex flex-col gap-6"
    >
      <Select label="Name" {...register('name')} required>
        <Select.Option value="">Select an exercise</Select.Option>
        {exercises.map((exercise) => (
          <Select.Group key={exercise.group} label={exercise.group}>
            {exercise.lifts.map((lift) => (
              <Select.Option key={lift} value={lift}>
                {lift}
              </Select.Option>
            ))}
          </Select.Group>
        ))}
      </Select>
      <div className="flex gap-2 w-full">
        <Input
          type="text"
          label="Current Max"
          {...register('current_max')}
          required
        />
        <Select label="Weight Unit" {...register('weight_unit')} required>
          {Object.values(WeightUnit).map((unit) => (
            <Select.Option key={unit} value={unit}>
              {unit}
            </Select.Option>
          ))}
        </Select>
      </div>

      <Button type="submit" className="!bg-neutral-800">
        {lifts.isLoading ? <Spinner /> : 'Save'}
      </Button>
    </form>
  );
};
