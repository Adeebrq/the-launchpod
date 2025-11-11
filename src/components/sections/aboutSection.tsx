import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Zap, MapPin, Sliders } from 'lucide-react';
import { KeywordButton } from '../KeywordButton';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Animation configuration
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
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// Stagger container variant for cascading animations
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

// Animation function with viewport configuration
const animateOnView = (delay = 0) => ({
  initial: "hidden" as const,
  whileInView: "visible" as const,
  viewport: { once: false, margin: "-100px" },
  variants: fadeInUpVariants,
  transition: { delay }
});

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative overflow-hidden px-[50px]">
      {/* Animated Background Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-20 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute top-40 right-32 w-64 h-64 bg-blue-300/20 rounded-full blur-2xl"
      />

      <div className="container mx-auto px-6 py-6">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-10">
          {/* Left Content - Staggered Animation */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <motion.p 
              variants={fadeInUpVariants}
              className="text-blue-300 text-sm font-medium mb-4 tracking-wide"
            >
              About Us
            </motion.p>
            
            {/* Heading with Left Separator */}
            <div className="flex gap-4 items-start mb-6">
              <motion.div 
                variants={fadeInUpVariants}
                className="w-2 h-[120px] shrink-0 bg-[rgba(189,216,233,0.59)] rounded-[10px]"
              />
              <motion.h1 
                variants={fadeInUpVariants}
                className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight"
              >
                Where Innovation Meets Opportunity
              </motion.h1>
            </div>
            
            <motion.p 
              variants={fadeInUpVariants}
              className="text-slate-600 text-lg mb-8 leading-relaxed"
            >
              Designed by Offisbay, The Launchpod redefines how ideas are shared and scaled. 
              With flexible spacing and seating, world-class amenities, and a future-ready ambiance, 
              The Launchpod is your destination for business growth, collaboration, and next-gen networking.
            </motion.p>
            <motion.div variants={fadeInUpVariants}>
              <KeywordButton
                keyword="Experience Now"
            animationDistance='160px'
                className="mb-[33px] max-sm:mb-5"
              />
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            {...animateOnView()}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-200/40 to-transparent rounded-full blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop" 
              alt="Modern Architecture" 
              className="relative rounded-2xl shadow-2xl w-full object-cover"
              style={{ transform: 'translateY(0)' }}
            />
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="grid grid-cols-3 grid-rows-2 gap-8 mb-10 max-w-3xl"
        >
          {/* First Row - Circles only */}
          <motion.div 
            variants={fadeInUpVariants}
            className="flex justify-start items-start col-span-3"
          >
            <div className="flex gap-0">
              {[
                'w-12 h-12 bg-blue-200/70 rounded-full -mr-4',
                'w-12 h-12 bg-slate-700/70 rounded-full -mr-4',
                'w-12 h-12 bg-blue-200/70 rounded-full'
              ].map((className, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeInUpVariants}
                  className={className}
                />
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          {[
            { value: '100', label: 'Corporate Events Hosted' },
            { value: '100', label: 'Industry Collaborations' },
            { value: '100', label: 'Professionals Connected' }
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              variants={fadeInUpVariants}
              className="text-start"
            >
              <h3 className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</h3>
              <p className="text-slate-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Section */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: <Zap className="w-6 h-6 text-slate-700" />,
              title: 'Futuristic Design',
              description: `A state-of-the-art venue with advanced AV technology. Built to host tomorrow's ideas today.`
            },
            {
              icon: <MapPin className="w-6 h-6 text-slate-700" />,
              title: 'Strategic Location',
              description: `Positioned on Mount Road, Chennai's premier business corridor. The Launchpod offers unmatched accessibility for investors, startups, and corporate professionals.`
            },
            {
              icon: <Sliders className="w-6 h-6 text-slate-700" />,
              title: 'Flexible Functionality',
              description: `From intimate investor meetings to scaling events, the space adapts seamlessly to your purpose - offering both sophistication and scalability.`
            }
          ].map((feature, idx) => (
            <motion.div 
              key={idx}
              variants={fadeInUpVariants}
              className="text-center group"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-blue-200 rounded-full mb-6 group-hover:bg-blue-300 transition-colors"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;