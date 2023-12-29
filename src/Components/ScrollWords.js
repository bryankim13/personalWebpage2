import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = ['Software Engineer', 'Photographer', 'WeightLifter', 'Gamer'];

export const ScrollWords = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Increase the duration for a slower transition

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position:'absolute', alignItems:'center', marginTop: '25px'}}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.h1
          className='ScrollWord'
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: .5, ease: 'easeInOut' }} // Adjust the duration and ease
        >
          {words[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};