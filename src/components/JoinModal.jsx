import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck } from 'lucide-react';

export function JoinModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    originCity: '',
    currentStatus: 'Just Relocated (0-12 months)',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="max-w-md w-full bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 border border-[#E8DFC8] shadow-2xl relative text-[#111111]">
        
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-black/5 text-[#655E56] hover:text-black transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="space-y-5">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black text-white text-[10px] font-bold tracking-wider uppercase font-mono">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                <span>Accra Diaspora Network</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-[#111111]">
                Join the Kin Social Family
              </h3>
              <p className="text-xs text-[#6B655E] leading-relaxed">
                Connect with diaspora returnees, expats, and locals living and thriving in Accra. Fill out your details below to receive our WhatsApp invite.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-semibold text-[#2D2A26] mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ama Mensah"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DDD5C7] text-[#111111] placeholder-[#9E9589] focus:outline-none focus:border-black transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-[#2D2A26] mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="ama@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DDD5C7] text-[#111111] placeholder-[#9E9589] focus:outline-none focus:border-black transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#2D2A26] mb-1">WhatsApp Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+233 ... / +44 ..."
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DDD5C7] text-[#111111] placeholder-[#9E9589] focus:outline-none focus:border-black transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-[#2D2A26] mb-1">Moving / Relocated From</label>
                  <input
                    type="text"
                    placeholder="e.g. London, NYC, Toronto"
                    value={formData.originCity}
                    onChange={(e) => setFormData({ ...formData, originCity: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DDD5C7] text-[#111111] placeholder-[#9E9589] focus:outline-none focus:border-black transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#2D2A26] mb-1">Current Status</label>
                  <select
                    value={formData.currentStatus}
                    onChange={(e) => setFormData({ ...formData, currentStatus: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DDD5C7] text-[#111111] focus:outline-none focus:border-black transition-colors"
                  >
                    <option value="Just Relocated (0-12 months)">Just Relocated (0-12 mos)</option>
                    <option value="Longtime Returnee (1+ yrs)">Longtime Returnee (1+ yrs)</option>
                    <option value="Digital Nomad / Visiting">Digital Nomad / Visiting</option>
                    <option value="Planning to Move Soon">Planning to Move Soon</option>
                    <option value="Local Ghanaian Connecting">Local Ghanaian Connecting</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-black hover:bg-[#222222] text-white font-bold text-xs tracking-wide transition-all shadow-md cursor-pointer"
                >
                  Join the Community
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#EAF7EE] text-[#1DB954] flex items-center justify-center mx-auto border border-[#C5EDD0]">
              <CheckCircle className="w-7 h-7" />
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold text-[#6B655E] uppercase tracking-widest">
                Akwaaba!
              </span>
              <h3 className="text-2xl font-bold text-[#111111]">
                Welcome to Kin Social, {formData.name || 'Friend'}!
              </h3>
              <p className="text-xs text-[#6B655E] max-w-sm mx-auto leading-relaxed">
                We've received your request. The team will reach out via WhatsApp with the private community link and next hangout details.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={handleClose}
                className="px-6 py-2.5 rounded-full bg-black text-white text-xs font-semibold hover:bg-[#222222] transition-colors cursor-pointer"
              >
                Back to Site
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
