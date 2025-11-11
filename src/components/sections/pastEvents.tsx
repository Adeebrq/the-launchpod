import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import CircularGallery from "../CircularGallery";

const fadeInUpVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const CircularGallerySection = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      id="past-events"
      ref={sectionRef}
      className="relative w-full"
    >
      {/* Header Section */}
      <motion.div
        ref={headerRef}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="px-4 md:px-[50px] py-0"
      >
        <motion.p 
          variants={fadeInUpVariants}
          className="text-blue-300 text-sm font-medium mb-4 tracking-wide"
        >
            Past Event Highlights
        </motion.p>
        
        {/* Heading with Left Separator */}
        <div className="flex gap-4 items-center md:items-start mb-2">
          <motion.div 
            variants={fadeInUpVariants}
            className="w-2 h-[60px] md:h-[120px] shrink-0 bg[rgba(189,216,233,0.59)] md:bg-[rgba(189,216,233,0.59)] rounded-[10px]"
          />
          <motion.h1 
            variants={fadeInUpVariants}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight"
          >
            Moments That Moved Ideas Forward
            Snapshots from our recent activities.
          </motion.h1>
        </div>
      </motion.div>

      {/* Circular Gallery Section */}
      <div 
        className="relative min-h-[80vh] md:min-h-screen w-full px-4 md:px-[50px]"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-50">
          <div 
            className={`absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent transition-opacity duration-1000 ${
              isInView ? 'opacity-100' : 'opacity-0'
            }`} 
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-transparent animate-pulse" />
        </div>
        
        {/* Circular Gallery with Animation */}
        <div className={`relative z-10 h-[60vh] md:h-screen transition-opacity duration-1000 ${
          isInView ? 'opacity-100' : 'opacity-0'
        }`}>
          <CircularGallery
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.05}
          />
        </div>


        {/* Scroll Indicator */}
        <div className="hidden md:block absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularGallerySection;
