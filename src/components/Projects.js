import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Tacomail',
      description: 'Tacomail is a free and open-source web application designed for sending bulk emails and managing content. It provides an intuitive interface for email marketing, campaign management, and content creation, ideal for businesses and individuals.',
      image: '/Frame 35.png',
      tags: ['Node.js', 'Mail', 'CMS', 'Tailwind', 'PostgreSQL'],
      github: 'https://github.com/NotMugil/tacomail',
      external: '#',
      featured: true
    },
    {
      title: 'Youtube Music Together',
      description: 'A web app that allows synchronized playback for users. Create and join rooms for a shared listening experience, manage playlist queues, and enjoy seamless music sessions with friends. Perfect for group listening, collaborative playlists, and more.',
      image: '/ytm.png',
      tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Youtube API'],
      github: 'https://github.com/nirmaleeswar30/yt_music_together',
      external: '#',
      featured: true
    }
  ];

  return (
    <section className="min-h-screen py-20 px-8 md:px-24 max-w-7xl mx-auto" id="work">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-2 mb-12">
          <span className="text-primary font-mono font-bold text-2xl mt-2">03.</span>
          <h2 className="text-4xl font-bold text-gray-200">Some Things I've Built</h2>
          <div className="h-[1px] w-96 bg-gray-200 ml-4"></div>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative flex flex-col md:flex-row items-center gap-4"
            >
              {/* Project Image */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'order-last md:order-first' : 'order-first md:order-last'}`}>
                <a href={project.external} target="_blank" rel="noopener noreferrer" className="block">
                  <motion.div
                    className="relative group"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="relative w-full">
                      <div className="absolute inset-0 bg-primary/10 rounded-lg transform transition-transform group-hover:translate-x-1 group-hover:translate-y-1"></div>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="relative z-10 w-90 h-full object-cover rounded-lg grayscale hover:grayscale-0 transition-all"
                      />
                    </div>
                  </motion.div>
                </a>
              </div>

              {/* Project Content */}
              <div className={`md:w-1/2 flex flex-col ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}>
                <p className="font-mono text-primary font-semibold text-sm mb-2">Featured Project</p>
                <h3 className="text-2xl font-bold text-gray-200 mb-4">{project.title}</h3>
                
                <div className="bg-dark/90 p-6 rounded-lg backdrop-blur-sm mb-4">
                  <p className="text-gray-200">{project.description}</p>
                </div>

                <ul className={`flex flex-wrap gap-3 mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  {project.tags.map((tag, i) => (
                    <li key={i} className="font-mono text-sm text-gray-200">
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-primary transition-colors"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-primary transition-colors"
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
