import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project, index, total }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="relative grid md:grid-cols-12 gap-4"
    >
      {/* Project Image */}
      <div className={`md:col-span-7 ${isEven ? 'md:col-start-1' : 'md:col-start-6'}`}>
        <a href={project.external} target="_blank" rel="noopener noreferrer" className="block">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:bg-transparent transition-all duration-300"></div>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </a>
      </div>

      {/* Project Content */}
      <div className={`md:col-span-6 ${
        isEven ? 'md:col-start-7' : 'md:col-start-1'
      } flex flex-col ${
        isEven ? 'md:items-start' : 'md:items-end'
      }`}>
        <p className="font-mono text-primary text-sm mb-2">Featured Project</p>
        <h3 className="text-2xl font-bold text-gray-200 mb-4">{project.title}</h3>
        
        <div className="bg-dark/90 p-6 rounded-lg backdrop-blur-sm mb-4">
          <p className="text-gray-400">{project.description}</p>
        </div>

        <ul className={`flex flex-wrap gap-3 mb-8 ${
          isEven ? 'justify-start' : 'justify-end'
        }`}>
          {project.tags.map((tag, i) => (
            <li key={i} className="font-mono text-sm text-gray-400">
              {tag}
            </li>
          ))}
        </ul>

        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={project.external}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors"
          >
            <FaExternalLinkAlt size={20} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;