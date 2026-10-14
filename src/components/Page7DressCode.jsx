import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Info, Shirt } from 'lucide-react';
import { MughalArchFrame, CornerOrnament, IslamicStar } from './RoyalOrnaments';

export const Page7DressCode = () => {
  const paletteColors = [
    { name: 'Royal Emerald', hex: '#0B3524', border: '#dfb76c' },
    { name: 'Champagne Gold', hex: '#D4AF37', border: '#fae4ad' },
    { name: 'Warm Ivory', hex: '#FDF8F0', border: '#b89128' },
    { name: 'Midnight Deep', hex: '#04170F', border: '#dfb76c' },
  ];

  return (
    <section id="dress-code" className="w-full py-8 px-4 sm:px-6 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-[460px] ivory-page-card paper-texture rounded-2xl p-6 sm:p-9 text-center shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_1px_1px_rgba(212,175,55,0.45)] border-2 border-[#dfb76c]/60"
      >
        <CornerOrnament position="top-left" />
        <CornerOrnament position="top-right" />
        <CornerOrnament position="bottom-left" />
        <CornerOrnament position="bottom-right" />

        <div className="absolute inset-2.5 sm:inset-3 border border-[#dfb76c]/40 rounded-xl pointer-events-none" />

        {/* Header */}
        <MughalArchFrame>
          <div className="flex flex-col items-center mt-1">
            <IslamicStar size={24} className="text-[#b89128] mb-2 opacity-90" />
            <h3 className="font-cinzel text-xs sm:text-sm tracking-[0.25em] text-[#735512] font-semibold uppercase">
              Attire &amp; Style Inspiration
            </h3>
            <p className="font-serif italic text-sm text-[#46544d] mt-1">
              Optional guidance for our cherished guests
            </p>
          </div>
        </MughalArchFrame>

        <div className="gold-divider-line !my-4 max-w-[220px] mx-auto" />

        {/* Fashion Flat-lay Image */}
        <div className="relative my-3 rounded-xl overflow-hidden border-2 border-[#dfb76c]/60 shadow-[0_10px_25px_rgba(0,0,0,0.15)] group">
          <img
            src="/images/wedding_attire.jpg"
            alt="Traditional Muslim wedding attire inspiration: emerald sherwani and ivory lehenga"
            className="w-full h-52 sm:h-56 object-cover object-center transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          <div className="absolute bottom-2.5 left-3 right-3 text-left">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#051e14]/85 border border-[#dfb76c]/60 text-amber-200 text-[10px] uppercase tracking-wider font-sans font-semibold backdrop-blur-sm">
              <Sparkles size={11} className="text-amber-300" />
              Traditional Festive Elegance
            </span>
          </div>
        </div>

        {/* Guidance Description */}
        <div className="my-4 text-center">
          <h4 className="font-cinzel text-lg sm:text-xl font-bold text-[#0c2e21] tracking-wide uppercase">
            Modest Royal Elegance
          </h4>
          <p className="font-serif text-sm sm:text-base text-[#38463f] leading-relaxed mt-2 max-w-[360px] mx-auto">
            Guests are warmly invited to dress in traditional festive attire, royal sherwanis, classic kurtas, anarkalis, sarees, or elegant modest evening wear.
          </p>
        </div>

        {/* Color Palette Inspiration Chips */}
        <div className="my-5 p-3.5 rounded-xl bg-gradient-to-b from-[#f9f3e4] to-[#f3ebd6] border border-[#dfb76c]/50">
          <p className="font-cinzel text-[11px] tracking-[0.2em] text-[#735512] uppercase font-bold mb-3">
            Suggested Festive Palette
          </p>
          <div className="grid grid-cols-4 gap-2">
            {paletteColors.map((color) => (
              <div key={color.name} className="flex flex-col items-center">
                <div
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full shadow-md border-2 transition-transform hover:scale-110"
                  style={{
                    backgroundColor: color.hex,
                    borderColor: color.border,
                  }}
                  title={color.name}
                />
                <span className="font-sans text-[9px] sm:text-[10px] text-[#425048] font-medium mt-1.5 text-center leading-tight">
                  {color.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer / Friendly Note */}
        <div className="p-3 rounded-lg bg-[#faf5ea] border border-[#dfb76c]/40 text-left flex items-start gap-2">
          <Info size={15} className="text-[#8c6a17] shrink-0 mt-0.5" />
          <p className="font-sans text-[11px] text-[#48564f] leading-relaxed">
            <strong>Note:</strong> This palette is entirely optional inspiration for those who wish to coordinate. Your gracious presence in whatever you feel most comfortable wearing is our greatest honor.
          </p>
        </div>

        <div className="mt-4 flex justify-center">
          <IslamicStar size={18} className="text-[#b89128] opacity-75" />
        </div>
      </motion.div>
    </section>
  );
};
