import React from 'react';
import { Notification } from './Notification';
import { BurgerMenu } from './BurgerMenu';
import { Avatar } from './Avatar';

interface HeaderProps {
  toggleSidebarIsOpen: () => void;
}

export const Header: React.FC<HeaderProps> = ({ toggleSidebarIsOpen }) => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b-4 border-indigo-600">
      <div className="flex items-center">
        <BurgerMenu toggleSidebarIsOpen={toggleSidebarIsOpen} />
      </div>
      <div className="flex items-center">
        <Notification />

        <div className="relative">
          <Avatar />
        </div>
      </div>
    </header>
  );
};
