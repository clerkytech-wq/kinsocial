import React, { useState, useRef, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  RotateCcw,
  Sparkles, 
  Star, 
  MapPin, 
  Flame, 
  ArrowDown, 
  ArrowUpRight, 
  Heart, 
  Camera, 
  Music, 
  Trophy, 
  Palette, 
  Coffee 
} from 'lucide-react';
import { ScrollRevealText } from './ScrollRevealText';

/**
 * High-fidelity Torn / Ripped Paper Divider
 * Features organic jagged tear micro-ridges with subtle drop shadows
 */
function TornPaperDivider({ 
  fill = '#FFFFFF', 
  flip = false,
  className = ''
}) {
  return (
    <div 
      className={`relative w-full overflow-hidden leading-none z-20 pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <svg 
        viewBox="0 0 1440 60" 
        preserveAspectRatio="none" 
        className={`w-full h-10 sm:h-14 lg:h-16 block ${flip ? 'rotate-180' : ''}`}
      >
        <path 
          d="M0,0 L0,22 
             C20,27 35,16 55,24 C75,32 90,20 110,25 C130,30 145,18 165,26 C185,34 200,22 220,28 
             C240,34 255,20 275,27 C295,34 310,23 330,29 C350,35 365,21 385,26 C405,31 420,19 440,27 
             C460,35 475,22 495,28 C515,34 530,20 550,26 C570,32 585,21 605,27 C625,33 640,19 660,25 
             C680,31 695,20 715,28 C735,36 750,23 770,29 C790,35 805,21 825,27 C845,33 860,22 880,28 
             C900,34 915,20 935,26 C955,32 970,21 990,27 C1010,33 1025,19 1045,25 C1065,31 1080,22 1100,28 
             C1120,34 1135,21 1155,27 C1175,33 1190,20 1210,26 C1230,32 1245,22 1265,28 C1285,34 1300,21 1320,27 
             C1340,33 1355,20 1375,26 C1395,32 1415,22 1440,28 L1440,0 Z" 
          fill={fill} 
        />
        {/* Secondary softer tear shadow for realistic paper fiber depth */}
        <path 
          d="M0,22 
             C20,27 35,16 55,24 C75,32 90,20 110,25 C130,30 145,18 165,26 C185,34 200,22 220,28 
             C240,34 255,20 275,27 C295,34 310,23 330,29 C350,35 365,21 385,26 C405,31 420,19 440,27 
             C460,35 475,22 495,28 C515,34 530,20 550,26 C570,32 585,21 605,27 C625,33 640,19 660,25 
             C680,31 695,20 715,28 C735,36 750,23 770,29 C790,35 805,21 825,27 C845,33 860,22 880,28 
             C900,34 915,20 935,26 C955,32 970,21 990,27 C1010,33 1025,19 1045,25 C1065,31 1080,22 1100,28 
             C1120,34 1135,21 1155,27 C1175,33 1190,20 1210,26 C1230,32 1245,22 1265,28 C1285,34 1300,21 1320,27 
             C1340,33 1355,20 1375,26 C1395,32 1415,22 1440,28" 
          stroke="rgba(0,0,0,0.12)" 
          strokeWidth="1.5" 
          fill="none" 
        />
      </svg>
    </div>
  );
}

export function MaidenHighlights({ onOpenJoin }) {
  const videoRef = useRef(null);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(33.2);
  const [progress, setProgress] = useState(0);
  const [activeActivityTab, setActiveActivityTab] = useState(0);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().catch(console.error);
      setIsPlayingVideo(true);
    } else {
      videoRef.current.pause();
      setIsPlayingVideo(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const cur = videoRef.current.currentTime;
      const dur = videoRef.current.duration || 33.2;
      setCurrentTime(cur);
      setProgress((cur / dur) * 100);
    }
  };

  const seekTo = (seconds) => {
    if (videoRef.current) {
      videoRef.current.currentTime = seconds;
      videoRef.current.play().catch(console.error);
      setIsPlayingVideo(true);
    }
  };

  const restartVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(console.error);
      setIsPlayingVideo(true);
    }
  };

  const activities = [
    {
      id: 'trivia',
      title: 'Ghana & Diaspora Cultural Trivia',
      tag: '★ TRIVIA DUEL ★',
      time: '16:30 GMT',
      badge: 'HIGH STAKES',
      image: '/assets/community-ghana-flag.jpg',
      rotation: '-rotate-2 sm:-rotate-3',
      description: 'Intense diaspora & Ghana history showdowns. Highlife music quizzes, rapid-fire debates, and wild celebrations over bragging rights.',
      icon: Trophy
    },
    {
      id: 'paint',
      title: 'Sip, Paint & Creative Soul',
      tag: '★ SIP & PAINT ★',
      time: '17:15 GMT',
      badge: 'CREATIVE FLOW',
      image: '/assets/community-jaush-easel.jpg',
      rotation: 'rotate-1 sm:rotate-2',
      description: 'Open-air acrylic canvas painting guided by local Accra artists. Cold craft cocktails flowing as returnees poured their hearts into brushstrokes.',
      icon: Palette
    },
    {
      id: 'games',
      title: 'Tabletop Oware & Speed Friending',
      tag: '★ OWARE & CARDS ★',
      time: '17:45 GMT',
      badge: 'SPEED FRIENDING',
      image: '/assets/community-table-qr.jpg',
      rotation: 'rotate-2 sm:rotate-3',
      description: 'Traditional Ghanaian board games, icebreaker conversation card decks, and unscripted laughter across community tables.',
      icon: Coffee
    }
  ];

  return (
    <section 
      id="highlights" 
      className="w-full relative overflow-hidden selection:bg-[#EFE8DD] selection:text-black"
    >
      
      {/* =========================================================================
          PAGE 1: THE ARRIVAL, NAMETAGS & ICEBREAKERS (WHITE BACKGROUND)
          Standard Webpage Size 1 (~100vh / min-h-screen)
          Heading with Image 2 Typography & Gen-Z Sticker Vibes
          ========================================================================= */}
      <div className="w-full bg-[#FFFFFF] text-[#111111] min-h-screen pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 relative flex flex-col justify-between">
        
        {/* Ambient subtle sand background glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#EFE8DD]/40 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto w-full relative z-10 space-y-12 sm:space-y-16">
          
          {/* ===================================================================
              IMAGE 2 HEADING SECTION: GEN-Z BOLD STACKED TYPOGRAPHY WITH STICKERS
              =================================================================== */}
          <div className="relative text-center max-w-4xl mx-auto pt-4 sm:pt-6">
            
            {/* Top Tape Sticker (Cyan Masking Tape) */}
            <div className="inline-block mb-3 sm:mb-4">
              <span className="inline-flex items-center gap-1.5 bg-[#A8DADC] text-black border-2 border-black font-mono text-xs sm:text-sm font-extrabold px-4 py-1 -rotate-2 shadow-sm uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>UNFILTERED COMMUNITY RECAP</span>
              </span>
            </div>

            {/* Huge Stacked Bold Heading (Matching Image 2 Style) */}
            <div className="relative">
              
              {/* Left Floating Sticker: 8-Point Retro Sparkle Star */}
              <div 
                className="absolute -left-2 sm:-left-8 -top-6 sm:-top-8 w-12 sm:w-16 h-12 sm:h-16 text-[#C87028] animate-pulse pointer-events-none select-none"
                aria-hidden="true"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full fill-current filter drop-shadow-sm">
                  <polygon points="50,0 62,38 100,50 62,62 50,100 38,62 0,50 38,38" />
                </svg>
              </div>

              {/* Left Floating Pin Sticker */}
              <div className="hidden sm:inline-flex absolute -left-12 bottom-4 items-center gap-1.5 bg-[#E2D4F0] border-2 border-black text-black px-3 py-1 font-mono text-xs font-bold -rotate-12 shadow-xs">
                <MapPin className="w-3.5 h-3.5 text-purple-700" />
                <span>ACCRA, GH 🇬🇭</span>
              </div>

              {/* The Big 3-Line Text Stack */}
              <h1 className="font-black text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-[96px] tracking-tighter uppercase text-black leading-[0.92] select-none">
                <span className="block">MAIDEN EDITION</span>
                <span className="block relative inline-block">
                  COMMUNITY HANGOUT
                  
                  {/* Peach Ribbon Banner Sticker overlapping text */}
                  <span className="absolute -bottom-3 sm:-bottom-5 -left-4 sm:-left-6 bg-[#F4A261] text-black border-2 border-black px-3 sm:px-4 py-0.5 sm:py-1 font-mono text-[10px] sm:text-xs font-black uppercase tracking-wider rotate-[-6deg] shadow-sm whitespace-nowrap">
                    120+ DIASPORA RETURNIES
                  </span>
                </span>
                <span className="block text-[#111111]">HIGHLIGHTS</span>
              </h1>

              {/* Bottom Right Floating Scalloped Seal Badge (From Image 2) */}
              <div className="absolute -right-2 sm:-right-8 -bottom-8 sm:-bottom-12 z-20">
                <a
                  href="#games-section"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('games-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group relative flex items-center justify-center w-20 sm:w-24 h-20 sm:h-24 transition-transform hover:scale-110 active:scale-95 cursor-pointer"
                  aria-label="Scroll down to activities"
                >
                  {/* Scalloped Stamp Outer Ring */}
                  <div className="absolute inset-0 bg-[#E8D7F1] border-2 border-black rounded-full flex items-center justify-center shadow-md animate-spin-slow">
                    <svg viewBox="0 0 100 100" className="w-full h-full p-1 fill-black text-[9px] font-mono font-extrabold tracking-widest uppercase">
                      <path
                        id="stampCirclePath"
                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                        fill="none"
                      />
                      <text>
                        <textPath href="#stampCirclePath" startOffset="0%">
                          • KIN SOCIAL GHANA • MAIDEN RECAP •
                        </textPath>
                      </text>
                    </svg>
                  </div>

                  {/* Dark Center with Bouncing Arrow */}
                  <div className="relative z-10 w-9 sm:w-11 h-9 sm:h-11 rounded-full bg-black text-white flex items-center justify-center shadow-xs group-hover:bg-[#C87028] transition-colors">
                    <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce" />
                  </div>
                </a>
              </div>

            </div>

            {/* Subtitle with Marcel Scroll Reveal Text */}
            <div className="mt-8 sm:mt-12 max-w-2xl mx-auto px-4">
              <ScrollRevealText
                as="p"
                className="text-base sm:text-lg lg:text-xl text-[#5A544D] leading-relaxed font-normal"
              >
                How 120+ returnees, expats, and creative locals arrived as total strangers and left having found their chosen family in Accra.
              </ScrollRevealText>
            </div>

          </div>

          {/* ===================================================================
              PAGE 1 CREATIVE FRAMES: ARRIVAL & FIRST INTROS (GEN-Z VIBES)
              =================================================================== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center pt-2">
            
            {/* Feature Frame A: The Nametag & Welcome Desk */}
            <div className="relative group">
              {/* Angled Masking Tape Top Corner */}
              <div 
                className="absolute -top-3.5 left-8 w-24 h-7 bg-[#FFF275]/85 border border-black/20 z-30 -rotate-3 shadow-xs pointer-events-none"
                aria-hidden="true"
              />

              {/* Polaroid Frame Card with drop shadow */}
              <div className="bg-white p-3.5 sm:p-5 border-2 border-black shadow-2xl transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-[-0.5deg]">
                <div className="relative w-full h-[280px] xs:h-[320px] sm:h-[360px] overflow-hidden bg-black">
                  <img
                    src="/assets/community-women-nametags.jpg"
                    alt="Arrival and Nametags - Kin Social Maiden Edition"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Stamp Tag */}
                  <div className="absolute top-3 right-3 bg-black/85 backdrop-blur-xs text-white text-[11px] font-mono font-bold px-2.5 py-1 uppercase tracking-wider">
                    15:00 GMT • CHECK-IN
                  </div>
                  {/* Bottom badge */}
                  <div className="absolute bottom-3 left-3 bg-[#EFE8DD] text-black border border-black text-[10px] font-mono font-extrabold px-2.5 py-1 uppercase tracking-wider shadow-xs">
                    ★ NO AWKWARD SMALL TALK ★
                  </div>
                </div>

                {/* Polaroid Caption Footer */}
                <div className="pt-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-base sm:text-lg text-black tracking-tight">
                      Handwritten Nametags & Welcome Hugs
                    </h3>
                    <p className="text-xs text-gray-500 font-mono mt-0.5">
                      Arrival Desk • Sandbox Beach Club
                    </p>
                  </div>
                  <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
                    ✓
                  </span>
                </div>
              </div>
            </div>

            {/* Feature Frame B: The Founder Welcome & Botanical Drinks */}
            <div className="relative group">
              {/* Angled Masking Tape Top Right Corner */}
              <div 
                className="absolute -top-3.5 right-8 w-24 h-7 bg-[#A8DADC]/85 border border-black/20 z-30 rotate-2 shadow-xs pointer-events-none"
                aria-hidden="true"
              />

              {/* Polaroid Frame Card with drop shadow */}
              <div className="bg-white p-3.5 sm:p-5 border-2 border-black shadow-2xl transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-[0.5deg]">
                <div className="relative w-full h-[280px] xs:h-[320px] sm:h-[360px] overflow-hidden bg-black">
                  <img
                    src="/assets/community-cocktail-woman.jpg"
                    alt="Golden Hour Cocktails - Kin Social Maiden Edition"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Stamp Tag */}
                  <div className="absolute top-3 right-3 bg-[#C87028] text-white text-[11px] font-mono font-bold px-2.5 py-1 uppercase tracking-wider">
                    SIGNATURE CRAFT SIPS
                  </div>
                  {/* Bottom badge */}
                  <div className="absolute bottom-3 left-3 bg-black text-white text-[10px] font-mono font-extrabold px-2.5 py-1 uppercase tracking-wider shadow-xs">
                    ★ CHOSEN FAMILY ENERGY ★
                  </div>
                </div>

                {/* Polaroid Caption Footer */}
                <div className="pt-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-base sm:text-lg text-black tracking-tight">
                      Botanical Hibiscus & Golden Hour Toasts
                    </h3>
                    <p className="text-xs text-gray-500 font-mono mt-0.5">
                      Welcome Mixer • Cold Drinks In Hand
                    </p>
                  </div>
                  <span className="w-8 h-8 rounded-full bg-[#FAF3EB] text-[#C87028] flex items-center justify-center font-bold text-xs">
                    🍹
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Quick Gen-Z Activity Pill Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-4">
            <span className="px-3.5 py-1.5 bg-[#FAF7F2] border border-black/15 text-xs font-mono font-bold text-neutral-700 uppercase">
              [ 15:00 GMT ARRIVALS ]
            </span>
            <span className="px-3.5 py-1.5 bg-[#FAF7F2] border border-black/15 text-xs font-mono font-bold text-neutral-700 uppercase">
              [ HANDWRITTEN NAMETAGS ]
            </span>
            <span className="px-3.5 py-1.5 bg-[#FAF7F2] border border-black/15 text-xs font-mono font-bold text-neutral-700 uppercase">
              [ 100+ STRANGERS TO FAMILY ]
            </span>
            <span className="px-3.5 py-1.5 bg-[#FAF7F2] border border-black/15 text-xs font-mono font-bold text-neutral-700 uppercase">
              [ FIRST DRINK ON US ]
            </span>
          </div>

        </div>

      </div>

      {/* =========================================================================
          SLEEK TORN PAPER DIVIDER 1
          Transition from Page 1 (White #FFFFFF) down into Page 2 (Black #0A0A0A)
          ========================================================================= */}
      <TornPaperDivider fill="#FFFFFF" className="-mb-1" />

      {/* =========================================================================
          PAGE 2: THE GAMES, TRIVIA & CREATIVE SOUL (DEEP BLACK #0A0A0A)
          Standard Webpage Size 2 (~100vh / min-h-screen)
          Matches Image 1 Middle Section: Tilted Cards with Neon/Amber Tags
          ========================================================================= */}
      <div 
        id="games-section"
        className="w-full bg-[#0A0A0A] text-white min-h-screen py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative flex flex-col justify-between"
      >
        
        {/* Subtle background ambient grain & glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-gradient-to-b from-[#C87028]/10 via-[#EFE8DD]/5 to-transparent blur-[140px] pointer-events-none" />

        <div className="max-w-6xl mx-auto w-full relative z-10 space-y-12 sm:space-y-16">
          
          {/* Middle Section Gen-Z Header (Like Image 1 Middle Section) */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 border border-white/20 rounded-full font-mono text-xs uppercase tracking-widest text-[#EFE8DD]">
              <Flame className="w-3.5 h-3.5 text-[#C87028]" />
              <span>THE ACTIVITIES & ENERGY</span>
            </div>

            <ScrollRevealText
              as="h2"
              className="font-black text-3xl xs:text-4xl sm:text-6xl lg:text-7xl tracking-tighter uppercase leading-[0.95] text-white"
            >
              <span>THE GAMES & VIBES </span>
              <span className="text-[#C87028]">UNLOCKED</span>
            </ScrollRevealText>

            <ScrollRevealText
              as="p"
              className="text-sm sm:text-base lg:text-lg text-neutral-400 font-light max-w-xl mx-auto leading-relaxed"
            >
              From intense Ghana trivia showdowns to open-air acrylic painting and tabletop board games across the sun-drenched terrace.
            </ScrollRevealText>
          </div>

          {/* ===================================================================
              IMAGE 1 MIDDLE AESTHETIC: 3 TILTED CARDS WITH NEON/AMBER TAPE TAGS
              =================================================================== */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6 lg:gap-8 pt-4">
            {activities.map((activity, idx) => {
              const IconComp = activity.icon;
              return (
                <div 
                  key={activity.id}
                  className={`relative group transition-all duration-500 hover:scale-105 hover:z-30 cursor-pointer ${activity.rotation}`}
                >
                  {/* Neon/Amber Top Tape Tag (Exactly like Image 1 middle tags) */}
                  <div className="absolute -top-3.5 left-6 z-30">
                    <span className="bg-[#FFF275] text-black border-2 border-black font-mono text-[11px] font-black px-3 py-0.5 uppercase tracking-wider shadow-sm block">
                      {activity.tag}
                    </span>
                  </div>

                  {/* Corner Badge Tag */}
                  <div className="absolute -bottom-2.5 right-6 z-30">
                    <span className="bg-[#C87028] text-white font-mono text-[10px] font-bold px-2.5 py-0.5 uppercase tracking-wider shadow-sm block">
                      {activity.badge}
                    </span>
                  </div>

                  {/* Card Container with Brutalist White Border & Corner Brackets */}
                  <div className="bg-[#141414] border-2 border-white/80 p-3 sm:p-4 shadow-2xl relative overflow-hidden transition-colors group-hover:border-[#C87028]">
                    
                    {/* Timestamp Ribbon */}
                    <div className="flex items-center justify-between pb-2 text-[10px] font-mono text-neutral-400 border-b border-white/10 mb-3">
                      <div className="flex items-center gap-1.5 text-white font-bold">
                        <IconComp className="w-3.5 h-3.5 text-[#C87028]" />
                        <span>ACTIVITY 0{idx + 1}</span>
                      </div>
                      <span className="text-[#FFF275] font-bold">{activity.time}</span>
                    </div>

                    {/* Photo Window */}
                    <div className="relative w-full h-[260px] xs:h-[300px] overflow-hidden bg-black mb-3">
                      <img
                        src={activity.image}
                        alt={activity.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter contrast-105"
                        loading="lazy"
                      />
                      {/* Subtle green/amber duotone overlay on hover */}
                      <div className="absolute inset-0 bg-[#C87028]/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    </div>

                    {/* Card Title & Description */}
                    <div className="space-y-1.5 pt-1">
                      <h3 className="font-serif font-bold text-lg sm:text-xl text-white group-hover:text-[#FFF275] transition-colors leading-tight">
                        {activity.title}
                      </h3>
                      <p className="text-xs text-neutral-400 font-light leading-relaxed line-clamp-3">
                        {activity.description}
                      </p>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* Underlined Brutalist Gen-Z Action Link */}
          <div className="text-center pt-4">
            <a
              href="#recap-section"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('recap-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-white hover:text-[#FFF275] font-mono font-black text-xs sm:text-sm tracking-widest uppercase border-b-2 border-white hover:border-[#FFF275] pb-1 transition-all cursor-pointer"
            >
              <span>SEE STATS & HIGHLIGHT REEL</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </a>
          </div>

        </div>

      </div>

      {/* =========================================================================
          SLEEK TORN PAPER DIVIDER 2
          Transition from Page 2 (Black #0A0A0A) down into Page 3 (Brand Grey #EFE8DD)
          ========================================================================= */}
      <TornPaperDivider fill="#0A0A0A" className="-mb-1" />

      {/* =========================================================================
          PAGE 3: THE AFTER-HOURS RHYTHM, VIDEO SPOTLIGHT & STATS (BRAND GREY #EFE8DD)
          Standard Webpage Size 3 (~100vh / min-h-screen)
          Matches Image 1 Bottom Section: 4 Stat Boxes with Corner Brackets
          Includes Interactive Video Highlight Player
          ========================================================================= */}
      <div 
        id="recap-section"
        className="w-full bg-[#EFE8DD] text-[#111111] min-h-screen py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative flex flex-col justify-between"
      >
        
        {/* Subtle paper texture overlay */}
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#C87028_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-6xl mx-auto w-full relative z-10 space-y-12 sm:space-y-16">
          
          {/* Page 3 Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="inline-block bg-black text-[#EFE8DD] font-mono text-[11px] font-black px-3.5 py-1 uppercase tracking-widest">
              MAIDEN EDITION • BY THE NUMBERS
            </span>

            <ScrollRevealText
              as="h2"
              className="font-black text-3xl xs:text-4xl sm:text-5xl lg:text-6xl tracking-tighter uppercase text-black"
            >
              WHAT HAPPENED IN ACCRA
            </ScrollRevealText>

            <p className="text-sm sm:text-base text-[#615A52] font-normal leading-relaxed">
              Unfiltered community stats, laughter counts, and the official recap reel of our first gathering.
            </p>
          </div>

          {/* ===================================================================
              IMAGE 1 BOTTOM AESTHETIC: 4 BRUTALIST STAT BOXES WITH CORNER BRACKETS
              =================================================================== */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            
            {/* Stat Box 1 */}
            <div className="bg-black text-white p-5 sm:p-6 border-2 border-black relative group shadow-lg transition-transform hover:-translate-y-1">
              {/* Corner Brackets */}
              <div className="absolute top-1.5 left-1.5 w-2.5 h-2.5 border-t-2 border-l-2 border-white/80" />
              <div className="absolute top-1.5 right-1.5 w-2.5 h-2.5 border-t-2 border-r-2 border-white/80" />
              <div className="absolute bottom-1.5 left-1.5 w-2.5 h-2.5 border-b-2 border-l-2 border-white/80" />
              <div className="absolute bottom-1.5 right-1.5 w-2.5 h-2.5 border-b-2 border-r-2 border-white/80" />

              <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block mb-2">
                ATTENDEES
              </span>
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-2 leading-none">
                120+
              </div>
              <h4 className="font-mono text-xs sm:text-sm font-bold uppercase text-[#FFF275] mb-1">
                KIN MEMBERS
              </h4>
              <p className="text-[11px] sm:text-xs text-neutral-300 font-light leading-relaxed">
                UK, US, Canada, Germany returnees and creative locals united in one space.
              </p>
            </div>

            {/* Stat Box 2 */}
            <div className="bg-black text-white p-5 sm:p-6 border-2 border-black relative group shadow-lg transition-transform hover:-translate-y-1">
              {/* Corner Brackets */}
              <div className="absolute top-1.5 left-1.5 w-2.5 h-2.5 border-t-2 border-l-2 border-white/80" />
              <div className="absolute top-1.5 right-1.5 w-2.5 h-2.5 border-t-2 border-r-2 border-white/80" />
              <div className="absolute bottom-1.5 left-1.5 w-2.5 h-2.5 border-b-2 border-l-2 border-white/80" />
              <div className="absolute bottom-1.5 right-1.5 w-2.5 h-2.5 border-b-2 border-r-2 border-white/80" />

              <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block mb-2">
                TRIVIA & GAMES
              </span>
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#C87028] mb-2 leading-none">
                48
              </div>
              <h4 className="font-mono text-xs sm:text-sm font-bold uppercase text-[#FFF275] mb-1">
                GAME ROUNDS
              </h4>
              <p className="text-[11px] sm:text-xs text-neutral-300 font-light leading-relaxed">
                Cultural debates, oware showdowns, and high-energy sisterhood battles.
              </p>
            </div>

            {/* Stat Box 3 */}
            <div className="bg-black text-white p-5 sm:p-6 border-2 border-black relative group shadow-lg transition-transform hover:-translate-y-1">
              {/* Corner Brackets */}
              <div className="absolute top-1.5 left-1.5 w-2.5 h-2.5 border-t-2 border-l-2 border-white/80" />
              <div className="absolute top-1.5 right-1.5 w-2.5 h-2.5 border-t-2 border-r-2 border-white/80" />
              <div className="absolute bottom-1.5 left-1.5 w-2.5 h-2.5 border-b-2 border-l-2 border-white/80" />
              <div className="absolute bottom-1.5 right-1.5 w-2.5 h-2.5 border-b-2 border-r-2 border-white/80" />

              <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block mb-2">
                DURATION
              </span>
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-2 leading-none">
                6+
              </div>
              <h4 className="font-mono text-xs sm:text-sm font-bold uppercase text-[#FFF275] mb-1">
                HOURS OF VIBES
              </h4>
              <p className="text-[11px] sm:text-xs text-neutral-300 font-light leading-relaxed">
                From sunny 3PM arrivals into late-night DJ rhythms on the rooftop deck.
              </p>
            </div>

            {/* Stat Box 4 */}
            <div className="bg-black text-white p-5 sm:p-6 border-2 border-black relative group shadow-lg transition-transform hover:-translate-y-1">
              {/* Corner Brackets */}
              <div className="absolute top-1.5 left-1.5 w-2.5 h-2.5 border-t-2 border-l-2 border-white/80" />
              <div className="absolute top-1.5 right-1.5 w-2.5 h-2.5 border-t-2 border-r-2 border-white/80" />
              <div className="absolute bottom-1.5 left-1.5 w-2.5 h-2.5 border-b-2 border-l-2 border-white/80" />
              <div className="absolute bottom-1.5 right-1.5 w-2.5 h-2.5 border-b-2 border-r-2 border-white/80" />

              <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block mb-2">
                CONNECTION
              </span>
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#C87028] mb-2 leading-none">
                100%
              </div>
              <h4 className="font-mono text-xs sm:text-sm font-bold uppercase text-[#FFF275] mb-1">
                CHOSEN FAMILY
              </h4>
              <p className="text-[11px] sm:text-xs text-neutral-300 font-light leading-relaxed">
                Strangers who walked in alone and left with new weekend plans in Accra.
              </p>
            </div>

          </div>

          {/* ===================================================================
              OFFICIAL MAIDEN HIGHLIGHT VIDEO (PORTRAIT 9:16 VERTICAL REEL)
              =================================================================== */}
          <div className="bg-white border-2 border-black p-5 sm:p-8 lg:p-10 shadow-2xl relative">
            
            {/* Top Tape Label */}
            <div className="absolute -top-3.5 left-8 z-20">
              <span className="bg-[#C87028] text-white border-2 border-black font-mono text-xs font-black px-4 py-1 uppercase tracking-wider shadow-xs">
                ★ OFFICIAL HIGHLIGHT REEL • 9:16 PORTRAIT ★
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Authentic Portrait 9:16 Smartphone Reel Player (5 cols) */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[320px] sm:max-w-[340px] md:max-w-[350px]">
                  
                  {/* Floating Tape Sticker on top corner */}
                  <div className="absolute -top-3.5 -right-3 z-30 pointer-events-none select-none">
                    <span className="bg-[#FFF275] text-black border border-black font-mono text-[10px] font-black px-3 py-1 rotate-6 shadow-xs uppercase block">
                      ★ BBQ-MIXER LIVE ★
                    </span>
                  </div>

                  {/* Smartphone Bezel Card */}
                  <div className="relative aspect-[9/16] w-full bg-black rounded-[36px] p-2.5 sm:p-3 border-[5px] border-black shadow-2xl overflow-hidden select-none group">
                    
                    {/* Top Speaker Notch / Dynamic Island */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-30 pointer-events-none flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-neutral-900 border border-neutral-800" />
                    </div>

                    {/* HTML5 Real Video Element (Portrait 9:16) */}
                    <video
                      ref={videoRef}
                      src="/assets/maiden-hangout-recap.mp4"
                      className="w-full h-full object-cover rounded-[26px] cursor-pointer"
                      playsInline
                      loop
                      muted={isMuted}
                      onClick={togglePlay}
                      onTimeUpdate={handleTimeUpdate}
                      onLoadedMetadata={(e) => setDuration(e.target.duration)}
                      onPlay={() => setIsPlayingVideo(true)}
                      onPause={() => setIsPlayingVideo(false)}
                      poster="/assets/community-man-dancing-drink.jpg"
                    />

                    {/* Gradient Overlay for Top and Bottom Controls */}
                    <div className="absolute inset-0 rounded-[26px] bg-gradient-to-t from-black/85 via-transparent to-black/50 pointer-events-none" />

                    {/* Top Status Overlays */}
                    <div className="absolute top-5 left-5 right-5 z-20 flex items-center justify-between text-white font-mono text-[10px]">
                      <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-full border border-white/20">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        <span className="font-bold">REC</span>
                        <span className="text-neutral-400">• 0:33</span>
                      </div>

                      {/* Mute / Unmute Button */}
                      <button
                        onClick={toggleMute}
                        className={`flex items-center gap-1 px-2.5 py-1 rounded-full border transition-all cursor-pointer ${
                          isMuted 
                            ? 'bg-[#C87028] text-white border-white animate-pulse' 
                            : 'bg-black/60 backdrop-blur-xs text-[#FFF275] border-white/30'
                        }`}
                        aria-label={isMuted ? 'Tap for Sound' : 'Mute Sound'}
                      >
                        {isMuted ? (
                          <>
                            <VolumeX className="w-3.5 h-3.5" />
                            <span className="text-[9px] font-bold uppercase tracking-wider">Sound Off</span>
                          </>
                        ) : (
                          <>
                            <Volume2 className="w-3.5 h-3.5" />
                            <span className="text-[9px] font-bold uppercase tracking-wider">Audio On</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Centered Play / Pause Floating Overlay */}
                    {!isPlayingVideo && (
                      <button
                        onClick={togglePlay}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-[#C87028] hover:bg-[#B36020] text-white flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95 cursor-pointer border-2 border-white"
                        aria-label="Play Reel Video"
                      >
                        <Play className="w-8 h-8 sm:w-9 sm:h-9 fill-current translate-x-0.5" />
                      </button>
                    )}

                    {/* Bottom Reel Caption & Info */}
                    <div className="absolute bottom-4 left-4 right-4 z-20 space-y-2 text-white">
                      
                      {/* User Badge */}
                      <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center p-0.5">
                          <img src="/assets/kin-social-logo.png" alt="Kin" className="w-full h-full object-contain" />
                        </div>
                        <span className="font-bold text-xs">@kinsocialgh</span>
                        <span className="w-3.5 h-3.5 rounded-full bg-blue-500 text-white flex items-center justify-center text-[8px] font-black">
                          ✓
                        </span>
                      </div>

                      <p className="text-[11px] leading-snug line-clamp-2 text-neutral-200 font-normal">
                        Went to the first edition of Kin Social (@kinsocialgh), a community BBQ-mixer that brought together diaspora returnees in Accra...
                      </p>

                      {/* Audio track label with animated soundbars */}
                      <div className="flex items-center justify-between text-[10px] text-[#FFF275] font-mono pt-0.5">
                        <div className="flex items-center gap-1.5 truncate">
                          <Music className="w-3 h-3 shrink-0" />
                          <span className="truncate">Accra Highlife & BBQ Live Audio</span>
                        </div>
                        <div className="flex items-end gap-0.5 h-3 shrink-0">
                          {[6, 12, 8, 14, 10].map((h, i) => (
                            <span 
                              key={i} 
                              className={`w-0.5 bg-[#FFF275] rounded-full transition-all ${
                                isPlayingVideo ? 'animate-pulse' : 'opacity-50'
                              }`} 
                              style={{ height: isPlayingVideo ? `${(i % 3 + 1) * 4}px` : '4px' }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Video Progress Scrubber */}
                      <div 
                        className="w-full h-1.5 bg-white/30 rounded-full overflow-hidden cursor-pointer"
                        onClick={(e) => {
                          const rect = e.currentTarget.getBoundingClientRect();
                          const pos = (e.clientX - rect.left) / rect.width;
                          seekTo(pos * (videoRef.current?.duration || 33.2));
                        }}
                      >
                        <div 
                          className="h-full bg-[#C87028] transition-all duration-150"
                          style={{ width: `${progress}%` }}
                        />
                      </div>

                      {/* Bottom Quick Controls Row */}
                      <div className="flex items-center justify-between text-[10px] font-mono text-neutral-300 pt-0.5">
                        <div className="flex items-center gap-2">
                          <button onClick={togglePlay} className="hover:text-white cursor-pointer font-bold">
                            {isPlayingVideo ? 'PAUSE' : 'PLAY'}
                          </button>
                          <span>•</span>
                          <button onClick={restartVideo} className="hover:text-white cursor-pointer flex items-center gap-0.5">
                            <RotateCcw className="w-2.5 h-2.5" />
                            <span>RESET</span>
                          </button>
                        </div>
                        <span>
                          0:{Math.floor(currentTime).toString().padStart(2, '0')} / 0:33
                        </span>
                      </div>

                    </div>

                  </div>

                </div>
              </div>

              {/* Right Column: Narrative, Interactive Timestamps & Information (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 bg-black text-[#EFE8DD] font-mono text-xs font-bold uppercase tracking-wider">
                      🎬 PORTRAIT 9:16 REEL
                    </span>
                    <span className="px-2.5 py-1 bg-[#F4EFE6] text-[#C87028] border border-[#E9DDC9] font-mono text-xs font-bold uppercase">
                      MAIDEN RECAP
                    </span>
                    <span className="text-neutral-500 font-mono text-xs">
                      • 33 SECONDS
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-black tracking-tight leading-tight">
                    "Went to the first edition of Kin Social..."
                  </h3>

                  <p className="text-base text-[#C87028] font-mono font-bold">
                    Community BBQ-Mixer • Accra, Ghana
                  </p>

                  <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
                    Captured vertically on smartphone by our community guests. No staging, no scripts — just the aroma of the open charcoal grill, clinking botanical drinks, high-energy games, and genuine diaspora sisterhood.
                  </p>
                </div>

                {/* Interactive Clickable Timestamps (Jump to Reel Moment) */}
                <div className="p-4 sm:p-5 bg-[#FAF7F2] border border-black/15 space-y-3">
                  <div className="flex items-center justify-between border-b border-black/10 pb-2">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-black">
                      ⚡ JUMP TO REEL HIGHLIGHTS:
                    </span>
                    <span className="font-mono text-[10px] text-neutral-500">
                      CLICK TIMESTAMP TO PLAY
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                    <button
                      onClick={() => seekTo(0)}
                      className="flex items-center gap-2 p-2 bg-white hover:bg-[#FFF275] border border-neutral-300 text-black text-left transition-colors cursor-pointer group"
                    >
                      <span className="px-1.5 py-0.5 bg-black text-white text-[10px] font-bold group-hover:bg-[#C87028]">
                        0:00
                      </span>
                      <span className="truncate">Arrivals & Welcome Nametags</span>
                    </button>

                    <button
                      onClick={() => seekTo(8)}
                      className="flex items-center gap-2 p-2 bg-white hover:bg-[#FFF275] border border-neutral-300 text-black text-left transition-colors cursor-pointer group"
                    >
                      <span className="px-1.5 py-0.5 bg-black text-white text-[10px] font-bold group-hover:bg-[#C87028]">
                        0:08
                      </span>
                      <span className="truncate">Charcoal BBQ & Signature Sips</span>
                    </button>

                    <button
                      onClick={() => seekTo(18)}
                      className="flex items-center gap-2 p-2 bg-white hover:bg-[#FFF275] border border-neutral-300 text-black text-left transition-colors cursor-pointer group"
                    >
                      <span className="px-1.5 py-0.5 bg-black text-white text-[10px] font-bold group-hover:bg-[#C87028]">
                        0:18
                      </span>
                      <span className="truncate">Icebreaker Circles & Games</span>
                    </button>

                    <button
                      onClick={() => seekTo(26)}
                      className="flex items-center gap-2 p-2 bg-white hover:bg-[#FFF275] border border-neutral-300 text-black text-left transition-colors cursor-pointer group"
                    >
                      <span className="px-1.5 py-0.5 bg-black text-white text-[10px] font-bold group-hover:bg-[#C87028]">
                        0:26
                      </span>
                      <span className="truncate">Rooftop Dancing & Golden Hour</span>
                    </button>
                  </div>
                </div>

                {/* Specs Pill List */}
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-neutral-600">
                  <span className="px-2.5 py-1 bg-black/5 rounded-xs">
                    📱 720 × 1280 HD PORTRAIT
                  </span>
                  <span className="px-2.5 py-1 bg-black/5 rounded-xs">
                    🔊 ORIGINAL SOUNDTRACK
                  </span>
                  <span className="px-2.5 py-1 bg-black/5 rounded-xs">
                    🇬🇭 SANDBOX LABONE, ACCRA
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={onOpenJoin}
                    className="w-full sm:w-auto bg-[#C87028] hover:bg-[#B36020] text-white px-8 py-3.5 font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Join Next Hangout</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                  <a
                    href="https://instagram.com/kinsocialgh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto text-center border-2 border-black hover:bg-black hover:text-white text-black px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                  >
                    Watch on IG @kinsocialgh
                  </a>
                </div>

              </div>

            </div>

          </div>

          {/* Bottom Link to Gallery */}
          <div className="text-center pt-2">
            <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">
              • WANT TO SEE MORE CANDID MOMENTS? •
            </p>
            <a
              href="#gallery"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-black hover:text-[#C87028] font-mono font-black text-xs sm:text-sm tracking-widest uppercase border-b-2 border-black hover:border-[#C87028] pb-1 transition-all cursor-pointer"
            >
              <span>ENTER THE 3D CINEMATIC GALLERY</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </a>
          </div>

        </div>

      </div>

      {/* =========================================================================
          SLEEK TORN PAPER DIVIDER 3
          Transition from Page 3 (Brand Grey #EFE8DD) down into the Gallery (Black #0A0A0A)
          ========================================================================= */}
      <TornPaperDivider fill="#EFE8DD" className="-mb-1" />

    </section>
  );
}
