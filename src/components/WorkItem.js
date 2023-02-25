import React from 'react';
import '../styles/WorkItem.css';
import { motion } from 'framer-motion';

const intro = {
  hidden: { y: 200, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const WorkItem = ({ image, name, skills}) => {
  return (
    <div>
      <motion.div 
        className='work-container'
        variants={intro}>
        <div className='image-container'>
            <img className='work-image' src={image} alt={name} />
        </div>
        <h2 className='work-name'> {name} </h2>
        <div className='work-skills'> {skills}</div>
      </motion.div>
    </div>
  )
}

export default WorkItem;