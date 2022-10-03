import * as DropdownPrimitive from '@radix-ui/react-dropdown-menu';
import classNames from 'clsx';
import { ReactNode } from 'react';

const Trigger = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => (
    <DropdownPrimitive.Trigger
        className={classNames('cursor-pointer', className)}
        asChild
    >
        {children}
    </DropdownPrimitive.Trigger>
);

const Content = ({
    children,
    className,
    align = 'end',
}: {
    children: ReactNode;
    className?: string;
    align?: DropdownPrimitive.MenuContentProps['align'];
}) => (
    <DropdownPrimitive.Content
        align={align}
        className={classNames(
            'radix-state-open:motion-safe:animate-fade-in',
            className,
        )}
    >
        {children}
    </DropdownPrimitive.Content>
);

export const Dropdown = ({
    defaultOpen,
    open,
    onOpenChange,
    children,
    modal,
}: {
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    children: React.ReactNode;
    modal?: DropdownPrimitive.DropdownMenuProps['modal'];
}) => {
    return (
        <DropdownPrimitive.Root
            open={open}
            onOpenChange={onOpenChange}
            defaultOpen={defaultOpen}
            modal={modal}
        >
            {children}
        </DropdownPrimitive.Root>
    );
};

Dropdown.Trigger = Trigger;
Dropdown.Content = Content;
