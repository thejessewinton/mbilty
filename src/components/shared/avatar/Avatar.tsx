import * as AvatarPrimitive from '@radix-ui/react-avatar';
import * as React from 'react';

interface AvatarProps {
    src?: string | null | undefined;
    name: string | null | undefined;
    size?: number;
}

export const Avatar = React.forwardRef(
    ({ src, name, size = 40 }: AvatarProps, ref: React.Ref<HTMLDivElement>) => {
        const initials = name
            ? name
                  .split(' ')
                  .map((word) => word[0])
                  .join('')
                  .toUpperCase()
            : 'MB';

        return (
            <AvatarPrimitive.Root
                className="min-h-[48px] min-w-[48px] overflow-hidden rounded-full shadow-sm"
                ref={ref}
            >
                <AvatarPrimitive.Image
                    src={src || ''}
                    alt={name || ''}
                    width={size}
                    height={size}
                    className="rounded-full"
                />
                <AvatarPrimitive.AvatarFallback
                    delayMs={0}
                    className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gray-200 text-sm font-bold shadow-sm"
                >
                    {initials}
                </AvatarPrimitive.AvatarFallback>
            </AvatarPrimitive.Root>
        );
    },
);

Avatar.displayName = 'Avatar';
