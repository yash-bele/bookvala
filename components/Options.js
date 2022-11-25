import { useState } from 'react';
import { check } from '../data/data';

const Options = ({ data, handleClick }) => {
  return (
    <main className='w-[350px] sm:w-96 border border-slate-300 rounded mt-2 overflow-hidden shadow-md'>
      {data.map((i) => {
        return (
          <div
            key={i}
            className={`pl-3 cursor-pointer
            ${i === 'Purple' && 'hover:bg-purple-100'}
            ${i === 'Red' && 'hover:bg-red-100'} 
            ${i === 'Green' && 'hover:bg-green-100'} 
            ${i === 'Orange' && 'hover:bg-orange-100'}
            ${i === 'Yellow' && 'hover:bg-yellow-100'}
            ${i === 'Pink' && 'hover:bg-pink-100'}`}
            onClick={() => handleClick(i)}
          >
            <p
              className={`text-sm py-1.5
              ${i === 'Purple' && 'text-purple-600'}
              ${i === 'Red' && 'text-red-600'} 
              ${i === 'Green' && 'text-green-600'} 
              ${i === 'Orange' && 'text-orange-600'}
              ${i === 'Yellow' && 'text-yellow-600'}
              ${i === 'Pink' && 'text-pink-600'}`}
            >
              {i}
            </p>
          </div>
        );
      })}
      {data.length === 0 && (
        <p className='text-center text-sm py-1 font-semibold text-slate-400'>
          No Options
        </p>
      )}
    </main>
  );
};

export default Options;
