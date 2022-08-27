import { AddLift } from '@components/lifts/add-lift/AddLift';
import { LiftsList } from '@components/lifts/lifts-list/LiftsList';
import { Button } from '@components/shared/button/Button';
import { Dialog } from '@components/shared/dialog/Dialog';
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
          <h1 className="text-2xl font-bold">Lifts</h1>
          <Button onClick={() => setDialog(true)}>Add Lift</Button>
        </div>
        <LiftsList />
      </main>
      <Dialog title="Add Lift" open={dialog} onOpenChange={setDialog}>
        <AddLift />
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
