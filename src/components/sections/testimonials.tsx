'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, User } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import BgVideo from "../../assets/bgVideo.mp4";

interface Testimonial {
  id: number;
  text: string;
  name: string;
  role?: string;
  avatar: string;
}

const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  // Detect mobile once on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 640);
    }
  }, []);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "The Launchpod completely redefined what hosting an event feels like. Our audience was hooked through and through.",
      name: "Deepika Rajagopalan",
      avatar: "https://via.placeholder.com/48",
    },
    {
      id: 2,
      text: "From the lighting to the layout! It was an experience.",
      name: "Yousuf",
      avatar: "https://via.placeholder.com/48",
    },
    {
      id: 3,
      text: "We wanted to break away from the typical conference vibe, and The Launchpod delivered. Our event felt alive and original.",
      name: "Dinesh Kumar",
      avatar: "https://via.placeholder.com/48",
    },
    {
      id: 4,
      text: "The space pulls you in! It's interactive, unexpected, and full of energy. I left with new ideas and new connections.",
      name: "Sarah Sheriff",
      avatar: "https://via.placeholder.com/48",
    },
    {
      id: 5,
      text: "Hosting at The Launchpod set a new standard for us. It’s where ideas launch — literally and creatively.",
      name: "Gugapriya O",
      avatar: "https://via.placeholder.com/48",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <div
      id="testimonials"
      className="relative w-full rounded-3xl p-6 sm:p-12 overflow-hidden sm:overflow-visible px-4 sm:px-[50px]"
      ref={ref}
    >
      {/* Desktop/Tablet → Video Background */}
      {!isMobile && (
        <>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover rounded-3xl"
          >
            <source src={BgVideo} type="video/mp4" />
          </video>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40 rounded-3xl pointer-events-none"></div>
        </>
      )}

      {/* Mobile → Pure Black Background */}
      {isMobile && (
        <div className="absolute inset-0 bg-black rounded-3xl"></div>
      )}

      <div className="relative z-10 flex flex-col sm:flex-row gap-8 sm:gap-12 items-start sm:items-start">
        {/* Left Section */}
        <motion.div
          className="flex-1"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8"
          >
            What People Say About The Launchpod
          </motion.h2>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="flex-1 w-full flex items-center gap-4 sm:gap-11 mt-6 sm:mt-0"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Left Arrow (Desktop) */}
          <button
            onClick={handlePrev}
            className="hidden sm:flex w-10 h-10 bg-white rounded-full items-center justify-center hover:bg-gray-200 transition z-20"
          >
            <ChevronLeft className="w-5 h-5 text-slate-900" />
          </button>

          {/* Testimonial Card */}
          <div className="flex-1 flex flex-col items-stretch">
            <motion.div
              key={currentIndex}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="w-full h-auto sm:h-64 bg-white rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col"
            >
              <motion.p
                variants={itemVariants}
                className="text-gray-800 text-base leading-relaxed mb-6 sm:mb-8 flex-1 overflow-hidden"
              >
                "{current.text}"
              </motion.p>

              <motion.div variants={itemVariants} className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-300 rounded-full flex items-center justify-center">
                  <User size={20} className="text-gray-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{current.name}</p>
                  <p className="text-gray-500 text-xs sm:text-sm">{current.role}</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Mobile Arrows */}
            <div className="sm:hidden w-full flex justify-center gap-6 mt-4">
              <button
                onClick={handlePrev}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition"
              >
                <ChevronLeft className="w-5 h-5 text-slate-900" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition"
              >
                <ChevronRight className="w-5 h-5 text-slate-900" />
              </button>
            </div>
          </div>

          {/* Right Arrow (Desktop) */}
          <button
            onClick={handleNext}
            className="hidden sm:flex w-10 h-10 bg-white rounded-full items-center justify-center hover:bg-gray-200 transition z-20"
          >
            <ChevronRight className="w-5 h-5 text-slate-900" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialSection;
