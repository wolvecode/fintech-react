import React from 'react';
import Logo from '../../assets/img/logo.png';
import user from '../../assets/img/user.png';
import Avatar from '../Avatar';
import Notification from '../NotificationBell';

export default function Header() {
  return (
    <header className='w-full px-6 sm:px-8 lg:px-10 py-4 bg-primary-900'>
      <div className='w-full flex justify-between items-center text-white'>
        <div className='flex items-center'>
          <img src={Logo} alt='FinTech logo' className='mr-3' />    
          <h1 className='font-head font-extrabold text-xl hidden sm:block'>
            FinTech
          </h1>
        </div>
        <div>
          <ul className='flex items-center'>
            <li className='mr-4'>
              <Notification on />
            </li>
            <li>
              <Avatar url={user} name='Profile Image' />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}