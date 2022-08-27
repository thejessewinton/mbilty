import { Button } from '@components/shared/button/Button';
import { Dialog } from '@components/shared/dialog/Dialog';
import { AddWorkout } from '@components/workouts/add-workout/AddWorkout';
import type { GetServerSideProps, NextPage } from 'next';
import { unstable_getServerSession } from 'next-auth';
import { useDialogStore } from 'src/client-data/state/use-dialog-store';
import { authOptions } from './api/auth/[...nextauth]';

const Lifts: NextPage = () => {
  const { dialog, setDialog } = useDialogStore();

  return (
    <>
      <main className="max-w-7xl mx-auto w-full flex flex-col flex-1">
        <div className="flex justify-between my-12">
          <h1 className="text-2xl font-bold">Workouts</h1>
          <Button onClick={() => setDialog(true)}>Add Workout</Button>
        </div>
      </main>
      <Dialog title="Add Workout" open={dialog} onOpenChange={setDialog}>
        <AddWorkout />
      </Dialog>
    </>
  );
};

export default Lifts;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await unstable_getServerSession(req, res, authOptions);

  return {
    props: {
      session,
    },
  };
};
