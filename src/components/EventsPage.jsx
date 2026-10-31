import React, { useState } from 'react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  MapPin, 
  ChevronLeft, 
  ChevronRight, 
  ArrowUpRight, 
  Check, 
  X, 
  Menu, 
  Sparkles,
  Ticket,
  Scissors
} from 'lucide-react';
import { ScrollRevealText } from './ScrollRevealText';
import { Footer } from './Footer';

export function EventsPage({ 
  onNavigateHome, 
  onOpenJoin, 
  onOpenHowItWorks 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState('NOV');
  const [selectedEventModal, setSelectedEventModal] = useState(null);
  const [rsvpSuccess, setRsvpSuccess] = useState(false);
  const [ticketQuantity, setTicketQuantity] = useState(1);
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestPhone, setGuestPhone] = useState('');

  // 6 Curated Events (2nd, 4th, 6th will have grey brand placeholder color #EFE8DD)
  const events = [
    {
      id: 1,
      month: 'NOV',
      day: '15',
      year: '2026',
      time: '6:00 PM',
      endTime: '11:30 PM',
      category: 'THE FAMILY REUNION • EDITION II',
      title: 'The Accra Homecoming Mixer & Sunset Vibes',
      subtitle: 'Accra Diaspora Gathering • Sunset Session',
      description: 'The official sequel to our maiden gathering. Open-air music, signature hibiscus cocktails, authentic diaspora storytelling, and games under the stars.',
      venue: 'Sandbox Beach Club / Labone Pavilion',
      city: 'Accra, Ghana',
      price: 'Free with RSVP',
      image: '/assets/community-friends.jpg',
      badge: 'Featured Gathering',
      capacity: '120 Guests'
    },
    {
      id: 2,
      month: 'NOV',
      day: '22',
      year: '2026',
      time: '7:00 PM',
      endTime: '10:30 PM',
      category: 'ACOUSTIC & CHOP BAR',
      title: 'Highlife Acoustics & Jollof Supper Club',
      subtitle: 'Intimate Food & Music Experience',
      description: 'An intimate night of live acoustic highlife melodies, smoky firewood jollof tastings, and candid returnee founder talks under the garden fairy lights.',
      venue: 'Front/Back Private Garden',
      city: 'Osu, Accra',
      price: 'GH₵ 150 (Tasting Included)',
      image: '/assets/community-man-dancing-drink.jpg',
      badge: 'Supper Club',
      capacity: '60 Guests'
    },
    {
      id: 3,
      month: 'NOV',
      day: '29',
      year: '2026',
      time: '10:00 AM',
      endTime: '4:00 PM',
      category: 'CO-WORKING & DIALOGUE',
      title: 'Diaspora Founders & Builders Jam Session',
      subtitle: 'Co-Working & Practical Masterclass',
      description: 'Collaborative co-working, peer mentorship circles, and practical insights on establishing ventures, navigating banking, and buying land in Ghana.',
      venue: 'Impact Hub Accra',
      city: 'Osu Ako-Adjei, Accra',
      price: 'Free for Kinfolk',
      image: '/assets/community-table-qr.jpg',
      badge: 'Co-Working',
      capacity: '75 Guests'
    },
    {
      id: 4,
      month: 'DEC',
      day: '06',
      year: '2026',
      time: '4:00 PM',
      endTime: '10:00 PM',
      category: 'CULTURAL IMMERSION',
      title: 'Oware Championship & Palm Wine Social',
      subtitle: 'Traditional Games & Speed Friending',
      description: 'Traditional Ghanaian board games tournament, freshly tapped cold palm wine, artisanal suya barbecue, and speed-friending rounds for new arrivals.',
      venue: 'The Neem Grill Courtyard',
      city: 'Airport Residential, Accra',
      price: 'GH₵ 100 (Tokens & Drinks)',
      image: '/assets/community-blonde-braids.jpg',
      badge: 'Games & Chill',
      capacity: '100 Guests'
    },
    {
      id: 5,
      month: 'DEC',
      day: '20',
      year: '2026',
      time: '8:00 PM',
      endTime: '2:00 AM',
      category: 'DECEMBER IN GHANA SPECIAL',
      title: 'Detty December Diaspora Eve Gala',
      subtitle: 'The Chosen Family Grand Celebration',
      description: 'The pinnacle December in Ghana celebration. Curated Amapiano and Afrobeats DJ sets, red carpet portraiture, and a chosen family toast into the new year.',
      venue: 'Polo Club Terrace',
      city: 'Airport Bypass, Accra',
      price: 'GH₵ 250 (Early Bird)',
      image: '/assets/community-jaush-couple.jpg',
      badge: 'Grand Gala',
      capacity: '200 Guests'
    },
    {
      id: 6,
      month: 'JAN',
      day: '03',
      year: '2027',
      time: '3:00 PM',
      endTime: '9:00 PM',
      category: 'NEW YEAR BEACH PICNIC',
      title: 'Kokrobite Coastal Chill & Highlife Reggae',
      subtitle: 'New Year Beachside Gathering',
      description: 'Kick off the new year with ocean breeze, fresh grilled tilapia, acoustic beachside reggae jams, and restorative connection with the Kin community.',
      venue: "Big Milly's Backyard / Kokrobite Beach",
      city: 'Greater Accra, Ghana',
      price: 'GH₵ 120 (Includes Shuttle)',
      image: '/assets/community-cocktail-woman.jpg',
      badge: 'New Year Special',
      capacity: '150 Guests'
    }
  ];

  const currentHeroEvent = events[heroIndex];

  const handleNextHero = () => {
    setHeroIndex((prev) => (prev + 1) % events.length);
  };

  const handlePrevHero = () => {
    setHeroIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  const handleOpenRsvp = (event) => {
    setSelectedEventModal(event);
    setRsvpSuccess(false);
    setTicketQuantity(1);
  };

  const handleSubmitRsvp = (e) => {
    e.preventDefault();
    if (guestName && guestEmail) {
      setRsvpSuccess(true);
      setTimeout(() => {
        setSelectedEventModal(null);
        setRsvpSuccess(false);
        setGuestName('');
        setGuestEmail('');
        setGuestPhone('');
      }, 3000);
    }
  };

  // Calendar dates for the month
  const calendarDays = [
    { day: '02', weekday: 'MON', hasEvent: false },
    { day: '03', weekday: 'SUN', hasEvent: true, title: 'Kokrobite Coastal Chill' },
    { day: '06', weekday: 'FRI', hasEvent: true, title: 'Oware Championship' },
    { day: '09', weekday: 'MON', hasEvent: false },
    { day: '15', weekday: 'SAT', hasEvent: true, title: 'Homecoming Mixer' },
    { day: '18', weekday: 'WED', hasEvent: false },
    { day: '20', weekday: 'SAT', hasEvent: true, title: 'Diaspora Gala' },
    { day: '22', weekday: 'SUN', hasEvent: true, title: 'Highlife Acoustics' },
    { day: '29', weekday: 'SUN', hasEvent: true, title: 'Founders Jam' },
  ];

  return (
    <div className="min-h-screen w-full bg-white text-[#111111] antialiased selection:bg-black selection:text-white">
      
      {/* =========================================================
          TOP NAVIGATION BAR (Consistent with Kin Social Theme)
          ========================================================= */}
      <header className="w-full bg-[#0A0A0A] border-b border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex items-center justify-between gap-4">
          
          {/* Logo */}
          <button 
            onClick={onNavigateHome}
            className="flex items-center gap-2 group cursor-pointer text-left"
          >
            <div className="bg-white rounded-lg p-1.5 inline-flex items-center justify-center">
              <img
                src="/assets/kin-social-logo.png"
                alt="Kin Social Logo"
                className="h-7 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-white font-bold tracking-tight text-base">Kin Social</span>
              <span className="block text-[10px] font-mono text-[#EFE8DD]/70 tracking-widest uppercase">Ghana Gatherings</span>
            </div>
          </button>

          {/* Navigation Pill */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-7 bg-[#EFE8DD] border border-[#E3D9CC] rounded-full px-6 lg:px-7 py-2.5 shadow-xs">
            <button
              onClick={onNavigateHome}
              className="text-[14px] font-semibold text-[#2D2A26] hover:text-black transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => {
                onNavigateHome();
                setTimeout(() => document.getElementById('highlights')?.scrollIntoView({ behavior: 'smooth' }), 100);
              }}
              className="text-[14px] font-semibold text-[#2D2A26] hover:text-black transition-colors cursor-pointer"
            >
              Highlights
            </button>
            <button
              onClick={() => {
                onNavigateHome();
                setTimeout(() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' }), 100);
              }}
              className="text-[14px] font-semibold text-[#2D2A26] hover:text-black transition-colors cursor-pointer"
            >
              Gallery
            </button>
            <button
              onClick={() => {
                onNavigateHome();
                setTimeout(() => document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' }), 100);
              }}
              className="text-[14px] font-semibold text-[#2D2A26] hover:text-black transition-colors cursor-pointer"
            >
              Reviews
            </button>
            
            {/* Active Events Tab Pill */}
            <span className="inline-flex items-center gap-1.5 bg-black text-white px-3.5 py-1 rounded-full text-[13px] font-bold shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EFE8DD] animate-pulse" />
              Events
            </span>

            <button
              onClick={onOpenHowItWorks}
              className="text-[14px] font-semibold text-[#2D2A26] hover:text-black transition-colors cursor-pointer"
            >
              How it works
            </button>
          </nav>

          {/* Right Action: Join Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenJoin}
              className="bg-[#EFE8DD] hover:bg-white text-[#111111] px-5 sm:px-7 py-2.5 rounded-full text-xs sm:text-sm font-bold shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
            >
              Join the Family
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-full bg-[#222222] text-[#EFE8DD] hover:text-white transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#151515] border-t border-[#2A2A2A] p-4 space-y-2 animate-in fade-in duration-200">
            <button
              onClick={() => { setMobileMenuOpen(false); onNavigateHome(); }}
              className="w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold text-white hover:bg-white/5"
            >
              Home
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateHome();
                setTimeout(() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' }), 100);
              }}
              className="w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold text-white hover:bg-white/5"
            >
              Gallery (Maiden Edition)
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateHome();
                setTimeout(() => document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' }), 100);
              }}
              className="w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold text-white hover:bg-white/5"
            >
              Kinfolk Reviews
            </button>
            <div className="w-full py-2.5 px-3 rounded-lg text-sm font-bold bg-[#EFE8DD] text-black flex items-center justify-between">
              <span>Upcoming Events</span>
              <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
            </div>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenHowItWorks(); }}
              className="w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold text-white hover:bg-white/5"
            >
              How it works
            </button>
          </div>
        )}
      </header>

      {/* =========================================================
          HERO EVENTS BANNER & INTERACTIVE TICKET CAROUSEL
          ========================================================= */}
      <section className="relative w-full bg-[#0A0A0A] text-white pt-12 sm:pt-16 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        
        {/* Ambient background photo blur */}
        <div 
          className="absolute inset-0 opacity-15 bg-cover bg-center filter blur-xl scale-105 pointer-events-none"
          style={{ backgroundImage: `url(${currentHeroEvent.image})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#0A0A0A]/95 to-[#0A0A0A]" />

        <div className="relative max-w-6xl xl:max-w-7xl mx-auto space-y-8 sm:space-y-12">
          
          {/* Eyebrow and Headline with Scroll Text Reveal Animation */}
          <div className="text-center space-y-3">
            <p className="font-mono text-xs sm:text-sm tracking-widest text-[#EFE8DD] uppercase font-medium">
              • The Kin Social Events •
            </p>
            <ScrollRevealText
              as="h1"
              className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight"
            >
              November 15th — December 28th
            </ScrollRevealText>
            <ScrollRevealText
              as="p"
              className="text-[#A1A1AA] text-sm sm:text-base font-light max-w-lg mx-auto"
            >
              Curated diaspora hangouts, supper clubs, and cultural mixers across Accra.
            </ScrollRevealText>
          </div>

          {/* Featured Ticket Carousel Card */}
          <div className="relative flex items-center justify-center">
            
            {/* Left Nav Button (Desktop) */}
            <button
              onClick={handlePrevHero}
              className="hidden sm:flex absolute -left-2 sm:-left-5 lg:-left-8 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-black shadow-xl items-center justify-center hover:scale-110 active:scale-95 transition-all cursor-pointer border border-gray-200"
              aria-label="Previous event"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* =========================================================
                THE ELONGATED REAL-TICKET DESIGN
                Mimics an authentic admission ticket with tear-off stub,
                barcode, serial stamps, spec grid, and perforated notches
                ========================================================= */}
            <div className="w-full max-w-[1060px] lg:max-w-[1100px] xl:max-w-[1140px] bg-[#FCFBF8] text-[#111111] rounded-none shadow-2xl overflow-hidden relative border border-[#E2DBD0] select-none">
              
              {/* Notches & Perforation for Desktop Horizontal Ticket */}
              {/* Top Perforation Notch Cutout */}
              <div 
                className="hidden md:block absolute -top-4 left-[69%] w-8 h-8 rounded-full bg-[#0A0A0A] -translate-x-1/2 z-20 pointer-events-none shadow-inner" 
                aria-hidden="true"
              />
              {/* Bottom Perforation Notch Cutout */}
              <div 
                className="hidden md:block absolute -bottom-4 left-[69%] w-8 h-8 rounded-full bg-[#0A0A0A] -translate-x-1/2 z-20 pointer-events-none shadow-inner" 
                aria-hidden="true"
              />
              {/* Vertical Dashed Perforation Line */}
              <div 
                className="hidden md:block absolute top-10 bottom-0 left-[69%] border-r-2 border-dashed border-[#D6CEC2] z-10 pointer-events-none" 
                aria-hidden="true"
              />
              {/* Perforation Scissors Icon */}
              <div 
                className="hidden md:flex items-center justify-center absolute top-11 left-[69%] -translate-x-1/2 z-20 pointer-events-none text-neutral-400 bg-[#FCFBF8] p-0.5 rounded-full shadow-2xs"
                aria-hidden="true"
              >
                <Scissors className="w-3.5 h-3.5 rotate-90 text-[#9E9587]" />
              </div>

              {/* Top Security & Serial Ribbon (Desktop & Mobile) */}
              <div className="w-full bg-[#181818] text-white px-4 sm:px-8 py-2.5 flex items-center justify-between border-b border-[#282828] font-mono text-[10px] sm:text-xs tracking-wider">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C87028] animate-pulse" />
                  <span className="font-bold text-[#EFE8DD] uppercase">KIN SOCIAL GHANA • ADMISSION PASS</span>
                  <span className="hidden sm:inline text-neutral-400">• ACCRA GATHERINGS</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="hidden md:inline text-neutral-400">SERIES 2026-A</span>
                  <span className="bg-[#C87028]/20 border border-[#C87028]/40 text-[#E3A368] px-2 py-0.5 rounded-xs font-bold">
                    № KS-2026-00{currentHeroEvent.id}84
                  </span>
                </div>
              </div>

              {/* ========================================================
                  DESKTOP LAYOUT (md and up): HORIZONTAL ELONGATED TICKET
                  ======================================================== */}
              <div className="hidden md:flex flex-row items-stretch">
                
                {/* Left Ticket Body: Main Event Details (~69% width) */}
                <div className="w-[69%] p-8 lg:p-10 flex flex-col justify-between space-y-6">
                  
                  {/* Category, Badges & Title */}
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-1 bg-[#F4EFE6] text-[#C87028] border border-[#E9DDC9] text-[11px] font-mono font-bold uppercase tracking-wider">
                        {currentHeroEvent.category}
                      </span>
                      <span className="px-2 py-0.5 bg-black text-white text-[10px] font-mono font-semibold uppercase tracking-wider">
                        {currentHeroEvent.capacity}
                      </span>
                      <span className="text-gray-400 text-xs font-mono">
                        • ACCRA HOMECOMING EDITION
                      </span>
                    </div>

                    <h2 className="font-serif text-2xl sm:text-3xl lg:text-[36px] xl:text-[40px] font-bold text-black tracking-tight leading-[1.12]">
                      {currentHeroEvent.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-[#C87028] font-mono font-medium">
                      {currentHeroEvent.subtitle}
                    </p>

                    <p className="text-sm text-gray-600 font-light line-clamp-2 leading-relaxed max-w-2xl">
                      {currentHeroEvent.description}
                    </p>
                  </div>

                  {/* Structured Real-Ticket Spec Grid (Boarding Pass / Admission Table) */}
                  <div className="grid grid-cols-4 gap-2 sm:gap-3 py-3 px-3.5 sm:px-4 bg-[#FAF7F2] border border-[#EBE4D8] rounded-none shadow-2xs">
                    <div className="space-y-0.5">
                      <span className="block text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest">
                        DATE
                      </span>
                      <span className="font-mono text-xs sm:text-sm font-bold text-[#111111] block">
                        {currentHeroEvent.month} {currentHeroEvent.day}, {currentHeroEvent.year}
                      </span>
                    </div>
                    <div className="space-y-0.5">
                      <span className="block text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest">
                        DOORS / TIME
                      </span>
                      <span className="font-mono text-xs sm:text-sm font-bold text-[#111111] block">
                        {currentHeroEvent.time} GMT
                      </span>
                    </div>
                    <div className="space-y-0.5">
                      <span className="block text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest">
                        VENUE
                      </span>
                      <span className="font-mono text-xs sm:text-sm font-bold text-[#111111] truncate block" title={currentHeroEvent.venue}>
                        {currentHeroEvent.venue.split('/')[0]}
                      </span>
                    </div>
                    <div className="space-y-0.5">
                      <span className="block text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest">
                        ADMISSION
                      </span>
                      <span className="font-mono text-xs sm:text-sm font-bold text-[#C87028] block">
                        {currentHeroEvent.price}
                      </span>
                    </div>
                  </div>

                  {/* Actions & Ticket Footer Disclaimer */}
                  <div className="pt-2 flex items-center justify-between gap-4 border-t border-gray-100">
                    <div className="flex items-center gap-3.5">
                      <button
                        onClick={() => handleOpenRsvp(currentHeroEvent)}
                        className="bg-[#C87028] hover:bg-[#B36020] text-white px-8 py-3.5 rounded-none text-xs sm:text-sm font-mono font-bold tracking-wider uppercase transition-all shadow-md active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                      >
                        <span>Get Tickets</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleOpenRsvp(currentHeroEvent)}
                        className="text-xs font-mono font-bold text-gray-700 hover:text-black underline tracking-wider uppercase cursor-pointer py-1"
                      >
                        View Details
                      </button>
                    </div>

                    <div className="text-[10px] font-mono text-gray-400 tracking-wider text-right leading-tight">
                      <span>* PRESENT QR CODE OR PASS AT GATE</span>
                      <span className="block text-[9px] text-gray-400/80">NON-REFUNDABLE • ACCRA GHANA</span>
                    </div>
                  </div>

                </div>

                {/* Right Ticket Stub: Tear-off Coupon (~31% width) */}
                <div className="w-[31%] bg-[#F5F2EB] p-5 lg:p-6 flex flex-col justify-between shrink-0">
                  
                  {/* Stub Top Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#E2DBD0]">
                    <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#111111] tracking-wider uppercase">
                      <span className="text-[#C87028]">★</span>
                      <span>ADMIT ONE</span>
                      <span className="text-[#C87028]">★</span>
                    </div>
                    <span className="text-[10px] font-mono text-gray-500 font-semibold uppercase">
                      GATE A • SCAN
                    </span>
                  </div>

                  {/* Framed Photo inside Stub */}
                  <div className="relative my-3 w-full h-40 lg:h-44 overflow-hidden bg-black shadow-inner border border-black/10">
                    <img
                      src={currentHeroEvent.image}
                      alt={currentHeroEvent.title}
                      className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-2 right-2 bg-black/85 backdrop-blur-xs text-white text-[10px] font-mono font-semibold px-2 py-0.5 uppercase tracking-wider">
                      {currentHeroEvent.badge}
                    </div>
                    <div className="absolute bottom-2 left-2 bg-[#EFE8DD] text-[#111111] text-[10px] font-mono font-bold px-2 py-0.5 uppercase tracking-wider">
                      {currentHeroEvent.month} {currentHeroEvent.day}
                    </div>
                  </div>

                  {/* Stub Metadata & Authentic Barcode */}
                  <div className="space-y-2.5 pt-1">
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className="text-gray-500 font-medium">PASS TYPE:</span>
                      <span className="font-bold text-black uppercase">DIASPORA PASS</span>
                    </div>

                    {/* Scannable Real-Ticket Barcode Graphic */}
                    <div className="bg-white p-2.5 border border-gray-200 shadow-xs flex flex-col items-center justify-center">
                      <div className="flex items-center justify-center gap-[1.5px] h-7 w-full overflow-hidden">
                        {[2, 1, 3, 1, 4, 2, 1, 3, 1, 2, 4, 1, 3, 2, 1, 4, 1, 2, 3, 2, 1, 4, 1, 3, 2, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1, 3, 2, 1, 4].map((w, i) => (
                          <span
                            key={i}
                            className="bg-black h-full inline-block"
                            style={{ width: `${w}px` }}
                          />
                        ))}
                      </div>
                      <span className="font-mono text-[9px] tracking-[0.22em] text-gray-600 mt-1 uppercase font-semibold">
                        * KS-2026-00{currentHeroEvent.id}849 *
                      </span>
                    </div>

                    <div className="text-center text-[9px] font-mono text-gray-400 tracking-wider uppercase">
                      VOID IF DETACHED • STUB AUDIT COPY
                    </div>
                  </div>

                </div>

              </div>

              {/* ========================================================
                  MOBILE LAYOUT (< md): VERTICAL BOARDING PASS TICKET
                  ======================================================== */}
              <div className="md:hidden flex flex-col">
                
                {/* 1. Mobile Photo Stub Header */}
                <div className="relative w-full h-48 overflow-hidden bg-black">
                  <img
                    src={currentHeroEvent.image}
                    alt={currentHeroEvent.title}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
                  
                  {/* Admit One badge */}
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-xs text-[#EFE8DD] border border-white/20 text-[10px] font-mono font-bold px-2.5 py-1 uppercase tracking-wider flex items-center gap-1.5">
                    <span className="text-[#C87028]">★</span>
                    <span>ADMIT ONE • GUEST PASS</span>
                  </div>

                  <div className="absolute top-3 right-3 bg-[#C87028] text-white text-[10px] font-mono font-bold px-2 py-0.5 uppercase tracking-wider">
                    {currentHeroEvent.badge}
                  </div>

                  <div className="absolute bottom-2.5 left-3 text-white">
                    <span className="text-xs font-mono font-bold text-[#EFE8DD] uppercase tracking-wider">
                      {currentHeroEvent.month} {currentHeroEvent.day}, {currentHeroEvent.year} • {currentHeroEvent.time}
                    </span>
                  </div>
                </div>

                {/* 2. Mobile Perforation Line with Left and Right Notches */}
                <div className="relative w-full py-1 my-1" aria-hidden="true">
                  <div className="border-b-2 border-dashed border-[#D6CEC2] w-full" />
                  <div className="absolute top-1/2 -left-3.5 -translate-y-1/2 w-7 h-7 rounded-full bg-[#0A0A0A] z-20 pointer-events-none shadow-inner" />
                  <div className="absolute top-1/2 -right-3.5 -translate-y-1/2 w-7 h-7 rounded-full bg-[#0A0A0A] z-20 pointer-events-none shadow-inner" />
                </div>

                {/* 3. Mobile Event Details */}
                <div className="p-5 sm:p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-[#F4EFE6] text-[#C87028] border border-[#E9DDC9] text-[10px] font-mono font-bold uppercase tracking-wider">
                        {currentHeroEvent.category}
                      </span>
                      <span className="px-2 py-0.5 bg-black text-white text-[9px] font-mono font-semibold uppercase">
                        {currentHeroEvent.capacity}
                      </span>
                    </div>

                    <h2 className="font-serif text-2xl font-bold text-black tracking-tight leading-tight">
                      {currentHeroEvent.title}
                    </h2>

                    <p className="text-xs font-mono text-[#C87028] font-medium">
                      {currentHeroEvent.subtitle}
                    </p>

                    <p className="text-xs text-gray-600 font-light leading-relaxed">
                      {currentHeroEvent.description}
                    </p>
                  </div>

                  {/* Mobile 2x2 Spec Grid */}
                  <div className="grid grid-cols-2 gap-2 p-3 bg-[#FAF7F2] border border-[#EBE4D8]">
                    <div className="space-y-0.5">
                      <span className="block text-[9px] font-mono font-bold text-gray-400 uppercase">DATE</span>
                      <span className="font-mono text-xs font-bold text-black">
                        {currentHeroEvent.month} {currentHeroEvent.day}, {currentHeroEvent.year}
                      </span>
                    </div>
                    <div className="space-y-0.5">
                      <span className="block text-[9px] font-mono font-bold text-gray-400 uppercase">TIME</span>
                      <span className="font-mono text-xs font-bold text-black">
                        {currentHeroEvent.time}
                      </span>
                    </div>
                    <div className="space-y-0.5">
                      <span className="block text-[9px] font-mono font-bold text-gray-400 uppercase">VENUE</span>
                      <span className="font-mono text-xs font-bold text-black truncate block">
                        {currentHeroEvent.venue.split('/')[0]}
                      </span>
                    </div>
                    <div className="space-y-0.5">
                      <span className="block text-[9px] font-mono font-bold text-gray-400 uppercase">PRICE</span>
                      <span className="font-mono text-xs font-bold text-[#C87028]">
                        {currentHeroEvent.price}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2 pt-1">
                    <button
                      onClick={() => handleOpenRsvp(currentHeroEvent)}
                      className="w-full bg-[#C87028] hover:bg-[#B36020] text-white py-3 font-mono text-xs font-bold tracking-wider uppercase shadow-md flex items-center justify-center gap-1.5"
                    >
                      <span>Get Tickets</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleOpenRsvp(currentHeroEvent)}
                      className="w-full text-center text-xs font-mono font-bold text-gray-600 underline uppercase py-1"
                    >
                      View Details
                    </button>
                  </div>

                  {/* Mobile Barcode */}
                  <div className="bg-white p-2.5 border border-gray-200 shadow-2xs flex flex-col items-center justify-center mt-3">
                    <div className="flex items-center justify-center gap-[1.5px] h-7 w-full overflow-hidden">
                      {[2, 1, 3, 1, 4, 2, 1, 3, 1, 2, 4, 1, 3, 2, 1, 4, 1, 2, 3, 2, 1, 4, 1, 3, 2, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1, 3, 2, 1, 4].map((w, i) => (
                        <span
                          key={i}
                          className="bg-black h-full inline-block"
                          style={{ width: `${w}px` }}
                        />
                      ))}
                    </div>
                    <span className="font-mono text-[9px] tracking-[0.22em] text-gray-600 mt-1 uppercase font-semibold">
                      * KS-2026-00{currentHeroEvent.id}849 *
                    </span>
                    <span className="text-[8px] font-mono text-gray-400 uppercase mt-0.5">
                      PRESENT AT GATE • NON-TRANSFERABLE
                    </span>
                  </div>

                </div>

              </div>

            </div>

            {/* Right Nav Button (Desktop) */}
            <button
              onClick={handleNextHero}
              className="hidden sm:flex absolute -right-2 sm:-right-5 lg:-right-8 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-black shadow-xl items-center justify-center hover:scale-110 active:scale-95 transition-all cursor-pointer border border-gray-200"
              aria-label="Next event"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

          </div>

          {/* Carousel dots and Mobile Navigation */}
          <div className="flex items-center justify-center gap-3 pt-3">
            {/* Mobile Prev Arrow */}
            <button
              onClick={handlePrevHero}
              className="sm:hidden w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center active:scale-90 transition-all cursor-pointer"
              aria-label="Previous event"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2">
              {events.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setHeroIndex(idx)}
                  className={`transition-all cursor-pointer ${
                    idx === heroIndex 
                      ? 'w-7 h-2 bg-[#C87028] rounded-full' 
                      : 'w-2 h-2 bg-white/30 hover:bg-white/60 rounded-full'
                  }`}
                  aria-label={`Go to event slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Mobile Next Arrow */}
            <button
              onClick={handleNextHero}
              className="sm:hidden w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center active:scale-90 transition-all cursor-pointer"
              aria-label="Next event"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </section>

      {/* =========================================================
          FEATURED UPCOMING EVENTS LIST
          (2nd, 4th, 6th rows styled with Kin Social Brand Grey #EFE8DD)
          ========================================================= */}
      <section className="w-full bg-[#FFFFFF] text-[#111111] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
          
          {/* Section Header with Scroll Text Reveal Animation */}
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <ScrollRevealText
              as="h2"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black"
            >
              Featured Upcoming Events
            </ScrollRevealText>
            <ScrollRevealText
              as="p"
              className="text-gray-500 text-sm sm:text-base font-light leading-relaxed"
            >
              Keep coming back to our website to stay informed about upcoming gatherings in Accra and reserve your guest passes in advance.
            </ScrollRevealText>
          </div>

          {/* Event Rows List: Alternating 1st (White), 2nd (Brand Grey), 3rd (White), 4th (Brand Grey), etc. */}
          <div className="space-y-6 sm:space-y-8">
            {events.map((event, index) => {
              // 2nd (index 1), 4th (index 3), 6th (index 5) have brand grey #EFE8DD
              const isGrey = index % 2 === 1;

              return (
                <div 
                  key={event.id}
                  className={`py-6 sm:py-8 px-6 sm:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 group transition-all duration-300 shadow-sm border ${
                    isGrey 
                      ? 'bg-[#EFE8DD] border-[#E3D9CC] rounded-2xl' 
                      : 'bg-white border-gray-200 rounded-2xl hover:bg-[#FAF8F5]/80'
                  }`}
                >
                  
                  {/* Left Column: Date Box */}
                  <div className="shrink-0 flex items-center md:flex-col justify-center w-auto md:w-24 bg-white border border-gray-200 shadow-xs p-3 text-center rounded-lg">
                    <div className="flex items-center md:flex-col gap-2 md:gap-0">
                      <span className="text-[11px] font-mono font-bold text-gray-400 uppercase tracking-widest block">
                        {event.month}
                      </span>
                      <span className="text-2xl sm:text-3xl font-serif font-bold text-black leading-none my-0.5">
                        {event.day}
                      </span>
                      <span className="hidden md:block text-[10px] font-mono text-gray-400">
                        {event.year}
                      </span>
                    </div>
                    <div className="ml-3 md:ml-0 md:mt-2.5 bg-[#111111] text-white text-[10px] font-mono font-medium py-1 px-2.5 rounded-none whitespace-nowrap">
                      {event.time}
                    </div>
                  </div>

                  {/* Middle Column: Event Details & Action Buttons */}
                  <div className="flex-1 space-y-2.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#C87028]">
                        {event.category}
                      </span>
                      {isGrey && (
                        <span className="px-2 py-0.5 bg-black/5 text-[#2D2A26] text-[10px] font-mono font-semibold uppercase rounded-xs">
                          Community Pick
                        </span>
                      )}
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-black tracking-tight group-hover:text-[#C87028] transition-colors">
                      {event.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-mono text-gray-600">
                      {event.subtitle} • {event.venue}
                    </p>

                    <p className="text-sm text-gray-700 font-light line-clamp-2 max-w-xl">
                      {event.description}
                    </p>

                    <div className="pt-2 flex items-center gap-4">
                      <button
                        onClick={() => handleOpenRsvp(event)}
                        className="bg-[#C87028] hover:bg-[#B36020] text-white px-5 sm:px-6 py-2.5 text-xs font-bold uppercase tracking-wider shadow-xs hover:scale-105 active:scale-95 transition-all cursor-pointer"
                      >
                        Get Tickets
                      </button>
                      <button
                        onClick={() => handleOpenRsvp(event)}
                        className="text-xs font-semibold text-gray-700 hover:text-black underline tracking-wider uppercase cursor-pointer"
                      >
                        View Details
                      </button>
                      <span className="text-xs font-mono text-emerald-800 font-semibold ml-2">
                        {event.price}
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Ticket-Shaped Image Stub with Matching Notch Cutout */}
                  <div className="relative w-full md:w-56 lg:w-72 h-36 sm:h-40 overflow-hidden bg-black shrink-0 shadow-md rounded-r-xl">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    
                    {/* Half-circle notch on right edge: dynamically matches row background (white or brand grey #EFE8DD) */}
                    <div 
                      className={`absolute top-1/2 -right-3.5 w-7 h-7 rounded-full ${
                        isGrey ? 'bg-[#EFE8DD]' : 'bg-white'
                      } -translate-y-1/2 z-10 pointer-events-none shadow-xs`}
                      aria-hidden="true"
                    />

                    {/* Left perforated dashed edge */}
                    <div 
                      className="absolute top-0 bottom-0 left-0 border-r-2 border-dashed border-white/60 z-10 pointer-events-none" 
                      aria-hidden="true"
                    />
                    
                    {/* Overlay Capacity Tag */}
                    <div className="absolute bottom-2 left-2 bg-black/80 backdrop-blur-xs text-white text-[10px] font-mono px-2 py-0.5 uppercase tracking-wider">
                      {event.capacity}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          {/* View All Events Button */}
          <div className="text-center pt-4">
            <button
              onClick={onOpenJoin}
              className="inline-flex items-center gap-2 border-2 border-black hover:bg-black hover:text-white text-black px-8 py-3 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider transition-all cursor-pointer shadow-xs"
            >
              <span>View All Past Editions & Archive</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================
          EVENT CALENDAR SECTION
          ========================================================= */}
      <section className="w-full bg-[#EFE8DD] text-[#111111] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-[#E3D9CC]">
        <div className="max-w-6xl mx-auto space-y-10">
          
          {/* Header with Scroll Text Reveal Animation */}
          <div className="space-y-2">
            <ScrollRevealText
              as="h2"
              className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-black"
            >
              Event Calendar
            </ScrollRevealText>
            <ScrollRevealText
              as="p"
              className="text-gray-600 text-sm sm:text-base font-light"
            >
              View a complete calendar of all community hangouts and diaspora mixers for the season. Please check frequently as we add pop-up dates.
            </ScrollRevealText>
          </div>

          {/* Calendar Box */}
          <div className="bg-white border border-[#E3D9CC] p-6 sm:p-8 shadow-sm rounded-2xl">
            
            {/* Month Filter Tabs */}
            <div className="flex items-center gap-3 pb-6 border-b border-gray-100 overflow-x-auto">
              {['NOV 2026', 'DEC 2026', 'JAN 2027'].map((m) => (
                <button
                  key={m}
                  onClick={() => setSelectedMonth(m.slice(0, 3))}
                  className={`px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                    selectedMonth === m.slice(0, 3)
                      ? 'bg-black text-white shadow-xs'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>

            {/* Dates Grid / Strip */}
            <div className="pt-6 grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-2.5">
              {calendarDays.map((cd, i) => (
                <button
                  key={i}
                  onClick={() => {
                    if (cd.hasEvent) {
                      const matched = events.find(e => e.day === cd.day);
                      if (matched) handleOpenRsvp(matched);
                    }
                  }}
                  className={`p-3 text-center transition-all cursor-pointer border rounded-xl ${
                    cd.hasEvent 
                      ? 'bg-[#C87028]/10 border-[#C87028] hover:bg-[#C87028] hover:text-white' 
                      : 'bg-gray-50 border-gray-100 text-gray-400 hover:border-gray-300'
                  }`}
                >
                  <span className="block font-mono text-[10px] uppercase font-semibold">
                    {cd.weekday}
                  </span>
                  <span className="block font-serif text-xl sm:text-2xl font-bold my-1">
                    {cd.day}
                  </span>
                  {cd.hasEvent ? (
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C87028] animate-pulse" />
                  ) : (
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-transparent" />
                  )}
                </button>
              ))}
            </div>

            {/* Notice */}
            <div className="mt-8 p-4 bg-[#FAF8F5] border border-[#E3D9CC] flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#C87028] text-white flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider font-mono text-black">
                    Want to host or co-curate a gathering with Kin Social?
                  </h4>
                  <p className="text-xs text-gray-500">
                    We collaborate with venues, chefs, DJs, and diaspora founders across Accra.
                  </p>
                </div>
              </div>
              <button
                onClick={onOpenJoin}
                className="bg-black hover:bg-[#222222] text-white text-xs font-mono font-bold px-5 py-2.5 uppercase tracking-wider whitespace-nowrap cursor-pointer rounded-lg"
              >
                Submit Pitch
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          INTERACTIVE TICKET / RSVP MODAL
          ========================================================= */}
      {selectedEventModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedEventModal(null)}
        >
          <div 
            className="relative w-full max-w-lg bg-white text-[#111111] shadow-2xl border border-gray-200 overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedEventModal(null)}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/10 hover:bg-black/20 text-black flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Header Image */}
            <div className="relative h-44 w-full bg-black">
              <img
                src={selectedEventModal.image}
                alt={selectedEventModal.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <span className="font-mono text-[10px] tracking-wider uppercase bg-[#C87028] text-white px-2 py-0.5 font-bold">
                  {selectedEventModal.category}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold mt-1 text-white leading-tight">
                  {selectedEventModal.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5">
              
              {rsvpSuccess ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-black">You are on the Guest List!</h4>
                  <p className="text-sm text-gray-600">
                    Your pass for <strong>{selectedEventModal.title}</strong> on {selectedEventModal.month} {selectedEventModal.day} has been reserved. Check your email and WhatsApp for event instructions.
                  </p>
                  <p className="font-mono text-xs text-[#C87028] font-bold">
                    Pass Ref: KIN-GH-{Math.floor(100000 + Math.random() * 900000)}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmitRsvp} className="space-y-4">
                  
                  {/* Event details pill */}
                  <div className="bg-[#FAF8F5] border border-gray-200 p-3 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-gray-700 rounded-lg">
                    <div className="flex items-center gap-1.5">
                      <CalendarIcon className="w-3.5 h-3.5 text-[#C87028]" />
                      <span>{selectedEventModal.month} {selectedEventModal.day}, {selectedEventModal.year}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#C87028]" />
                      <span>{selectedEventModal.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#C87028]" />
                      <span>{selectedEventModal.venue}</span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed font-light">
                    {selectedEventModal.description}
                  </p>

                  <div className="space-y-3 pt-2">
                    <div>
                      <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={guestName}
                        onChange={(e) => setGuestName(e.target.value)}
                        placeholder="e.g. Kwame Mensah"
                        className="w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-300 rounded-lg focus:outline-hidden focus:border-black font-sans"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={guestEmail}
                          onChange={(e) => setGuestEmail(e.target.value)}
                          placeholder="name@example.com"
                          className="w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-300 rounded-lg focus:outline-hidden focus:border-black font-sans"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gray-700 mb-1">
                          WhatsApp Phone *
                        </label>
                        <input
                          type="tel"
                          required
                          value={guestPhone}
                          onChange={(e) => setGuestPhone(e.target.value)}
                          placeholder="+233 ... or +44 ..."
                          className="w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-300 rounded-lg focus:outline-hidden focus:border-black font-sans"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <span className="text-xs font-mono text-gray-600">Number of Passes:</span>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setTicketQuantity(Math.max(1, ticketQuantity - 1))}
                          className="w-7 h-7 bg-gray-200 hover:bg-gray-300 text-black font-bold flex items-center justify-center cursor-pointer rounded-xs"
                        >
                          -
                        </button>
                        <span className="font-mono font-bold text-sm px-2">{ticketQuantity}</span>
                        <button
                          type="button"
                          onClick={() => setTicketQuantity(Math.min(4, ticketQuantity + 1))}
                          className="w-7 h-7 bg-gray-200 hover:bg-gray-300 text-black font-bold flex items-center justify-center cursor-pointer rounded-xs"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3">
                    <button
                      type="submit"
                      className="w-full bg-[#C87028] hover:bg-[#B36020] text-white py-3.5 font-mono text-xs font-bold uppercase tracking-widest transition-all shadow-md active:scale-98 cursor-pointer rounded-lg"
                    >
                      Confirm RSVP ({selectedEventModal.price})
                    </button>
                    <p className="text-[10px] text-gray-400 text-center mt-2">
                      Passes are verified at entrance. You will receive an immediate confirmation.
                    </p>
                  </div>

                </form>
              )}

            </div>

          </div>
        </div>
      )}

      {/* Standard Kin Social Footer */}
      <Footer 
        onOpenJoin={onOpenJoin}
        onOpenHowItWorks={onOpenHowItWorks}
      />

    </div>
  );
}
