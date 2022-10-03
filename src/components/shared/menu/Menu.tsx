import classNames from 'clsx';
import { useRouter } from 'next/router';
import * as React from 'react';

import { Link } from '@components/shared/link/Link';
import { Select } from '@components/shared/select/Select';

type ItemProps = {
    label: string;
    to: string;
};

interface MenuProps {
    className?: string;
    items: ItemProps[];
}

export const Menu = ({ items, className }: MenuProps) => {
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
            <div className={classNames('hidden lg:flex', className)}>
                {items.map((item: ItemProps) => (
                    <Link
                        to={item.to}
                        key={item.to}
                        className={classNames(
                            'px-6 py-2 border-b-2 dark:text-white transition-colors hover:dark:text-zinc-400',
                            router.asPath === item.to
                                ? 'border-white font-bold'
                                : 'border-transparent',
                        )}
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        </>
    );
};
