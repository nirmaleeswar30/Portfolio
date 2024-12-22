import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';
import Navigation from './components/Navigation';
import SocialLinks from './components/SocialLinks';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Projects1 from './components/Projects1';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-black ">
      <AnimatePresence>
        {loading ? (
          <Preloader setLoading={setLoading} />
        ) : (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Navigation />
            <SocialLinks />
            <Hero />
            <About/>
            <Experience />
            <Projects />
            {/* <Projects1 /> */}
            <Contact />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;