import type { NextPage } from 'next';
import { useDialogStore } from 'src/client-data/state/use-dialog-store';

import { AddLift } from '@components/lifts/add-lift/AddLift';
import { LiftsList } from '@components/lifts/lifts-list/LiftsList';
import { Button } from '@components/shared/button/Button';

const Lifts: NextPage = () => {
    const { handleDialog } = useDialogStore();

    return (
        <>
            <main className="max-w-7xl mx-auto w-full flex flex-col flex-1">
                <div className="flex justify-between my-12">
                    <h1 className="text-2xl font-bold">Lifts</h1>
                    <Button onClick={() => handleDialog(<AddLift />)}>
                        Add Lift
                    </Button>
                </div>
                <LiftsList />
            </main>
        </>
    );
};

export default Lifts;
