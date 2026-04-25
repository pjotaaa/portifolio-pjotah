import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../App';

const Navbar = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <div className="md:hidden flex items-center space-x-4">
          <button 
            onClick={toggleTheme} 
            className="w-10 h-10 flex items-center justify-center rounded-full border border-border bg-surface text-secondary"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-on-surface p-2 focus:outline-none"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden border-t border-border bg-background/95 backdrop-blur-md px-6 py-4 flex flex-col space-y-4 font-mono text-sm"
        >
          <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-on-surface hover:text-primary-container transition-colors py-2">Sobre</a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)} className="text-on-surface hover:text-primary-container transition-colors py-2">Projetos</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-on-surface hover:text-primary-container transition-colors py-2">Contato</a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
