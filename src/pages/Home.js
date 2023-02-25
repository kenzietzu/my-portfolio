import React from 'react';
import '../styles/Home.css';
import { motion } from 'framer-motion';

const banner = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const introContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const intro = {
  hidden: { x: -300 },
  visible: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const home = () => {
  return (
    <div className='container'>
      <motion.div
        className='bg'
        initial="hidden"
        animate="visible"
        variants={banner}>
        <motion.div
          variants={introContainer}>
          <motion.h1
            className='intro'
            variants={intro}>
            &nbsp;Oi!&nbsp;
          </motion.h1><br/>
          <motion.h1
            className='intro'
            variants={intro}>
            &nbsp;I'm Charlie.&nbsp;
          </motion.h1><br/>
          <motion.h1
            className='intro'
            variants={intro}>
            &nbsp;A web developer.&nbsp;
          </motion.h1><br/>
          <motion.h1
            className='intro'
            variants={intro}>
            &nbsp;Based in Taiwan.&nbsp;
          </motion.h1>
        </motion.div> 
      </motion.div>
    </div>
  )
}

export default home;