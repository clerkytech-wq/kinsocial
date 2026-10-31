import React from 'react';

export function CrossedStrips() {
  const topStripPhrases = [
    { text: "THE FAMILY REUNION", highlight: true },
    { text: "DIASPORA RETURNEES", highlight: false },
    { text: "ACCRA, GHANA", highlight: true },
    { text: "COME AS STRANGERS", highlight: false },
    { text: "LEAVE AS FAMILY", highlight: true },
    { text: "SUNDAY ROOFTOPS", highlight: false },
    { text: "CHOSEN FAMILY", highlight: true },
    { text: "NO AWKWARD NETWORKING", highlight: false },
    { text: "@KINSOCIALGH", highlight: true },
    { text: "REPAT LIFE & CULTURE", highlight: false }
  ];

  const bottomStripPhrases = [
    "OSU",
    "LABONE",
    "CANTONMENTS",
    "EAST LEGON",
    "BOARD GAMES & OWARE",
    "CHOP BAR VIBES & JOLLOF",
    "CO-WORKING & FOUNDERS",
    "HIGHLIFE & AMAPIANO",
    "#WITHMYKIN",
    "#COMEASYOUARE"
  ];

  return (
    <section className="relative w-full overflow-hidden pt-8 sm:pt-12 lg:pt-16 pb-16 sm:pb-24 lg:pb-28 select-none bg-white">
      
      {/* =========================================================
          COMBINED WRAPPER TILTED AT -2.8 DEGREES
          Comfortably spaced below community handle text so top-right
          angled corner is never clipped or sharply cut off
          Colors: Deep Black & Top Menu Grey (#EFE8DD)
          ========================================================= */}
      <div className="w-[140%] -ml-[20%] transform -rotate-[2.8deg] origin-center shadow-xl relative z-10 border-y border-black/15">
        
        {/* TOP STRIP: Bold Deep Black Bar (Moving Left) */}
        <div className="w-full bg-black text-white py-3.5 sm:py-5 lg:py-6 border-b border-white/10 overflow-hidden">
          <div className="animate-marquee-left flex items-center whitespace-nowrap text-sm xs:text-base sm:text-2xl lg:text-[28px] font-mono font-black tracking-wider uppercase">
            {/* Set 1 */}
            {topStripPhrases.map((item, idx) => (
              <span key={`top-a-${idx}`} className="flex items-center">
                <span className="text-[#EFE8DD] px-3 sm:px-6 text-xs sm:text-base lg:text-lg font-bold">•</span>
                <span className={item.highlight ? "text-[#EFE8DD] font-black" : "text-white"}>{item.text}</span>
              </span>
            ))}
            {/* Set 2 (seamless infinite loop) */}
            {topStripPhrases.map((item, idx) => (
              <span key={`top-b-${idx}`} className="flex items-center">
                <span className="text-[#EFE8DD] px-3 sm:px-6 text-xs sm:text-base lg:text-lg font-bold">•</span>
                <span className={item.highlight ? "text-[#EFE8DD] font-black" : "text-white"}>{item.text}</span>
              </span>
            ))}
          </div>
        </div>

        {/* BOTTOM STRIP: Warm Menu Grey Bar #EFE8DD (Moving Right) */}
        <div className="w-full bg-[#EFE8DD] text-[#111111] py-2.5 sm:py-4.5 lg:py-5.5 overflow-hidden border-t border-[#E3D9CC]">
          <div className="animate-marquee-right flex items-center whitespace-nowrap text-xs xs:text-sm sm:text-lg lg:text-[21px] font-mono font-black tracking-wider uppercase">
            {/* Set 1 */}
            {bottomStripPhrases.map((phrase, idx) => (
              <span key={`bot-a-${idx}`} className="flex items-center">
                <span className="text-[#888177] px-3 sm:px-6 text-xs sm:text-base font-bold">•</span>
                <span className="text-[#111111] font-black">{phrase}</span>
              </span>
            ))}
            {/* Set 2 (seamless infinite loop) */}
            {bottomStripPhrases.map((phrase, idx) => (
              <span key={`bot-b-${idx}`} className="flex items-center">
                <span className="text-[#888177] px-3 sm:px-6 text-xs sm:text-base font-bold">•</span>
                <span className="text-[#111111] font-black">{phrase}</span>
              </span>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
