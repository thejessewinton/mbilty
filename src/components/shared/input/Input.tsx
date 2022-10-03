import * as LabelPrimitive from '@radix-ui/react-label';
import classNames from 'clsx';
import * as React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export const Input = React.forwardRef(
    (
        { name, className, label, onChange, ...rest }: InputProps,
        ref: React.Ref<HTMLInputElement>,
    ) => {
        return (
            <div
                className={classNames(
                    'relative flex flex-col gap-2',
                    className,
                )}
            >
                <div className="flex justify-between">
                    <LabelPrimitive.Label
                        htmlFor={name}
                        className="block font-bold"
                    >
                        {label}
                    </LabelPrimitive.Label>
                </div>

                <input
                    ref={ref}
                    name={name}
                    onChange={onChange}
                    className={classNames(
                        'focus:ring-2 h-8 w-full rounded border border-solid border-neutral-700 dark:bg-neutral-700 px-3 text-gray-800 dark:text-white transition-all placeholder:dark:text-gray-300 read-only:cursor-not-allowed focus:outline-none',
                    )}
                    {...rest}
                />
            </div>
        );
    },
);

Input.displayName = 'Input';
