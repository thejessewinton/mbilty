import type { Lift } from '@prisma/client';
import { Cross1Icon } from '@radix-ui/react-icons';
import { inferQueryOutput, trpc } from '@utils/trpc';
import toast from 'react-hot-toast';
import { Spinner } from '@components/shared/spinner/Spinner';

const Lift = ({
  lift,
}: {
  lift: inferQueryOutput<'lifts.get-lifts'>['lifts'][0];
}) => {
  const ctx = trpc.useContext();
  const update = trpc.useMutation(['lifts.delete-lift'], {
    onSuccess: () => {
      ctx.invalidateQueries(['lifts.get-lifts']);
      toast.success('Lift deleted');
    },
  });

  return (
    <tr className="border-b dark:border-neutral-700 ">
      <td className="py-6 px-3">{lift.name}</td>
      <td className="py-6 px-3">
        {lift.current_max} {lift.weight_unit.toLowerCase()}
      </td>
      <td className="self-end py-6 px-3 justify-center items-center">
        <button
          onClick={() => update.mutate({ id: lift.id })}
          className="mr-0 ml-auto"
        >
          {update.isLoading ? <Spinner /> : <Cross1Icon />}
        </button>
      </td>
    </tr>
  );
};

export const LiftsList = () => {
  const lifts = trpc.useQuery(['lifts.get-lifts']);

  return (
    <table>
      <thead>
        <tr>
          <th className="text-left p-3 bg-neutral-100 dark:bg-neutral-900 rounded-tl-md">
            Name
          </th>
          <th className="text-left p-3 bg-neutral-100 dark:bg-neutral-900">
            Current Max
          </th>
          <th className="text-right p-3 bg-neutral-100 dark:bg-neutral-900 rounded-tr-md">
            Delete
          </th>
        </tr>
      </thead>
      <tbody>
        {lifts.data?.lifts.map((lift) => (
          <Lift lift={lift} key={lift.id} />
        ))}
      </tbody>
    </table>
  );
};
