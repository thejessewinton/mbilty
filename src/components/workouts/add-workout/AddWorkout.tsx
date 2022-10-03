import { Cross1Icon } from '@radix-ui/react-icons';
import { useFieldArray, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useDialogStore } from 'src/client-data/state/use-dialog-store';
import { trpc } from 'src/client-data/utils/trpc';

import { Button } from '@components/shared/button/Button';
import { Input } from '@components/shared/input/Input';
import { Select } from '@components/shared/select/Select';
import { Spinner } from '@components/shared/spinner/Spinner';

export const AddWorkout = () => {
    const { handleDialogClose } = useDialogStore();
    const ctx = trpc.useContext();

    const lifts = trpc.useQuery(['lifts.get-lifts']);

    const { mutate } = trpc.useMutation(['workouts.add-workout'], {
        onSuccess: () => {
            ctx.invalidateQueries(['lifts.get-lifts']);
            toast.success('Lift added.');
            handleDialogClose();
        },
        onError: () => {
            toast.error('Error adding lift.');
        },
    });

    const initialValues = {
        lift_id: '',
        sets: null,
        reps: null,
        percentage: null,
        variation: '',
    };

    const { register, control, handleSubmit } = useForm({
        defaultValues: {
            exercises: [initialValues],
        },
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'exercises',
    });

    type Values = {
        exercises: {
            lift_id: string;
            sets: number | null;
            reps: number | null;
            percentage: number | null;
            variation: string;
        }[];
    };

    const onSubmit = (values: Values) => {
        mutate({
            exercises: values.exercises.map((exercise) => ({
                lift_id: exercise.lift_id,
                sets: Number(exercise.sets),
                reps: Number(exercise.reps),
                percentage: Number(exercise.percentage),
                variation: exercise.variation,
            })),
        });
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="md:min-w-1/3 flex flex-col gap-6"
        >
            {fields.map((item, index) => {
                return (
                    <div key={item.sets}>
                        <div className="mb-6 flex justify-between gap-4">
                            <div className="flex items-center">
                                <button
                                    onClick={() => remove(index)}
                                    title="Remove item"
                                    type="button"
                                >
                                    <Cross1Icon className="dark:text-white" />
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <Select
                                {...register(`exercises.${index}.lift_id`)}
                                label="Lift"
                            >
                                <option value="">Select a lift</option>
                                {lifts.data?.lifts.map((lift) => (
                                    <Select.Option
                                        key={lift.id}
                                        value={lift.id}
                                    >
                                        {lift.name}
                                    </Select.Option>
                                ))}
                            </Select>
                            <Input
                                type="text"
                                label="Variation"
                                {...register(`exercises.${index}.sets`)}
                            />
                            <div className="grid grid-cols-3 gap-3">
                                <Input
                                    type="text"
                                    label="Sets"
                                    {...register(`exercises.${index}.sets`)}
                                />
                                <Input
                                    type="text"
                                    label="Reps"
                                    {...register(`exercises.${index}.reps`)}
                                />
                                <Input
                                    type="text"
                                    label="Percentage"
                                    {...register(
                                        `exercises.${index}.percentage`,
                                    )}
                                />
                            </div>
                        </div>
                    </div>
                );
            })}

            <div className="flex gap-3 justify-between">
                <Button onClick={() => append(initialValues)}>
                    Add exercise
                </Button>

                <Button type="submit" className="!bg-neutral-800">
                    {lifts.isLoading ? <Spinner /> : 'Save'}
                </Button>
            </div>
        </form>
    );
};
