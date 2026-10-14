import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Heart, Utensils, Camera, CheckCircle2, Sparkles } from 'lucide-react';
import { MughalArchFrame, CornerOrnament, IslamicStar } from './RoyalOrnaments';

export const Page5Schedule = () => {
  // Configurable event timeline, strictly featuring confirmed 7:00 PM wedding time
  const timelineEvents = [
    {
      time: '07:00 PM',
      title: 'Istiqbal & Guest Welcome',
      subtitle: 'Welcoming of families, honored guests & refreshing welcome drinks',
      icon: Sparkles,
      status: 'Confirmed Time',
      isPrimary: true,
    },
    {
      time: '07:45 PM',
      title: 'Auspicious Nikah & Du’a',
      subtitle: 'Solemnization of marriage, sacred vows & prayers for the couple',
      icon: Heart,
      status: 'Programme Itinerary',
      isPrimary: false,
    },
    {
      time: '08:30 PM',
      title: 'Royal Wedding Banquet',
      subtitle: 'Exquisite traditional feast & celebratory dinner with family',
      icon: Utensils,
      status: 'Programme Itinerary',
      isPrimary: false,
    },
    {
      time: '09:30 PM',
      title: 'Felicitations & Photography',
      subtitle: 'Congratulatory blessings, family portraits & fond memories',
      icon: Camera,
      status: 'Programme Itinerary',
      isPrimary: false,
    },
  ];

  return (
    <section id="schedule" className="w-full py-8 px-4 sm:px-6 flex flex-col items-center">
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

        {/* Header */}
        <MughalArchFrame>
          <div className="flex flex-col items-center mt-1">
            <IslamicStar size={24} className="text-[#b89128] mb-2 opacity-90" />
            <h3 className="font-cinzel text-xs sm:text-sm tracking-[0.25em] text-[#735512] font-semibold uppercase">
              Evening Itinerary &amp; Schedule
            </h3>
            <p className="font-serif italic text-sm text-[#46544d] mt-1">
              Friday, 8 January 2027 • Taiba Palace
            </p>
          </div>
        </MughalArchFrame>

        <div className="gold-divider-line !my-4 max-w-[220px] mx-auto" />

        {/* Confirmed Notice Banner */}
        <div className="mb-6 py-2 px-3.5 rounded-lg bg-[#f4ecd6] border border-[#dfb76c]/60 inline-flex items-center gap-2 text-left">
          <CheckCircle2 size={16} className="text-[#0c3123] shrink-0" />
          <p className="font-sans text-[11px] text-[#0c3123] font-medium leading-tight">
            <strong>Confirmed Wedding Assembly: 7:00 PM.</strong> Programme timeline is provided below for your ease of arrival.
          </p>
        </div>

        {/* Vertical Timeline Track */}
        <div className="relative text-left pl-2 pr-1">
          {/* Vertical gold track line */}
          <div className="absolute left-[23px] sm:left-[27px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#dfb76c] via-[#b89128] to-[#dfb76c]/40 pointer-events-none"></div>

          <div className="space-y-5">
            {timelineEvents.map((evt, idx) => {
              const IconComponent = evt.icon;
              return (
                <motion.div
                  key={evt.title}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="relative flex items-start gap-3.5 group"
                >
                  {/* Timeline Node Icon Badge */}
                  <div
                    className={`relative z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0 border transition-transform duration-300 group-hover:scale-105 shadow-sm ${
                      evt.isPrimary
                        ? 'bg-gradient-to-br from-[#0e3a29] to-[#062418] border-[#dfb76c] text-amber-200 shadow-md ring-2 ring-[#dfb76c]/30'
                        : 'bg-[#faf4e6] border-[#dfb76c]/70 text-[#735512]'
                    }`}
                  >
                    <IconComponent size={18} />
                  </div>

                  {/* Content Box */}
                  <div className="flex-1 pt-0.5">
                    <div className="flex items-center justify-between flex-wrap gap-1">
                      <span className="font-cinzel text-sm sm:text-base font-bold text-[#0c2e21] tracking-wider">
                        {evt.time}
                      </span>
                      <span
                        className={`font-sans text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                          evt.isPrimary
                            ? 'bg-[#0c3123] text-amber-200 border-amber-400/40 font-semibold'
                            : 'bg-[#eee4cb] text-[#695015] border-[#dfb76c]/40 font-medium'
                        }`}
                      >
                        {evt.status}
                      </span>
                    </div>

                    <h4 className="font-serif font-bold text-base sm:text-lg text-[#1e2522] mt-0.5">
                      {evt.title}
                    </h4>
                    <p className="font-serif text-xs sm:text-sm text-[#48564f] leading-snug mt-0.5">
                      {evt.subtitle}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <IslamicStar size={18} className="text-[#b89128] opacity-75" />
        </div>
      </motion.div>
    </section>
  );
};
