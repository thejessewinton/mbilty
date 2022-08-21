import { Link } from '@components/shared/link/Link';

import classNames from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  to?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  target?: React.HTMLAttributeAnchorTarget;
}

export const Button = ({
  to,
  icon,
  iconPosition = 'right',
  target,
  className,
  children,
  ...rest
}: ButtonProps) => {
  const isLink = typeof to !== 'undefined';
  const isExternal = isLink && /^((https?:)?\/\/|[0-9a-zA-Z]+:)/.test(to || '');

  const buttonStyles = classNames(
    'bg-accent-green text-white py-2 px-2.5 font-bold hover:bg-accent-beige hover:text-gray-100 transition-colors disabled:cursor-not-allowed',
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
    <button className={buttonStyles} {...rest}>
      {iconPosition === 'left' && icon && <> {icon}</>}
      {children}
      {iconPosition === 'right' && icon && <>{icon}</>}
    </button>
  );
};
