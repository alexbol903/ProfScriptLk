import React from 'react';
import { Link, useMatch } from 'react-router-dom';

interface NavigationItemProps {
  to: string;
  children: JSX.Element;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({
  to,
  children,
}) => {
  const match = useMatch(to);

  return (
    <Link
      to={to}
      className={`
      ${
        match
          ? 'text-gray-100 border-gray-100 bg-gray-600 bg-opacity-25'
          : 'border-gray-900 text-gray-500'
      }
      flex items-center px-6 py-2 mt-4 duration-200 border-l-4 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100`}
    >
      {children}
    </Link>
  );
};
