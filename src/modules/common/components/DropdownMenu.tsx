import React from 'react';

interface DropdownMenuProps {
  list: JSX.Element;
  toggleIsOpen: () => void;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  list,
  toggleIsOpen,
}) => {
  return (
    <>
      <div
        className="fixed inset-0 z-10 w-full h-full"
        onClick={toggleIsOpen}
      ></div>

      <div className="absolute right-0 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl border border-gray-50000">
        {list}
      </div>
    </>
  );
};
