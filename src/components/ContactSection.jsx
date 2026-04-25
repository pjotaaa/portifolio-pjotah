import React from 'react';
import { motion } from 'framer-motion';
import { contact } from '../data/content';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 relative bg-black/5 dark:bg-white/[0.02] transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-on-surface transition-colors duration-300">
            Vamos construir algo.
          </h2>
          <p className="text-secondary font-sans text-lg mb-12 max-w-2xl mx-auto transition-colors duration-300">
            Tem um processo travado, uma ideia não executada ou um sistema que precisa nascer? Me manda uma mensagem.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16">
            <a href={`mailto:${contact.email}`} className="w-full sm:w-auto px-8 py-4 bg-primary-container text-background font-mono font-bold hover:bg-primary transition-colors text-center">
              {contact.email}
            </a>
          </div>
          
          <div className="flex justify-center space-x-8 font-mono text-sm">
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary-container transition-colors uppercase tracking-widest">GitHub</a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary-container transition-colors uppercase tracking-widest">LinkedIn</a>
            <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary-container transition-colors uppercase tracking-widest">Instagram</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
