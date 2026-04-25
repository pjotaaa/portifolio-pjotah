import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { hero } from '../data/content';

const HeroSection = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], [0, -300]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001
  });

  // Click effect to accelerate video
  const playbackSpeed = useSpring(1, { stiffness: 100, damping: 20 });

  const handleVideoClick = () => {
    // Instantly target high speed
    playbackSpeed.set(4);
    // Quickly return target to normal, letting the spring smooth the deceleration
    setTimeout(() => {
      playbackSpeed.set(1);
    }, 300);
  };

  useEffect(() => {
    const unsubscribe = playbackSpeed.on("change", (latest) => {
      if (videoRef.current) {
        videoRef.current.playbackRate = Math.max(0.1, latest);
      }
    });
    return () => unsubscribe();
  }, [playbackSpeed]);

  // Mobile detection
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Desktop morphing (shrinks to right side)
  const videoWidthDesktop = useTransform(smoothProgress, [0, 1], ["100%", "40%"]);
  const videoHeightDesktop = useTransform(smoothProgress, [0, 1], ["100%", "45%"]);
  const videoLeftDesktop = useTransform(smoothProgress, [0, 1], ["0%", "55%"]);
  const videoTopDesktop = useTransform(smoothProgress, [0, 1], ["0%", "27.5%"]);

  // Mobile morphing (shrinks to bottom half)
  const videoWidthMobile = useTransform(smoothProgress, [0, 1], ["100%", "100%"]);
  const videoHeightMobile = useTransform(smoothProgress, [0, 1], ["100%", "40%"]);
  const videoLeftMobile = useTransform(smoothProgress, [0, 1], ["0%", "0%"]);
  const videoTopMobile = useTransform(smoothProgress, [0, 1], ["0%", "60%"]);
  
  // Fade out the dark gradient overlays as the video shrinks
  const overlayOpacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);

  const words = hero.name.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 * i },
    }),
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section ref={containerRef} className="relative h-[300vh]" id="hero">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-background transition-colors duration-300">
        
        {/* Decorative Code Parallax (Always in the background) */}
        <motion.div 
          className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden mix-blend-overlay"
        >
          <motion.pre 
            style={{ y: yBg }}
            className="text-primary-container opacity-[0.20] dark:opacity-[0.06] font-mono text-sm sm:text-base md:text-xl lg:text-3xl p-8 absolute top-0 left-0 w-full h-[200%]"
          >
            {`const resolve = (problem) => {
  const idea = think(differently);
  return build(idea).ship();
}
transform(chaos).into(clarity);\n\n`.repeat(20)}
          </motion.pre>
        </motion.div>

        {/* Morphing Video Background -> Side Floating Element */}
        <motion.div 
          className="absolute z-10 overflow-hidden mix-blend-difference dark:mix-blend-screen"
          style={{
            width: isMobile ? videoWidthMobile : videoWidthDesktop,
            height: isMobile ? videoHeightMobile : videoHeightDesktop,
            left: isMobile ? videoLeftMobile : videoLeftDesktop,
            top: isMobile ? videoTopMobile : videoTopDesktop
          }}
          onClick={handleVideoClick}
        >
          <video 
            ref={videoRef}
            src="/videos/virus_sprite_bg_1.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-90"
          />
        </motion.div>

        {/* Gradients for readability (fade out when video becomes a side card) */}
        <motion.div 
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 z-10 pointer-events-none"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        </motion.div>

        {/* Hero Content positioned over everything */}
        <div className="relative z-20 w-full h-full flex flex-col justify-center px-6 max-w-7xl mx-auto pointer-events-none">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl pointer-events-auto"
          >
            <div className="mb-4 text-primary font-mono text-sm md:text-base font-bold tracking-widest uppercase flex items-center drop-shadow-md">
              {hero.title} <span className="inline-block w-2 h-4 bg-primary-container ml-2 animate-blink"></span>
            </div>
            <motion.h1 
              variants={container}
              initial="hidden"
              animate="visible"
              className="text-6xl md:text-[96px] font-display font-extrabold mb-6 leading-[1.1] tracking-tighter flex flex-wrap text-on-surface transition-colors duration-300 drop-shadow-xl"
            >
              {words.map((word, idx) => (
                <motion.span key={idx} variants={child} className="inline-block mr-4">
                  {word}
                </motion.span>
              ))}
            </motion.h1>
            <h2 className="text-2xl md:text-4xl text-secondary-container font-display font-bold mb-8 relative z-10 transition-colors duration-300 drop-shadow-md">
              {hero.subtitle}
            </h2>
            <p className="text-lg md:text-xl text-secondary font-sans mb-12 relative z-10 transition-colors duration-300 max-w-2xl drop-shadow-md">
              {hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#projects" className="px-6 py-3 bg-primary-container text-background font-mono font-bold rounded-none hover:bg-primary transition-colors shadow-lg">
                Ver Projetos
              </a>
              <a href="#contact" className="px-6 py-3 border border-border text-on-surface font-mono font-bold rounded-none hover:border-primary-container transition-colors shadow-lg bg-background/20 backdrop-blur-sm">
                Entrar em Contato
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Edge Lines */}
        <div className="absolute right-0 top-1/4 w-px h-64 bg-gradient-to-b from-transparent via-primary-container/20 to-transparent z-10"></div>
        <div className="absolute left-1/4 bottom-0 w-64 h-px bg-gradient-to-r from-transparent via-primary-container/20 to-transparent z-10"></div>
      </div>
    </section>
  );
};

export default HeroSection;
