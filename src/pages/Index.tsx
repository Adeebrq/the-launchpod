import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '../components/sections/HeroSection';
import AboutSection from '../components/sections/aboutSection';
import CircularGallery from '../components/CircularGallery'
import { toast } from 'sonner';
import ParallaxShowcase from '@/components/parallax/ParallaxShowcase';
import CircularGallerySection from '@/components/sections/pastEvents';
import TestimonialSection from '@/components/sections/testimonials';
import FAQSection from '@/components/sections/faq';
import GetInTouchSection from '@/components/sections/ctaSection';
import Footer from '@/components/sections/footer';
import EventCardsCarousel from '@/components/sections/cardsGrid';

const Index = () => {
  const [isBookingFormVisible, setIsBookingFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleBookNowClick = () => {
    setIsBookingFormVisible(true);
    toast.success('Booking form opened!');
  };

  const handleNavigationClick = (section: string) => {
    const sectionId = section.toLowerCase();
    const element = document.getElementById(sectionId);
    
    if (element) {
      // Use scrollIntoView with smooth behavior
      // CSS scroll-margin-top handles the header offset
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      console.warn(`Section with id "${sectionId}" not found`);
      toast.info(`Navigating to ${section}`);
    }
  };

  const handleKeywordSearch = (keyword: string) => {
    toast.info(`Searching for: ${keyword}`);
    console.log(`Keyword search: ${keyword}`);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error('Please fill in all required fields');
      return;
    }

    toast.success('Booking request submitted successfully!');
    console.log('Form submitted:', formData);
    
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsBookingFormVisible(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <main className="flex w-full max-w-[1440px] flex-col justify-center items-center gap-8 sm:gap-12 lg:gap-[65px] min-h-screen bg-white mx-auto px-3 sm:px-6 lg:px-12 py-4 sm:py-6 lg:py-[27px]">
      <Header 
        onBookNowClick={handleBookNowClick}
        onNavigationClick={handleNavigationClick}
      />
      <EventCardsCarousel/>
      <HeroSection onKeywordSearch={handleKeywordSearch} />
      <AboutSection />
      <ParallaxShowcase/>
      <CircularGallerySection/>
      <TestimonialSection/>
      <FAQSection/>
      <GetInTouchSection/>
      <Footer/>
      

      {/* Booking Form Modal - Mobile Optimized */}
      {isBookingFormVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3 sm:p-4">
          <div className="bg-white rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-3 flex justify-between items-center">
              <h2 className="text-lg sm:text-xl font-semibold text-[#0B2549]">Book Now</h2>
              <button
                onClick={() => setIsBookingFormVisible(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl leading-none touch-manipulation"
                aria-label="Close booking form"
              >
                ×
              </button>
            </div>
            
            <div className="p-4 sm:p-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#0B2549] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#001039] focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#0B2549] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#001039] focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#0B2549] mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#001039] focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#0B2549] mb-1">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#001039] focus:border-transparent resize-none"
                    placeholder="Any additional information..."
                  />
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsBookingFormVisible(false)}
                    className="w-full sm:flex-1 px-4 py-2.5 text-base font-medium border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 active:bg-gray-100 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    onClick={handleFormSubmit}
                    className="w-full sm:flex-1 px-4 py-2.5 text-base font-medium bg-[#001039] text-white rounded-md hover:bg-[#002055] active:bg-[#000820] transition-colors duration-200"
                  >
                    Submit Booking
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Index;