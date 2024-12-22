import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const jobs = [
    // {
    //   company: 'Upstatement',
    //   title: 'Lead Engineer @ Upstatement',
    //   date: 'May 2018 — Present',
    //   points: [
    //     'Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more',
    //     'Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements',
    //     'Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders',
    //     'Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship'
    //   ]
    // },
    {
      company: 'SetupBoxs',
      title: 'Cloud Engineer',
      date: 'March 2021 — Present',
      points: [
        'Implemented and managed cloud infrastructure using various platforms.',
        'Collaborated with DevOps engineers to streamline CI/CD pipelines and automated deployment processes using Ansible.',
        'Designed and maintained container orchestration solutions using Kubernetes.',
        'Developed and maintained code for in-house and client websites.',
        'Worked with a variety of different languages, platforms, and frameworks.'
      ]
    },
    {
      company: 'Bit Ninjas',
      title: 'Software Developer',
      date: 'May 2022 — October 2024',
      points: [
        'Worked with a team of developers to build websites and applications.',
        'Assisted in developing and maintaining documentation.',
        'Contributed to open-source projects and internal tools.'
      ]
    }
  ];

  return (
    <section className="min-h-screen py-20 px-8 md:px-24 max-w-7xl mx-auto" id="experience">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-2 mb-12">
          <span className="text-primary font-mono font-bold text-2xl mt-2 ">02.</span>
          <h2 className="text-4xl font-bold text-gray-200">Where I've Worked</h2>
          <div className="h-[1px] w-96 bg-white ml-4"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          {/* Tab list */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible border-b md:border-b-0 md:border-l border-gray-500">
            {jobs.map((job, index) => (
              <button
                key={index}
                className={`px-5 py-3 font-mono font-semibold text-sm whitespace-nowrap ${
                  activeTab === index
                    ? 'text-primary border-primary bg-primary/10'
                    : 'text-gray-200 hover:text-primary hover:bg-primary/5'
                } ${
                  index === activeTab
                    ? 'border-b-2 md:border-b-0 md:border-l-2'
                    : 'border-b-2 md:border-b-0 md:border-l-2 border-transparent'
                }`}
                onClick={() => setActiveTab(index)}
              >
                {job.company}
              </button>
            ))}
          </div>

          {/* Tab panels */}
          <div className="py-4 md:px-8">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ 
                  opacity: activeTab === index ? 1 : 0,
                  x: activeTab === index ? 0 : 20
                }}
                transition={{ duration: 0.3 }}
                className={`space-y-6 ${activeTab === index ? 'block' : 'hidden'}`}
              >
                <h3 className="text-xl text-gray-200 font-semibold">
                  {job.title}
                </h3>
                <p className="font-mono text-sm text-gray-200">{job.date}</p>
                <ul className="space-y-4">
                  {job.points.map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-2 text-gray-200"
                    >
                      <span className="text-primary mt-1.5">▹</span>
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;