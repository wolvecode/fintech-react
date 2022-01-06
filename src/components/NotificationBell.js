import React from 'react';
import PropTypes from 'prop-types';
import { BsBellFill } from 'react-icons/bs';

export default function NotificationBell({ on }) {
  return (
    <div className='flex relative'>
      <BsBellFill className='text-xl' />
      {on && (
        <span className='block h-2 w-2 rounded-full absolute bg-yellow-900 top-0 right-0' />
      )}
    </div>
  );
}

// Bell's default props.
NotificationBell.defaultProps = {
  on: false,
};

// Bell's property types.
NotificationBell.propTypes = {
  on: PropTypes.bool,
};
