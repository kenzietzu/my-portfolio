import React from 'react';
import '../styles/Works.css';
import WorkItem from '../components/WorkItem';
import { WorkList } from '../components/workList';
import { motion } from 'framer-motion';

const introContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const Works = () => {
  return (
    <motion.div
    initial="hidden"
    animate="visible"
    variants={introContainer}>
      <h1>Works</h1>
      <div className='container'>
        {WorkList.map((project) => {
          return (
            <WorkItem name={project.name} image={project.image} skills={project.skills} />
          );
        })}
      </div>
    </motion.div>
  )
}

export default Works;