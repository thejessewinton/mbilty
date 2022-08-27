import type { Lift } from '@prisma/client';
import { Cross1Icon } from '@radix-ui/react-icons';
import { trpc } from 'src/client-data/utils/trpc';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { Spinner } from '@components/shared/spinner/Spinner';

const Lift = ({ lift }: { lift: Lift }) => {
  const [submitting, setSubmitting] = useState(false);
  const ctx = trpc.useContext();
  const update = trpc.useMutation(['lifts.delete-lift'], {
    onMutate: () => {
      setSubmitting(true);
    },
    onSuccess: () => {
      setSubmitting(false);
      ctx.invalidateQueries(['lifts.get-lifts']);
      toast.success('Lift deleted');
    },
  });

  return (
    <tr>
      <td>{lift.name}</td>
      <td>
        {lift.current_max}/{lift.weight_unit}
      </td>
      <td className="flex flex-grow">
        <button
          onClick={() => update.mutate({ id: lift.id })}
          className="mr-0 ml-auto"
        >
          {submitting ? <Spinner /> : <Cross1Icon />}
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
          <th className="text-left p-2 bg-neutral-900 rounded-tl-md">Name</th>
          <th className="text-left p-2 bg-neutral-900">Current Max</th>
          <th className="text-right p-2 bg-neutral-900 rounded-tr-md">
            Delete
          </th>
        </tr>
      </thead>
      <tbody className="p2 divide-y divide-neutral-700">
        {lifts.data?.lifts.map((lift) => (
          <Lift lift={lift} key={lift.id} />
        ))}
      </tbody>
    </table>
  );
};
