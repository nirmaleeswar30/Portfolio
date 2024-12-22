import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-8 md:px-24 max-w-7xl mx-auto">
      <motion.span 
        className="text-primary mb-4 font-mono font-medium text-xl "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.3 }}
      >
        Hi, my name is
      </motion.span>
      
      <motion.h1 
        className="text-6xl md:text-8xl font-bold text-white mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.4 }}
      >
        Nirmal.
      </motion.h1>
      
      <motion.h2 
        className="text-5xl md:text-7xl font-bold text-gray-200 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5 }}
      >
        I Engineer Cloud Systems.
      </motion.h2>
      
      <motion.p 
        className="text-gray-200 max-w-xl mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.6 }}
      >
        I build and manage cloud-based systems, 
        (and occasionally develop web applications), and specialize in DevOps. 
        My work is dedicated to integrating cloud engineering, DevOps, and web development to create efficient and innovative solutions.
      </motion.p>
      
      <motion.a
        href="https://github.com/nirmaleeswar30"
        className="inline-block py-4 px-8 border border-primary text-primary hover:bg-primary/10 transition-colors rounded w-fit"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.7 }}
      >
        Check out my work!
      </motion.a>
    </section>
  );
};

export default Hero;