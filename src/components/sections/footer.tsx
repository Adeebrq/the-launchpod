import React from 'react';
import { Instagram, Facebook, Youtube, Phone, Mail, MapPin } from 'lucide-react';
import BgVideo from "../../assets/bgVideo.mp4"

// Scroll navigation helper function
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

const Footer = () => {
  return (
    <footer className="relative rounded-3xl bg-black w-full text-white overflow-hidden">
      {/* Background Video */}
      <video 
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        autoPlay 
        muted 
        loop
        playsInline
      >
        <source src={BgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Animated mesh/network background overlay */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(100, 200, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(100, 200, 255, 0.1) 0%, transparent 50%)
          `,
        }}
      >
        <svg 
          className="w-full h-full"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23444" fill-opacity="0.15"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Main Footer Grid */}
 <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-gray-700">
          
          {/* Brand Section */}
          <div className="md:col-span-1">
          <div
  dangerouslySetInnerHTML={{
    __html: "<svg width=\"176\" height=\"45\" viewBox=\"0 0 176 45\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"logo\" style=\"width: 176px; height: 45px; flex-shrink: 0\"> <g clip-path=\"url(#clip0_642_4794)\"> <path d=\"M57.9961 3.32725H65.588V18.5192H68.8924V3.32725H76.4832V0.0253906H57.9961V3.32725Z\" fill=\"#ffffff\"></path> <path d=\"M93.3491 6.71008H81.4472V0H78.1406V18.4917H81.4472V10.0109H93.3491V18.4917H96.6535V0H93.3491V6.71008Z\" fill=\"#ffffff\"></path> <path d=\"M99.5176 4.992V13.4986C99.5176 16.246 101.739 18.4906 104.489 18.4906H118.003V15.1887H104.489C103.564 15.1887 102.796 14.4216 102.796 13.4975V10.0098H114.698V6.70793H102.796V4.99093C102.796 4.06688 103.564 3.29971 104.489 3.29971H118.003V0H104.489C101.739 0 99.5176 2.24565 99.5176 4.992Z\" fill=\"#ffffff\"></path> <path d=\"M3.30545 39.4264V26.5059H0V39.1084C0 40.0324 0.210826 40.9049 0.607739 41.6978C1.16492 42.8593 2.11687 43.8113 3.27856 44.3926C4.07239 44.7891 4.94473 44.9997 5.87086 44.9997H15.2591V41.6978L5.55462 41.672C4.3897 41.5119 3.46465 40.5879 3.30438 39.4264H3.30545Z\" fill=\"#ffffff\"></path> <path d=\"M25.8493 26.4795L18.0993 41.6715L16.4062 44.9733H21.9964H23.6679H24.0713V41.2814H22.2384C22.1577 41.2814 22.0889 41.247 22.0437 41.1944C21.9727 41.117 21.9501 40.9978 22.0071 40.8925L24.9157 35.5728L24.9275 35.548L25.6159 34.2898C25.7149 34.1083 25.9784 34.1083 26.0774 34.2898L26.8206 35.649L26.8249 35.6555L29.6861 40.8925C29.7432 40.9978 29.7206 41.1149 29.6496 41.1922C29.6055 41.247 29.5366 41.2814 29.4549 41.2814H27.622V44.9733H28.0254H29.6969H31.5847H35.2881L33.595 41.6715L25.8472 26.4795H25.8493Z\" fill=\"#ffffff\"></path> <path d=\"M50.0668 35.7264C50.0668 39.0035 47.396 41.6715 44.1153 41.6715C40.8346 41.6715 38.1659 39.0035 38.1659 35.7264V26.4795H34.8594V35.7264C34.8594 40.8259 39.0124 44.9733 44.1164 44.9733C49.2203 44.9733 53.3734 40.8259 53.3734 35.7264V26.4795H50.0679V35.7264H50.0668Z\" fill=\"#ffffff\"></path> <path d=\"M71.353 38.2632L59.4511 29.0958L56.1445 26.5612V45.0002H59.4511V33.297L71.353 42.4634L74.6574 45.0002V26.5064L71.353 26.4795V38.2632Z\" fill=\"#ffffff\"></path> <path d=\"M76.8477 35.7263C76.8477 40.8258 80.9996 44.9732 86.1046 44.9732H95.3595V41.6714H86.1046C82.8239 41.6714 80.1531 39.0035 80.1531 35.7263C80.1531 32.4492 82.8239 29.7834 86.1046 29.7834H95.3595V26.4805H86.1046C80.9996 26.4805 76.8477 30.629 76.8477 35.7274V35.7263Z\" fill=\"#ffffff\"></path> <path d=\"M112.997 33.1917H101.095V26.4795H97.7891V44.9733H101.095V36.4936H112.997V44.9733H116.303V26.4795H112.997V33.1917Z\" fill=\"#ffffff\"></path> <path d=\"M134.428 27.9343C133.528 27.0361 132.285 26.4795 130.91 26.4795H119.246V44.9733H122.553V36.4667H131.413V36.4409H131.571C132.073 36.3883 132.549 36.2572 132.998 36.0444C134.717 35.2515 135.908 33.5076 135.908 31.5005C135.908 30.1273 135.353 28.8852 134.454 27.987L134.428 27.9343ZM131.624 33.0327V33.0585C131.413 33.1659 131.174 33.2186 130.937 33.2186H122.554V29.8104H130.937C131.518 29.8104 131.915 30.0758 132.126 30.2853C132.312 30.469 132.63 30.8924 132.63 31.5016C132.63 32.1613 132.233 32.7695 131.624 33.0327Z\" fill=\"#ffffff\"></path> <path d=\"M146.234 26.4795C141.131 26.4795 136.977 30.628 136.977 35.7264C136.977 40.8248 141.13 44.9733 146.234 44.9733C151.337 44.9733 155.491 40.8259 155.491 35.7264C155.491 30.627 151.339 26.4795 146.234 26.4795ZM146.234 41.6715C142.955 41.6715 140.284 39.0035 140.284 35.7264C140.284 32.4493 142.955 29.7835 146.234 29.7835C149.512 29.7835 152.185 32.4514 152.185 35.7264C152.185 39.0014 149.514 41.6715 146.234 41.6715Z\" fill=\"#ffffff\"></path> <path d=\"M166.743 26.5063L166.769 26.4805H157.512V44.9743H166.769C169.308 44.9743 171.609 43.945 173.275 42.2537C173.459 42.07 173.646 41.883 173.803 41.6993C175.178 40.0865 175.999 37.9999 175.999 35.7274C175.999 30.6301 171.847 26.5073 166.742 26.5073L166.743 26.5063ZM166.743 41.6982H160.794V29.8092H166.743C170.024 29.8092 172.694 32.4771 172.694 35.7521C172.694 39.0271 170.024 41.6972 166.743 41.6972V41.6982Z\" fill=\"#ffffff\"></path> </g> <defs> <clipPath id=\"clip0_642_4794\"> <rect width=\"176\" height=\"45\" fill=\"white\"></rect> </clipPath> </defs> </svg>",
  }}
/>

            <p className="text-gray-400 text-sm leading-relaxed mb-6 mt-4">
              The Launchpod Where Ideas Take Off
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href="#" 
                className="border border-white rounded-full p-2 hover:bg-white hover:text-black transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="border border-white rounded-full p-2 hover:bg-white hover:text-black transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="border border-white rounded-full p-2 hover:bg-white hover:text-black transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 uppercase tracking-wide">Quick Links</h3>
            <nav className="space-y-3">
              <button 
                onClick={() => scrollToSection('events')}
                className="text-gray-400 hover:text-white transition-colors block text-left w-full"
              >
                Upcoming Events
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-400 hover:text-white transition-colors block text-left w-full"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('past-events')}
                className="text-gray-400 hover:text-white transition-colors block text-left w-full"
              >
                Past Events
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-400 hover:text-white transition-colors block text-left w-full"
              >
                Testimonials
              </button>
            </nav>
          </div>

          {/* Our Services */}
          {/* <div>
            <h3 className="text-lg font-semibold mb-6 uppercase tracking-wide">Our Services</h3>
            <nav className="space-y-3">
              <a  className="text-gray-400 hover:text-white transition-colors block">Corporate Events</a>
              <a  className="text-gray-400 hover:text-white transition-colors block">Conferences</a>
              <a  className="text-gray-400 hover:text-white transition-colors block">Workshops</a>
              <a  className="text-gray-400 hover:text-white transition-colors block">Product Launches</a>
              <a  className="text-gray-400 hover:text-white transition-colors block">Networking Events</a>
              <a  className="text-gray-400 hover:text-white transition-colors block">Webinars</a>
            </nav>
          </div> */}

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-6 uppercase tracking-wide">Contact Us</h3>
            <div className="space-y-4">
              <a href="tel:9087654321" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <Phone size={20} />
                <span>+91 9363049029
                  <br/>
                  +91 7708086301</span>
              </a>
              <a href="mailto:info@launchpod.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
                <span>info@launchpod.com</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span className="text-sm">#191, 3rd Floor, Hamid Building, Whites Road, Anna Salai, Chennai – 600006.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-sm text-gray-500">
          <div>© 2025 The Launchpod. All rights reserved.</div>
          <div className="text-center">
            Designed and Developed by{' '}
            <a 
              href="https://cruxcreations.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors underline"
            >
              @Cruxcreations
            </a>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors underline">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors underline">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors underline">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
