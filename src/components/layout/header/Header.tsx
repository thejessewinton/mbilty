import { Link } from '@components/shared/link/Link';
import { Dropdown } from '@components/shared/dropdown/Dropdown';
import { Avatar } from '@components/shared/avatar/Avatar';
import { signOut, useSession } from 'next-auth/react';
import { Menu } from '@components/shared/menu/Menu';

const UserActions = () => {
  const { data: session } = useSession();

  return (
    <Dropdown>
      <Dropdown.Trigger>
        <button className="focus:ring-2 rounded-full">
          <Avatar
            src={session?.user?.image || ''}
            name={session?.user?.name || 'MB'}
          />
        </button>
      </Dropdown.Trigger>
      <Dropdown.Content>
        <div className="mt-3 bg-white dark:bg-neutral-900 rounded border border-neutral-700 shadow-sm shadow-black/30">
          <div className="divide-y divide-neutral-700 w-full min-w-[200px]">
            <Link
              to={`/profile`}
              className="block text-color-white text-sm cursor-pointer px-5 py-4 dark:hover:bg-neutral-800 hover:bg-neutral-700 w-full"
            >
              Edit Profile
            </Link>

            <button
              onClick={() => signOut()}
              className="w-full block text-left appearance-none text-color-white text-sm cursor-pointer px-5 py-4 dark:hover:bg-neutral-800 hover:bg-neutral-700"
            >
              Sign out
            </button>
          </div>
        </div>
      </Dropdown.Content>
    </Dropdown>
  );
};

export const Header = () => {
  return (
    <div className="border-b border-neutral-700">
      <header className="max-w-7xl mx-auto w-full">
        <div className="flex justify-between items-center pt-3 pb-2">
          <Link to="/">mbilty</Link>

          <UserActions />
        </div>

        <Menu
          className="mt-6"
          items={[
            { to: '/', label: 'Dashboard' },
            { to: '/lifts', label: 'Lifts' },
            { to: '/workouts', label: 'Workouts' },
            { to: '/mobility', label: 'Mobility' },
          ]}
        />
      </header>
    </div>
  );
};
