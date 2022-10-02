import { Link } from '@components/shared/link/Link';

import classNames from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  to?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  type?: 'button' | 'submit' | 'reset';
  target?: React.HTMLAttributeAnchorTarget;
}

export const Button = ({
  to,
  icon,
  iconPosition = 'right',
  target,
  className,
  children,
  type = 'button',
  ...rest
}: ButtonProps) => {
  const isLink = typeof to !== 'undefined';
  const isExternal = isLink && /^((https?:)?\/\/|[0-9a-zA-Z]+:)/.test(to || '');

  const buttonStyles = classNames(
    'py-2 px-4 max-h-12 w-fit h-fit font-semibold rounded-md !bg-sky-500 text-white transition-colors hover:!bg-sky-600',
    className
  );

  if (isExternal) {
    return (
      <a
        className={buttonStyles}
        href={to}
        rel="noopener noreferrer"
        target="_blank"
      >
        {children}
      </a>
    );
  }

  if (isLink) {
    return (
      <Link
        to={to}
        icon={icon}
        iconPosition={iconPosition}
        target={target}
        className={buttonStyles}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonStyles} type={type} {...rest}>
      {iconPosition === 'left' && icon && <> {icon}</>}
      {children}
      {iconPosition === 'right' && icon && <>{icon}</>}
    </button>
  );
};
