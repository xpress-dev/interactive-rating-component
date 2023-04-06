import { useState } from 'react';
import starIcon from '../assets/icon-star.svg';
import RatingCount from './RatingCount';
import ThankYou from './ThankYou';
const Rating = () => {
  const [selectedRatingCount, setSelectedRatingCount] = useState(null);
  const [showThankYou, setShowThankYou] = useState(false);
  const ratings = [1, 2, 3, 4, 5];
  return (
    <div>
      {showThankYou && selectedRatingCount ? (
        <ThankYou />
      ) : (
        <article className='bg-[#252d37] w-[400px] rounded-3xl h-[395px] p-8 flex flex-col gap-5'>
          <div className=' bg-[#7c879835] w-12 h-12 flex justify-center items-center  rounded-full'>
            <img src={starIcon} className='rounded-full ' />
          </div>
          <h1 className='text-white font-bold text-[1.75rem]'>
            How did we do?
          </h1>
          <p className='text-[#959eac]'>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className='flex w-full justify-between'>
            {ratings.map((rating) => (
              <RatingCount
                amount={rating}
                currentCount={selectedRatingCount}
                ratingCountHandler={setSelectedRatingCount}
              />
            ))}
          </div>
          <button
            onClick={() => {
              if (selectedRatingCount) {
                setShowThankYou(true);
              }
            }}
            className=' font-serif text-white bg-[#fb7413] active:text-[#fb7413] active:bg-white py-2 rounded-full'
          >
            S U B M I T
          </button>
        </article>
      )}
    </div>
  );
};

export default Rating;
