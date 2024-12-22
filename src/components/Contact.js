import React from 'react';
import { motion } from 'framer-motion';
import Footer from './Footer';

const Contact = () => {
  return (
    <section className="min-h-screen py-20 px-8 flex flex-col items-center justify-center text-center" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto pt-36 "
      >
        <span className="text-primary font-mono mb-4 block font-bold text-2xl mt-2 ">04. What's Next?</span>
        
        <h2 className="text-5xl md:text-6xl font-bold text-gray-100 mb-8 bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        
        <p className="text-gray-200 mb-12 text-lg leading-relaxed">
        Hello! I'm actively exploring new opportunities and would love to hear from you.<br/> My inbox is always open, so whether you have a question, an exciting opportunity, or just want to say hi, feel free to reach out. 
        I'll do my best to get back to you <br/>as soon as possible. 
        Thank you!
        </p>
        
        <motion.a
          href="mailto:nirmaleeswar30@gmail.com"
          className="inline-block py-4 px-8 border-2 border-primary text-primary hover:bg-primary/10 transition-colors rounded-md font-mono font-bold text-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Say Hello
        </motion.a>
      </motion.div>

      <Footer />
    </section>
  );
};

export default Contact;