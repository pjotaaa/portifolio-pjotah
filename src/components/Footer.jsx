import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border text-center relative overflow-hidden flex flex-col items-center justify-center min-h-[300px] bg-background transition-colors duration-300">
      <div className="font-mono text-xs text-secondary z-10 mb-8 mt-auto transition-colors duration-300">
        © {new Date().getFullYear()} Pjotah. Desenvolvido com Precisão Técnica.
      </div>
      
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-full flex justify-center pointer-events-none select-none"
      >
        <span 
          className="font-display font-black leading-none text-[var(--color-footer-text)] transition-colors duration-300 whitespace-nowrap"
          style={{ fontSize: "clamp(30px, 20vw, 160px)" }}
        >
          PJOTAH
        </span>
      </motion.div>
    </footer>
  );
};

export default Footer;
