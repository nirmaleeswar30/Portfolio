import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const technologies = [
    'Kubernetes',
    'Docker',
    'Jenkins',
    'Openstack',
    'React',
    'Express',
  ];

  return (
    <section className="min-h-screen py-20 px-8 md:px-24 max-w-7xl mx-auto" id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <div className="flex items-center gap-2 mb-8">
            <span className="text-primary font-mono font-bold text-2xl mt-2">01.</span>
            <h2 className="text-4xl font-bold text-gray-200">About Me</h2>
            <div className="h-[1px] w-56 bg-white ml-4"></div>
          </div>

          <div className="space-y-4 text-gray-200">
            <p>
            Hello! My name is Nirmal and I specialize in building and managing cloud-based systems. 
            My journey into this field started with a passion for technology and a curiosity about how things work in the cloud. 
            Over the years, I've honed my skills in cloud engineering, DevOps, and web development, creating efficient and innovative solutions.
            </p>

            <p>
              Fast-forward to today, and I've had the privilege of working at{' '}
              {/* <span className="text-primary">an advertising agency</span>,{' '} */}
              {/* <span className="text-primary">a start-up</span>,{' '} */}
              <span className="text-primary">a huge corporation</span>, and{' '}
              <span className="text-primary">a student-led tech team</span>.
            </p>

            <p>
              Here are a few technologies I've been working with recently:
            </p>

            <ul className="grid grid-cols-2 gap-2 mt-4">
              {technologies.map((tech, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-2 font-mono font-semibold text-sm"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="text-primary">▹</span>
                  {tech}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <motion.div
          className="relative group"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-full max-w-[300px] aspect-square mx-auto">
            <div className="absolute inset-0 border-2 border-primary rounded-lg transform translate-x-5 translate-y-5 transition-transform group-hover:translate-x-4 group-hover:translate-y-4"></div>
            <div className="absolute inset-0 bg-primary/10 rounded-lg transform transition-transform group-hover:translate-x-1 group-hover:translate-y-1"></div>
            <img
              src="https://res.cloudinary.com/dr8g09icb/image/upload/v1734830180/WhatsApp_Image_2024-12-22_at_06.43.32_1_1_rhikl7.png"
              alt="Profile"
              className="relative z-10 w-full h-full object-cover rounded-lg grayscale hover:grayscale-0 transition-all"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;