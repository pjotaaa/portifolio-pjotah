import React from 'react';
import { motion } from 'framer-motion';

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const ProjectCard = ({ project, onClick }) => {
  const isEvolving = project.status === 'evolving';
  
  return (
    <motion.div
      variants={item}
      whileHover={{ y: -4, borderColor: 'var(--color-primary-container)' }}
      onClick={onClick}
      className="bg-surface border border-border p-6 flex flex-col h-full relative group transition-colors duration-300"
    >
      <div className="absolute top-0 left-0 w-1 h-full bg-primary-container opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="flex justify-between items-start mb-4 gap-4">
        <h3 className="text-xl font-display font-bold text-on-surface transition-colors duration-300 group-hover:text-primary-container">{project.title}</h3>
        <div 
          className={`px-3 py-1 text-[10px] font-mono font-bold tracking-widest uppercase border rounded-full whitespace-nowrap transition-colors duration-300 ${
            isEvolving 
              ? 'bg-[var(--color-tag-bg)] text-[var(--color-primary-container)] border-[var(--color-tag-border)]' 
              : 'bg-black/5 dark:bg-white/5 text-secondary border-black/10 dark:border-white/10'
          }`}
        >
          {project.statusLabel}
        </div>
      </div>
      <p className="text-secondary font-sans text-sm mb-6 flex-grow transition-colors duration-300">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map((tag, idx) => (
          <span 
            key={idx} 
            className="bg-[var(--color-tag-bg)] text-[var(--color-tag-text)] border border-[var(--color-tag-border)] text-xs px-2 py-1 font-mono rounded-sm transition-colors duration-300"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="absolute right-6 bottom-6 opacity-0 group-hover:opacity-100 transition-opacity text-primary-container font-mono text-sm font-bold flex items-center">
        Ver detalhes <span className="ml-2">→</span>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
