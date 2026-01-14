"use client";

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { KeywordButton } from '../KeywordButton';
import { toast } from 'sonner';

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

const NEWSLETTER_API_URL = 'https://sheetdb.io/api/v1/b1ppx2isls7lv';

interface GetInTouchSectionProps {
  onBookNowClick?: () => void;
}

export default function GetInTouchSection({ onBookNowClick }: GetInTouchSectionProps) {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  const [isNewsletterSubmitting, setIsNewsletterSubmitting] = useState(false);
  const [newsletterForm, setNewsletterForm] = useState({
    name: '',
    email: ''
  });

  const handleNewsletterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewsletterForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const closeNewsletterModal = () => {
    if (!isNewsletterSubmitting) {
      setIsNewsletterOpen(false);
    }
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!newsletterForm.name || !newsletterForm.email) {
      toast.error('Please fill in both fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newsletterForm.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsNewsletterSubmitting(true);
    try {
      const response = await fetch(NEWSLETTER_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: newsletterForm })
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      await response.json();
      toast.success('Subscribed successfully!');
      setNewsletterForm({ name: '', email: '' });
      setIsNewsletterOpen(false);
    } catch (error) {
      console.error('Newsletter subscription failed', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsNewsletterSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full flex flex-col items-center justify-center px-4 py-0">
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
              keyword="Launch your Idea"
              onClick={onBookNowClick}
            />
          </motion.div>

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
              keyword="Join our Newsletter"
              onClick={() => setIsNewsletterOpen(true)}
              variant="secondary"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {isNewsletterOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3 sm:p-4">
          <div className="bg-white rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-3 flex justify-between items-center">
              <h2 className="text-lg sm:text-xl font-semibold text-[#0B2549]">Newsletter</h2>
              <button
                onClick={closeNewsletterModal}
                disabled={isNewsletterSubmitting}
                className="text-gray-500 hover:text-gray-700 disabled:text-gray-300 text-2xl leading-none transition-colors"
                aria-label="Close newsletter form"
              >
                ×
              </button>
            </div>

            <div className="p-4 sm:p-6">
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#0B2549] mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={newsletterForm.name}
                    onChange={handleNewsletterChange}
                    disabled={isNewsletterSubmitting}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0B2549] mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={newsletterForm.email}
                    onChange={handleNewsletterChange}
                    disabled={isNewsletterSubmitting}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-2 pt-4">
                  <button
                    type="button"
                    onClick={closeNewsletterModal}
                    disabled={isNewsletterSubmitting}
                    className="w-full sm:flex-1 px-4 py-2 border border-gray-300 rounded-md"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={isNewsletterSubmitting}
                    className="w-full sm:flex-1 px-4 py-2 bg-[#001039] text-white rounded-md"
                  >
                    {isNewsletterSubmitting ? 'Submitting...' : 'Subscribe'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}