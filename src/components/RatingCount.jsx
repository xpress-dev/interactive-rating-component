import React from 'react';

const RatingCount = ({ amount, ratingCountHandler, currentCount }) => {
  return (
    <button
      onClick={() => {
        ratingCountHandler(amount);
      }}
      className={`text-white/80 w-12 h-12 rounded-full flex justify-center items-center hover:bg-[#7c8798] active:bg-[#fb7413] ${
        +amount === +currentCount
          ? 'bg-[#fb7413] hover:bg-[#fb7413]'
          : 'bg-[#7c879835]'
      }`}
    >
      {amount}
    </button>
  );
};

export default RatingCount;
