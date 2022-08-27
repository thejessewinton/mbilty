import * as React from 'react';

import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Cross1Icon } from '@radix-ui/react-icons';

interface DialogProps {
  title: string;
  open?: boolean;
  onOpenChange?: (b: boolean) => void;
  description?: string;
  cancelText?: string;
  trigger?: React.ReactNode;
  children?: React.ReactNode;
}

export const Dialog = ({
  title,
  description,
  open,
  onOpenChange,
  trigger,
  children,
}: DialogProps) => {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="motion-safe:animate-fade-in fixed inset-0 z-auto bg-black bg-opacity-60 backdrop-blur transition-all" />
        <DialogPrimitive.Content className="motion-safe:animate-fade-in border-neutral-700 bg-neutral-900 fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-md border p-6 lg:min-w-[600px]">
          <div className="flex flex-col gap-3">
            <header className="flex items-center justify-between">
              <DialogPrimitive.Title asChild>
                <h4 className="font-bold text-lg">{title}</h4>
              </DialogPrimitive.Title>

              <DialogPrimitive.Close className="flex cursor-pointer items-center justify-center rounded-full p-3 transition-colors hover:bg-neutral-800">
                <Cross1Icon className="text-white" />
              </DialogPrimitive.Close>
            </header>

            <DialogPrimitive.Description>
              {description}
            </DialogPrimitive.Description>

            {children}
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};
