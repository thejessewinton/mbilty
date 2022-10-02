import * as React from 'react';

import * as LabelPrimitive from '@radix-ui/react-label';

import classNames from 'clsx';

type Select = { children: React.ReactNode } & { Option: OptionProps };

interface SelectProps extends React.InputHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  children: React.ReactNode;
  defaultValue?: string;
}

interface SelectComponent extends React.ForwardRefExoticComponent<SelectProps> {
  Option: typeof Option;
  Group: typeof Group;
}

export interface OptionProps {
  value: string;
  children: string;
  selected?: boolean;
  disabled?: boolean;
}

export interface GroupProps {
  label: string;
  children: React.ReactNode;
}

const Option = ({ value, children, ...rest }: OptionProps) => (
  <option value={value} {...rest}>
    {children}
  </option>
);

const Group = ({ label, children }: GroupProps) => (
  <optgroup label={label}>{children}</optgroup>
);

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    { name, label, children, defaultValue, className, ...rest }: SelectProps,
    ref: React.Ref<HTMLSelectElement>
  ) => (
    <div
      className={classNames(
        'relative flex flex-col gap-2 hover:cursor-pointer',
        className
      )}
    >
      <div className="flex justify-between">
        <LabelPrimitive.Label htmlFor={name} className="block font-bold">
          {label}
        </LabelPrimitive.Label>
      </div>

      <select
        className="bg-chevron bg-right-1 focus:ring-2 h-8 w-full rounded border border-solid border-neutral-700 dark:bg-neutral-700 px-2 text-gray-800 dark:text-white transition-all placeholder:dark:text-gray-300 cursor-pointer focus:outline-none"
        defaultValue={defaultValue}
        name={name}
        ref={ref}
        {...rest}
      >
        {children}
      </select>
    </div>
  )
) as SelectComponent;

Select.displayName = 'Select';
Select.Option = Option;
Select.Group = Group;
