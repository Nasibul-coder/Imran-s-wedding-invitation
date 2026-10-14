import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Sparkles, Heart } from 'lucide-react';
import {
  MughalArchFrame,
  BismillahSVG,
  CornerOrnament,
  IslamicStar,
} from './RoyalOrnaments';

export const Page2MainCard = () => {
  return (
    <section id="invitation-card" className="w-full py-8 px-4 sm:px-6 flex flex-col items-center">
      {/* Main Ivory Luxury Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-[460px] ivory-page-card paper-texture rounded-2xl p-6 sm:p-9 text-center shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_1px_1px_rgba(212,175,55,0.45)] border-2 border-[#dfb76c]/60"
      >
        {/* Ornate Corner Gold Accents */}
        <CornerOrnament position="top-left" />
        <CornerOrnament position="top-right" />
        <CornerOrnament position="bottom-left" />
        <CornerOrnament position="bottom-right" />

        {/* Double Inner Filigree Border */}
        <div className="absolute inset-2.5 sm:inset-3 border border-[#dfb76c]/40 rounded-xl pointer-events-none" />
        <div className="absolute inset-3.5 sm:inset-4 border border-dashed border-[#b89128]/30 rounded-lg pointer-events-none" />

        {/* Mughal Arch Frame Top */}
        <MughalArchFrame>
          {/* Top Bismillah Sacred Heading */}
          <div className="mt-1">
            <BismillahSVG />
          </div>
        </MughalArchFrame>

        {/* Family Greeting */}
        <div className="mt-3 space-y-1.5">
          <p className="font-serif italic text-base sm:text-lg text-[#3a4740] font-normal tracking-wide">
            Together with their families
          </p>
          <p className="font-cinzel text-[11px] sm:text-xs tracking-[0.22em] uppercase text-[#735512] font-semibold">
            Joyfully invite you to celebrate the wedding of
          </p>
        </div>

        {/* Couple Names — The Visual Focus in Aloha Font */}
        <div className="my-6 sm:my-8 py-3 relative">
          <div className="absolute left-1/2 -top-1 -translate-x-1/2 w-28 h-[1px] bg-gradient-to-r from-transparent via-[#dfb76c] to-transparent"></div>

          {/* Groom Name */}
          <motion.h2
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            className="font-cursive text-3xl sm:text-4xl md:text-[44px] font-normal text-[#0c2e21] tracking-wide leading-tight drop-shadow-sm"
          >
            Sk Imran Ali
          </motion.h2>

          {/* Ampersand Filigree */}
          <div className="flex items-center justify-center gap-3 my-2">
            <span className="w-12 h-[1px] bg-[#dfb76c]"></span>
            <span className="font-cursive text-3xl sm:text-4xl text-[#b89128] font-normal leading-none select-none">
              &amp;
            </span>
            <span className="w-12 h-[1px] bg-[#dfb76c]"></span>
          </div>

          {/* Bride Name */}
          <motion.h2
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-cursive text-3xl sm:text-4xl md:text-[44px] font-normal text-[#0c2e21] tracking-wide leading-tight drop-shadow-sm"
          >
            Saina Shaikh
          </motion.h2>

          <div className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-28 h-[1px] bg-gradient-to-r from-transparent via-[#dfb76c] to-transparent"></div>
        </div>

        {/* Two-Day Auspicious Celebrations Summary Badge */}
        <div className="my-5 p-4 rounded-xl bg-gradient-to-b from-[#f9f3e4] to-[#f3ebd6] border border-[#dfb76c]/50 shadow-inner space-y-3">
          {/* Day 1: Nikah */}
          <div className="border-b border-[#dfb76c]/30 pb-2.5">
            <div className="flex items-center justify-center gap-1.5 mb-1">
              <Calendar size={15} className="text-[#8c6a17]" />
              <span className="font-cinzel text-xs sm:text-sm font-bold tracking-[0.16em] text-[#0d3425] uppercase">
                Friday, 8 January 2027
              </span>
            </div>
            <p className="font-sans text-[11px] sm:text-xs font-semibold tracking-wider text-[#735512] uppercase">
              Nikah Ceremony • Departure 5:00 PM
            </p>
          </div>

          {/* Day 2: Walima */}
          <div>
            <div className="flex items-center justify-center gap-1.5 mb-1">
              <Calendar size={15} className="text-[#8c6a17]" />
              <span className="font-cinzel text-xs sm:text-sm font-bold tracking-[0.16em] text-[#0d3425] uppercase">
                Saturday, 9 January 2027
              </span>
            </div>
            <p className="font-sans text-[11px] sm:text-xs font-semibold tracking-wider text-[#735512] uppercase">
              Walima Celebration • Taiba Palace
            </p>
          </div>
        </div>

        {/* Warm Closing Blessing */}
        <div className="pt-2 border-t border-[#dfb76c]/30">
          <p className="font-serif italic text-sm sm:text-base text-[#38463f] leading-relaxed max-w-[340px] mx-auto">
            "Your presence and blessings will make our celebration truly special."
          </p>
        </div>

        {/* Bottom Floral / Islamic Accent */}
        <div className="mt-4 flex justify-center">
          <IslamicStar size={20} className="text-[#b89128] opacity-80" />
        </div>
      </motion.div>
    </section>
  );
};
