import React from 'react';
import { BsBell } from 'react-icons/bs';

export default function NotificationBell({ on }) {
  return (
    <div className='flex relative'>
      <BsBell className='text-xl' />
      {on && (
        <span className='block h-2 w-2 rounded-full absolute bg-yellow-900 top-0 right-0' />
      )}
    </div>
  );
}
