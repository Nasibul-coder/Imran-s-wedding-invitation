import React from 'react';
import { RotateCcw, Printer, Eye, EyeOff } from 'lucide-react';

export const RoyalToolbar = ({
  isEnvelopeOpen,
  onReplayEnvelope,
  onOpenPrintModal,
  isCleanMode,
  setIsCleanMode,
}) => {
  if (isCleanMode) {
    return (
      <button
        onClick={() => setIsCleanMode(false)}
        className="fixed top-4 right-4 z-50 p-2.5 rounded-full bg-black/60 text-amber-200/80 border border-amber-400/40 backdrop-blur-md text-xs flex items-center gap-1.5 shadow-lg hover:text-amber-100 transition-all opacity-40 hover:opacity-100"
        title="Exit Clean Mode (Show Controls)"
      >
        <Eye size={15} />
        <span className="text-[11px] font-sans tracking-wider">Show UI</span>
      </button>
    );
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-center pointer-events-none px-4 py-3">
      <div className="w-full max-w-[520px] flex items-center justify-between pointer-events-auto">
        {/* Left: Monogram Badge */}
        <div className="flex items-center gap-2 bg-[#063B32]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#D4AF37]/45 shadow-[0_4px_16px_rgba(0,0,0,0.5)]">
          <span
            className="font-serif font-bold text-xs tracking-widest uppercase"
            style={{
              background: 'linear-gradient(135deg, #FFF0B3 0%, #E8C66A 40%, #98752C 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            I &amp; S
          </span>
          <span className="w-1 h-1 rounded-full bg-[#E8C66A]"></span>
          <span
            className="font-sans text-[10px] tracking-wider font-semibold"
            style={{ color: '#E8C66A' }}
          >
            8 — 9 JAN 2027
          </span>
        </div>

        {/* Right Action Icons */}
        <div className="flex items-center gap-2">
          {/* Replay Envelope */}
          {isEnvelopeOpen && (
            <button
              onClick={onReplayEnvelope}
              className="p-2 rounded-full bg-[#051a11]/85 text-amber-200 border border-amber-400/30 hover:border-amber-400/70 backdrop-blur-md transition-all hover:scale-105 active:scale-95"
              title="Replay Envelope Opening Animation"
              aria-label="Replay Envelope"
            >
              <RotateCcw size={15} />
            </button>
          )}

          {/* Print / Save Keepsake */}
          <button
            onClick={onOpenPrintModal}
            className="p-2 rounded-full bg-[#051a11]/85 text-amber-200 border border-amber-400/30 hover:border-amber-400/70 backdrop-blur-md transition-all hover:scale-105 active:scale-95"
            title="Print or Save Invitation Keepsake"
            aria-label="Print Invitation"
          >
            <Printer size={15} />
          </button>

          {/* Clean Screen-Record Mode */}
          <button
            onClick={() => setIsCleanMode(true)}
            className="p-2 rounded-full bg-[#051a11]/85 text-amber-200 border border-amber-400/30 hover:border-amber-400/70 backdrop-blur-md transition-all hover:scale-105 active:scale-95"
            title="Video / Clean Mode (Hide buttons for screen recording)"
            aria-label="Enter Clean Mode"
          >
            <EyeOff size={15} />
          </button>
        </div>
      </div>
    </header>
  );
};
