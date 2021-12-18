import React from 'react';
import { NavigationItem } from './NavigationItem';

export const NavigationList: React.FC = () => {
  return (
    <nav className="mt-10">
      {/* TODO: Dashboard */}
      {/* <CustomNavLink to='/'>
            <>
              <svg
                className='w-5 h-5'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M2 10C2 5.58172 5.58172 2 10 2V10H18C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10Z'
                  fill='currentColor'
                ></path>
                <path
                  d='M12 2.25195C14.8113 2.97552 17.0245 5.18877 17.748 8.00004H12V2.25195Z'
                  fill='currentColor'
                ></path>
              </svg>
              <span className='mx-4'>Dashboard</span>
            </>
          </CustomNavLink> */}

      <NavigationItem to="/statistics">
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z"></path>
            <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z"></path>
            <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z"></path>
          </svg>
          <span className="mx-4">Statistics</span>
        </>
      </NavigationItem>
    </nav>
  );
};
