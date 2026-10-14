import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoldDefs } from './components/RoyalOrnaments';
import { GoldCanvasSparkles } from './components/GoldCanvasSparkles';
import { RoyalToolbar } from './components/RoyalToolbar';
import { Page1Envelope } from './components/Page1Envelope';
import { Page2MainCard } from './components/Page2MainCard';
import { Page3IslamicBlessing } from './components/Page3IslamicBlessing';
import { Page4Countdown } from './components/Page4Countdown';
import { Event1Nikah } from './components/Event1Nikah';
import { Event2Walima } from './components/Event2Walima';
import { PrintInvitationModal } from './components/PrintInvitationModal';
import { royalAudio } from './components/AudioEngine';
import { ChevronDown, Sparkles, Heart } from 'lucide-react';

export default function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);
  const [isCleanMode, setIsCleanMode] = useState(false);

  // Attempt background music autoplay on load and fallback to first interaction
  useEffect(() => {
    // 1. Attempt autoplay immediately when website loads
    royalAudio.attemptAutoplay();

    // 2. If browser blocks autoplay with sound before user interaction,
    // ensure playback begins smoothly upon the very first user interaction
    const handleFirstInteraction = () => {
      royalAudio.play();
    };

    window.addEventListener('click', handleFirstInteraction, { once: true, passive: true });
    window.addEventListener('touchstart', handleFirstInteraction, { once: true, passive: true });
    window.addEventListener('keydown', handleFirstInteraction, { once: true, passive: true });

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
    };
  }, []);

  // Scroll to invitation card when opened
  const handleOpenEnvelope = () => {
    setIsOpening(true);
    setTimeout(() => {
      setIsEnvelopeOpen(true);
      setIsOpening(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 700);
  };

  const handleReplayEnvelope = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setIsEnvelopeOpen(false);
    }, 300);
  };

  return (
    <div className="royal-app-stage">
      {/* Global SVG Color & Gradient Definitions */}
      <GoldDefs />

      {/* Floating Golden Stardust Particles Background */}
      <GoldCanvasSparkles />

      {/* Top Royal Toolbar (Audio, Replay, Print, Clean Mode) */}
      <RoyalToolbar
        isEnvelopeOpen={isEnvelopeOpen}
        onReplayEnvelope={handleReplayEnvelope}
        onOpenPrintModal={() => setIsPrintModalOpen(true)}
        isCleanMode={isCleanMode}
        setIsCleanMode={setIsCleanMode}
      />

      {/* Print Keepsake Modal */}
      <PrintInvitationModal
        isOpen={isPrintModalOpen}
        onClose={() => setIsPrintModalOpen(false)}
      />

      {/* Main Invitation Viewport Container (Direct Fullscreen on Mobile, Centered Vertical Stage on Desktop) */}
      <main className="invitation-viewport pb-16">
        <AnimatePresence mode="wait">
          {!isEnvelopeOpen ? (
            /* PAGE 1: LUXURY ENVELOPE OPENING */
            <motion.div
              key="envelope-page"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 1.08, filter: 'blur(8px)' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="w-full min-h-screen flex items-center justify-center envelope-screen"
            >
              <Page1Envelope onOpen={handleOpenEnvelope} isOpening={isOpening} />
            </motion.div>
          ) : (
            /* THE FULL WEDDING INVITATION SEQUENCE */
            <motion.div
              key="invitation-pages"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="w-full pt-16 sm:pt-20 flex flex-col items-center"
            >
              {/* MAIN WEDDING INVITATION */}
              <Page2MainCard />

              {/* ISLAMIC GREETING & SACRED BLESSINGS */}
              <Page3IslamicBlessing />

              {/* LIVE COUNTDOWN TO 8 JANUARY 2027 */}
              <Page4Countdown />

              {/* EVENT 1 — NIKAH CEREMONY (FRIDAY, 8 JANUARY 2027) */}
              <Event1Nikah />

              {/* EVENT 2 — WALIMA CELEBRATION (SATURDAY, 9 JANUARY 2027) */}
              <Event2Walima />


              {/* ROYAL FOOTER & COLOPHON */}
              <footer className="w-full pt-10 pb-16 px-6 text-center text-amber-200/80">
                <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#dfb76c] to-transparent mx-auto mb-4" />
                <p className="font-serif italic text-base sm:text-lg text-amber-100">
                  "With immense gratitude from the Ali &amp; Sheikh Families"
                </p>
                <p className="font-aloha text-xl sm:text-2xl text-amber-300 font-normal mt-2 tracking-wide">
                  Sk Imran Ali &amp; Saina Sheikh
                </p>
                <p className="font-sans text-[10px] tracking-widest uppercase text-amber-400/60 mt-1">
                  8 &amp; 9 January 2027 • West Bengal, India
                </p>

                {/* Back to top / replay prompt */}
                <div className="mt-8">
                  <button
                    onClick={handleReplayEnvelope}
                    className="inline-flex items-center gap-1.5 text-xs text-amber-300/70 hover:text-amber-200 font-sans tracking-wider border-b border-amber-400/30 pb-0.5 transition-colors"
                  >
                    <span>Replay Envelope Opening</span>
                    <Sparkles size={12} />
                  </button>
                </div>
              </footer>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
