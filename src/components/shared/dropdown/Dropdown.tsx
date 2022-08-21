import * as React from 'react';

import * as DropdownPrimitive from '@radix-ui/react-dropdown-menu';

interface DropdownProps {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger: React.ReactNode;
  children: React.ReactNode;
}

export const Dropdown = ({
  defaultOpen,
  open,
  onOpenChange,
  trigger,
  children,
}: DropdownProps) => {
  return (
    <DropdownPrimitive.Root
      open={open}
      onOpenChange={onOpenChange}
      defaultOpen={defaultOpen}
    >
      <DropdownPrimitive.Trigger className="focus:ring-2 focus:shadow-input cursor-pointer rounded-full bg-transparent outline-none">
        {trigger}
      </DropdownPrimitive.Trigger>

      <DropdownPrimitive.Content className="rounded">
        {children}
      </DropdownPrimitive.Content>
    </DropdownPrimitive.Root>
  );
};
