import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';


type CardProps = {
  i: number;
  title: string;
  description: string;
  src: string;
  link: string;
  color: string;
  tag: string;
  date: string;
  time: string;
  capacity: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  isMobile?: boolean;
};


export default function Card({ 
  i, 
  title, 
  description, 
  src, 
  link, 
  color, 
  tag,
  date,
  time,
  capacity,
  progress, 
  range, 
  targetScale,
  isMobile = false 
}: CardProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);


  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const cardScale = useTransform(progress, range, [1, targetScale]);


  const handleMoreDetailsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div ref={containerRef} className={isMobile ? "w-full flex items-center justify-center py-4" : "h-screen flex items-center justify-center sticky top-0"}>
      <motion.div
        className="relative w-full sm:w-[1200px] max-w-[92vw] border border-gray-400 h-auto sm:h-[600px] rounded-[25px] p-6 sm:p-[60px] flex flex-col sm:flex-row items-center gap-6 sm:gap-[80px]"
        style={{ 
          backgroundColor: 'white',
          scale: (isMobile ? 1 : (cardScale as unknown as number)) as any,
          top: isMobile ? undefined : `calc(-5vh + ${i * 25}px)` 
        }}
      >
        {/* Left Side - Image with Gradient Overlay */}
        <div className="w-full sm:w-[45%] h-[220px] sm:h-full relative rounded-[20px] overflow-hidden flex-shrink-0">
          <motion.div className="w-full h-full" style={{ scale: imageScale }}>
            <img src={src} alt={title} className="w-full h-full object-cover" />
          </motion.div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/40 rounded-[20px]" />
        </div>


        {/* Right Side - Content */}
        <div className="w-full sm:w-[55%] flex flex-col justify-center gap-[20px] sm:gap-[30px]">
          {/* Tag */}
          {/* <div className="inline-block w-fit">
            <span className="bg-blue-900/40 text-slate-900 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide backdrop-blur-sm border border-blue-600/30">
              {tag}
            </span>
          </div> */}


          {/* Title */}
          <h1 className="text-[28px] sm:text-[28px] font-bold text-black leading-tight m-0">
            {title}
          </h1>


          {/* Description */}
          <p className="text-black text-[15px] sm:text-[16px] leading-relaxed m-0">
            {description}
          </p>


          {/* Info Grid */}
          <div className="grid grid-cols-3 gap-2 sm:gap-[30px] mt-3 sm:mt-[20px]">
            {/* Date */}
            <div className="flex flex-col items-center sm:items-start gap-1 sm:gap-[3px]">
              <div className="w-[34px] h-[34px] sm:w-[40px] sm:h-[40px] rounded-full bg-blue-200/50 backdrop-blur-md flex items-center justify-center hover:bg-blue-300/60 transition-colors border border-blue-400/40">

                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-900 sm:w-[28px] sm:h-[28px]">
                  <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M8 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              {/* <span className="text-black text-md sm:text-sm font-medium">Date</span> */}
              <span className="text-black font-bold text-md  text-center sm:text-left">{date}</span>
            </div>


            {/* Time */}
            <div className="flex flex-col items-center sm:items-start gap-1 sm:gap-[3px]">

              <div className="w-[34px] h-[34px] sm:w-[40px] sm:h-[40px] rounded-full bg-blue-200/50 backdrop-blur-md flex items-center justify-center hover:bg-blue-300/60 transition-colors border border-blue-400/40">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-900 sm:w-[28px] sm:h-[28px]">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 7V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              {/* <span className="text-black text-md sm:text-sm font-medium">Time</span> */}
              <span className="text-black font-bold text-md  text-center sm:text-left">{time}</span>
            </div>


            {/* Capacity */}
            <div className="flex flex-col items-center sm:items-start gap-1 sm:gap-[3px]">

              <div className="w-[34px] h-[34px] sm:w-[40px] sm:h-[40px] rounded-full bg-blue-200/50 backdrop-blur-md flex items-center justify-center hover:bg-blue-300/60 transition-colors border border-blue-400/40">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-900 sm:w-[28px] sm:h-[28px]">
                  <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="2"/>
                  <path d="M2 20C2 20 2 16 8 16C14 16 14 20 14 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="16" cy="8" r="3" stroke="currentColor" strokeWidth="2"/>
                  <path d="M10 20C10 20 10 16 16 16C22 16 22 20 22 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              {/* <span className="text-black text-md sm:text-sm font-medium">Seats</span> */}
              <span className="text-black font-bold text-md  text-center sm:text-left">{capacity}</span>
            </div>
          </div>

          {/* More Details Button */}
          {link && (
            <motion.button
              onClick={handleMoreDetailsClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 sm:mt-6 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#001039] text-white font-semibold rounded-full hover:bg-[#002055] transition-colors duration-200 text-sm sm:text-base self-start"
            >
              Register Now
            </motion.button>
          )}
        </div>
      </motion.div>
    </div>
  );
}
