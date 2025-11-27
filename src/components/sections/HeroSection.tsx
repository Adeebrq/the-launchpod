import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Instagram, Linkedin, Youtube } from 'lucide-react';
import { KeywordButton } from '../KeywordButton';
import ScrollingBanner from '../scroll';
import heroBG1 from "/heroBG1.png"

interface HeroSectionProps {
  onKeywordSearch?: (keyword: string) => void;
  onBookNowClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onKeywordSearch,
  onBookNowClick
}) => {
  const [currentKeyword] = useState('Keyword');

  const fadeInUpVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  // Animation for sliding in from bottom to top
  const slideUpVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 100
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1],
        repeat: 0
      }
    }
  };

  const handleKeywordClick = () => {
    onKeywordSearch?.(currentKeyword);
    console.log(`Searching for: ${currentKeyword}`);
  };

  return (
    <section className="w-full max-w-[1340px] relative px-3 sm:px-5 md:px-[50px] pb-0 lg:mt-10">
      {/* Social Media Icons */}
      <div className="absolute right-3 top-0 md:right-0 md:top-14 flex flex-col gap-3 z-10">

        <a
          href="https://www.linkedin.com/company/thelaunch-pod/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" />
        </a>
        <a
          href="https://www.youtube.com/@THELAUNCHPOD-j2n8b"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          aria-label="Youtube"
        >
          <Youtube className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" />
        </a>
        <a
          href="https://share.google/H6nVYmJ0EBzJg9WXw"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          aria-label="Instagram"
        >
          <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" />
        </a>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="w-full max-w-[1240px] lg:-translate-y-7 "
      >
        <motion.h1
          variants={fadeInUpVariants}
          className="w-full text-[#0B2549] text-3xl sm:text-2xl md:text-5xl font-semibold leading-none mb-0 sm:mb-[15px] md:mb-[19px]"
        >
          The Launchpod<br/>
          Where Ideas Take Off<br/>
          
        </motion.h1>
        
        <motion.div variants={fadeInUpVariants} className="relative z-20">
          <KeywordButton 
            keyword="Launch"
            animationDistance='100px'
            onClick={onBookNowClick || handleKeywordClick}
            className="mb-5 md:mb-[33px] mt-[13px] sm:mt-0"
          />
        </motion.div>
        
        <motion.div 
          variants={fadeInUpVariants}
          className="w-full md:absolute md:w-[524px] md:right-[50px] md:top-7 flex gap-3 md:gap-[13px] mt-5 md:mt-0 mb-0 md:mb-0"
        >
         <div className="w-1 h-auto md:h-[50px] shrink-0 bg-[rgba(189,216,233,0.59)] rounded-[10px]" />
          <div className="flex-1">
            <ul className="w-full text-[#0B2549] text-lg sm:text-base md:text-lg font-normal list-none space-y-1">
<li>A space that can be filled with people, their ideas, their aspirations, their <span className="bold-text">work</span>, their <span className="bold-text">craft</span>, their <span className="bold-text">impact</span>.</li>

            </ul>
          </div>
        </motion.div>
        
        <motion.div 
          variants={fadeInUpVariants}
          className="w-full mt-0 sm:mt-0 relative mb-8 mb-0 lg:-mt-8 z-10"
        >
          {/* Single image with slide up animation */}
          <motion.img
            variants={slideUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            src={heroBG1}
            alt="Modern glass house architectural design showcasing contemporary building techniques"
            className="w-full h-[200px] sm:h-[200px] md:h-[250px] lg:h-[440px] shrink-0 rounded-[5px] object-cover pointer-events-none"
            loading="lazy"
          />
        </motion.div>
        
        <motion.div 
  variants={fadeInUpVariants}
  className="w-screen relative left-1/2 -ml-[50vw] "
>
  <ScrollingBanner/>
</motion.div>
      </motion.div>
    </section>
  );
};
