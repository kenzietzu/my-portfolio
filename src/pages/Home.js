import React from 'react';
import '../styles/Home.scss';
import { motion } from 'framer-motion';
import Linkedin from '../assets/linkedin.svg';
import Github from '../assets/github.svg';
import Envelope from '../assets/envelope.svg';
import Loader from 'react-loaders';


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
      staggerChildren: 0.15,
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
    <>
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
              &nbsp;Based in TAIWAN.&nbsp;
            </motion.h1><br/>
            <motion.div
              className='intro'
              variants={intro}>
              <a href="https://github.com/kenzietzu" target="_blank"><img className='icon' src={Github}/></a>
              <a href="https://www.linkedin.com/in/charlie-chang-b8a66b170/" target="_blank"><img className='icon' src={Linkedin}/></a>
              <a href="mailto:kenzietzu201@gmail.com" target="_blank"><img className='icon' src={Envelope}/></a>&nbsp;
            </motion.div>
          </motion.div> 
        </motion.div>
      </div>
      <Loader type='square-spin' color='yellow' />
    </>
  )
}

export default home;