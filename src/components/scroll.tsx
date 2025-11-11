import React from 'react';
import BgVideo from "../assets/bgVideo.mp4"
import sparkles from "../assets/sparkles.svg"

const bannerItems = [
  'Company Meetups',
  'Product Launch Rooms',
  'Modern Conference Areas',
  'Casual Connects',
  'Workshops',
  'Private Company Meetups',
  'Startup Pitch Sessions',
  'Modern Elegance',
];

const ScrollingBanner: React.FC = () => {
  return (
    <section className="w-full h-16 relative flex items-center overflow-hidden py-8 mt-3">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={BgVideo} type="video/mp4" />
      </video>

      {/* Dark overlay for better text readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50" />

      {/* Scrolling content */}
      <div className="relative z-10 flex items-center animate-scroll font-gloock whitespace-nowrap">
        {bannerItems.map((item, index) => (
          <React.Fragment key={index}>
            <span className="text-white text-2xl mx-4">{item}</span>
            <img 
              src={sparkles} 
              alt="" 
              className="w-6 h-6 mx-4"
            />
          </React.Fragment>
        ))}
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ScrollingBanner;
