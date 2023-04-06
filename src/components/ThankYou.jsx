import React from 'react';
import thankYouIllustration from '../assets/illustration-thank-you.svg';
import { motion } from 'framer-motion';
const ThankYou = ({ finalCount }) => {
  return (
    <motion.article
      initial={{ x: 350 }}
      animate={{ x: 0 }}
      className='bg-[#252d37] w-[400px] rounded-3xl h-[395px] p-8 flex flex-col gap-5'
    >
      <img src={thankYouIllustration} className='w-1/2 mx-auto' />
      <p className='text-[#fb7413] bg-[#7c879835] text-center w-48 mx-auto rounded-full px-3 py-1'>
        You selected {finalCount} out of 5
      </p>
      <h1 className='text-white text-[1.75rem] text-center font-bold'>
        Thank you!
      </h1>
      <p className='text-white/50 text-center'>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </motion.article>
  );
};

export default ThankYou;
