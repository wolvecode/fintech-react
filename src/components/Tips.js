import React, { useState } from 'react';
import TipImage from '../assets/img/gold-tip.png';

export default function TipsWidget({ tips }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className='pl-2 md:pl-0 mb-8 md:mb-10'>
        <h2 className='text-black-900 text-xl font-semibold font-head'>Tips</h2>
      </div>
      {/** tips body */}
      <div className='bg-gray-500 px-6 py-6 rounded-2xl'>
        <div className='flex items-center justify-between mb-5 px-2'>
          {tips.map(({ title }, index) => (
            <h3
              key={index + title}
              className={`font-bold text-lg text-black-900 ${
                index === active ? 'block' : 'hidden'
              }`}>
              {title}
            </h3>
          ))}
          <img src={TipImage} alt='tips' />
        </div>
        <div>
          {tips.map(({ title, description }, index) => (
            <p
              key={index + title}
              className={`text-sm text-black-900 ${
                index === active ? 'block' : 'hidden'
              }`}>
              {description}
            </p>
          ))}
        </div>
      </div>
      {/** tips pagination */}
      <div className='px-6 mt-8 flex items-center'>
        {tips.map(({ title }, index) => (
          <button
            type='button'
            onClick={() => setActive(index)}
            className={`w-10 h-1 mr-3 rounded-lg ${
              index === active ? 'bg-primary-900' : 'bg-gray-600'
            }`}
          />
        ))}

        <button
          type='button'
          onClick={() => {
            if (active >= tips.length - 1) {
              setActive(0);
            } else {
              setActive(active + 1);
            }
          }}
          className='text-xs text-black-900 font-semibold font-head ml-4'>
          Next
        </button>
      </div>
    </div>
  );
}