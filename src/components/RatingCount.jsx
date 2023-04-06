import React from 'react';

const RatingCount = ({ amount }) => {
  return (
    <button className='text-white/80 bg-[#7c879835] w-12 h-12 rounded-full flex justify-center items-center hover:bg-[#7c8798]'>
      {amount}
    </button>
  );
};

export default RatingCount;
