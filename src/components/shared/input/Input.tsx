import * as React from 'react';

import * as LabelPrimitive from '@radix-ui/react-label';

import classNames from 'clsx';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  showLabel?: boolean;
  secondaryLabel?: string;
  error?: string | undefined;
}

export const Input = React.forwardRef(
  (
    {
      showLabel,
      name,
      className,
      label,
      onChange,
      error,
      secondaryLabel,
      ...rest
    }: InputProps,
    ref: React.Ref<HTMLInputElement>
  ) => {
    return (
      <div className={classNames('relative flex flex-col gap-2', className)}>
        <div className="flex justify-between">
          {showLabel && (
            <LabelPrimitive.Label htmlFor={name} className="block font-bold">
              {label}
            </LabelPrimitive.Label>
          )}
          {error && error}
        </div>

        <input
          ref={ref}
          name={name}
          onChange={onChange}
          className={classNames(
            'focus:shadow-input h-8 w-full rounded border border-solid border-transparent bg-white px-3  text-gray-100 transition-all placeholder:text-gray-300 read-only:cursor-not-allowed focus:border-blue-100 focus:outline-none',
            error && 'border-orange-100'
          )}
          {...rest}
        />
        {secondaryLabel && (
          <p className="block text-sm font-bold">{secondaryLabel}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
