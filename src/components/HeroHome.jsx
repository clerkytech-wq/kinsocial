import React, { useState } from 'react';
import { Menu, X, ChevronRight, Sparkles } from 'lucide-react';
import { JoinModal } from './JoinModal';
import { HowItWorksModal } from './HowItWorksModal';
import { CrossfadeFrame } from './CrossfadeFrame';
import { ScrollRevealText } from './ScrollRevealText';

export function HeroHome({ onOpenJoin, onOpenHowItWorks, onNavigateEvents }) {
  const [internalJoinOpen, setInternalJoinOpen] = useState(false);
  const [internalHowItWorksOpen, setInternalHowItWorksOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isJoinOpen = internalJoinOpen;
  const isHowItWorksOpen = internalHowItWorksOpen;
  const setIsJoinOpen = (val) => {
    if (val && onOpenJoin) onOpenJoin();
    else setInternalJoinOpen(val);
  };
  const setIsHowItWorksOpen = (val) => {
    if (val && onOpenHowItWorks) onOpenHowItWorks();
    else setInternalHowItWorksOpen(val);
  };

  // 15 100% Unique, Non-Overlapping Photos (3 distinct photos per frame)
  // No image is ever shared between frames, guaranteeing zero duplicates on screen
  const frame1Images = [
    "/assets/community-women-nametags.jpg",
    "/assets/community-cocktail-woman.jpg",
    "/assets/community-nii-microphone.jpg"
  ];

  const frame2Images = [
    "/assets/community-ghana-flag.jpg",
    "/assets/community-thumbsup-guy.jpg",
    "/assets/community-coke-floral-cap.jpg"
  ];

  const frame3Images = [
    "/assets/community-table-qr.jpg",
    "/assets/community-smiling-skirt.jpg",
    "/assets/community-man-dancing-drink.jpg"
  ];

  const frame4Images = [
    "/assets/community-ig-frame.jpg",
    "/assets/community-jaush-easel.jpg",
    "/assets/community-ig-founder-song.png"
  ];

  const frame5Images = [
    "/assets/community-friends.jpg",
    "/assets/community-blonde-braids.jpg",
    "/assets/community-artisan-bottle.jpg"
  ];

  return (
    <div className="w-full bg-white text-[#111111] antialiased selection:bg-black selection:text-white">
      
      {/* =========================================================
          TOP STANDARD NAVBAR
          ========================================================= */}
      <header className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <div className="flex items-center justify-between gap-3 sm:gap-4">
          
          {/* Left: Official Kin Social Logo */}
          <a href="#" className="flex items-center gap-2 group shrink-0">
            <img
              src="/assets/kin-social-logo.png"
              alt="Kin Social Logo"
              className="h-10 sm:h-14 lg:h-20 w-auto object-contain mix-blend-multiply transition-transform group-hover:scale-105"
            />
          </a>

          {/* Center: Sand Navigation Pill */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 bg-[#EFE8DD] border border-[#E3D9CC] rounded-full px-7 lg:px-8 py-3 shadow-xs">
            <button
              onClick={() => setIsHowItWorksOpen(true)}
              className="text-[14px] lg:text-[15px] font-semibold text-[#2D2A26] hover:text-black transition-colors cursor-pointer"
            >
              How it works
            </button>
            <a
              href="#gatherings"
              onClick={(e) => { e.preventDefault(); setIsHowItWorksOpen(true); }}
              className="text-[14px] lg:text-[15px] font-semibold text-[#2D2A26] hover:text-black transition-colors"
            >
              The Family Reunion
            </a>
            <a
              href="#highlights"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('highlights')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-[14px] lg:text-[15px] font-semibold text-[#2D2A26] hover:text-black transition-colors"
            >
              Highlights
            </a>
            <a
              href="#gallery"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-[14px] lg:text-[15px] font-semibold text-[#2D2A26] hover:text-black transition-colors"
            >
              Gallery
            </a>
            <a
              href="#reviews"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-[14px] lg:text-[15px] font-semibold text-[#2D2A26] hover:text-black transition-colors"
            >
              Reviews
            </a>
            <button
              onClick={onNavigateEvents}
              className="text-[14px] lg:text-[15px] font-semibold text-[#2D2A26] hover:text-black transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <span>Events</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C87028] animate-pulse" />
            </button>
            <a
              href="#about"
              onClick={(e) => { e.preventDefault(); setIsHowItWorksOpen(true); }}
              className="text-[14px] lg:text-[15px] font-semibold text-[#2D2A26] hover:text-black transition-colors"
            >
              About Us
            </a>
            <button
              onClick={() => setIsJoinOpen(true)}
              className="text-[14px] lg:text-[15px] font-semibold text-[#2D2A26] hover:text-black transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Right Action: Standard Sized Black CTA Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setIsJoinOpen(true)}
              className="bg-black hover:bg-[#222222] text-white px-4 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-base font-bold shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
            >
              Join the Family
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 sm:p-2.5 rounded-full bg-[#EFE8DD] text-[#2D2A26] hover:text-black transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 sm:p-5 rounded-2xl bg-[#EFE8DD] border border-[#E3D9CC] space-y-2 animate-in fade-in duration-200 shadow-md">
            <button
              onClick={() => { setMobileMenuOpen(false); setIsHowItWorksOpen(true); }}
              className="w-full text-left py-2 px-3 rounded-xl text-sm font-semibold text-[#2D2A26] hover:bg-black/5"
            >
              How it works
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); setIsHowItWorksOpen(true); }}
              className="w-full text-left py-2 px-3 rounded-xl text-sm font-semibold text-[#2D2A26] hover:bg-black/5"
            >
              The Family Reunion
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                document.getElementById('highlights')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full text-left py-2 px-3 rounded-xl text-sm font-semibold text-[#2D2A26] hover:bg-black/5"
            >
              Maiden Highlights
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full text-left py-2 px-3 rounded-xl text-sm font-semibold text-[#2D2A26] hover:bg-black/5"
            >
              Gallery (Maiden Edition)
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full text-left py-2 px-3 rounded-xl text-sm font-semibold text-[#2D2A26] hover:bg-black/5"
            >
              Kinfolk Reviews
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateEvents?.();
              }}
              className="w-full text-left py-2 px-3 rounded-xl text-sm font-bold text-black bg-[#E3D9CC]/50 hover:bg-[#E3D9CC] flex items-center justify-between"
            >
              <span>Upcoming Events</span>
              <span className="w-2 h-2 rounded-full bg-[#C87028] animate-pulse" />
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); setIsHowItWorksOpen(true); }}
              className="w-full text-left py-2 px-3 rounded-xl text-sm font-semibold text-[#2D2A26] hover:bg-black/5"
            >
              About Us
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); setIsJoinOpen(true); }}
              className="w-full text-left py-2 px-3 rounded-xl text-sm font-semibold text-[#2D2A26] hover:bg-black/5"
            >
              Contact
            </button>
          </div>
        )}
      </header>

      {/* =========================================================
          HERO MAIN CONTENT SECTION
          ========================================================= */}
      <main className="w-full max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 pt-4 sm:pt-8 pb-3 sm:pb-5">
        
        {/* Intro Top Heading Area */}
        <section className="relative text-center mb-8 sm:mb-12 lg:mb-16">
          
          {/* Top-Right / Top Floating Pill Badge */}
          <div className="flex justify-center mb-3 sm:mb-4 xl:mb-0 xl:absolute xl:right-0 xl:top-0">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#EFE8DD] border border-[#E3D9CC] rounded-full px-3 sm:px-4 py-1 sm:py-2 text-[11px] sm:text-xs lg:text-sm font-medium text-[#2D2A26] shadow-xs">
              <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-bold">@kinsocialgh</span>
              <span className="text-[#888177]">• Accra, GH 🇬🇭</span>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            
            {/* Overlapping Avatars Pill */}
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-[#EFE8DD]/80 border border-[#E3D9CC] rounded-full px-3 sm:px-4 py-1.5 sm:py-2 shadow-xs max-w-full">
              <div className="flex -space-x-1.5 sm:-space-x-2 overflow-hidden shrink-0">
                <img
                  className="inline-block h-5 w-5 sm:h-7 sm:w-7 rounded-full ring-2 ring-white object-cover"
                  src="/assets/community-women-nametags.jpg"
                  alt="Kin Member"
                />
                <img
                  className="inline-block h-5 w-5 sm:h-7 sm:w-7 rounded-full ring-2 ring-white object-cover"
                  src="/assets/community-cocktail-woman.jpg"
                  alt="Kin Member"
                />
                <img
                  className="inline-block h-5 w-5 sm:h-7 sm:w-7 rounded-full ring-2 ring-white object-cover"
                  src="/assets/community-friends.jpg"
                  alt="Kin Member"
                />
              </div>
              <span className="text-[11px] sm:text-sm font-semibold text-[#5A544D]">
                Hundreds of returnees & expats connected
              </span>
            </div>

            {/* Marcel-Style Scroll-Revealed Headline */}
            <ScrollRevealText
              as="h1"
              className="text-2xl xs:text-3xl sm:text-5xl lg:text-[68px] xl:text-[76px] font-extrabold text-[#111111] tracking-tight leading-[1.08] sm:leading-[1.06] max-w-4xl mx-auto px-2"
              staggerDelay={0.065}
            >
              Come as strangers. One vibe. Leave as family.
            </ScrollRevealText>

            {/* Marcel-Style Scroll-Revealed Subtitle */}
            <ScrollRevealText
              as="p"
              className="text-xs sm:text-base lg:text-xl text-[#5A544D] max-w-2xl mx-auto leading-relaxed font-normal px-2"
              staggerDelay={0.035}
            >
              A community network for people in the diaspora living, building, and thriving in Ghana. Because navigating Accra is better with family.
            </ScrollRevealText>

            {/* CTA Buttons */}
            <div className="pt-2 sm:pt-3 flex items-center justify-center gap-3 sm:gap-5 flex-row">
              <button
                onClick={() => setIsJoinOpen(true)}
                className="bg-black hover:bg-[#222222] text-white px-5 sm:px-9 py-2.5 sm:py-4 rounded-full text-xs sm:text-base font-bold shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
              >
                Join the Family
              </button>

              <button
                onClick={() => setIsHowItWorksOpen(true)}
                className="text-[#111111] hover:text-[#555555] px-2.5 sm:px-4 py-2.5 sm:py-4 text-xs sm:text-base font-semibold flex items-center gap-1 transition-colors cursor-pointer group whitespace-nowrap"
              >
                <span>Learn how it works</span>
                <span className="transition-transform group-hover:translate-x-1 font-bold">›</span>
              </button>
            </div>

          </div>
        </section>

        {/* =========================================================
            5-COLUMN GALLERY: IDENTICAL V-INCLINE LAYOUT ON MOBILE & DESKTOP
            All 5 columns visible simultaneously side-by-side on phones and desktops.
            100% Unique non-overlapping images crossfading smoothly every 2-3s.
            ========================================================= */}
        <section className="mb-10 sm:mb-16 lg:mb-18">
          
          <div className="grid grid-cols-5 items-end gap-1.5 xs:gap-2 sm:gap-3 md:gap-4 lg:gap-4.5 w-full">
            
            {/* ---------------------------------------------------
                COLUMN 1 (Left Tall Pillar: Incline Top Level)
                Pool: {women-nametags, cocktail-woman, nii-microphone}
                Interval: 2600ms | Delay: 0ms
                --------------------------------------------------- */}
            <div className="flex flex-col justify-end gap-1.5 xs:gap-2 sm:gap-2.5 lg:gap-3.5 h-[190px] xs:h-[220px] sm:h-[320px] md:h-[410px] lg:h-[500px]">
              <div className="h-[135px] xs:h-[155px] sm:h-[230px] md:h-[295px] lg:h-[360px] w-full rounded-lg xs:rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden bg-[#EAE2D5] shadow-xs relative">
                <CrossfadeFrame
                  images={frame1Images}
                  interval={2600}
                  initialDelay={0}
                  alt="Kin Social Community Hangout"
                  className="object-top"
                />
              </div>
              <div className="h-[48px] xs:h-[58px] sm:h-[80px] md:h-[105px] lg:h-[126px] bg-[#2EB85C] rounded-lg xs:rounded-xl sm:rounded-2xl lg:rounded-3xl p-1 xs:p-1.5 sm:p-3 lg:p-5 text-white flex items-center justify-center shadow-xs text-center">
                <ScrollRevealText
                  as="p"
                  className="text-[6.5px] xs:text-[7.5px] sm:text-[11px] md:text-sm lg:text-base font-bold leading-[1.12] sm:leading-snug"
                  staggerDelay={0.04}
                >
                  Be part of a growing community connecting diaspora returnees in Ghana.
                </ScrollRevealText>
              </div>
            </div>

            {/* ---------------------------------------------------
                COLUMN 2 (Second Column: Incline Step Down)
                Pool: {ghana-flag, thumbsup-guy, coke-floral-cap}
                Interval: 3100ms | Delay: 700ms
                --------------------------------------------------- */}
            <div className="h-[135px] xs:h-[155px] sm:h-[225px] md:h-[290px] lg:h-[350px] w-full rounded-lg xs:rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden bg-[#EAE2D5] shadow-xs relative">
              <CrossfadeFrame
                images={frame2Images}
                interval={3100}
                initialDelay={700}
                alt="How Ghanaian Are You - Kin Social"
                className="object-center"
              />
            </div>

            {/* ---------------------------------------------------
                COLUMN 3 (Center Column: Lowest Incline Dip, Below Buttons)
                Pool: {table-qr, smiling-skirt, man-dancing-drink}
                Interval: 2800ms | Delay: 1400ms
                --------------------------------------------------- */}
            <div className="h-[105px] xs:h-[120px] sm:h-[175px] md:h-[225px] lg:h-[270px] w-full rounded-lg xs:rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden bg-[#EAE2D5] shadow-xs relative">
              <CrossfadeFrame
                images={frame3Images}
                interval={2800}
                initialDelay={1400}
                alt="Kin Social Community Table Gathering"
                className="object-top"
              />
            </div>

            {/* ---------------------------------------------------
                COLUMN 4 (Fourth Column: Incline Step Up)
                Pool: {ig-frame, jaush-easel, ig-founder-song}
                Interval: 3300ms | Delay: 2100ms
                --------------------------------------------------- */}
            <div className="h-[135px] xs:h-[155px] sm:h-[225px] md:h-[290px] lg:h-[350px] w-full rounded-lg xs:rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden bg-[#EAE2D5] shadow-xs relative group">
              <CrossfadeFrame
                images={frame4Images}
                interval={3300}
                initialDelay={2100}
                alt="Instagram Kin Social Gathering Frame"
                className="object-center"
              />
              {/* Dark overlay text with scroll reveal */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex items-end p-1 xs:p-1.5 sm:p-3 lg:p-5 z-20 pointer-events-none">
                <ScrollRevealText
                  as="p"
                  className="text-white text-[6.5px] xs:text-[7.5px] sm:text-[11px] md:text-sm lg:text-base font-bold leading-[1.12] sm:leading-snug"
                  staggerDelay={0.04}
                >
                  Together, we can turn strangers into family.
                </ScrollRevealText>
              </div>
            </div>

            {/* ---------------------------------------------------
                COLUMN 5 (Right Tall Pillar: Incline Top Level)
                Pool: {friends, blonde-braids, artisan-bottle}
                Interval: 2900ms | Delay: 1050ms
                --------------------------------------------------- */}
            <div className="flex flex-col justify-end gap-1.5 xs:gap-2 sm:gap-2.5 lg:gap-3.5 h-[190px] xs:h-[220px] sm:h-[320px] md:h-[410px] lg:h-[500px]">
              <div className="h-[135px] xs:h-[155px] sm:h-[230px] md:h-[295px] lg:h-[360px] w-full rounded-lg xs:rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden bg-[#EAE2D5] shadow-xs relative">
                <CrossfadeFrame
                  images={frame5Images}
                  interval={2900}
                  initialDelay={1050}
                  alt="Friends at Kin Social Ghana"
                  className="object-top"
                />
              </div>
              <div className="h-[48px] xs:h-[58px] sm:h-[80px] md:h-[105px] lg:h-[126px] bg-[#2EB85C] rounded-lg xs:rounded-xl sm:rounded-2xl lg:rounded-3xl p-1 xs:p-1.5 sm:p-3 lg:p-5 text-white flex items-center justify-center shadow-xs text-center">
                <ScrollRevealText
                  as="p"
                  className="text-[6.5px] xs:text-[7.5px] sm:text-[11px] md:text-sm lg:text-base font-bold leading-[1.12] sm:leading-snug"
                  staggerDelay={0.04}
                >
                  Together, we turn strangers into family.
                </ScrollRevealText>
              </div>
            </div>

          </div>

        </section>

        {/* =========================================================
            BOTTOM SUMMARY PARAGRAPH
            ========================================================= */}
        <section className="text-center pt-2 sm:pt-4 pb-1 sm:pb-2">
          <ScrollRevealText
            as="p"
            className="text-sm sm:text-lg lg:text-[19px] text-[#555048] max-w-3xl mx-auto leading-relaxed font-normal px-2"
            staggerDelay={0.02}
          >
            Kin Social is an Accra-based community network that connects diaspora returnees, expats, and locals intentional about living, building, and thriving in Ghana. Instead of navigating the city alone, members connect through curated mixers like The Family Reunion, co-working days, and authentic social gatherings.
          </ScrollRevealText>

          <div className="mt-3 sm:mt-4 flex items-center justify-center gap-2 sm:gap-2.5 text-xs sm:text-base text-[#8A8276]">
            <span>Official community handle:</span>
            <a
              href="https://instagram.com/kinsocialgh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#111111] font-bold hover:underline inline-flex items-center gap-1"
            >
              @kinsocialgh ➔
            </a>
          </div>
        </section>

      </main>

      {/* Join the Family Modal */}
      <JoinModal
        isOpen={isJoinOpen}
        onClose={() => setIsJoinOpen(false)}
      />

      {/* How it Works Modal */}
      <HowItWorksModal
        isOpen={isHowItWorksOpen}
        onClose={() => setIsHowItWorksOpen(false)}
        onOpenJoin={() => setIsJoinOpen(true)}
      />

    </div>
  );
}
