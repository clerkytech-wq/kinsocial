import React, { useState, useEffect } from 'react';
import { HeroHome } from './components/HeroHome';
import { CrossedStrips } from './components/CrossedStrips';
import { MaidenHighlights } from './components/MaidenHighlights';
import { GalleryShowcase } from './components/GalleryShowcase';
import { KinfolkReviews } from './components/KinfolkReviews';
import { EventsPage } from './components/EventsPage';
import { Footer } from './components/Footer';
import { JoinModal } from './components/JoinModal';
import { HowItWorksModal } from './components/HowItWorksModal';

export default function App() {
  const [activeTab, setActiveTab] = useState(() => {
    if (typeof window !== 'undefined' && window.location.hash.includes('events')) {
      return 'events';
    }
    return 'home';
  });

  const [isJoinOpen, setIsJoinOpen] = useState(false);
  const [isHowItWorksOpen, setIsHowItWorksOpen] = useState(false);

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash.includes('events')) {
        setActiveTab('events');
      } else {
        setActiveTab('home');
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateToEvents = () => {
    setActiveTab('events');
    window.location.hash = '#events';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    setActiveTab('home');
    window.location.hash = '#home';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full bg-white text-[#111111] overflow-x-hidden selection:bg-black selection:text-white">
      {activeTab === 'events' ? (
        /* =========================================================
            EVENTS PAGE (Matching Attached Lewistage Inspiration)
            ========================================================= */
        <EventsPage
          onNavigateHome={navigateToHome}
          onOpenJoin={() => setIsJoinOpen(true)}
          onOpenHowItWorks={() => setIsHowItWorksOpen(true)}
        />
      ) : (
        /* =========================================================
            HOME PAGE SECTIONS
            ========================================================= */
        <>
          {/* 1. Hero Page Section */}
          <HeroHome
            onOpenJoin={() => setIsJoinOpen(true)}
            onOpenHowItWorks={() => setIsHowItWorksOpen(true)}
            onNavigateEvents={navigateToEvents}
          />

          {/* 2. Tilted Moving Brand Strips Immediately Under Hero */}
          <CrossedStrips />

          {/* 3. Maiden Edition Community Hangout Highlights (3-Page Layout with Sleek Torn Paper Dividers) */}
          <MaidenHighlights
            onOpenJoin={() => setIsJoinOpen(true)}
          />

          {/* 4. The Maiden Edition 3D Cinematic Gallery Showcase */}
          <GalleryShowcase
            onOpenJoin={() => setIsJoinOpen(true)}
          />

          {/* 5. Kinfolk Reviews with Pop-out 3D Head Frames */}
          <KinfolkReviews />

          {/* 6. Comprehensive Standard Footer */}
          <Footer
            onOpenJoin={() => setIsJoinOpen(true)}
            onOpenHowItWorks={() => setIsHowItWorksOpen(true)}
          />
        </>
      )}

      {/* Global Modals */}
      <JoinModal
        isOpen={isJoinOpen}
        onClose={() => setIsJoinOpen(false)}
      />

      <HowItWorksModal
        isOpen={isHowItWorksOpen}
        onClose={() => setIsHowItWorksOpen(false)}
        onOpenJoin={() => setIsJoinOpen(true)}
      />
    </div>
  );
}
