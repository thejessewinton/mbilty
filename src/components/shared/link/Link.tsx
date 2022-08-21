import * as React from 'react';

import { default as NextLink } from 'next/link';

interface LinkProps {
  children: React.ReactNode;
  to: string;
  as?: string;
  className?: string;
  activeClassName?: string;
  [key: string]: React.ReactNode;
}

export const Link = ({ children, to, className, as, ...props }: LinkProps) => {
  const isExternal = /^((https?:)?\/\/|[0-9a-zA-Z]+:)/.test(to);

  return (
    <NextLink href={to} as={as} passHref={isExternal}>
      <a
        className={className}
        target={isExternal ? '_blank' : '_self'}
        {...props}
      >
        {children}
      </a>
    </NextLink>
  );
};
