import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, Download, Sparkles } from 'lucide-react';
import { MughalArchFrame, BismillahSVG, CornerOrnament, IslamicStar } from './RoyalOrnaments';

export const PrintInvitationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto no-print">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          className="relative w-full max-w-[480px] bg-[#0c2a1d] border-2 border-amber-400/50 rounded-2xl p-5 sm:p-6 shadow-2xl flex flex-col items-center max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-amber-200 hover:text-white hover:bg-black/60 transition-colors"
            aria-label="Close Print Preview"
          >
            <X size={18} />
          </button>

          <div className="flex items-center gap-2 mb-4 text-amber-200">
            <Printer size={18} />
            <h3 className="font-cinzel text-base font-bold tracking-wider uppercase">
              Printable Invitation Keepsake
            </h3>
          </div>

          <p className="font-serif text-xs text-amber-100/70 text-center mb-4">
            Optimized for standard 5" × 7" or A5 high-resolution physical printing or PDF export.
          </p>

          {/* Printable Card Area */}
          <div
            id="printable-card"
            className="w-full bg-[#fdfbf7] text-[#1a221f] rounded-xl p-6 sm:p-8 text-center border-2 border-[#dfb76c] shadow-lg relative my-2 overflow-hidden print-page"
          >
            <CornerOrnament position="top-left" />
            <CornerOrnament position="top-right" />
            <CornerOrnament position="bottom-left" />
            <CornerOrnament position="bottom-right" />

            <div className="absolute inset-2 border border-[#dfb76c]/40 rounded-lg pointer-events-none" />

            <MughalArchFrame>
              <BismillahSVG />
            </MughalArchFrame>

            <p className="font-serif italic text-xs text-[#46544d] mt-2">
              Together with their families
            </p>
            <p className="font-cinzel text-[10px] tracking-[0.2em] uppercase text-[#735512] font-semibold mt-0.5">
              Joyfully invite you to the wedding of
            </p>

            <div className="my-4">
              <h2 className="font-aloha text-2xl sm:text-3xl font-normal text-[#0c2e21] tracking-wide leading-tight">
                Sk Imran Ali
              </h2>
              <div className="font-aloha text-2xl text-[#b89128] my-0.5">&amp;</div>
              <h2 className="font-aloha text-2xl sm:text-3xl font-normal text-[#0c2e21] tracking-wide leading-tight">
                Saina Sheikh
              </h2>
            </div>

            <div className="my-3 py-2.5 px-3 bg-[#f8f2e2] rounded-lg border border-[#dfb76c]/50 space-y-2 text-left">
              <div className="border-b border-[#dfb76c]/30 pb-1.5">
                <p className="font-cinzel text-xs font-bold text-[#0c2e21] uppercase">
                  Nikah Ceremony: Friday, 8 Jan 2027
                </p>
                <p className="font-sans text-[10px] text-[#735512]">
                  Departure 5:00 PM • Est. Arrival 8:00 PM • Dinner after Arrival • Nikah after Dinner
                </p>
              </div>
              <div>
                <p className="font-cinzel text-xs font-bold text-[#0c2e21] uppercase">
                  Walima Celebration: Saturday, 9 Jan 2027
                </p>
                <p className="font-sans text-[10px] text-[#735512]">
                  Taiba Palace, Furfura Sharif • Dinner after Isha prayer
                </p>
              </div>
            </div>

            <p className="font-serif italic text-[11px] text-[#46544d] mt-3">
              "Your presence and blessings will make our celebration truly special."
            </p>

            <div className="mt-3 flex justify-center">
              <IslamicStar size={16} className="text-[#b89128] opacity-75" />
            </div>
          </div>

          {/* Action buttons */}
          <div className="w-full mt-4 flex gap-3">
            <button
              onClick={handlePrint}
              className="royal-btn-gold flex-1 py-3 text-xs font-bold"
            >
              <Printer size={15} />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="royal-btn-emerald py-3 px-5 text-xs font-semibold"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
