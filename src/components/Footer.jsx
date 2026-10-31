import React, { useState } from 'react';
import { Mail, ArrowUpRight, ShieldCheck, Heart, Send, Check } from 'lucide-react';
import { ScrollRevealText } from './ScrollRevealText';

export function Footer({ onOpenJoin, onOpenHowItWorks }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmail('');
    }
  };

  return (
    <footer className="w-full bg-[#0D0D0D] text-white border-t border-[#222222] selection:bg-[#EFE8DD] selection:text-black">
      
      {/* =========================================================
          TOP BANNER: INVITATION CALL TO ACTION
          ========================================================= */}
      <div className="border-b border-[#1E1E1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="bg-[#151515] border border-[#2B2824] rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
            
            {/* Background glow accent in brand grey */}
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#EFE8DD]/5 blur-3xl rounded-full pointer-events-none"></div>

            <div className="space-y-3 text-center md:text-left z-10 max-w-xl">
              <div className="inline-flex items-center gap-2 bg-[#EFE8DD]/10 border border-[#EFE8DD]/20 rounded-full px-3 py-1 text-xs font-mono font-semibold text-[#EFE8DD]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>The Family Reunion • Accra, Ghana</span>
              </div>
              <ScrollRevealText
                as="h3"
                className="text-2xl sm:text-4xl font-bold tracking-tight text-white"
              >
                Ready to find your chosen family in Accra?
              </ScrollRevealText>
              <ScrollRevealText
                as="p"
                className="text-sm sm:text-base text-[#9C9488] leading-relaxed"
              >
                Connect with diaspora returnees, expats, and creatives intentional about living, building, and thriving in Ghana.
              </ScrollRevealText>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3.5 z-10 w-full md:w-auto">
              <button
                onClick={onOpenJoin}
                className="w-full sm:w-auto bg-[#EFE8DD] hover:bg-white text-[#111111] px-7 py-3.5 rounded-full text-sm sm:text-base font-bold shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer whitespace-nowrap text-center"
              >
                Join the Family
              </button>

              <a
                href="https://instagram.com/kinsocialgh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-transparent border border-white/20 hover:border-white text-white px-6 py-3.5 rounded-full text-sm sm:text-base font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>@kinsocialgh</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* =========================================================
          MAIN 4-COLUMN FOOTER NAVIGATION & INFORMATION
          ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Column 1: Brand & Identity (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-xl p-2 inline-flex items-center justify-center shadow-xs">
                <img
                  src="/assets/kin-social-logo.png"
                  alt="Kin Social Logo"
                  className="h-10 w-auto object-contain"
                />
              </div>
            </div>

            <p className="text-sm text-[#9C9488] leading-relaxed max-w-sm">
              Kin Social is an Accra-based community network that connects diaspora returnees, expats, and locals intentional about living, building, and thriving in Ghana. Come as strangers, leave as family.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-[#EFE8DD]/80">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Accra, GH 🇬🇭 • Labone • Cantonments • Osu • East Legon</span>
            </div>
          </div>

          {/* Column 2: Navigation Links (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-[#EFE8DD] uppercase">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-[#9C9488]">
              <li>
                <button
                  onClick={onOpenHowItWorks}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  How It Works
                </button>
              </li>
              <li>
                <a
                  href="#gatherings"
                  onClick={(e) => { e.preventDefault(); onOpenHowItWorks(); }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  The Family Reunion
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Maiden Gallery
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenHowItWorks}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenJoin}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Join WhatsApp Community
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-[#EFE8DD] uppercase">
              Contact & Social
            </h4>
            <ul className="space-y-2.5 text-sm text-[#9C9488]">
              <li>
                <a
                  href="mailto:hello@kinsocialgh.com"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-[#EFE8DD]" />
                  <span>Email Us</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/kinsocialgh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>@kinsocialgh</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#EFE8DD]" />
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenJoin}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  WhatsApp Network
                </button>
              </li>
              <li className="text-xs text-[#6B655E] pt-1">
                Bi-weekly Sunday Mixers & Co-working
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter / Private Mixer Invites (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-[#EFE8DD] uppercase">
              Stay in the Loop
            </h4>
            <p className="text-xs text-[#9C9488] leading-relaxed">
              Get notified first about upcoming mixers, rooftop dinners, and secret venue drops in Accra.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#181818] border border-[#2D2A26] focus:border-[#EFE8DD] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-[#6B655E] outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-3 bg-[#EFE8DD] hover:bg-white text-black rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center justify-center"
                >
                  <Send className="w-3 h-3" />
                </button>
              </div>

              {subscribed && (
                <p className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1 animate-in fade-in">
                  <Check className="w-3.5 h-3.5" />
                  <span>You're on the invite list! Welcome home.</span>
                </p>
              )}
            </form>
          </div>

        </div>
      </div>

      {/* =========================================================
          BOTTOM COPYRIGHT & LEGAL BAR
          ========================================================= */}
      <div className="border-t border-[#1C1C1C] bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6E675E]">
          
          <div className="flex items-center gap-1.5 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Kin Social Ghana.</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              <span>Made with</span>
              <Heart className="w-3 h-3 text-[#EFE8DD] fill-[#EFE8DD]" />
              <span>for the diaspora in Accra</span>
            </span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenHowItWorks}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={onOpenHowItWorks}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Community
            </button>
            <a
              href="https://instagram.com/kinsocialgh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#EFE8DD] transition-colors"
            >
              @kinsocialgh
            </a>
          </div>

        </div>
      </div>

    </footer>
  );
}
