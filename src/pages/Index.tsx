import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
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


const EMAILJS_SERVICE_ID = 'service_tnwc6vs';
const EMAILJS_TEMPLATE_ID = 'template_trnmkfg';
const EMAILJS_PUBLIC_KEY = 'cS0JrvhVB0GMzCjY1';

const Index = () => {
  const [isBookingFormVisible, setIsBookingFormVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const handleBookNowClick = () => {
    setIsBookingFormVisible(true);
    toast.success('Booking form opened!');
  };

  const handleNavigationClick = (section: string) => {
    const sectionId = section.toLowerCase();
    const element = document.getElementById(sectionId);
    
    if (element) {
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

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error('Please fill in all required fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    const phoneRegex = /^[0-9\s\-\+\(\)]+$/;
    if (!phoneRegex.test(formData.phone)) {
      toast.error('Please enter a valid phone number');
      return;
    }

    setIsSubmitting(true);

    try {
      // IMPORTANT: Match your template variables exactly
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message || 'No message provided'
      };

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      if (result.status === 200) {
        toast.success('Booking request submitted successfully!');
        console.log('Email sent successfully:', result);

        setFormData({ name: '', email: '', phone: '', message: '' });
        setIsBookingFormVisible(false);
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      toast.error('Failed to submit booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCloseModal = () => {
    if (!isSubmitting) {
      setIsBookingFormVisible(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        onBookNowClick={handleBookNowClick}
        onNavigationClick={handleNavigationClick}
      />

      <main className="w-full max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-12 py-4 sm:py-6 lg:py-[27px]">
        <div className="flex flex-col justify-center items-center gap-8 sm:gap-12 lg:gap-[65px]">
          <HeroSection onKeywordSearch={handleKeywordSearch} onBookNowClick={handleBookNowClick} />
          <AboutSection onBookNowClick={handleBookNowClick} />
          <ParallaxShowcase />
          <CircularGallerySection />
          <TestimonialSection />
          <FAQSection />
          <GetInTouchSection onBookNowClick={handleBookNowClick} />
          <Footer />
        </div>
      </main>

      {isBookingFormVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3 sm:p-4">
          <div className="bg-white rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-3 flex justify-between items-center">
              <h2 className="text-lg sm:text-xl font-semibold text-[#0B2549]">Book Now</h2>
              <button
                onClick={handleCloseModal}
                disabled={isSubmitting}
                className="text-gray-500 hover:text-gray-700 disabled:text-gray-300 text-2xl leading-none touch-manipulation transition-colors"
                aria-label="Close booking form"
              >
                ×
              </button>
            </div>
            
            <div className="p-4 sm:p-6">
              <form onSubmit={handleFormSubmit} className="space-y-4">
                
                <div>
                  <label className="block text-sm font-medium text-[#0B2549] mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
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
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0B2549] mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0B2549] mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Any additional information..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-2 pt-4">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    disabled={isSubmitting}
                    className="w-full sm:flex-1 px-4 py-2 border border-gray-300 rounded-md"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:flex-1 px-4 py-2 bg-[#001039] text-white rounded-md"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Booking"}
                  </button>
                </div>

              </form>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default Index;
