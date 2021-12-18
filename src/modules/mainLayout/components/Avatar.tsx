import React, { useState } from 'react';
import { AvatarMenu } from './AvatarMenu';
import { DropdownMenu } from 'modules/common';

export const Avatar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="relative z-10 block w-8 h-8 overflow-hidden rounded-full shadow focus:outline-none"
        onClick={handleClick}
      >
        <img
          className="object-cover w-full h-full"
          src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=296&amp;q=80"
          alt="Your avatar"
        ></img>
      </button>

      {isOpen && (
        <DropdownMenu list={<AvatarMenu />} toggleIsOpen={handleClick} />
      )}
    </>
  );
};
