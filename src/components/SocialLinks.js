import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin, FaCodepen } from 'react-icons/fa';

const SocialLinks = () => {
  const links = [
    { Icon: FaGithub, url: 'https://github.com/nirmaleeswar30' },
    { Icon: FaInstagram, url: 'https://www.instagram.com/_._nirmal.__/' },
    { Icon: FaTwitter, url: ' https://x.com/Nirmal70238905?t=YzQDj3YOmQWh44qF-R4r2Q&s=08' },
    { Icon: FaLinkedin, url: 'http://www.linkedin.com/in/nirmaleeswar-m' },
    { Icon: FaCodepen, url: 'https://codepen.io/nirmaleeswar30' }
  ];

  return (
    <>
      <motion.div 
        className="fixed left-12 bottom-0 flex flex-col gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        {links.map(({ Icon, url }, index) => (
          <motion.a
            key={index}
            href={url}
            className="text-gray-200 hover:text-primary hover:-translate-y-1 transition-all"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5 + (index * 0.1) }}
          >
            <Icon size={20} />
          </motion.a>
        ))}
        <div className="w-[1px] h-24 bg-white mx-auto mt-6"></div>
      </motion.div>

      <motion.div 
        className="fixed right-12 bottom-0 flex flex-col gap-6 items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <motion.a
          href="mailto:nirmaleeswar30@gmail.com"
          className="text-gray-200 hover:text-primary transition-all mb-0 font-semibold"
          style={{ writingMode: 'vertical-rl', textOrientation: 'sideways-right' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6 }}
        >
          nirmaleeswar30@gmail.com
        </motion.a>
        <div className="w-[1px] h-24 bg-white mt-6"></div>
      </motion.div>
    </>
  );
};

export default SocialLinks;
