import React from 'react';
import './styles/Navbar.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const header = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
        y: 0, 
        opacity: 1,
        transition: {
            ease: 'easeInOut',
            delay: 0.1
        } },
};

const navbar = () => {
    return (
        <motion.div
            className='navbar'
            initial="hidden"
            animate="visible"
            variants={header}>
            <div><Link to="/">ABOUT ME</Link></div>
            <div><Link to="/skills">Skills</Link></div>
            <div><Link to="/works">Works</Link></div>
        </motion.div>
    )
}

export default navbar;