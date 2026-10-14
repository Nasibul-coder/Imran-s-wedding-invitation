import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MailOpen } from 'lucide-react';
import confetti from 'canvas-confetti';
import { WaxSeal, IslamicStar, CornerOrnament } from './RoyalOrnaments';
import { royalAudio } from './AudioEngine';

export const Page1Envelope = ({ onOpen, isOpening }) => {
  const [sealCracked, setSealCracked] = useState(false);

  const triggerOpen = () => {
    if (isOpening) return;
    setSealCracked(true);

    // Play "Wedding Bells (Kalyanam)" by A. R. Rahman
    try {
      royalAudio.play();
    } catch (e) {
      // safe fallback
    }

    // Celebratory golden sparkles burst
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.55 },
        colors: ['#fae4ad', '#dfb76c', '#b89128', '#ffffff'],
        disableForReducedMotion: true,
      });
    } catch (e) {
      // safe fallback
    }

    setTimeout(() => {
      onOpen();
    }, 600);
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 overflow-hidden bg-gradient-to-b from-[#020d09] via-[#051e15] to-[#020b07]">
      {/* Smooth ambient background gold glows (No noise, no grain) */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Outer Envelope Card Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-[440px] aspect-[4/5] rounded-2xl p-6 sm:p-8 flex flex-col justify-between items-center text-center shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85),0_0_2px_1px_rgba(223,183,108,0.4)] border border-amber-400/40 bg-gradient-to-b from-[#072a1c] via-[#041d13] to-[#02100a] overflow-hidden"
      >
        {/* Delicate Corner Ornaments */}
        <CornerOrnament position="top-left" />
        <CornerOrnament position="top-right" />
        <CornerOrnament position="bottom-left" />
        <CornerOrnament position="bottom-right" />

        {/* Thin inner gold border */}
        <div className="absolute inset-3 border border-amber-400/25 rounded-xl pointer-events-none"></div>
        <div className="absolute inset-4 border border-dashed border-amber-400/20 rounded-lg pointer-events-none"></div>

        {/* Envelope Triangular Flap Contour Graphic */}
        <div className="absolute top-0 left-0 right-0 h-44 pointer-events-none overflow-hidden">
          <svg
            viewBox="0 0 400 180"
            className="w-full h-full preserve-3d"
            preserveAspectRatio="none"
          >
            {/* Flap shadow */}
            <path
              d="M0 0 L200 140 L400 0 Z"
              fill="rgba(0, 0, 0, 0.35)"
            />
            {/* Flap surface */}
            <path
              d="M0 0 L200 135 L400 0 Z"
              fill="url(#flapGradient)"
              stroke="rgba(223, 183, 108, 0.35)"
              strokeWidth="1.5"
            />
            <defs>
              <linearGradient id="flapGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#083423" />
                <stop offset="100%" stopColor="#041a11" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Top Header Information — Royal Wedding Invitation Logo Typography */}
        <div className="relative z-10 pt-2 flex flex-col items-center">
          <IslamicStar size={26} className="text-[#F3D98B] drop-shadow mb-2 opacity-95" />
          <h2
            className="font-cinzel text-xs md:text-sm tracking-[0.28em] uppercase font-bold text-center"
            style={{
              background: 'linear-gradient(135deg, #FFF4D6 0%, #F3D98B 30%, #D4AF37 60%, #A87920 85%, #F3D98B 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5), 0 0 1px rgba(243, 217, 139, 0.4)',
              letterSpacing: '0.28em',
            }}
          >
            Royal Wedding Invitation
          </h2>
          <div className="flex items-center justify-center gap-2 my-2 w-full max-w-[220px]">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#F3D98B] to-[#A87920]" />
            <span className="w-1.5 h-1.5 rotate-45 bg-[#F3D98B]/90 shadow-xs" />
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#F3D98B] to-[#A87920]" />
          </div>
          <p
            className="font-sans text-[11px] tracking-[0.22em] uppercase font-semibold text-center"
            style={{
              color: '#F3D98B',
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.6)',
              letterSpacing: '0.22em',
            }}
          >
            08 • 09 • January • 2027
          </p>
        </div>

        {/* Center: Wax Seal & Couple Monogram */}
        <div className="relative z-20 my-auto flex flex-col items-center">
          {/* Subtle pulse ring behind seal */}
          <div className="relative flex items-center justify-center">
            <motion.div
              animate={{
                scale: [1, 1.12, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute w-32 h-32 rounded-full bg-amber-400/20 blur-xl pointer-events-none"
            />
            {/* The Luxury Floral Monogram Emblem ("I & S") in exact original position */}
            <WaxSeal size={118} onClick={triggerOpen} isBroken={sealCracked} />
          </div>

          <div className="mt-4">
            <h1 className="font-cursive text-3xl sm:text-4xl md:text-[42px] text-amber-100 font-normal tracking-wide leading-tight drop-shadow">
              Sk Imran Ali
            </h1>
            <div className="flex items-center justify-center gap-2 my-1">
              <span className="w-8 h-[1px] bg-amber-400/40"></span>
              <span className="font-cursive text-2xl sm:text-3xl text-amber-300">&amp;</span>
              <span className="w-8 h-[1px] bg-amber-400/40"></span>
            </div>
            <h2 className="font-cursive text-3xl sm:text-4xl md:text-[42px] text-amber-100 font-normal tracking-wide leading-tight drop-shadow">
              Saina Shaikh
            </h2>
          </div>
        </div>

        {/* Bottom Section: Cordially Invited & Open Interaction */}
        <div className="relative z-10 pb-2 w-full flex flex-col items-center">
          <p className="font-serif italic text-base sm:text-lg text-amber-200/95 tracking-wide mb-3">
            "You are cordially invited"
          </p>

          <motion.button
            type="button"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={triggerOpen}
            className="royal-btn-gold w-full max-w-[260px] py-3.5 text-xs sm:text-sm font-semibold tracking-[0.16em] group cursor-pointer select-none"
          >
            <MailOpen size={16} className="text-emerald-950 transition-transform group-hover:rotate-12" />
            <span>Open Invitation</span>
            <Sparkles size={14} className="text-emerald-950" />
          </motion.button>

          <p className="font-sans text-[10px] text-amber-300/60 tracking-wider mt-3 uppercase">
            Nikah &amp; Walima Celebrations
          </p>
        </div>
      </motion.div>
    </div>
  );
};
