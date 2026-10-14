import fs from 'fs';

const svg = `<svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="sealAntiqueGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#FFF4D6" />
      <stop offset="22%" stopColor="#F3D98B" />
      <stop offset="50%" stopColor="#D4AF37" />
      <stop offset="80%" stopColor="#A87920" />
      <stop offset="100%" stopColor="#7E5612" />
    </linearGradient>
    <linearGradient id="sealChampagneGold" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="#FFF8E8" />
      <stop offset="30%" stopColor="#F3D98B" />
      <stop offset="70%" stopColor="#D4AF37" />
      <stop offset="100%" stopColor="#A87920" />
    </linearGradient>
    <radialGradient id="sealEmeraldCenter" cx="46%" cy="42%" r="56%">
      <stop offset="0%" stopColor="#0b3825" />
      <stop offset="60%" stopColor="#052116" />
      <stop offset="100%" stopColor="#020e08" />
    </radialGradient>
    <filter id="sealMonogramFilter" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="1.2" stdDeviation="0.8" floodColor="#01130d" floodOpacity="0.85" />
    </filter>
  </defs>
  <circle cx="60" cy="60" r="55" fill="url(#sealEmeraldCenter)" stroke="url(#sealAntiqueGold)" strokeWidth="1.6" />
  <circle cx="60" cy="60" r="51" stroke="#F3D98B" strokeWidth="0.75" strokeDasharray="3 2" fill="none" opacity="0.85" />
</svg>`;

console.log('SVG length:', svg.length);
