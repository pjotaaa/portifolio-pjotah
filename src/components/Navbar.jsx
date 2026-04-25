import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../App';

const Navbar = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-sm border-b border-border transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-mono text-xl font-bold tracking-tight text-on-surface">
          <span className="text-primary-container">{'<'}</span>
          Pjotah
          <span className="text-primary-container">{' />'}</span>
        </div>
        <div className="hidden md:flex space-x-8 font-mono text-sm items-center">
          <a href="#about" className="text-on-surface hover:text-primary-container transition-colors">Sobre</a>
          <a href="#projects" className="text-on-surface hover:text-primary-container transition-colors">Projetos</a>
          <a href="#contact" className="text-on-surface hover:text-primary-container transition-colors">Contato</a>
          <button 
            onClick={toggleTheme} 
            className="w-10 h-10 flex items-center justify-center rounded-full border border-border hover:border-primary-container transition-colors bg-surface text-secondary hover:text-primary-container"
            aria-label="Toggle Theme"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>
        {/* Mobile toggle button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleTheme} 
            className="w-10 h-10 flex items-center justify-center rounded-full border border-border bg-surface text-secondary"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
