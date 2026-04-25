import React from 'react';
import { motion } from 'framer-motion';
import { about } from '../data/content';
import AnimatedStat from './AnimatedStat';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 relative bg-black/5 dark:bg-white/[0.02] transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-16 items-start"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 flex items-center overflow-hidden text-on-surface transition-colors duration-300">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="text-primary-container mr-4 inline-block"
              >
                {'//'}
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                Sobre Mim
              </motion.span>
            </h2>
            <div className="text-secondary font-sans text-lg leading-relaxed border-l-2 border-primary-container pl-6 space-y-4 transition-colors duration-300">
              <p>{about.bio}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {about.stats.map((stat, idx) => (
              <AnimatedStat key={idx} stat={stat} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
