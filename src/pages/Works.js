import React from 'react';
import '../styles/Works.css';
import WorkItem from '../components/WorkItem';
import { WorkList } from '../components/workList';
import { motion } from 'framer-motion';
import Loader from 'react-loaders';

const introContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Works = () => {
  return (
    <>
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
      <Loader type='square-spin' color='yellow'/>
    </>
  )
}

export default Works;