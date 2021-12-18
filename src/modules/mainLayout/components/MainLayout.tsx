import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

export const MainLayout: React.FC = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState<boolean>(false);

  const handleTogle = () => {
    setSidebarIsOpen(!sidebarIsOpen);
  };

  return (
    <div className="flex h-screen bg-gray-200 font-roboto">
      <Sidebar isOpen={sidebarIsOpen} toggleIsOpen={handleTogle} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header toggleSidebarIsOpen={handleTogle} />
        <main>
          <div className="container mx-auto px-6 py-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};
