import type { NextPage } from 'next';
import { useDialogStore } from 'src/client-data/state/use-dialog-store';

import { Button } from '@components/shared/button/Button';
import { AddWorkout } from '@components/workouts/add-workout/AddWorkout';
import { WorkoutList } from '@components/workouts/workout-list/WorkoutList';

const Lifts: NextPage = () => {
    const { handleDialog } = useDialogStore();

    return (
        <>
            <main className="max-w-7xl mx-auto w-full flex flex-col flex-1">
                <div className="flex justify-between my-12">
                    <h1 className="text-2xl font-bold">Workouts</h1>
                    <Button onClick={() => handleDialog(<AddWorkout />)}>
                        Add Workout
                    </Button>
                </div>
                <WorkoutList />
            </main>
        </>
    );
};

export default Lifts;
