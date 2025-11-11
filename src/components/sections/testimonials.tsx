'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import BgVideo from "../../assets/bgVideo.mp4"

interface Testimonial {
  id: number;
  text: string;
  name: string;
  role: string;
  avatar: string;
}

const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

const testimonials = [
  {
    id: 1,
    text: "The Launchpod completely redefined what hosting an event feels like. Our audience was hooked through and through.",
    name: "Deepika Rajagopalan",
    role: "Vice President of Data Science & AI, Ideassion Technology Solutions",
    avatar: "https://via.placeholder.com/48",
  },
  {
    id: 2,
    text: "From the lighting to the layout! It was an experience.",
    name: "Yousuf",
    role: "AI & Cybersecurity",
    avatar: "https://via.placeholder.com/48",
  },
  {
    id: 3,
    text: "We wanted to break away from the typical conference vibe, and The Launchpod delivered. Our event felt alive and original.",
    name: "Dinesh Kumar",
    role: "Head of Creatives, Crux Creations",
    avatar: "https://via.placeholder.com/48",
  },
  {
    id: 4,
    text: "The space pulls you in! It's interactive, unexpected, and full of energy. I left with new ideas and new connections.",
    name: "Sarah Sheriff",
    role: "Meet & Greet: Healthcare meets Healthtech",
    avatar: "https://via.placeholder.com/48",
  },
  {
    id: 5,
    text: "Hosting at The Launchpod set a new standard for us. It’s where ideas launch — literally and creatively.",
    name: "Gugapriya O",
    role: "Managing Director, IITT",
    avatar: "https://via.placeholder.com/48",
  },
];


  const stats = [
    { number: '100', label: 'Lorem ipsum' },
    { number: '100', label: 'Lorem ipsum' },
    { number: '100', label: 'Lorem ipsum' },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const current = testimonials[currentIndex];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div id="testimonials" className="relative w-full rounded-3xl p-6 sm:p-12 overflow-hidden sm:overflow-visible px-4 sm:px-[50px]" ref={ref}>
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover rounded-3xl"
      >
        <source src={BgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40 rounded-3xl pointer-events-none"></div>

      <div className="relative z-10 flex flex-col sm:flex-row gap-8 sm:gap-12 items-stretch sm:items-end">
        {/* Left Section */}
        <motion.div
          className="flex-1"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.p variants={itemVariants} className="text-gray-400 text-sm mb-4">
            Testimonials
          </motion.p>
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8">
            What Our Clients Say
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-300 text-base sm:text-lg mb-8 sm:mb-12 max-w-md">
            Don't just take our word for it — hear from event organizers who've
            experienced the difference
          </motion.p>

          {/* Stats */}
          <motion.div variants={containerVariants} className="flex gap-6 sm:gap-8 flex-wrap">
            {stats.map((stat, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <p className="text-3xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">
                  {stat.number}
                </p>
                <p className="text-gray-400 text-xs sm:text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Section - Card with Arrows Outside */}
        <motion.div
          className="flex-1 w-full relative flex flex-col items-stretch sm:items-end sm:mr-4 mt-6 sm:mt-0"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Left Arrow - Outside Left (desktop/tablet only) */}
          <button
            onClick={handlePrev}
            className="hidden sm:flex absolute -left-11 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full items-center justify-center cursor-pointer hover:bg-gray-200 transition z-20"
          >
            <ChevronLeft className="w-5 h-5 text-slate-900" />
          </button>

          {/* Testimonial Card */}
          <motion.div
            key={currentIndex}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="w-full h-auto sm:h-64 bg-white rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col"
          >
            {/* Testimonial Quote - Fixed height scroll if needed */}
            <motion.p
              variants={itemVariants}
              className="text-gray-800 text-base leading-relaxed mb-6 sm:mb-8 flex-1 overflow-hidden"
            >
              "{current.text}"
            </motion.p>

            {/* Avatar and Info - Fixed at bottom */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-300 rounded-full flex-shrink-0 flex items-center justify-center">
                <span className="text-gray-500 text-xs">Avatar</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">{current.name}</p>
                <p className="text-gray-500 text-xs sm:text-sm">{current.role}</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Arrow - Outside Right (desktop/tablet only) */}
          <button
            onClick={handleNext}
            className="hidden sm:flex absolute -right-11 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full items-center justify-center cursor-pointer hover:bg-gray-200 transition z-20"
          >
            <ChevronRight className="w-5 h-5 text-slate-900" />
          </button>

          {/* Mobile controls below card */}
          <div className="sm:hidden w-full flex justify-center gap-6 mt-4">
            <button
              onClick={handlePrev}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition"
            >
              <ChevronLeft className="w-5 h-5 text-slate-900" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition"
            >
              <ChevronRight className="w-5 h-5 text-slate-900" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialSection;
