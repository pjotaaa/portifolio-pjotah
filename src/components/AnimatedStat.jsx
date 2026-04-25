import React from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';

const AnimatedStat = ({ stat }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const displayCount = useTransform(count, Math.round);
  const [typed, setTyped] = React.useState('');

  const numberStr = String(stat.number);

  React.useEffect(() => {
    if (isInView) {
      if (numberStr === '∞') return;
      
      if (numberStr === '01') {
        let i = 0;
        const interval = setInterval(() => {
          setTyped('01'.substring(0, i + 1));
          i++;
          if (i >= 2) clearInterval(interval);
        }, 300);
        return () => clearInterval(interval);
      }
      
      const match = numberStr.match(/^(\d+)/);
      if (match) {
        const targetNumber = parseInt(match[1], 10);
        animate(count, targetNumber, { duration: 1.5, ease: 'easeOut' });
      }
    }
  }, [isInView, numberStr, count]);

  return (
    <div ref={ref} className="bg-surface p-6 border border-border hover:border-primary-container/50 transition-colors duration-300 w-full">
      <div className="text-4xl font-display font-bold text-primary mb-2">
        <motion.span 
          className="inline-block origin-center"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          {numberStr !== '∞' && numberStr !== '01' && (
            <><motion.span>{displayCount}</motion.span>{numberStr.replace(/^\d+/, '')}</>
          )}
          {numberStr === '∞' && (
            <span>∞</span>
          )}
          {numberStr === '01' && <span>{typed || '\u00A0'}</span>}
        </motion.span>
      </div>
      <div className="font-mono text-xs uppercase text-secondary tracking-widest">
        {stat.label}
      </div>
    </div>
  );
};

export default AnimatedStat;
