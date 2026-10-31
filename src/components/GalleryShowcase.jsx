import React, { useState, useEffect, useRef } from 'react';
import { ScrollRevealText } from './ScrollRevealText';

export function GalleryShowcase() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const slides = [
    { id: 1, image: "/assets/community-women-nametags.jpg", alt: "Arrival and Nametags - Kin Social Maiden Edition" },
    { id: 2, image: "/assets/community-ghana-flag.jpg", alt: "Cultural Trivia - Kin Social Maiden Edition" },
    { id: 3, image: "/assets/community-cocktail-woman.jpg", alt: "Golden Hour Cocktails - Kin Social Maiden Edition" },
    { id: 4, image: "/assets/community-table-qr.jpg", alt: "Community Table Gathering - Kin Social Maiden Edition" },
    { id: 5, image: "/assets/community-ig-frame.jpg", alt: "Photobooth Moments - Kin Social Maiden Edition" },
    { id: 6, image: "/assets/community-man-dancing-drink.jpg", alt: "Rhythm and Dance - Kin Social Maiden Edition" },
    { id: 7, image: "/assets/community-friends.jpg", alt: "Chosen Family - Kin Social Maiden Edition" },
    { id: 8, image: "/assets/community-jaush-easel.jpg", alt: "Sip Paint and Soul - Kin Social Maiden Edition" },
    { id: 9, image: "/assets/community-nii-microphone.jpg", alt: "Welcome and Icebreakers - Kin Social Maiden Edition" },
    { id: 10, image: "/assets/community-blonde-braids.jpg", alt: "Returnee Sisterhood - Kin Social Maiden Edition" },
    { id: 11, image: "/assets/community-thumbsup-guy.jpg", alt: "Community Spirit - Kin Social Maiden Edition" },
    { id: 12, image: "/assets/community-ig-founder-song.png", alt: "Founder Vision - Kin Social Maiden Edition" },
    { id: 13, image: "/assets/community-coke-floral-cap.jpg", alt: "Sunday Chill Vibes - Kin Social Maiden Edition" },
    { id: 14, image: "/assets/community-smiling-skirt.jpg", alt: "Conversations and Smiles - Kin Social Maiden Edition" },
    { id: 15, image: "/assets/community-jaush-couple.jpg", alt: "Genuine Connections - Kin Social Maiden Edition" },
    { id: 16, image: "/assets/community-artisan-bottle.jpg", alt: "Local Refreshments - Kin Social Maiden Edition" }
  ];

  // Auto-play slideshow (switches every 3 seconds, pauses on mouse hover)
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isHovered, slides.length]);

  // Touch Swipe Handlers for mobile
  const minSwipeDistance = 45;
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slides.length]);

  // Compute slide position relative to active slide for 3D coverflow
  const getSlideStyle = (index) => {
    const total = slides.length;
    let diff = (index - activeIndex) % total;
    if (diff < -Math.floor(total / 2)) diff += total;
    if (diff > Math.floor(total / 2)) diff -= total;

    const absDiff = Math.abs(diff);

    // Visible window: exactly 5 frames on screen (2 on left, 1 center, 2 on right)
    if (absDiff > 2) {
      return {
        display: 'none',
        opacity: 0,
        pointerEvents: 'none'
      };
    }

    // Responsive horizontal offset percentage
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
    const isTablet = typeof window !== 'undefined' && window.innerWidth < 1024;
    const stepX = isMobile ? 38 : (isTablet ? 46 : 52);
    const translateX = diff * stepX;
    
    // Scale and elevation for 5 distinct layered frames
    const scale = Math.max(0.68, 1 - absDiff * 0.14);
    const zIndex = 30 - absDiff * 5;
    const opacity = absDiff === 0 ? 1 : Math.max(0.42, 0.9 - absDiff * 0.22);
    const brightness = absDiff === 0 ? 1 : Math.max(0.38, 0.76 - absDiff * 0.18);

    return {
      transform: `translateX(${translateX}%) scale(${scale})`,
      zIndex,
      opacity,
      filter: `brightness(${brightness})`,
      transition: 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.65s ease, filter 0.65s ease',
      cursor: diff === 0 ? 'default' : 'pointer'
    };
  };

  return (
    <section
      id="gallery"
      className="relative w-full bg-[#0A0A0A] text-white py-16 sm:py-24 lg:py-32 overflow-hidden selection:bg-[#EFE8DD] selection:text-black"
    >
      {/* Subtle ambient lighting behind carousel */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#EFE8DD]/8 blur-[140px] rounded-full"></div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* =========================================================
            HEADER TITLE AREA
            Removed "A Cinematic Showcase", kept "THE GALLERY" and
            the descriptive text underneath it.
            ========================================================= */}
        <div className="text-center mb-10 sm:mb-16 max-w-2xl mx-auto">
          <ScrollRevealText
            as="p"
            className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.28em] text-[#EFE8DD]/80 uppercase mb-3"
          >
            THE GALLERY
          </ScrollRevealText>

          <ScrollRevealText
            as="p"
            className="text-sm sm:text-base lg:text-lg text-[#A69E93] leading-relaxed font-normal px-4"
          >
            Moments from The Maiden Edition — authentic connections, rooftop laughter, and unforgettable Accra vibes, framed in every moment.
          </ScrollRevealText>
        </div>

        {/* =========================================================
            ENLARGED 3D COVERFLOW SHOWCASE
            Sharp Rectangular Frames (rounded-none), Pure Photos (Zero Text on Images),
            Significantly Bigger Dimensions.
            ========================================================= */}
        <div
          className="relative w-full h-[520px] xs:h-[580px] sm:h-[680px] md:h-[750px] lg:h-[840px] xl:h-[900px] flex items-center justify-center select-none"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {slides.map((slide, idx) => {
            const isCenter = idx === activeIndex;
            return (
              <div
                key={slide.id}
                onClick={() => !isCenter && setActiveIndex(idx)}
                style={getSlideStyle(idx)}
                className="absolute w-[290px] xs:w-[325px] sm:w-[440px] md:w-[500px] lg:w-[580px] xl:w-[650px] h-[450px] xs:h-[500px] sm:h-[620px] md:h-[700px] lg:h-[780px] xl:h-[840px] rounded-none bg-white p-2 sm:p-2.5 lg:p-3 shadow-2xl shadow-black/90 transition-all duration-500 ease-out will-change-transform"
                role="group"
                aria-label={slide.alt}
              >
                {/* Rectangular Photo Container - 100% clean photo, zero text overlays */}
                <div className="relative w-full h-full rounded-none overflow-hidden bg-black">
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-full object-cover object-center pointer-events-none"
                    loading="lazy"
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
