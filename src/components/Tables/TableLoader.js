import React from 'react';
import Skeleton from 'react-loading-skeleton';

export default function TableLoader() {
  return (
    <div>
      <div className='flex justify-between items-center mb-5'>
        <Skeleton width={100} height={20} />
        <Skeleton width={50} height={20} />
      </div>
      {Array(8)
        .fill(0)
        .map((_, index) => (
          <div className='mb-1' key={index}>
            <Skeleton width={'100%'} height={10} />
          </div>
        ))}
    </div>
  );
}