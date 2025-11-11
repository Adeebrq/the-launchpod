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
    answer: 'THE LAUNCHPOD sits along Mount Road in Chennai, offering fresh spots for events or company meetups. Whether you need room to brainstorm, space to host investors, or a place that just works  this spot’s built with startups and pros in mind. Swapping rigid setups for adaptable layouts, it keeps things moving without hassle. Pick your vibe, lock in the date, tech included  no extra steps.',
  },
  {
    id: '2',
    question: 'What types of event venues does THE LAUNCHPOD offer on Mount Road, Chennai?',
    answer: 'THE LAUNCHPOD offers a variety of work-friendly spaces near Mount Road, Chennai  including modern conference areas, compact seminar zones, product launch rooms, creative team hangouts, and flexible setups suited for company meetups, casual connects, or skill-building sessions.',
  },
  {
    id: '3',
    question: 'How can I book a THE LAUNCHPOD event hall for corporate gatherings or product launches near Mount Road?',
    answer: 'You can grab a slot at THE LAUNCHPOD event space quickly using the booking tool on our site, or contact our team directly for custom options and availability near Mount Road in Chennai.',
  },
  {
    id: '4',
    question: 'What flexible event spaces are available at THE LAUNCHPOD events?',
    answer: 'THE LAUNCHPOD setup shifts easily for small events such as close-knit team huddles, startup pitch sessions, private company meetups, and workshops. It fits up to 40 people, with adaptable seating and customizable tech setups to match your needs.',
  },
  {
    id: '5',
    question: 'How do I reserve a conference hall, seminar room, or training space at THE LAUNCHPOD?',
    answer: 'To book a meeting area, workshop spot, or talk room, head to our website or reach out directly to our support team to discuss timing, requirements, and plans that fit your event.',
  },
  {
    id: '6',
    question: 'What makes THE LAUNCHPOD a premier choice for business workshops, industry seminars, and strategic networking events in Mount Road, Chennai?',
    answer: 'THE LAUNCHPOD stands out on Mount Road with ready-to-use spaces for every business need. Smart setups and smooth planning make it ideal for training sessions, meetups, and corporate gatherings. From start to finish, services align seamlessly, helping events happen without fuss.',
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
          FAQ's
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
  <a href="mailto:info@launchpod.com" className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-900 transition-colors">
    <span>info@launchpod.com</span>
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