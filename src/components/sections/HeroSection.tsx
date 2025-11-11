import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { KeywordButton } from '../KeywordButton';
import yt from "../../assets/youtube.svg"
import fb from "../../assets/facebook.svg"
import ig from "../../assets/instagram.svg"
import ScrollingBanner from '../scroll';
import background from "../../assets/bgbgbg.jpg"


interface HeroSectionProps {
  onKeywordSearch?: (keyword: string) => void;
}


export const HeroSection: React.FC<HeroSectionProps> = ({
  onKeywordSearch
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


  const handleKeywordClick = () => {
    onKeywordSearch?.(currentKeyword);
    console.log(`Searching for: ${currentKeyword}`);
  };


  const handleSocialClick = (platform: string) => {
    const urls = {
      instagram: 'https://www.instagram.com',
      facebook: 'https://www.facebook.com',
      youtube: 'https://www.youtube.com'
    };
    window.open(urls[platform as keyof typeof urls], '_blank');
  };


  return (
<section className="w-full max-w-[1340px] relative px-3 sm:px-5 md:px-[50px]">
      {/* Social Media Icons */}
      <div className="absolute right-3 top-0 md:right-0 md:top-14 flex flex-col gap-3 z-10">
        <button
          onClick={() => handleSocialClick('instagram')}
          className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          aria-label="Instagram"
        >
          <img src={ig} alt="Instagram" className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={() => handleSocialClick('facebook')}
          className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          aria-label="Facebook"
        >
          <img src={fb} alt="Facebook" className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={() => handleSocialClick('youtube')}
          className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          aria-label="YouTube"
        >
          <img src={yt} alt="YouTube" className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>


      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="w-full max-w-[1240px]"
      >
        <motion.h1
          variants={fadeInUpVariants}
          className="w-full text-[#0B2549] text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight sm:leading-[50px] md:leading-[71px] mb-4 sm:mb-[15px] md:mb-[19px]"
        >
          The Launchpod<br/>
          Where Ideas Take Off
        </motion.h1>
        
        <motion.div variants={fadeInUpVariants}>
          <KeywordButton 
            keyword="Launch"
            animationDistance='100px'
            onClick={handleKeywordClick}
            className="mb-5 md:mb-[33px]"
          />
        </motion.div>
        
        <motion.div 
          variants={fadeInUpVariants}
          className="w-full md:absolute md:w-[524px] md:right-[50px] md:top-7 flex gap-3 md:gap-[13px] mt-5 md:mt-0 mb-6 md:mb-0"
        >
          <div className="w-1 h-auto md:h-[150px] shrink-0 bg-[rgba(189,216,233,0.59)] rounded-[10px]" />
          <div className="flex-1">
            <ul className="w-full text-[#0B2549] text-lg sm:text-base md:text-lg font-normal list-none space-y-1">
              <li>Located in the business heart of Mount Road, Chennai.</li>
              <li>From investor pitch meetings and product launches to strategic networking sessions,</li>
              <li>This is where professionals, entrepreneurs, and visionaries connect to create impact.</li>
            </ul>
          </div>
        </motion.div>
        
        <motion.div 
          variants={fadeInUpVariants}
          className="w-full mt-6 sm:mt-8 md:mt-[42px] relative mb-8 sm:mb-10 md:mb-12"
        >
          {/* Background layer */}
          <div className="absolute bottom-0 left-0 right-0 -ml-2 mr-2 sm:-ml-4 sm:mr-4 md:mr-[16px] md:-ml-[16px]">
            <img
              src={background}
              alt="Background"
              className="w-full h-[180px] sm:h-[200px] md:h-[250px] lg:h-[336px] rounded-[5px] object-cover transform translate-y-2 translate-x-2 sm:translate-y-4 sm:translate-x-4"
              loading="lazy"
            />
          </div>
          
          {/* Main foreground image */}
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/214944fce293bf1601b1e784a94c047650bea660?width=2278"
            alt="Modern glass house architectural design showcasing contemporary building techniques"
            className="w-full h-[180px] sm:h-[200px] md:h-[250px] lg:h-[336px] shrink-0 rounded-[5px] object-cover relative z-10"
            loading="lazy"
          />
        </motion.div>
        
        <motion.div variants={fadeInUpVariants}>
          <ScrollingBanner/>
        </motion.div>
      </motion.div>
    </section>
  );
};
