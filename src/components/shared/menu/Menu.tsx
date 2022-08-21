import * as React from 'react';

import { useRouter } from 'next/router';

import classNames from 'clsx';
import { Select } from '@components/shared/select/Select';
import { Link } from '@components/shared/link/Link';

type ItemProps = {
  label: string;
  to: string;
};

interface MenuProps {
  items: ItemProps[];
  orientation?: 'horizontal' | 'vertical';
}

export const Menu = ({ items, orientation = 'horizontal' }: MenuProps) => {
  const router = useRouter();

  return (
    <>
      <Select
        name="Menu"
        defaultValue={router.asPath}
        onChange={(e) => router.push(e.target.value)}
        className="mb-6 max-w-xs lg:hidden"
      >
        {items.map((item: ItemProps) => (
          <Select.Option key={item.to} value={item.to}>
            {item.label}
          </Select.Option>
        ))}
      </Select>
      <div
        className={classNames(
          'hidden lg:flex',
          orientation === 'vertical' ? 'mr-6 w-1/4 lg:flex-col' : 'lg:flex-row'
        )}
      >
        {items.map((item: ItemProps) => (
          <Link
            to={item.to}
            key={item.to}
            className={classNames(
              'p-4 text-white transition-colors hover:text-white',
              orientation === 'horizontal' && 'border-b-2',
              router.asPath === item.to && orientation === 'vertical'
                ? 'font-bold text-white'
                : router.asPath === item.to && orientation === 'horizontal'
                ? 'border-accent-orange font-bold text-white'
                : 'border-transparent'
            )}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </>
  );
};
