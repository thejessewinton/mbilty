import { trpc } from '@utils/trpc';

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
            <tbody></tbody>
        </table>
    );
};
