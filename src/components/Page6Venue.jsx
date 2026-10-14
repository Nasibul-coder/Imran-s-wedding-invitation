import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Copy, Check, Car, Landmark } from 'lucide-react';
import { MughalArchFrame, CornerOrnament, IslamicStar } from './RoyalOrnaments';

export const Page6Venue = () => {
  const [copied, setCopied] = useState(false);

  const venueAddress = 'Taiba Palace, Furfura Sharif, Hooghly, West Bengal, India';
  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=Taiba+Palace+Furfura+Sharif+Hooghly';

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(venueAddress).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <section id="venue" className="w-full py-8 px-4 sm:px-6 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-[460px] emerald-card rounded-2xl p-6 sm:p-8 text-center shadow-[0_20px_50px_rgba(0,0,0,0.7)] border-2 border-[#dfb76c]/50 overflow-hidden"
      >
        <CornerOrnament position="top-left" />
        <CornerOrnament position="top-right" />
        <CornerOrnament position="bottom-left" />
        <CornerOrnament position="bottom-right" />

        <div className="absolute inset-2.5 sm:inset-3 border border-amber-400/20 rounded-xl pointer-events-none" />

        {/* Header */}
        <MughalArchFrame>
          <div className="flex flex-col items-center mt-1">
            <IslamicStar size={24} className="text-amber-300 mb-2 opacity-90" />
            <span className="font-cinzel text-xs sm:text-sm tracking-[0.25em] text-amber-200 uppercase font-semibold">
              The Grand Venue
            </span>
            <p className="font-serif italic text-sm text-amber-100/80 mt-1">
              Taiba Palace awaits your honored presence
            </p>
          </div>
        </MughalArchFrame>

        <div className="gold-divider-line !my-4 max-w-[220px] mx-auto" />

        {/* Venue Architectural Image with Gold Frame */}
        <div className="relative my-3 rounded-xl overflow-hidden border-2 border-[#dfb76c]/60 shadow-[0_10px_25px_rgba(0,0,0,0.6)] group">
          <img
            src="/images/taiba_palace.jpg"
            alt="Taiba Palace Furfura Sharif illuminated at night"
            className="w-full h-52 sm:h-56 object-cover object-center transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020e09]/90 via-transparent to-black/20"></div>

          {/* Overlay Tag */}
          <div className="absolute bottom-3 left-3 right-3 text-left">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#0b3524]/90 border border-amber-400/50 text-amber-200 text-[10px] uppercase tracking-widest font-sans font-semibold backdrop-blur-sm">
              <Landmark size={12} />
              Heritage Wedding Palace
            </span>
          </div>
        </div>

        {/* Primary Venue Titles */}
        <div className="my-4">
          <h3 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-amber-100 tracking-wider uppercase">
            TAIBA PALACE
          </h3>
          <p className="font-serif text-base sm:text-lg text-amber-200/90 tracking-wide font-medium mt-1">
            FURFURA SHARIF, HOOGHLY
          </p>
          <p className="font-sans text-xs text-amber-300/70 tracking-wider mt-0.5">
            West Bengal, India
          </p>
        </div>

        {/* Interactive Action Buttons */}
        <div className="mt-5 space-y-3">
          {/* Working Get Directions Button */}
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="royal-btn-gold w-full py-3.5 text-xs sm:text-sm font-semibold tracking-[0.14em]"
          >
            <Navigation size={16} className="text-emerald-950" />
            <span>Get Directions on Google Maps</span>
          </a>

          {/* Copy Address Button */}
          <button
            onClick={handleCopyAddress}
            className="royal-btn-emerald w-full py-2.5 text-xs font-medium tracking-wider"
          >
            {copied ? (
              <>
                <Check size={14} className="text-amber-300" />
                <span className="text-amber-200">Address Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy size={14} />
                <span>Copy Full Venue Address</span>
              </>
            )}
          </button>
        </div>

        {/* Travel & Arrival Assistance Note */}
        <div className="mt-6 p-3 rounded-xl bg-[#07281b]/70 border border-amber-400/25 text-left flex items-start gap-2.5">
          <Car size={16} className="text-amber-300 shrink-0 mt-0.5" />
          <div className="text-[11px] sm:text-xs text-amber-100/80 leading-relaxed font-sans">
            <strong>Arrival &amp; Parking:</strong> Taiba Palace is situated conveniently in Furfura Sharif. Dedicated guest vehicle parking and valet greeting will be available upon arrival.
          </div>
        </div>
      </motion.div>
    </section>
  );
};
