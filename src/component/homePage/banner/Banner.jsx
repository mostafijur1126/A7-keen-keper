import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Banner = () => {
  return (
    <div className='w-full bg-green-50 px-4'>
  <div className='max-w-7xl mx-auto'>

    <div className='text-center py-10 md:py-16'>
      <h1 className='text-2xl sm:text-3xl md:text-5xl font-bold leading-tight'>
        Friends to keep close in your life
      </h1>

      <p className='text-base sm:text-lg md:text-2xl mt-3 max-w-3xl mx-auto'>
        Your personal shelf of meaningful connections. Browse, tend, and nurture the
        relationships that matter most.
      </p>

      <button className='btn bg-green-950 text-white border-none mt-5 px-6'>
        <FaPlus />Add a Friend
      </button>
    </div>
  </div>
</div>
  );
};

export default Banner;