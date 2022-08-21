import { trpc } from '../../utils/trpc';

import { Logo } from '@components/shared/logo/Logo';

import { Link } from '@components/shared/link/Link';
import { Dropdown } from '@components/shared/dropdown/Dropdown';
import { Avatar } from '@components/shared/avatar/Avatar';
import { signOut } from 'next-auth/react';
import { Menu } from '@components/shared/menu/Menu';

const UserActions = () => {
  const { data: session } = trpc.useQuery(['users.get-current']);

  return (
    <Dropdown
      trigger={
        <Avatar
          src={session?.user?.image || ''}
          name={session?.user?.name || 'MB'}
        />
      }
    >
      <div className="mr-3 mt-3 rounded border border-solid border-gray-200 bg-gray-100 text-left shadow-lg shadow-black/60 w-[200px]">
        <div className="divide-y divide-gray-200 w-full">
          <Link
            to={`/profile`}
            className="block text-color-white cursor-pointer px-5 py-2 hover:bg-gray-200 w-full"
          >
            Edit Profile
          </Link>

          <button
            onClick={() => signOut()}
            className="w-full block appearance-none text-left px-5 py-2 hover:bg-gray-200"
          >
            Sign out
          </button>
        </div>
      </div>
    </Dropdown>
  );
};

export const Header = () => {
  return (
    <div className="border-b border-gray-200">
      <header className="max-w-7xl mx-auto w-full">
        <div className="flex justify-between items-center pt-3 pb-2 md:pt-4 md:pb-3">
          <Link to="/">
            <Logo />
          </Link>

          <UserActions />
        </div>

        <Menu
          items={[
            { to: '/', label: 'Dashboard' },
            { to: '/lifts', label: 'Lifts' },
            { to: '/mobility', label: 'Mobility' },
          ]}
        />
      </header>
    </div>
  );
};
