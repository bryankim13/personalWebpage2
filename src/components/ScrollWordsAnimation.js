import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = ['Software Engineer 💻', 'Photographer 📷', 'WeightLifter 🏋🏻', 'Gamer 🎮', 'Novice Chess Player ♟️'];

export const ScrollWords = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Increase the duration for a slower transition

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{  alignItems:'center', display:'flex', marginTop:'50px',justifyContent: 'center'}}>
      <AnimatePresence mode="wait">
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