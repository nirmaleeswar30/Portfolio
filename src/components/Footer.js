import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaCodeBranch } from 'react-icons/fa';
import { fetchGitHubStats } from '../utils/github';

const Footer = () => {
  const [stats, setStats] = useState({ stars: 0, forks: 0, name: 'Your Name' });
  const [loading, setLoading] = useState(true);
  const username = 'nirmaleeswar30'; // Replace with your GitHub username

  useEffect(() => {
    const loadStats = async () => {
      const data = await fetchGitHubStats(username);
      setStats(data);
      setLoading(false);
    };

    loadStats();
  }, []);

  return (
    <motion.footer
      className="mt-auto pt-6 font-mono text-sm text-gray-400"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
    >
      <a 
        href={`https://github.com/${username}`}
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-primary transition-colors"
      >
        Designed & Built by {stats.name}
      </a>
      <div className="flex items-center justify-center gap-6 mt-4">
        <motion.div 
          className="flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <FaStar className="text-primary" />
          <span>{loading ? '...' : stats.stars.toLocaleString()}</span>
        </motion.div>
        <motion.div 
          className="flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <FaCodeBranch className="text-primary" />
          <span>{loading ? '...' : stats.forks.toLocaleString()}</span>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;