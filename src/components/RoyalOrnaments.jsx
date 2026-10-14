import React from 'react';
import { RoyalFloralMonogram } from './RoyalFloralMonogram';

export { RoyalFloralMonogram };

// Authentic Luxury Gold & Emerald Gradient Defs for SVGs
export const GoldDefs = () => (
  <svg width="0" height="0" className="absolute hidden" aria-hidden="true">
    <defs>
      {/* Primary Gold Linear Gradient */}
      <linearGradient id="goldLinear" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF0B3" />
        <stop offset="25%" stopColor="#E8C66A" />
        <stop offset="55%" stopColor="#D4AF37" />
        <stop offset="85%" stopColor="#98752C" />
        <stop offset="100%" stopColor="#E8C66A" />
      </linearGradient>
      {/* Radial Gold Gradient */}
      <linearGradient id="goldRadial" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FFF0B3" />
        <stop offset="35%" stopColor="#E8C66A" />
        <stop offset="70%" stopColor="#D4AF37" />
        <stop offset="88%" stopColor="#98752C" />
        <stop offset="100%" stopColor="#6d5118" />
      </linearGradient>
      <radialGradient id="sealShine" cx="35%" cy="30%" r="60%">
        <stop offset="0%" stopColor="#FFF0B3" stopOpacity="0.8" />
        <stop offset="50%" stopColor="#E8C66A" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#98752C" stopOpacity="0" />
      </radialGradient>
      {/* Deep Emerald Green Background Gradient (#063B32 to #03251F) */}
      <radialGradient id="emblemEmeraldBg" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#084c3f" />
        <stop offset="60%" stopColor="#063B32" />
        <stop offset="100%" stopColor="#03251F" />
      </radialGradient>
      {/* Antique Gold Metallic */}
      <linearGradient id="antiqueGoldMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF0B3" />
        <stop offset="22%" stopColor="#E8C66A" />
        <stop offset="50%" stopColor="#D4AF37" />
        <stop offset="80%" stopColor="#98752C" />
        <stop offset="100%" stopColor="#6d5118" />
      </linearGradient>
      {/* Champagne Gold Metallic */}
      <linearGradient id="champagneGoldMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF8E8" />
        <stop offset="30%" stopColor="#E8C66A" />
        <stop offset="70%" stopColor="#D4AF37" />
        <stop offset="100%" stopColor="#98752C" />
      </linearGradient>
      <filter id="goldDropShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000" floodOpacity="0.4" />
      </filter>
      <filter id="monogramShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="1.2" stdDeviation="0.8" floodColor="#01130d" floodOpacity="0.85" />
      </filter>
    </defs>
  </svg>
);

// Mughal Architecture Arch Silhouette / Frame
export const MughalArchFrame = ({ className = '', children }) => (
  <div className={`relative ${className}`}>
    {/* SVG Mughal Arch Top */}
    <div className="w-full flex justify-center pointer-events-none mb-1">
      <svg
        viewBox="0 0 400 90"
        className="w-full max-w-[340px] h-auto drop-shadow-sm"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 85 C20 40, 80 45, 120 30 C155 18, 175 14, 200 4 C225 14, 245 18, 280 30 C320 45, 380 40, 380 85"
          stroke="url(#goldLinear)"
          strokeWidth="2.5"
          fill="none"
        />
        <path
          d="M28 85 C28 45, 85 50, 122 36 C155 24, 175 20, 200 12 C225 20, 245 24, 278 36 C315 50, 372 45, 372 85"
          stroke="url(#goldLinear)"
          strokeWidth="1"
          strokeDasharray="4 2"
          fill="none"
        />
        {/* Crown finial */}
        <circle cx="200" cy="4" r="3.5" fill="url(#goldLinear)" />
        <circle cx="200" cy="12" r="2" fill="url(#goldLinear)" />
      </svg>
    </div>
    {children}
  </div>
);

// Islamic 8-Pointed Star (Khatim al-Sulayman)
export const IslamicStar = ({ size = 28, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    className={`inline-block ${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="20"
      y="20"
      width="60"
      height="60"
      stroke="url(#goldLinear)"
      strokeWidth="4"
      fill="none"
    />
    <rect
      x="20"
      y="20"
      width="60"
      height="60"
      stroke="url(#goldLinear)"
      strokeWidth="4"
      fill="none"
      transform="rotate(45 50 50)"
    />
    <circle cx="50" cy="50" r="12" fill="url(#goldLinear)" opacity="0.3" />
    <circle cx="50" cy="50" r="4" fill="url(#goldLinear)" />
  </svg>
);

// Ornate Corner Filigree (Antique Gold flourishes)
export const CornerOrnament = ({ position = 'top-left' }) => {
  const getRotation = () => {
    switch (position) {
      case 'top-right': return 'rotate-90';
      case 'bottom-right': return 'rotate-180';
      case 'bottom-left': return '-rotate-90';
      default: return '';
    }
  };

  return (
    <div className={`absolute pointer-events-none select-none z-10 ${
      position.includes('top') ? 'top-2' : 'bottom-2'
    } ${
      position.includes('left') ? 'left-2' : 'right-2'
    } ${getRotation()}`}>
      <svg
        width="38"
        height="38"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 8 L48 8 C30 18, 18 30, 8 48 Z"
          fill="url(#goldLinear)"
          opacity="0.3"
        />
        <path
          d="M6 6 L70 6 C45 20, 20 45, 6 70 Z"
          stroke="url(#goldLinear)"
          strokeWidth="2.5"
          fill="none"
        />
        <path
          d="M12 12 C35 12, 12 35, 12 12 Z"
          fill="url(#goldLinear)"
        />
        <circle cx="20" cy="20" r="3" fill="url(#goldLinear)" />
        <circle cx="70" cy="6" r="2.5" fill="url(#goldLinear)" />
        <circle cx="6" cy="70" r="2.5" fill="url(#goldLinear)" />
      </svg>
    </div>
  );
};

// Official Wedding Logo Monogram ("I & S" with Gold Heart and Date 08 • 01 • 2027)
export const WaxSeal = ({ size = 122, onClick, isBroken = false, className = '' }) => {
  // Proportional dimensions for uploaded 1644 x 957 image (aspect ratio ~1.718)
  const height = size;
  const width = Math.round(size * (1644 / 957));

  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onClick?.();
      }}
      className={`relative cursor-pointer transition-transform duration-500 hover:scale-105 active:scale-95 select-none ${
        isBroken ? 'opacity-0 scale-125 pointer-events-none transition-all duration-700' : ''
      } ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        maxWidth: '100%',
        touchAction: 'manipulation',
        WebkitTapHighlightColor: 'transparent',
      }}
      title="Click to Open Invitation"
    >
      <img
        src="/images/wedding_logo.png"
        alt="Official Wedding Logo - Sk Imran Ali & Saina Shaikh"
        className="w-full h-full object-contain pointer-events-none drop-shadow-xl"
        loading="eager"
        decoding="async"
      />
    </div>
  );
};

// High-fidelity Arabic Bismillah Calligraphy SVG
export const BismillahSVG = ({ className = 'w-64 h-auto' }) => (
  <div className={`flex justify-center items-center my-3 ${className}`}>
    <div className="text-center">
      <p
        className="arabic-script text-2xl md:text-3xl text-amber-200 tracking-wide select-none drop-shadow-sm font-semibold"
        style={{
          background: 'linear-gradient(135deg, #fae4ad 0%, #dfb76c 50%, #fef3d6 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          lineHeight: '2.2',
        }}
        lang="ar"
      >
        بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
      </p>
      <p className="font-serif text-[10px] md:text-xs tracking-[0.3em] uppercase text-amber-300/80 -mt-1 font-semibold">
        Bismillahir Rahmanir Raheem
      </p>
    </div>
  </div>
);
