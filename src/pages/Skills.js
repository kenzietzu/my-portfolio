import React from 'react';
import '../styles/Skills.css';
import { motion } from 'framer-motion';
import Loader from 'react-loaders';

const introContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

const Skills = () => {
  return (
    <motion.div className='skill-container'
    initial="hidden"
    animate="visible"
    variants={introContainer}>
      <h1>Skills</h1>
      <div>
        <motion.div 
        className='skill-box'
        variants={intro}>
          <h2>Front-End</h2>
          <div>Javascript, React, Typescript,</div>
          <div>css, html</div>
        </motion.div>
        <motion.div 
        className='skill-box'
        variants={intro}>
          <h2>Design</h2>
          <div>Photoshop, Illustrator, Premier</div>
        </motion.div>
        <motion.div 
        className='skill-box'
        variants={intro}>
          <h2>/ / / / /</h2>
          <div>I graduated from Taiwan University of Arts,</div>
          <div> 
          majored in multiple media and animation arts. </div>
          <div className='ch'>畢業於臺灣藝術大學多媒體動畫藝術學系</div>
          <div className='ch'>英語多益檢定930分</div>
        </motion.div>
      </div>
      <Loader type='square-spin' color='yellow' />
    </motion.div>
    
  )
}

export default Skills;