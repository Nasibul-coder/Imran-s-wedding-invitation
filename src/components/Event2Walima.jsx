import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Copy, Check, ExternalLink, Moon, Utensils, Landmark, Car, Heart, Clock } from 'lucide-react';
import { MughalArchFrame, CornerOrnament, IslamicStar } from './RoyalOrnaments';

export const Event2Walima = () => {
  const [copied, setCopied] = useState(false);

  // Exact Google Maps search query specifically for Taiba Palace
  const walimaMapsUrl = 'https://www.google.com/maps/search/?api=1&query=Taiba+Palace+Furfura+Sharif+Hooghly+West+Bengal+India';
  const walimaAddress = 'Taiba Palace, Furfura Sharif, Hooghly, West Bengal, India';

  const handleCopyAddress = () => {
    const notifyCopied = () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    };

    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(walimaAddress)
        .then(notifyCopied)
        .catch(() => {
          fallbackCopy(walimaAddress, notifyCopied);
        });
    } else {
      fallbackCopy(walimaAddress, notifyCopied);
    }
  };

  const fallbackCopy = (text, callback) => {
    try {
      const el = document.createElement('textarea');
      el.value = text;
      el.setAttribute('readonly', '');
      el.style.position = 'fixed';
      el.style.left = '-9999px';
      document.body.appendChild(el);
      el.select();
      el.setSelectionRange(0, 99999);
      document.execCommand('copy');
      document.body.removeChild(el);
      callback?.();
    } catch (e) {
      // safe fallback
    }
  };

  return (
    <section id="walima-celebration" className="w-full py-8 px-4 sm:px-6 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-[460px] emerald-card rounded-2xl p-6 sm:p-9 text-center shadow-[0_20px_50px_rgba(0,0,0,0.7)] border-2 border-[#dfb76c]/50 overflow-hidden"
      >
        <CornerOrnament position="top-left" />
        <CornerOrnament position="top-right" />
        <CornerOrnament position="bottom-left" />
        <CornerOrnament position="bottom-right" />

        <div className="absolute inset-2.5 sm:inset-3 border border-amber-400/20 rounded-xl pointer-events-none" />

        {/* Section Header */}
        <MughalArchFrame>
          <div className="flex flex-col items-center mt-1">
            <span className="font-sans text-[10px] tracking-[0.28em] text-amber-300 uppercase font-semibold">
              Event 2 • Grand Reception
            </span>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold tracking-wider text-amber-100 uppercase mt-1">
              Walima Celebration
            </h3>
            <div className="flex items-center justify-center gap-2 mt-1">
              <span className="w-6 h-[1px] bg-amber-400/60"></span>
              <p className="font-serif italic text-base sm:text-lg text-amber-200 font-semibold">
                Saturday, 9 January 2027
              </p>
              <span className="w-6 h-[1px] bg-amber-400/60"></span>
            </div>
          </div>
        </MughalArchFrame>

        <div className="gold-divider-line !my-4 max-w-[220px] mx-auto" />

        {/* Venue Information */}
        <div className="my-5 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0b3524] border border-amber-400/50 text-amber-200 text-[10px] uppercase tracking-widest font-sans font-semibold mb-2.5 shadow-sm">
            <Landmark size={13} className="text-amber-300" />
            <span>Walima Banquet Venue</span>
          </div>
          <h4 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-amber-100 tracking-wider uppercase">
            TAIBA PALACE
          </h4>
          <p className="font-serif text-base sm:text-lg text-amber-200/90 tracking-wide font-medium mt-1">
            FURFURA SHARIF, HOOGHLY
          </p>
          <p className="font-sans text-xs text-amber-300/70 tracking-wider mt-0.5">
            West Bengal, India
          </p>
        </div>

        {/* Dinner Timing Highlight Badge */}
        <div className="my-5 p-4 rounded-xl bg-gradient-to-b from-[#0a3523] to-[#041d13] border border-amber-400/40 text-left">
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-cinzel text-sm sm:text-base font-bold text-amber-100 tracking-wider">
              Dinner Banquet
            </span>
            <span className="font-sans text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#0d3b28] text-amber-200 border border-amber-400/30 font-semibold">
              Confirmed Programme
            </span>
          </div>
          <div className="flex items-center gap-2 text-amber-300 font-serif text-base sm:text-lg font-semibold">
            <Clock size={16} className="text-amber-400 shrink-0" />
            <span>After Isha Prayer</span>
          </div>
          <p className="font-serif text-xs text-amber-100/70 mt-1">
            A grand traditional feast honoring the newlyweds and esteemed guests.
          </p>
        </div>

        {/* Interactive Action Buttons */}
        <div className="mt-5 space-y-3">
          {/* Walima Google Maps Button */}
          <a
            href={walimaMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="royal-btn-gold w-full py-3.5 text-xs sm:text-sm font-semibold tracking-[0.14em]"
          >
            <Navigation size={16} className="text-emerald-950" />
            <span>View Location on Google Maps</span>
            <ExternalLink size={13} className="opacity-70 text-emerald-950" />
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

        {/* Parking Assistance Note */}
        <div className="mt-6 p-3 rounded-xl bg-[#07281b]/70 border border-amber-400/25 text-left flex items-start gap-2.5">
          <Car size={16} className="text-amber-300 shrink-0 mt-0.5" />
          <div className="text-[11px] sm:text-xs text-amber-100/80 leading-relaxed font-sans">
            <strong>Guest Welcoming &amp; Parking:</strong> Dedicated parking facilities and valet greetings will be ready to welcome you at Taiba Palace for the Walima celebration.
          </div>
        </div>

        <div className="mt-5 flex justify-center">
          <IslamicStar size={18} className="text-[#b89128] opacity-75" />
        </div>
      </motion.div>
    </section>
  );
};
