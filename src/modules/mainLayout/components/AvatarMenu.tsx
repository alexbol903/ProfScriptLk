import React from 'react';
import { Link } from 'react-router-dom';

export const AvatarMenu: React.FC = () => {
  return (
    <>
      <Link
        to="/"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
      >
        Profile
      </Link>

      <Link
        to="/"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
      >
        Exit
      </Link>
    </>
  );
};
