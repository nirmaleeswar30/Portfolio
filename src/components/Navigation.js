import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// import { FaEnvelope } from 'react-icons/fa';
import Logo from '../assets/logo.png';

const Navigation = () => {
  const [hideNavbar, setHideNavbar] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setHideNavbar(prevScrollPos < currentScrollPos && currentScrollPos > 50);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const navItems = [
    { number: '01', text: 'About' },
    { number: '02', text: 'Experience' },
    { number: '03', text: 'Work' },
    { number: '04', text: 'Contact' }
  ];

  return (
    <header className={`fixed bg-black top-0 w-full px-8 py-6 flex justify-between items-center z-50 transition-transform duration-300 ${hideNavbar ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="w-26 h-14">
        { <img src={Logo} className="logo w-26 h-14" alt="Logo" />}
      </div>
      
      <nav className="flex items-center gap-8">
        <ul className="flex gap-8">
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <a 
                href={`#${item.text.toLowerCase()}`} 
                className="group flex items-center text-white hover:text-primary transition-colors"
              >
                <span className="font-mono font-bold text-sm text-primary mr-2">{item.number}.</span>
                <span className='font-semibold'>{item.text}</span>
              </a>
            </motion.li>
          ))}
        </ul>

        {/* <motion.a
          href="mailto:your.email@example.com"
          className="text-gray-400 hover:text-primary transition-colors"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <FaEnvelope size={20} />
        </motion.a> */}

        <motion.a
          href="/Rezume.pdf"
          className="px-4 py-2 border border-primary text-primary hover:bg-primary/10 transition-colors rounded font-mono font-semibold text-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Resume
        </motion.a>
      </nav>
    </header>
  );
};

export default Navigation;
