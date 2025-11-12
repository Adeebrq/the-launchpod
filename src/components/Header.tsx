import React, { useState, useRef, useEffect } from 'react';
import { ContactButton } from './ContactButton';
import GlassSurface from './GlassSurface';

interface HeaderProps {
  onBookNowClick?: () => void;
  onNavigationClick?: (section: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onBookNowClick,
  onNavigationClick
}) => {
  const [activeNav, setActiveNav] = useState<string>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLHeaderElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  const handleNavClick = (section: string) => {
    setActiveNav(section);
    onNavigationClick?.(section);
    setMobileMenuOpen(false);
  };

  const handleBookNow = () => {
    onBookNowClick?.();
    setMobileMenuOpen(false);
  };

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [mobileMenuOpen]);

  return (
    <header ref={headerRef} className="w-full sticky top-0 z-50">
      {/* GlassSurface Background */}
      <div className="absolute inset-0 -z-10">
        <GlassSurface
          width="100%"
          height="100%"
          borderRadius={0}
          displace={3}
          distortionScale={-120}
          redOffset={3}
          greenOffset={10}
          blueOffset={18}
          brightness={50}
          opacity={0.9}
          mixBlendMode="normal"
          className="rounded-b-2xl"
          saturation={0.5}
          blur={30}
        >
          <div className="w-full h-full bg-gradient-to-br from-blue-50/40 via-sky-50/30 to-cyan-50/20" />
        </GlassSurface>
      </div>

      {/* Main header container */}
      <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 py-3 md:py-4 max-w-full mx-auto">
        <div className="flex items-center justify-between gap-4 md:gap-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  "<svg width=\"140\" height=\"36\" viewBox=\"0 0 176 45\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"logo\" style=\"width: clamp(120px, 25vw, 176px); height: auto; flex-shrink: 0\"> <g clip-path=\"url(#clip0_642_4794)\"> <path d=\"M57.9961 3.32725H65.588V18.5192H68.8924V3.32725H76.4832V0.0253906H57.9961V3.32725Z\" fill=\"#001039\"></path> <path d=\"M93.3491 6.71008H81.4472V0H78.1406V18.4917H81.4472V10.0109H93.3491V18.4917H96.6535V0H93.3491V6.71008Z\" fill=\"#001039\"></path> <path d=\"M99.5176 4.992V13.4986C99.5176 16.246 101.739 18.4906 104.489 18.4906H118.003V15.1887H104.489C103.564 15.1887 102.796 14.4216 102.796 13.4975V10.0098H114.698V6.70793H102.796V4.99093C102.796 4.06688 103.564 3.29971 104.489 3.29971H118.003V0H104.489C101.739 0 99.5176 2.24565 99.5176 4.992Z\" fill=\"#001039\"></path> <path d=\"M3.30545 39.4264V26.5059H0V39.1084C0 40.0324 0.210826 40.9049 0.607739 41.6978C1.16492 42.8593 2.11687 43.8113 3.27856 44.3926C4.07239 44.7891 4.94473 44.9997 5.87086 44.9997H15.2591V41.6978L5.55462 41.672C4.3897 41.5119 3.46465 40.5879 3.30438 39.4264H3.30545Z\" fill=\"#001039\"></path> <path d=\"M25.8493 26.4795L18.0993 41.6715L16.4062 44.9733H21.9964H23.6679H24.0713V41.2814H22.2384C22.1577 41.2814 22.0889 41.247 22.0437 41.1944C21.9727 41.117 21.9501 40.9978 22.0071 40.8925L24.9157 35.5728L24.9275 35.548L25.6159 34.2898C25.7149 34.1083 25.9784 34.1083 26.0774 34.2898L26.8206 35.649L26.8249 35.6555L29.6861 40.8925C29.7432 40.9978 29.7206 41.1149 29.6496 41.1922C29.6055 41.247 29.5366 41.2814 29.4549 41.2814H27.622V44.9733H28.0254H29.6969H31.5847H35.2881L33.595 41.6715L25.8472 26.4795H25.8493Z\" fill=\"#001039\"></path> <path d=\"M50.0668 35.7264C50.0668 39.0035 47.396 41.6715 44.1153 41.6715C40.8346 41.6715 38.1659 39.0035 38.1659 35.7264V26.4795H34.8594V35.7264C34.8594 40.8259 39.0124 44.9733 44.1164 44.9733C49.2203 44.9733 53.3734 40.8259 53.3734 35.7264V26.4795H50.0679V35.7264H50.0668Z\" fill=\"#001039\"></path> <path d=\"M71.353 38.2632L59.4511 29.0958L56.1445 26.5612V45.0002H59.4511V33.297L71.353 42.4634L74.6574 45.0002V26.5064L71.353 26.4795V38.2632Z\" fill=\"#001039\"></path> <path d=\"M76.8477 35.7263C76.8477 40.8258 80.9996 44.9732 86.1046 44.9732H95.3595V41.6714H86.1046C82.8239 41.6714 80.1531 39.0035 80.1531 35.7263C80.1531 32.4492 82.8239 29.7834 86.1046 29.7834H95.3595V26.4805H86.1046C80.9996 26.4805 76.8477 30.629 76.8477 35.7274V35.7263Z\" fill=\"#001039\"></path> <path d=\"M112.997 33.1917H101.095V26.4795H97.7891V44.9733H101.095V36.4936H112.997V44.9733H116.303V26.4795H112.997V33.1917Z\" fill=\"#001039\"></path> <path d=\"M134.428 27.9343C133.528 27.0361 132.285 26.4795 130.91 26.4795H119.246V44.9733H122.553V36.4667H131.413V36.4409H131.571C132.073 36.3883 132.549 36.2572 132.998 36.0444C134.717 35.2515 135.908 33.5076 135.908 31.5005C135.908 30.1273 135.353 28.8852 134.454 27.987L134.428 27.9343ZM131.624 33.0327V33.0585C131.413 33.1659 131.174 33.2186 130.937 33.2186H122.554V29.8104H130.937C131.518 29.8104 131.915 30.0758 132.126 30.2853C132.312 30.469 132.63 30.8924 132.63 31.5016C132.63 32.1613 132.233 32.7695 131.624 33.0327Z\" fill=\"#001039\"></path> <path d=\"M146.234 26.4795C141.131 26.4795 136.977 30.628 136.977 35.7264C136.977 40.8248 141.13 44.9733 146.234 44.9733C151.337 44.9733 155.491 40.8259 155.491 35.7264C155.491 30.627 151.339 26.4795 146.234 26.4795ZM146.234 41.6715C142.955 41.6715 140.284 39.0035 140.284 35.7264C140.284 32.4493 142.955 29.7835 146.234 29.7835C149.512 29.7835 152.185 32.4514 152.185 35.7264C152.185 39.0014 149.514 41.6715 146.234 41.6715Z\" fill=\"#001039\"></path> <path d=\"M166.743 26.5063L166.769 26.4805H157.512V44.9743H166.769C169.308 44.9743 171.609 43.945 173.275 42.2537C173.459 42.07 173.646 41.883 173.803 41.6993C175.178 40.0865 175.999 37.9999 175.999 35.7274C175.999 30.6301 171.847 26.5073 166.742 26.5073L166.743 26.5063ZM166.743 41.6982H160.794V29.8092H166.743C170.024 29.8092 172.694 32.4771 172.694 35.7521C172.694 39.0271 170.024 41.6972 166.743 41.6972V41.6982Z\" fill=\"#001039\"></path> </g> <defs> <clipPath id=\"clip0_642_4794\"> <rect width=\"176\" height=\"45\" fill=\"white\"></rect> </clipPath> </defs> </svg>",
              }}
            />
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-6 lg:gap-12 flex-1 justify-center relative z-10"
            role="navigation"
            aria-label="Main navigation"
          >
            <button
              onClick={() => handleNavClick('about')}
              className={`text-sm lg:text-base font-normal transition-all  hover:text-gray-300 duration-200 whitespace-nowrap ${
                activeNav === 'about'
                  ? 'text-[#001039] font-semibold'
                  : 'text-[#181B1E] hover:text-[#001039]'
              }`}
              aria-current={activeNav === 'about' ? 'page' : undefined}
            >
              About Us
            </button>
            <button
              onClick={() => handleNavClick('events')}
              className={`text-sm lg:text-base font-normal transition-all duration-200  hover:text-gray-300 whitespace-nowrap ${
                activeNav === 'events'
                  ? 'text-[#001039] font-semibold'
                  : 'text-[#181B1E] hover:text-[#001039]'
              }`}
              aria-current={activeNav === 'events' ? 'page' : undefined}
            >
              Events
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`text-sm lg:text-base font-normal hover:text-gray-300 transition-all duration-200 whitespace-nowrap ${
                activeNav === 'contact'
                  ? 'text-[#001039] font-semibold'
                  : 'text-[#181B1E] hover:text-[#001039]'
              }`}
              aria-current={activeNav === 'contact' ? 'page' : undefined}
            >
              Contact Us
            </button>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center relative z-10">
            <ContactButton onClick={handleBookNow}>
              <div className="flex w-5 h-5 justify-center items-center shrink-0">
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <g clip-path=\"url(#clip0_642_4839)\"> <mask id=\"mask0_642_4839\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"20\" height=\"20\"> <path d=\"M20 0H0V20H20V0Z\" fill=\"white\"></path> </mask> <g mask=\"url(#mask0_642_4839)\"> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M10.7905 0.0773031C10.4318 0.296014 10.4165 0.81203 10.7621 1.03843C10.8181 1.07515 11.087 1.15562 11.3596 1.21726C13.2244 1.63882 14.7178 2.44148 16.0678 3.74769C17.4509 5.08578 18.4546 6.923 18.7896 8.72984C18.8559 9.08726 18.9168 9.22636 19.0596 9.34652C19.3402 9.58265 19.7624 9.48879 19.9243 9.15426L20.0097 8.97793L19.9244 8.54984C19.5046 6.44265 18.5108 4.58254 16.9856 3.0491C15.477 1.53234 13.6821 0.546522 11.6081 0.0955843C11.073 -0.0207438 10.9556 -0.023361 10.7905 0.0773031ZM3.59363 1.17441C3.34679 1.20429 3.05058 1.31132 2.78327 1.46726C2.57488 1.58879 1.32538 2.80023 0.853078 3.33859C0.481281 3.76242 0.229641 4.22797 0.110617 4.71218C0.00194542 5.15441 -0.00641396 6.03922 0.0927657 6.60093C0.693156 10.0014 3.62066 14.2556 7.20691 16.9391C8.72402 18.0743 10.5307 19.0571 12.0003 19.5465C12.9861 19.8748 13.5617 19.978 14.3944 19.9758C14.961 19.9744 15.0523 19.9642 15.371 19.8673C15.763 19.7481 16.1353 19.5581 16.4192 19.3322C16.523 19.2496 17.0093 18.7692 17.4996 18.2647C18.2954 17.4461 18.408 17.314 18.5468 17.0367C18.8471 16.4367 18.8527 15.9037 18.5648 15.3119C18.4317 15.038 18.3266 14.9229 16.9553 13.5487C15.5794 12.1701 15.4699 12.0697 15.1952 11.9363C14.6371 11.6653 14.0966 11.6671 13.5475 11.9418C13.3201 12.0556 13.1255 12.2201 12.4239 12.8914L11.5755 13.7034L11.1617 13.4776C9.44245 12.5392 7.34659 10.4253 6.42452 8.69957L6.25378 8.38L7.00714 7.61742C8.00816 6.60422 8.18816 6.32211 8.23171 5.6982C8.25738 5.3307 8.1996 5.06773 8.01378 4.7064C7.89503 4.4755 7.72406 4.28132 6.91503 3.45859C5.08113 1.59355 4.83835 1.38277 4.35534 1.23586C4.10831 1.16074 3.86722 1.14129 3.59363 1.17441ZM3.49148 2.40152C3.34972 2.47218 3.0539 2.74371 2.41691 3.38785C1.23839 4.57957 1.19023 4.66996 1.193 5.68297C1.19452 6.22535 1.20909 6.36914 1.30323 6.77078C1.68355 8.39285 2.67777 10.372 3.96511 12.0697C5.9264 14.6562 8.16288 16.5207 10.8788 17.8337C12.1818 18.4635 13.1843 18.773 14.1605 18.8467C14.6429 18.8831 14.9873 18.8224 15.371 18.6333C15.6599 18.491 15.75 18.4121 16.5646 17.589C17.1621 16.9852 17.4734 16.6412 17.5314 16.5202C17.6319 16.311 17.6412 16.0705 17.5567 15.8673C17.4817 15.687 14.8931 13.0764 14.6792 12.9653C14.5043 12.8745 14.2673 12.8686 14.072 12.9502C13.9804 12.9885 13.6066 13.3297 13.0474 13.8855C11.8275 15.0978 11.8014 15.107 10.9071 14.643C9.73906 14.0369 8.71867 13.2556 7.61679 12.1235C6.5423 11.0196 5.79464 10.0252 5.33589 9.09007C5.07027 8.54863 5.01777 8.33734 5.08171 8.0675C5.12554 7.88269 5.18695 7.81113 6.07226 6.91343C6.84718 6.12765 7.02441 5.92761 7.06265 5.79562C7.19054 5.35422 7.15671 5.30629 5.65171 3.79683C4.29741 2.43859 4.13308 2.30406 3.828 2.30406C3.7505 2.30406 3.59906 2.34793 3.49148 2.40152ZM10.6813 3.66965C10.6372 3.68754 10.5449 3.76613 10.4762 3.84429C10.3689 3.96656 10.3514 4.01593 10.3514 4.19695C10.3514 4.36703 10.3711 4.43078 10.4537 4.52902C10.588 4.68863 10.6979 4.7407 11.0741 4.82312C12.078 5.04304 12.9576 5.5307 13.7131 6.28617C14.4876 7.06078 14.9423 7.90816 15.2116 9.07922C15.2996 9.46195 15.4949 9.64797 15.8085 9.64765C16.0896 9.64738 16.3666 9.3823 16.3669 9.11324C16.3671 8.91875 16.2601 8.45765 16.1116 8.0141C15.3944 5.87062 13.5857 4.22629 11.3753 3.70808C11.0337 3.628 10.8142 3.61586 10.6813 3.66965Z\" fill=\"white\"></path> </g> </g> <defs> <clipPath id=\"clip0_642_4839\"> <rect width=\"20\" height=\"20\" fill=\"white\"></rect> </clipPath> </defs> </svg>",
                  }}
                />
              </div>
              <span className="text-white text-sm lg:text-base font-normal capitalize whitespace-nowrap">
                Book Now
              </span>
            </ContactButton>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <button
            ref={hamburgerRef}
            onClick={toggleMenu}
            className="md:hidden relative z-20 p-2 text-[#001039] hover:bg-white/10 rounded-lg transition-all"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            <div className="w-6 h-5 flex flex-col justify-between gap-1">
              <span
                className={`h-0.5 w-full bg-[#001039] transition-all duration-300 transform origin-center ${
                  mobileMenuOpen ? 'rotate-45 translate-y-[11px]' : ''
                }`}
              ></span>
              <span
                className={`h-0.5 w-full bg-[#001039] transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              ></span>
              <span
                className={`h-0.5 w-full bg-[#001039] transition-all duration-300 transform origin-center ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-[11px]' : ''
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav
            className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-white/30 mt-2 rounded-b-lg animate-in fade-in slide-in-from-top-2 duration-300"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-0 p-4 sm:p-6">
              <button
                onClick={() => handleNavClick('about')}
                className={`px-4 py-3 text-left text-base font-normal rounded-lg transition-all duration-200 ${
                  activeNav === 'about'
                    ? 'bg-blue-50 text-[#001039] font-semibold'
                    : 'text-[#181B1E] hover:bg-blue-50 hover:text-[#001039]'
                }`}
              >
                About Us
              </button>
              <button
                onClick={() => handleNavClick('events')}
                className={`px-4 py-3 text-left text-base font-normal rounded-lg transition-all duration-200 ${
                  activeNav === 'events'
                    ? 'bg-blue-50 text-[#001039] font-semibold'
                    : 'text-[#181B1E] hover:bg-blue-50 hover:text-[#001039]'
                }`}
              >
                Events
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className={`px-4 py-3 text-left text-base font-normal rounded-lg transition-all duration-200 ${
                  activeNav === 'contact'
                    ? 'bg-blue-50 text-[#001039] font-semibold'
                    : 'text-[#181B1E] hover:bg-blue-50 hover:text-[#001039]'
                }`}
              >
                Contact Us
              </button>

              {/* Mobile CTA Button */}
              <div className="px-4 py-3 mt-2 border-t border-white/20">
                <ContactButton onClick={handleBookNow} className="w-full justify-center">
                  <div className="flex w-5 h-5 justify-center items-center shrink-0">
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <g clip-path=\"url(#clip0_642_4839)\"> <mask id=\"mask0_642_4839\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"20\" height=\"20\"> <path d=\"M20 0H0V20H20V0Z\" fill=\"white\"></path> </mask> <g mask=\"url(#mask0_642_4839)\"> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M10.7905 0.0773031C10.4318 0.296014 10.4165 0.81203 10.7621 1.03843C10.8181 1.07515 11.087 1.15562 11.3596 1.21726C13.2244 1.63882 14.7178 2.44148 16.0678 3.74769C17.4509 5.08578 18.4546 6.923 18.7896 8.72984C18.8559 9.08726 18.9168 9.22636 19.0596 9.34652C19.3402 9.58265 19.7624 9.48879 19.9243 9.15426L20.0097 8.97793L19.9244 8.54984C19.5046 6.44265 18.5108 4.58254 16.9856 3.0491C15.477 1.53234 13.6821 0.546522 11.6081 0.0955843C11.073 -0.0207438 10.9556 -0.023361 10.7905 0.0773031ZM3.59363 1.17441C3.34679 1.20429 3.05058 1.31132 2.78327 1.46726C2.57488 1.58879 1.32538 2.80023 0.853078 3.33859C0.481281 3.76242 0.229641 4.22797 0.110617 4.71218C0.00194542 5.15441 -0.00641396 6.03922 0.0927657 6.60093C0.693156 10.0014 3.62066 14.2556 7.20691 16.9391C8.72402 18.0743 10.5307 19.0571 12.0003 19.5465C12.9861 19.8748 13.5617 19.978 14.3944 19.9758C14.961 19.9744 15.0523 19.9642 15.371 19.8673C15.763 19.7481 16.1353 19.5581 16.4192 19.3322C16.523 19.2496 17.0093 18.7692 17.4996 18.2647C18.2954 17.4461 18.408 17.314 18.5468 17.0367C18.8471 16.4367 18.8527 15.9037 18.5648 15.3119C18.4317 15.038 18.3266 14.9229 16.9553 13.5487C15.5794 12.1701 15.4699 12.0697 15.1952 11.9363C14.6371 11.6653 14.0966 11.6671 13.5475 11.9418C13.3201 12.0556 13.1255 12.2201 12.4239 12.8914L11.5755 13.7034L11.1617 13.4776C9.44245 12.5392 7.34659 10.4253 6.42452 8.69957L6.25378 8.38L7.00714 7.61742C8.00816 6.60422 8.18816 6.32211 8.23171 5.6982C8.25738 5.3307 8.1996 5.06773 8.01378 4.7064C7.89503 4.4755 7.72406 4.28132 6.91503 3.45859C5.08113 1.59355 4.83835 1.38277 4.35534 1.23586C4.10831 1.16074 3.86722 1.14129 3.59363 1.17441ZM3.49148 2.40152C3.34972 2.47218 3.0539 2.74371 2.41691 3.38785C1.23839 4.57957 1.19023 4.66996 1.193 5.68297C1.19452 6.22535 1.20909 6.36914 1.30323 6.77078C1.68355 8.39285 2.67777 10.372 3.96511 12.0697C5.9264 14.6562 8.16288 16.5207 10.8788 17.8337C12.1818 18.4635 13.1843 18.773 14.1605 18.8467C14.6429 18.8831 14.9873 18.8224 15.371 18.6333C15.6599 18.491 15.75 18.4121 16.5646 17.589C17.1621 16.9852 17.4734 16.6412 17.5314 16.5202C17.6319 16.311 17.6412 16.0705 17.5567 15.8673C17.4817 15.687 14.8931 13.0764 14.6792 12.9653C14.5043 12.8745 14.2673 12.8686 14.072 12.9502C13.9804 12.9885 13.6066 13.3297 13.0474 13.8855C11.8275 15.0978 11.8014 15.107 10.9071 14.643C9.73906 14.0369 8.71867 13.2556 7.61679 12.1235C6.5423 11.0196 5.79464 10.0252 5.33589 9.09007C5.07027 8.54863 5.01777 8.33734 5.08171 8.0675C5.12554 7.88269 5.18695 7.81113 6.07226 6.91343C6.84718 6.12765 7.02441 5.92761 7.06265 5.79562C7.19054 5.35422 7.15671 5.30629 5.65171 3.79683C4.29741 2.43859 4.13308 2.30406 3.828 2.30406C3.7505 2.30406 3.59906 2.34793 3.49148 2.40152ZM10.6813 3.66965C10.6372 3.68754 10.5449 3.76613 10.4762 3.84429C10.3689 3.96656 10.3514 4.01593 10.3514 4.19695C10.3514 4.36703 10.3711 4.43078 10.4537 4.52902C10.588 4.68863 10.6979 4.7407 11.0741 4.82312C12.078 5.04304 12.9576 5.5307 13.7131 6.28617C14.4876 7.06078 14.9423 7.90816 15.2116 9.07922C15.2996 9.46195 15.4949 9.64797 15.8085 9.64765C16.0896 9.64738 16.3666 9.3823 16.3669 9.11324C16.3671 8.91875 16.2601 8.45765 16.1116 8.0141C15.3944 5.87062 13.5857 4.22629 11.3753 3.70808C11.0337 3.628 10.8142 3.61586 10.6813 3.66965Z\" fill=\"white\"></path> </g> </g> <defs> <clipPath id=\"clip0_642_4839\"> <rect width=\"20\" height=\"20\" fill=\"white\"></rect> </clipPath> </defs> </svg>",
                      }}
                    />
                  </div>
                  <span className="text-white text-base font-normal capitalize whitespace-nowrap">
                    Book Now
                  </span>
                </ContactButton>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
