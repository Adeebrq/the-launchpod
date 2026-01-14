'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import bgVideo from "../../assets/bgVideo.mp4"

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
const faqData = [
  {
    id: '1',
    question: 'What is THE LAUNCHPOD, and what professional spaces do we offer on Mount Road, Chennai?',
    answer:
      'THE LAUNCHPOD is a dynamic launch space on Mount Road, designed for founders, teams, and professionals who thrive on momentum. From investor meets to brainstorming sessions, every setup inspires clarity and action. Pick your layout, book your slot, and step into a tech-ready space built for productivity.',
  },
  {
    id: '2',
    question: 'What types of event venues does THE LAUNCHPOD offer on Mount Road, Chennai?',
    answer:
      'THE LAUNCHPOD offers curated spaces including modern conference lounges, seminar corners, launch-friendly demo rooms, and collaborative team hubs, each designed to elevate meetings, connects, and learning sessions.',
  },
  {
    id: '3',
    question: 'How can I book a THE LAUNCHPOD event hall for corporate gatherings or product launches near Mount Road?',
    answer:
      'Secure your space in minutes via our online booking portal, or contact our team for customised options and Mount Road availability.',
  },
  {
    id: '4',
    question: 'What flexible event spaces are available at THE LAUNCHPOD events?',
    answer:
      'Our spaces flex to fit your goals! From tight-knit team huddles to pitch sessions, workshops, and private corporate meets. With room for up to 40 attendees and customizable AV setups, each format adapts smoothly.',
  },
  {
    id: '5',
    question: 'How do I reserve a conference hall, seminar room, or training space at THE LAUNCHPOD?',
    answer:
      'Book your preferred room on our website or connect with our support team to align the setup, timing, and essentials for your event.',
  },
  {
    id: '6',
    question:
      'What makes THE LAUNCHPOD a premier choice for business workshops, industry seminars, and strategic networking events in Mount Road, Chennai?',
    answer:
      'With thoughtful design, seamless coordination, and ready-to-use infrastructure, THE LAUNCHPOD makes workshops sharper and networking more meaningful. A standout choice for impact-driven events on Mount Road.',
  },
];



// Animation variants
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
      ease: [0.22, 1, 0.36, 1] as const
    }
  }
};

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

export default function FAQSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="relative overflow-hidden w-full py-16 px-4 md:px-8">
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

      {/* Full Width Header Section */}
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="w-full mb-16"
      >
        <motion.p 
          variants={fadeInUpVariants}
          className="text-blue-400 text-sm font-medium mb-4 tracking-wide px-4 md:px-8"
        >
          FAQs
        </motion.p>
        
        {/* Heading with Left Separator */}
        <div className="flex gap-4 items-start mb-6 px-4 md:px-8">
          <motion.div 
            variants={fadeInUpVariants}
            className="w-2 h-[120px] max-lg:h-[175px] shrink-0 bg-[rgba(189,216,233,0.59)] rounded-[10px]"
          />
          <motion.h1 
            variants={fadeInUpVariants}
            className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight max-w-4xl"
          >
            We are here to help you with any questions you may have.
          </motion.h1>
        </div>
        
       <motion.p 
  variants={fadeInUpVariants}
  className="text-slate-600 text-lg mb-8 leading-relaxed px-4 md:px-8 max-w-4xl"
>
  If you don't find what you need, please contact us at{' '}
  <a href="mailto:thelaunchpod1@gmail.com" className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-900 transition-colors">
    <span>thelaunchpod1@gmail.com</span>
  </a>
</motion.p>

      </motion.div>

      {/* FAQ Grid */}
      <div className="max-w-7xl mx-auto">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {faqData.map((item) => {
            const isExpanded = expandedId === item.id;

            return (
              <motion.div
                key={item.id}
                variants={fadeInUpVariants}
                className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
                  isExpanded ? 'bg-white' : ''
                }`}
              >
                {/* Video Background - Only show when not expanded */}
                {!isExpanded && (
                  <>
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    >
                      <source src={bgVideo} type="video/mp4" />
                    </video>

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/50" />
                  </>
                )}

                {/* Content */}
                <div className="relative z-10">
                  <motion.button
                    onClick={() => toggleAccordion(item.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full px-6 py-4 text-left font-medium flex items-center justify-between transition-colors duration-300 ${
                      isExpanded
                        ? 'text-black'
                        : 'text-white'
                    }`}
                  >
                    <span className="text-base md:text-lg leading-snug">
                      {item.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5 flex-shrink-0 ml-4" />
                    </motion.div>
                  </motion.button>

                  {/* Answer Content */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ 
                      opacity: isExpanded ? 1 : 0,
                      height: isExpanded ? 'auto' : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-white border-t border-gray-200">
                      <p className="text-black text-sm md:text-base leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}