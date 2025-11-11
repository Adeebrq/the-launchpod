'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { KeywordButton } from '../KeywordButton';

// Container variant with staggered children
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// Individual item animations
const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

// Heading animation with scale
const headingVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function GetInTouchSection() {
  return (
    <section id="contact" className="w-full flex flex-col items-center justify-center px-4 py-20">
      {/* Animated Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="w-full flex flex-col items-center justify-center"
      >
        {/* Subtitle */}
        <motion.div
          variants={itemVariants}
          className="text-sm font-medium text-gray-600 mb-4 tracking-wide"
        >
          Get in Touch
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={headingVariants}
          className="text-5xl md:text-6xl font-bold text-center text-[#0f2a4a] mb-6 max-w-4xl"
        >
          Ready to Host Your Next 
          <br/>
          Big Idea?
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-center text-gray-700 text-lg max-w-2xl mb-12"
        >
            Book The Launchpod - Chennai's most versatile, tech-enabled venue. 
            <br/>Let's bring your vision to life in the city's most dynamic event space.
        </motion.p>

        {/* Button Group */}
        <motion.div
          variants={itemVariants}
          className="flex flex-row gap-4 items-center justify-center flex-wrap"
        >
          {/* Primary Button */}
          <motion.div
            whileHover={{ 
              scale: 1.05,
              y: -4,
              transition: {
                duration: 0.3,
                ease: 'easeOut',
              },
            }}
          >
            <KeywordButton
              animationDistance='165px'
              keyword="Request a Quote"
            />
          </motion.div>

          {/* Secondary Button */}
          {/* <motion.button
            whileHover={{ 
              scale: 1.02,
              transition: {
                duration: 0.2,
              },
            }}
            whileTap={{ 
              scale: 0.98,
              transition: {
                duration: 0.2,
              },
            }}
            className="px-8 py-3 rounded-full font-semibold text-[#0f2a4a] border-2 border-[#0f2a4a] hover:bg-[#0f2a4a] hover:text-white transition-colors duration-200"
          >
            Keyword
          </motion.button> */}
        </motion.div>
      </motion.div>
    </section>
  );
}