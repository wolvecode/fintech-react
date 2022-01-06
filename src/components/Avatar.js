import React from 'react';
import PropTypes from 'prop-types';

export default function Avatar({ url, name }) {
  if (url)
    return (
      <div className='relative w-10 h-10 rounded-full'>
        <img
          src={url}
          alt={name}
          className='absolute inset-0 w-full h-full object-cover rounded-full'
        />
      </div>
    );

  return (
    <span className='flex w-10 h-10 items-center justify-center rounded-full bg-primary-100 text-white text-xs font-bold'>
      {name
        .split(' ')
        .map((n) => n[0].toUpperCase())
        .join('')}
    </span>
  );
}

// component's default props.
Avatar.defaultProps = {
  url: null,
};

// component prop types
Avatar.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string.isRequired,
};
