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
  const [isEventModalVisible, setIsEventModalVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    message: ''
  });

  // useEffect(() => {
  //   emailjs.init(EMAILJS_PUBLIC_KEY);
    
  //   // Show event modal on page load after a short delay
  //   const timer = setTimeout(() => {
  //     setIsEventModalVisible(true);
  //   }, 1000);

  //   return () => clearTimeout(timer);
  // }, []);

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
    
    if (!formData.name || !formData.email || !formData.phone || !formData.eventType) {
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
        eventType: formData.eventType,
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

        setFormData({ name: '', email: '', phone: '', eventType: '', message: '' });
        setIsBookingFormVisible(false);
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      toast.error('Failed to submit booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
          {/* <ParallaxShowcase /> */}
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
                    Event Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-[#0B2549]"
                  >
                    <option value="">Select an event type</option>
                    <option value="Company Meetup">Company Meetup</option>
                    <option value="Workshops">Workshop</option>
                    <option value="Investors Meetups">Investors Meetup</option>
                    <option value="Startup Mixers">Startup Mixer</option>
                    <option value="Product Launch">Product Launch</option>
                    <option value="Product Demos">Product Demo</option>
                    <option value="Startup Pitch Sessions">Startup Pitch Session</option>
                    <option value="Other">Other</option>
                  </select>
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

      {/* Upcoming Events Modal */}
      {isEventModalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-3 sm:p-4">
          <div className="bg-white rounded-[25px] w-full max-w-[95vw] sm:max-w-[1200px] max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center rounded-t-[25px] z-10">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B2549]">🎉 Upcoming Eventx</h2>
              <button
                onClick={() => setIsEventModalVisible(false)}
                className="text-gray-500 hover:text-gray-700 text-3xl leading-none touch-manipulation transition-colors"
                aria-label="Close events modal"
              >
                ×
              </button>
            </div>
            
            <div className="p-4 sm:p-8 space-y-6">
              {/* Event Card */}
              <div className="relative w-full border border-gray-400 rounded-[25px] p-4 sm:p-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-[60px] bg-white">
                {/* Left Side - Image */}
                <div className="w-full sm:w-[45%] h-[200px] sm:h-[400px] relative rounded-[20px] overflow-hidden flex-shrink-0">
                  <img 
                    src="/event1.jpeg" 
                    alt="Startup to Scaleup Series" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/40 rounded-[20px]" />
                </div>

                {/* Right Side - Content */}
                <div className="w-full sm:w-[55%] flex flex-col justify-center gap-4 sm:gap-6">
                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-black leading-tight">
                    Startup to Scaleup Series: Financial Readiness
                  </h3>

                  {/* Description */}
                  <p className="text-black text-sm sm:text-base leading-relaxed">
                    Learn how to structure your business, value it realistically, and build investor trust. This session covers financial structuring, realistic valuation strategies, and managing investor expectations.
                  </p>

                  {/* Info Grid */}
                  <div className="grid grid-cols-3 gap-3 sm:gap-6">
                    {/* Date */}
                    <div className="flex flex-col items-center sm:items-start gap-1">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-200/50 backdrop-blur-md flex items-center justify-center hover:bg-blue-300/60 transition-colors border border-blue-400/40">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-900">
                          <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                          <path d="M16 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M8 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </div>
                      {/* <span className="text-black text-xs font-medium">Date</span> */}
                      <span className="text-black font-bold text-xs text-center sm:text-left">13th Dec 2025</span>
                    </div>

                    {/* Time */}
                    <div className="flex flex-col items-center sm:items-start gap-1">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-200/50 backdrop-blur-md flex items-center justify-center hover:bg-blue-300/60 transition-colors border border-blue-400/40">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-900">
                          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                          <path d="M12 7V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </div>
                      {/* <span className="text-black text-xs font-medium">Time</span> */}
                      <span className="text-black font-bold text-xs text-center sm:text-left">10 AM – 1 PM</span>
                    </div>

                    {/* Capacity */}
                    <div className="flex flex-col items-center sm:items-start gap-1">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-200/50 backdrop-blur-md flex items-center justify-center hover:bg-blue-300/60 transition-colors border border-blue-400/40">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-900">
                          <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="2"/>
                          <path d="M2 20C2 20 2 16 8 16C14 16 14 20 14 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          <circle cx="16" cy="8" r="3" stroke="currentColor" strokeWidth="2"/>
                          <path d="M10 20C10 20 10 16 16 16C22 16 22 20 22 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </div>
                      {/* <span className="text-black text-xs font-medium">Seats</span> */}
                      <span className="text-black font-bold text-xs text-center sm:text-left">30 Builders</span>
                    </div>
                  </div>

                  {/* Register Button */}
                  <button
                    onClick={() => {
                      window.open('https://pages.razorpay.com/thelaunchpod', '_blank', 'noopener,noreferrer');
                    }}
                    className="mt-2 w-full sm:w-auto px-6 sm:px-8 py-3 bg-[#001039] text-white font-semibold rounded-full hover:bg-[#002055] transition-colors duration-200 text-sm sm:text-base"
                  >
                    Register Now
                  </button>
                </div>
              </div>

              {/* Close Button at Bottom */}
              <div className="flex justify-center pt-2">
                <button
                  onClick={() => setIsEventModalVisible(false)}
                  className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition-colors duration-200"
                >
                  Maybe Later
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Index;