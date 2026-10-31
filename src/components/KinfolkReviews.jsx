import React, { useState, useEffect } from 'react';
import { ScrollRevealText } from './ScrollRevealText';

// Single Review Placeholder that cycles through its curated set of reviews with staggered fade
function ReviewPlaceholder({ 
  reviews, 
  interval = 4000, 
  initialDelay = 0, 
  layout = 'card-left' // 'card-left' (Review 1 & 3) or 'photo-left' (Review 2)
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    let intervalId;
    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        setIsFading(true);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % reviews.length);
          setIsFading(false);
        }, 600); // 600ms fade transition
      }, interval);
    }, initialDelay);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [reviews.length, interval, initialDelay]);

  const current = reviews[currentIndex];
  const isCardLeft = layout === 'card-left';

  return (
    <div 
      className={`relative flex ${
        isCardLeft 
          ? 'flex-col-reverse lg:flex-row justify-start lg:self-start lg:ml-0 lg:mr-auto' 
          : 'flex-col lg:flex-row justify-end lg:self-end lg:ml-auto lg:mr-0'
      } items-center w-full lg:max-w-4xl`}
    >
      {/* ========================================================
          1. WHITE REVIEW CARD
          ======================================================== */}
      {isCardLeft ? (
        <div 
          className={`relative z-30 w-full max-w-[460px] lg:w-[460px] bg-white text-[#111111] p-7 sm:p-9 shadow-2xl rounded-none border border-white -mt-10 lg:mt-0 lg:-mr-16 transition-all duration-700 ease-in-out ${
            isFading ? 'opacity-0 scale-[0.98] blur-[2px]' : 'opacity-100 scale-100 blur-0'
          }`}
        >
          {/* Amber Quote Icon in Top Right Corner */}
          <div 
            className="absolute -top-4 right-7 sm:right-9 bg-[#C87028] text-white p-3 shadow-lg flex items-center justify-center"
            aria-hidden="true"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
          </div>

          {/* 5-Star Rating */}
          <div className="flex items-center gap-1 mb-4 text-[#C87028]" aria-label="5 out of 5 stars">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            ))}
          </div>

          {/* Testimonial Quote */}
          <blockquote className="text-[#2B2B2B] text-base sm:text-lg italic font-normal leading-relaxed mb-6 font-serif min-h-[90px]">
            "{current.quote}"
          </blockquote>

          {/* Author Metadata */}
          <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
            <div>
              <h4 className="font-serif font-bold text-lg text-black tracking-tight">{current.author}</h4>
              <p className="text-xs text-gray-500 font-mono tracking-wider uppercase mt-0.5">
                {current.role}
              </p>
            </div>
            <span className="px-2.5 py-1 bg-[#F4EFE6] text-[#78350F] text-[11px] font-mono tracking-wider font-semibold uppercase">
              {current.badge || 'Maiden Guest'}
            </span>
          </div>
        </div>
      ) : null}

      {/* ========================================================
          2. RECTANGULAR PHOTO FRAME WITH POP-OUT HEAD EFFECT
          ======================================================== */}
      <div 
        className={`relative w-[320px] sm:w-[380px] lg:w-[420px] h-[460px] sm:h-[500px] shrink-0 transition-all duration-700 ease-in-out ${
          isFading ? 'opacity-0 scale-[0.98]' : 'opacity-100 scale-100'
        }`}
      >
        {/* Base Rectangular Box filled with original photo */}
        <div className="absolute top-[80px] left-0 w-full h-[380px] sm:h-[420px] border-2 border-white/90 overflow-hidden bg-[#151515] shadow-2xl">
          <img 
            src={current.image} 
            className="absolute left-0 w-full max-w-none transition-opacity duration-500"
            style={current.imgStyle || { top: '-120px', height: '560px', objectFit: 'cover', objectPosition: 'center top' }}
            alt={current.author}
            loading="lazy"
          />
        </div>

        {/* Pop-out Cutout Head: sticks out above top white border into continuous black background */}
        {current.headCutout && (
          <img 
            src={current.headCutout} 
            className="absolute left-0 w-full max-w-none pointer-events-none z-20 transition-opacity duration-500"
            style={current.headStyle || { top: '-40px', height: '560px', objectFit: 'cover', objectPosition: 'center top' }}
            alt=""
            aria-hidden="true"
            loading="lazy"
          />
        )}
      </div>

      {/* ========================================================
          3. WHITE REVIEW CARD (For Photo-Left layout)
          ======================================================== */}
      {!isCardLeft ? (
        <div 
          className={`relative z-30 w-full max-w-[460px] lg:w-[460px] bg-white text-[#111111] p-7 sm:p-9 shadow-2xl rounded-none border border-white -mt-10 lg:mt-0 lg:-ml-16 transition-all duration-700 ease-in-out ${
            isFading ? 'opacity-0 scale-[0.98] blur-[2px]' : 'opacity-100 scale-100 blur-0'
          }`}
        >
          {/* Amber Quote Icon in Top Right Corner */}
          <div 
            className="absolute -top-4 right-7 sm:right-9 bg-[#C87028] text-white p-3 shadow-lg flex items-center justify-center"
            aria-hidden="true"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
          </div>

          {/* 5-Star Rating */}
          <div className="flex items-center gap-1 mb-4 text-[#C87028]" aria-label="5 out of 5 stars">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            ))}
          </div>

          {/* Testimonial Quote */}
          <blockquote className="text-[#2B2B2B] text-base sm:text-lg italic font-normal leading-relaxed mb-6 font-serif min-h-[90px]">
            "{current.quote}"
          </blockquote>

          {/* Author Metadata */}
          <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
            <div>
              <h4 className="font-serif font-bold text-lg text-black tracking-tight">{current.author}</h4>
              <p className="text-xs text-gray-500 font-mono tracking-wider uppercase mt-0.5">
                {current.role}
              </p>
            </div>
            <span className="px-2.5 py-1 bg-[#F4EFE6] text-[#78350F] text-[11px] font-mono tracking-wider font-semibold uppercase">
              {current.badge || 'Maiden Guest'}
            </span>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export function KinfolkReviews() {
  // Curated Guest Reviews for Placeholder 1 (Left Aligned)
  const slot1Reviews = [
    {
      id: '1a',
      author: 'Nii Odoi',
      role: 'UK Returnee • Tech Founder',
      quote: 'Walking in alone as a UK returnee was intimidating, but within ten minutes I was holding a mic, laughing with strangers who felt like cousins I had known forever. Kin Social is the heartbeat of diaspora Accra.',
      badge: 'Maiden Guest',
      image: '/assets/guest-review-nii.jpg',
      headCutout: '/assets/guest-review-nii-head.png',
      imgStyle: { top: '-120px', height: '560px', objectFit: 'cover', objectPosition: 'center top' },
      headStyle: { top: '-40px', height: '560px', objectFit: 'cover', objectPosition: 'center top' }
    },
    {
      id: '1b',
      author: 'Nana Kwesi',
      role: 'London to Accra • Craft Distiller',
      quote: 'Bringing my craft spirit brand from London to Accra needed community roots. At Kin Social, I found not just customers, but genuine creative collaborators who believe in contemporary Ghana.',
      badge: 'Maiden Guest',
      image: '/assets/guest-review-artisan-bottle.jpg',
      headCutout: '/assets/guest-review-artisan-bottle-head.png',
      imgStyle: { top: '-70px', height: '560px', objectFit: 'cover', objectPosition: 'center top' },
      headStyle: { top: '10px', height: '560px', objectFit: 'cover', objectPosition: 'center top' }
    },
    {
      id: '1c',
      author: 'Kofi Addo',
      role: 'Expat • Berlin to Osu • Software Engineer',
      quote: 'Best Sunday I have had in Accra all year. Good music, zero pretension, cold drinks, and genuine hospitality. As an expat living in Osu, this is where I feel most at home.',
      badge: 'Maiden Guest',
      image: '/assets/guest-review-thumbsup-guy.jpg',
      headCutout: '/assets/guest-review-thumbsup-guy-head.png',
      imgStyle: { top: '-140px', height: '560px', objectFit: 'cover', objectPosition: 'center top' },
      headStyle: { top: '-60px', height: '560px', objectFit: 'cover', objectPosition: 'center top' }
    }
  ];

  // Curated Guest Reviews for Placeholder 2 (Right Aligned)
  const slot2Reviews = [
    {
      id: '2a',
      author: 'Yhaa Serwaa',
      role: 'Repat • Atlanta, USA • Creative Director',
      quote: 'The energy was pure vibes and zero pretense. Sipping drinks under the trees, playing games, and talking about building our futures in Ghana. Found my genuine sisterhood here.',
      badge: 'Maiden Guest',
      image: '/assets/guest-review-coke-woman.jpg',
      headCutout: '/assets/guest-review-coke-woman-head.png',
      imgStyle: { top: '-150px', height: '590px', objectFit: 'cover', objectPosition: 'center top' },
      headStyle: { top: '-70px', height: '590px', objectFit: 'cover', objectPosition: 'center top' }
    },
    {
      id: '2b',
      author: 'Efua Osei',
      role: 'Diaspora Returnee • NYC • Architect',
      quote: 'The warmth here is unmatched. You step in alone and leave with a group chat of five new friends planning Sunday brunch. It represents everything beautiful about modern Accra.',
      badge: 'Maiden Guest',
      image: '/assets/guest-review-sun-earrings.jpg',
      headCutout: '/assets/guest-review-sun-earrings-head.png',
      imgStyle: { top: '-80px', height: '560px', objectFit: 'cover', objectPosition: 'center top' },
      headStyle: { top: '0px', height: '560px', objectFit: 'cover', objectPosition: 'center top' }
    },
    {
      id: '2c',
      author: 'Marcus Mensah',
      role: 'Returnee • Birmingham, UK • DJ & Producer',
      quote: 'The sound system, the suya, the board games, the highlife rhythms! Kin Social captured the pure essence of Ghanaian family warmth without any of the usual social stiffness.',
      badge: 'Maiden Guest',
      image: '/assets/guest-review-dancing-man.jpg',
      headCutout: '/assets/guest-review-dancing-man-head.png',
      imgStyle: { top: '-100px', height: '560px', objectFit: 'cover', objectPosition: 'center top' },
      headStyle: { top: '-20px', height: '560px', objectFit: 'cover', objectPosition: 'center top' }
    }
  ];

  // Curated Guest Reviews for Placeholder 3 (Left Aligned)
  const slot3Reviews = [
    {
      id: '3a',
      author: 'Akosua Mensah',
      role: 'Diaspora Returnee • Toronto • Brand Strategist',
      quote: 'As someone who recently moved back to Accra, I was worried about finding genuine community outside of work. Kin Social gave me an instant chosen family. Cold cocktails under the sun and conversations that actually fed my soul.',
      badge: 'Maiden Guest',
      image: '/assets/guest-review-cocktail-woman.jpg',
      headCutout: '/assets/guest-review-cocktail-woman-head.png',
      imgStyle: { top: '-100px', height: '560px', objectFit: 'cover', objectPosition: 'center top' },
      headStyle: { top: '-20px', height: '560px', objectFit: 'cover', objectPosition: 'center top' }
    },
    {
      id: '3b',
      author: 'Naa & Dzifa',
      role: 'Returnees • London & DC • Storyhouse GH',
      quote: 'We came together expecting a typical corporate mixer and were blown away by how natural and joyful everyone was. Kin Social has genuinely created chosen family for the diaspora in Accra.',
      badge: 'Maiden Guests',
      image: '/assets/guest-review-ig-frame-women.png',
      headCutout: null, // Full photo sits cleanly inside the frame
      imgStyle: { top: '-60px', height: '560px', objectFit: 'cover', objectPosition: 'center top' },
      headStyle: null
    }
  ];

  return (
    <section 
      id="reviews" 
      className="relative w-full bg-[#0A0A0A] text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Subtle radial ambient glow in brand sand-grey */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-gradient-to-b from-[#EFE8DD]/5 to-transparent blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto">

        {/* Section Header with Scroll Text Reveal Animation */}
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#EFE8DD] animate-pulse" />
            <span className="font-mono text-xs tracking-widest text-[#EFE8DD] uppercase font-medium">
              Kinfolk Experiences
            </span>
          </div>

          <ScrollRevealText
            as="h2"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight"
          >
            What Our Kin Say
          </ScrollRevealText>

          <ScrollRevealText
            as="p"
            className="text-[#A1A1AA] text-sm sm:text-base font-light leading-relaxed max-w-lg mx-auto"
          >
            Unfiltered stories and genuine connections from the maiden community hangout in Accra.
          </ScrollRevealText>
        </div>

        {/* Staggered Zigzag Reviews Container: 3 Placeholders fading every 4s at staggered intervals */}
        <div className="flex flex-col space-y-12 sm:space-y-16 lg:space-y-16">

          {/* Placeholder 1: Left Aligned • Interval 4000ms • Initial Delay 0ms */}
          <ReviewPlaceholder
            reviews={slot1Reviews}
            interval={4000}
            initialDelay={0}
            layout="card-left"
          />

          {/* Placeholder 2: Right Aligned • Interval 4300ms • Initial Delay 1400ms (Staggered) */}
          <ReviewPlaceholder
            reviews={slot2Reviews}
            interval={4300}
            initialDelay={1400}
            layout="photo-left"
          />

          {/* Placeholder 3: Left Aligned • Interval 4600ms • Initial Delay 2800ms (Staggered) */}
          <ReviewPlaceholder
            reviews={slot3Reviews}
            interval={4600}
            initialDelay={2800}
            layout="card-left"
          />

        </div>

      </div>
    </section>
  );
}
