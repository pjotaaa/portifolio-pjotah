import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/content';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  return (
    <section id="projects" className="py-24 px-6 relative bg-background transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12 overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-display font-bold flex items-center text-on-surface transition-colors duration-300">
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
              Exemplos de automações
            </motion.span>
          </h2>
          <div className="hidden md:block h-px bg-border flex-grow ml-8 transition-colors duration-300"></div>
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 40 }}
              transition={{ type: "spring", stiffness: 280, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-[95vw] max-w-6xl max-h-[90vh] bg-surface border border-border overflow-hidden flex flex-col shadow-2xl"
            >
              {/* Close Button — grande e bem visível */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 z-20 flex items-center gap-2 px-4 py-2 bg-background/80 backdrop-blur-sm border border-border text-on-surface font-mono text-sm font-bold hover:border-primary-container hover:text-primary-container transition-colors"
              >
                <span>✕</span>
                <span>Fechar</span>
              </button>

              {/* Image — takes up the top 55% */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="w-full flex-shrink-0"
                style={{ height: "55%" }}
              >
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover object-top"
                  style={{ minHeight: "300px", maxHeight: "500px" }}
                />
              </motion.div>

              {/* Details panel */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="flex-1 p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6 overflow-y-auto border-t border-border"
              >
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-on-surface mb-3">
                    {selectedProject.title}
                  </h3>
                  <p className="text-secondary font-sans text-base leading-relaxed max-w-2xl">
                    {selectedProject.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 md:justify-end">
                  {selectedProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-[var(--color-tag-bg)] text-[var(--color-tag-text)] border border-[var(--color-tag-border)] text-xs px-3 py-1.5 font-mono rounded-sm transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
