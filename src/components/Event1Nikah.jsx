import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Heart, Utensils, Navigation, Car, ExternalLink } from 'lucide-react';
import { MughalArchFrame, CornerOrnament, IslamicStar } from './RoyalOrnaments';

export const Event1Nikah = () => {
  // Exact Google Maps destination for the Nikah venue
  const nikahMapsUrl = 'https://maps.app.goo.gl/nULKuhWC43qHFoUr8?g_st=aw';

  // Exactly three schedule steps as specified:
  // 1. DEPARTURE — 5:00 PM
  // 2. ARRIVAL — Approximately 8:00 PM (ESTIMATED)
  // 3. DINNER AFTER ARRIVAL, FOLLOWED BY NIKAH
  const scheduleItems = [
    {
      time: '05:00 PM',
      title: '1. DEPARTURE — 5:00 PM',
      subtitle: 'Barat and honored guests depart promptly for the Nikah venue.',
      note: 'Departure: 5:00 PM',
      icon: Car,
    },
    {
      time: 'APPROX. 08:00 PM',
      title: '2. ARRIVAL — Approximately 8:00 PM',
      subtitle: 'Estimated arrival of Barat & guests at the venue (~3 hours journey duration).',
      note: 'ESTIMATED ARRIVAL',
      icon: Clock,
      isEstimate: true,
    },
    {
      time: 'After Arrival',
      title: '3. DINNER AFTER ARRIVAL, FOLLOWED BY NIKAH',
      subtitle: 'Celebratory wedding dinner banquet served after arrival, followed by the sacred Nikah solemnization, vows, and auspicious Du’a.',
      note: 'Dinner & Nikah',
      icon: Heart,
    },
  ];

  return (
    <section id="nikah-ceremony" className="w-full py-8 px-4 sm:px-6 flex flex-col items-center">
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

        {/* Section Header */}
        <MughalArchFrame>
          <div className="flex flex-col items-center mt-1">
            <span className="font-sans text-[10px] tracking-[0.28em] text-[#8c6a17] uppercase font-semibold">
              Event 1 • Sacred Matrimony
            </span>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold tracking-wider text-[#0c2e21] uppercase mt-1">
              Nikah Ceremony
            </h3>
            <div className="flex items-center justify-center gap-2 mt-1">
              <span className="w-6 h-[1px] bg-[#dfb76c]"></span>
              <p className="font-serif italic text-base sm:text-lg text-[#735512] font-semibold">
                Friday, 8 January 2027
              </p>
              <span className="w-6 h-[1px] bg-[#dfb76c]"></span>
            </div>
          </div>
        </MughalArchFrame>

        <div className="gold-divider-line !my-4 max-w-[220px] mx-auto" />

        {/* Journey Duration & Timing Highlight Card */}
        <div className="mb-6 p-4 rounded-xl bg-gradient-to-b from-[#f9f3e4] to-[#f3ebd6] border border-[#dfb76c]/50 text-left">
          <div className="flex items-center gap-2 mb-2">
            <Car size={16} className="text-[#8c6a17] shrink-0" />
            <h4 className="font-cinzel text-xs sm:text-sm font-bold text-[#0d3425] uppercase tracking-wide">
              Journey &amp; Assembly Details
            </h4>
          </div>
          <p className="font-serif text-xs sm:text-sm text-[#3e4d45] leading-relaxed">
            The Barat will depart promptly at <strong>5:00 PM</strong>. The approximate travel duration to the Nikah venue is <strong>3 hours</strong>, with an estimated arrival time of <strong>8:00 PM</strong>.
          </p>
          <div className="mt-2.5 pt-2 border-t border-[#dfb76c]/30 flex items-center gap-1.5 text-[11px] text-[#735512] font-sans">
            <span className="w-1.5 h-1.5 rounded-full bg-[#b89128]"></span>
            <span>Note: 8:00 PM is an estimated arrival time, not a confirmed ceremony time.</span>
          </div>
        </div>

        {/* Original Vertical Timeline Itinerary */}
        <div className="relative text-left pl-2 pr-1 mb-6">
          {/* Vertical gold track line */}
          <div className="absolute left-[23px] sm:left-[27px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#dfb76c] via-[#b89128] to-[#dfb76c]/40 pointer-events-none"></div>

          <div className="space-y-4">
            {scheduleItems.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08, duration: 0.5 }}
                  className="relative flex items-start gap-3.5 group"
                >
                  {/* Node Icon */}
                  <div className="relative z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0 border transition-transform duration-300 group-hover:scale-105 shadow-sm bg-[#faf4e6] border-[#dfb76c]/70 text-[#735512]">
                    <IconComp size={18} />
                  </div>

                  {/* Node Content */}
                  <div className="flex-1 pt-0.5">
                    <div className="flex items-center justify-between flex-wrap gap-1">
                      <span className="font-cinzel text-sm sm:text-base font-bold text-[#0c2e21] tracking-wider">
                        {item.time}
                      </span>
                      <span
                        className={`font-sans text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                          item.isEstimate
                            ? 'bg-[#f4ead0] text-[#735512] border-[#dfb76c]/60 font-semibold'
                            : 'bg-[#eee4cb] text-[#695015] border-[#dfb76c]/40 font-medium'
                        }`}
                      >
                        {item.note}
                      </span>
                    </div>

                    <h5 className="font-serif font-bold text-base text-[#1e2522] mt-0.5">
                      {item.title}
                    </h5>
                    <p className="font-serif text-xs sm:text-sm text-[#48564f] leading-snug mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Nikah Venue Location Button */}
        <div className="mt-6 pt-4 border-t border-[#dfb76c]/30">
          <p className="font-serif italic text-xs sm:text-sm text-[#506057] mb-3">
            Click below for exact GPS navigation and directions to the Nikah venue:
          </p>
          <a
            href={nikahMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="royal-btn-gold w-full py-3.5 text-xs sm:text-sm font-semibold tracking-[0.14em]"
          >
            <Navigation size={16} className="text-emerald-950" />
            <span>View Location on Google Maps</span>
            <ExternalLink size={13} className="opacity-70 text-emerald-950" />
          </a>
        </div>

        <div className="mt-5 flex justify-center">
          <IslamicStar size={18} className="text-[#b89128] opacity-75" />
        </div>
      </motion.div>
    </section>
  );
};


