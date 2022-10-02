import toast from 'react-hot-toast';
import { inferQueryOutput, trpc } from 'src/client-data/utils/trpc';

const Set = ({
  workout,
}: {
  workout: inferQueryOutput<'workouts.get-workouts'>['lifts'][0];
}) => {
  const ctx = trpc.useContext();

  return (
    <tr className="border-b dark:border-neutral-700">
      <td className="py-6 px-3">{workout}</td>
      <td className="py-6 px-3"></td>
    </tr>
  );
};

export const WorkoutList = () => {
  const workout = trpc.useQuery(['workouts.get-workouts']);

  return (
    <table>
      <thead>
        <tr>
          <th className="text-left p-3 bg-neutral-100 dark:bg-neutral-900 rounded-tl-md">
            Name
          </th>
          <th className="text-left p-3 bg-neutral-100 dark:bg-neutral-900">
            Percentage
          </th>
          <th className="text-right p-3 bg-neutral-100 dark:bg-neutral-900 rounded-tr-md">
            Delete
          </th>
        </tr>
      </thead>
      <tbody>
        {workout.data?.lifts.map((workout, i) => (
          <Set workout={workout} key={i} />
        ))}
      </tbody>
    </table>
  );
};
