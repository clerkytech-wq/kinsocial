import React from 'react';
import { X, Users, Calendar, Sparkles, Heart } from 'lucide-react';

export function HowItWorksModal({ isOpen, onClose, onOpenJoin }) {
  if (!isOpen) return null;

  const steps = [
    {
      num: "01",
      title: "Tap Into The Network",
      desc: "Join our verified WhatsApp diaspora community to get trusted recommendations on housing, co-working spaces, and city life in Accra.",
      icon: Users
    },
    {
      num: "02",
      title: "Pull Up to The Family Reunion",
      desc: "Attend our signature mixers and community hangouts. No awkward corporate networking—just good food, games, music, and genuine conversations.",
      icon: Calendar
    },
    {
      num: "03",
      title: "Find Your Chosen Family",
      desc: "Turn strangers into cousins. Whether you are a returnee, expat, or local, find your tribe and build lasting memories in the motherland.",
      icon: Heart
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="max-w-lg w-full bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 border border-[#E8DFC8] shadow-2xl relative text-[#111111]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-black/5 text-[#655E56] hover:text-black transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          <div className="space-y-1.5">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#6B655E]">
              Simple & Authentic
            </span>
            <h3 className="text-2xl font-bold tracking-tight text-[#111111]">
              How Kin Social Works
            </h3>
            <p className="text-xs text-[#6B655E]">
              "Come as strangers, leave as family." Here is how we make connecting in Accra effortless.
            </p>
          </div>

          <div className="space-y-3.5">
            {steps.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white border border-[#E8DFC8] flex items-start gap-3.5 shadow-sm"
                >
                  <div className="w-9 h-9 rounded-xl bg-black text-white flex items-center justify-center font-bold text-xs shrink-0">
                    {s.num}
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-sm font-bold text-[#111111]">{s.title}</h4>
                    <p className="text-xs text-[#6B655E] leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-2 flex items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenJoin();
              }}
              className="flex-1 py-3 rounded-full bg-black hover:bg-[#222222] text-white text-xs font-bold transition-all shadow-md cursor-pointer"
            >
              Join the Family Now
            </button>
            <button
              onClick={onClose}
              className="px-5 py-3 rounded-full bg-white hover:bg-[#F2ECE3] border border-[#DDD5C7] text-xs font-semibold text-[#111111] transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
