import React, { useRef } from 'react';
import { useScroll } from 'framer-motion';
import Card from './Card';
import { projects } from './data';
import bgVideo from "../../assets/bgVideo.mp4"

export default function ParallaxShowcase() {
  const containerRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <main id="events" ref={containerRef as any} className="min-h-[100vh] w-full justify-center items-center py-[5vh] px-4 sm:px-[50px] scrollbar-hide">
      <div className='p-4 sm:p-10 pb-0'>
        <p className="bg-gradient-to-r from-gray-600 to-gray-900 bg-clip-text text-transparent py-2">
          Upcoming events
        </p>
        <h3 className="bg-gradient-to-r from-gray-600 to-black bg-clip-text text-transparent py-2 text-3xl sm:text-5xl">
          What's Happening at The Launchpod
        </h3>
        <p className="bg-gradient-to-r from-gray-600 to-black bg-clip-text text-transparent py-2">
          Explore upcoming networking events, and industry crossovers. 
          Connect with innovators, investors, <br/> and industry leaders shaping the future of Chennai's ecosystem.
        </p>
      </div>

      {/* Desktop/Tablet: Parallax with sticky video */}
      <div className='relative rounded-3xl w-full hidden sm:block '>
        <div className='sticky top-[5vh] h-[800px] rounded-3xl w-full overflow-hidden z-0'>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={bgVideo} type="video/mp4" />
          </video>
        </div>

        <div className="relative -mt-[800px] z-10 text-white">
          {projects.map((project, i) => {
            const targetScale = 1 - ((projects.length - i) * 0.05);
            return (
              <Card
                key={`p_${i}`}
                i={i}
                {...project}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </div>
      </div>

      {/* Mobile: simple vertical list, no sticky/parallax/video */}
      <div className='sm:hidden w-full space-y-4'>
        {projects.map((project, i) => (
          <Card
            key={`m_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[0, 1]}
            targetScale={1}
            isMobile
          />
        ))}
      </div>
    </main>
  );
}