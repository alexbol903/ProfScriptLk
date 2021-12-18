import React from 'react';
import { Link } from 'react-router-dom';
import { NavigationList } from './NavigationList';
import logo from 'assets/img/logo.svg';

interface SidebarProps {
  isOpen: boolean;
  toggleIsOpen: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleIsOpen }) => {
  return (
    <div className="flex">
      <div
        onClick={toggleIsOpen}
        className={`${
          isOpen ? 'block' : 'hidden'
        } fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden cursor-pointer`}
      ></div>

      <div
        className={`${
          isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'
        } fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-gray-900 lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="flex items-center justify-center mt-8">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo profscript" />
          </Link>
        </div>
        <NavigationList />
      </div>
    </div>
  );
};
