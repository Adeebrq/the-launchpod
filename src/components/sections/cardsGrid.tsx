'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface CardData {
  id: number;
  imageUrl: string;
  title: string;
  date: string;
  time: string;
  capacity: number;
  description: string;
  tag: string;
}

const EventCardsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsData: CardData[] = [
    {
      id: 1,
      imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
      title: 'Business Network',
      date: 'Nov 15, 2025',
      time: '10:00 AM',
      capacity: 50,
      description: 'Join us for an exclusive networking event connecting professionals across industries. Share ideas, build relationships, and explore collaborative opportunities in a dynamic environment.',
      tag: 'Networking'
    },
    {
      id: 2,
      imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800',
      title: 'Tech Conference',
      date: 'Nov 20, 2025',
      time: '2:00 PM',
      capacity: 100,
      description: 'Discover the latest trends in technology and innovation. Expert speakers, panel discussions, and hands-on workshops designed to elevate your technical expertise and industry knowledge.',
      tag: 'Technology'
    },
    {
      id: 3,
      imageUrl: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800',
      title: 'Startup Meetup',
      date: 'Nov 25, 2025',
      time: '6:00 PM',
      capacity: 30,
      description: 'Connect with fellow entrepreneurs, investors, and innovators. Share your startup journey, gain valuable insights, and find potential co-founders or mentors in this intimate gathering.',
      tag: 'Startup'
    },
    {
      id: 4,
      imageUrl: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800',
      title: 'Design Workshop',
      date: 'Dec 1, 2025',
      time: '11:00 AM',
      capacity: 25,
      description: 'Hands-on design workshop covering UI/UX principles, prototyping techniques, and modern design tools. Perfect for designers looking to refine their craft and learn industry best practices.',
      tag: 'Design'
    },
    {
      id: 5,
      imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800',
      title: 'Marketing Summit',
      date: 'Dec 5, 2025',
      time: '9:00 AM',
      capacity: 75,
      description: 'Comprehensive marketing strategies for the digital age. Learn growth hacking, content marketing, and data-driven approaches from industry leaders who have scaled successful campaigns.',
      tag: 'Marketing'
    },
    {
      id: 6,
      imageUrl: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800',
      title: 'Team Building',
      date: 'Dec 10, 2025',
      time: '3:00 PM',
      capacity: 40,
      description: 'Strengthen your team dynamics through engaging activities and collaborative challenges. Build trust, improve communication, and foster a positive work culture with proven methodologies.',
      tag: 'Team Event'
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? cardsData.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === cardsData.length - 1 ? 0 : prev + 1
    );
  };

  const currentCard = cardsData[currentIndex];

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <div className="h-auto p-4 sm:p-6 md:p-8 flex items-center justify-center">
      <div className="max-w-4xl w-full relative">
        {/* Left Arrow - Outside Left (desktop/tablet only) */}
        <button
          onClick={handlePrev}
          className="hidden sm:flex absolute -left-16 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full items-center justify-center cursor-pointer hover:bg-gray-100 transition shadow-lg z-20 border border-gray-200"
        >
          <ChevronLeft className="w-6 h-6 text-slate-900" />
        </button>

        {/* Card */}
        <motion.div
          key={currentIndex}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="bg-white rounded-lg shadow-lg overflow-hidden w-full border border-gray-200"
        >
          {/* Image Section */}
          <div className="relative h-48 sm:h-56 md:h-64 w-full">
            <img
              src={currentCard.imageUrl}
              alt={currentCard.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 to-transparent" />
          </div>

          {/* Content Section */}
          <div className="p-4 sm:p-5 md:p-6 bg-white">
            {/* Title and Tag */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4">
              <h2 className="text-2xl sm:text-3xl font-light text-gray-900 flex-1">
                {currentCard.title}
              </h2>
              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm whitespace-nowrap self-start font-medium">
                {currentCard.tag}
              </span>
            </div>

            {/* Metadata */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6 mb-4 text-gray-600 text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2"/>
                  <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2"/>
                  <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2"/>
                  <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2"/>
                </svg>
                <span>{currentCard.date}</span>
              </div>

              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                  <polyline points="12 6 12 12 16 14" strokeWidth="2"/>
                </svg>
                <span>{currentCard.time}</span>
              </div>

              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2"/>
                  <circle cx="9" cy="7" r="4" strokeWidth="2"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeWidth="2"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeWidth="2"/>
                </svg>
                <span>{currentCard.capacity}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              {currentCard.description}
            </p>
          </div>
        </motion.div>

        {/* Right Arrow - Outside Right (desktop/tablet only) */}
        <button
          onClick={handleNext}
          className="hidden sm:flex absolute -right-16 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full items-center justify-center cursor-pointer hover:bg-gray-100 transition shadow-lg z-20 border border-gray-200"
        >
          <ChevronRight className="w-6 h-6 text-slate-900" />
        </button>

        {/* Mobile controls below card */}
        <div className="sm:hidden w-full flex justify-center gap-6 mt-6">
          <button
            onClick={handlePrev}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100 transition shadow-lg border border-gray-200"
          >
            <ChevronLeft className="w-6 h-6 text-slate-900" />
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100 transition shadow-lg border border-gray-200"
          >
            <ChevronRight className="w-6 h-6 text-slate-900" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {cardsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentIndex ? 'bg-gray-800 w-6' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventCardsCarousel;
