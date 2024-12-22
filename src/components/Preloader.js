import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Logo from '../assets/logo.png';

const Preloader = ({ setLoading }) => {
  useEffect(() => {
    // Set a timeout to remove the preloader after animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds total for animation

    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <motion.div
      className="fixed inset-0 bg-dark flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="text-primary text-5xl md:text-7xl font-bold tracking-wider"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img className="" src={Logo} alt="Nirmal's Logo" />
        {/* WELCOME TO MY PORTFOLIO */}
        
      </motion.h1>
    </motion.div>
  );
};

export default Preloader;