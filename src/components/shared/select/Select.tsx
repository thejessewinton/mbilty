import * as React from 'react';

import * as LabelPrimitive from '@radix-ui/react-label';

import classNames from 'clsx';

type Select = { children: React.ReactNode } & { Option: OptionProps };

interface SelectProps extends React.InputHTMLAttributes<HTMLSelectElement> {
  name: string;
  label?: string;
  children: React.ReactNode;
  defaultValue?: string;
  showLabel?: boolean;
  secondaryLabel?: string;
  error?: string | undefined;
}

interface SelectComponent extends React.ForwardRefExoticComponent<SelectProps> {
  Option: typeof Option;
}

export interface OptionProps {
  value: string;
  children: string;
  selected?: boolean;
  disabled?: boolean;
}

const Option = ({ value, children, ...rest }: OptionProps) => (
  <option value={value} {...rest}>
    {children}
  </option>
);

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      name,
      label,
      children,
      defaultValue,
      showLabel,
      className,
      error,
      secondaryLabel,
      ...rest
    }: SelectProps,
    ref: React.Ref<HTMLSelectElement>
  ) => (
    <div
      className={classNames(
        'relative flex flex-col gap-2 hover:cursor-pointer',
        className
      )}
    >
      {showLabel && (
        <div className="flex justify-between">
          <LabelPrimitive.Label htmlFor={name} className="block font-bold">
            {label}
          </LabelPrimitive.Label>

          {error && error}
        </div>
      )}
      <select
        className="focus:shadow-input bg-chevron bg-right-1 relative h-10 w-full select-none appearance-none rounded border border-solid border-transparent bg-gray-500 bg-no-repeat pl-3 pr-6 font-semibold !text-white transition-all valid:text-gray-300 invalid:text-gray-800 focus:border-blue-100  focus:outline-none disabled:cursor-not-allowed"
        defaultValue={defaultValue}
        name={name}
        ref={ref}
        {...rest}
      >
        {children}
      </select>

      {secondaryLabel && (
        <p className="block text-sm font-bold">{secondaryLabel}</p>
      )}
    </div>
  )
) as SelectComponent;

Select.displayName = 'Select';
Select.Option = Option;
