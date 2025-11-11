import React, { useRef } from 'react';
import { useScroll, motion, Variants } from 'framer-motion';
import Card from './Card';
import { projects } from './data';
import bgVideo from "../../assets/bgVideo.mp4"

// Animation configuration
const fadeInUpVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// Stagger container variant for cascading animations
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

export default function ParallaxShowcase() {
  const containerRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <main id="events" ref={containerRef as any} className="min-h-[100vh] w-full justify-center items-center py-[5vh] px-4 sm:px-[50px] scrollbar-hide">
      {/* Header Section with Animations */}
      <div className="relative overflow-hidden w-full mb-8 sm:mb-12 px-4 sm:px-8">
        {/* Animated Background Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-20 right-0 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute top-40 right-32 w-64 h-64 bg-blue-300/10 rounded-full blur-2xl"
        />

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="relative z-10"
        >
          <motion.p 
            variants={fadeInUpVariants}
            className="text-blue-300 text-sm font-medium mb-4 tracking-wide"
          >
            Upcoming Events
          </motion.p>
          
          {/* Heading with Left Separator */}
          <div className="flex gap-4 items-start mb-6">
            <motion.div 
              variants={fadeInUpVariants}
              className="w-2 h-[90px] max-lg:h-[120px] shrink-0 bg-[rgba(189,216,233,0.59)] rounded-full"
            />
            <motion.h1 
              variants={fadeInUpVariants}
              className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight max-w-4xl"
            >
              What's Happening at
              <br/>The Launchpod
            </motion.h1>
          </div>
          
          <motion.p 
            variants={fadeInUpVariants}
            className="text-slate-600 text-lg mb-8 leading-relaxed max-w-4xl"
          >
            Explore upcoming networking events, and industry crossovers. 
            Connect with innovators, investors, and industry leaders shaping the future of Chennai's ecosystem.
          </motion.p>
        </motion.div>
      </div>

      {/* Desktop/Tablet: Parallax with sticky video */}
      <div className='relative rounded-3xl w-full hidden sm:block '>
        <div className='sticky top-[5vh] h-[800px] rounded-3xl w-full overflow-hidden z-0'>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={bgVideo} type="video/mp4" />
          </video>
        </div>

        <div className="relative -mt-[800px] z-10 text-white">
          {projects.map((project, i) => {
            const targetScale = 1 - ((projects.length - i) * 0.05);
            return (
              <Card
                key={`p_${i}`}
                i={i}
                {...project}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </div>
      </div>

      {/* Mobile: simple vertical list, no sticky/parallax/video */}
      <div className='sm:hidden w-full space-y-4'>
        {projects.map((project, i) => (
          <Card
            key={`m_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[0, 1]}
            targetScale={1}
            isMobile
          />
        ))}
      </div>
    </main>
  );
}