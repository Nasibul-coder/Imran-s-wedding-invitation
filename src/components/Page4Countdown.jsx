import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Download, ExternalLink, Heart } from 'lucide-react';
import { CornerOrnament, IslamicStar, MughalArchFrame } from './RoyalOrnaments';

export const Page4Countdown = () => {
  // Wedding Festivities Begin: Friday, 8 January 2027, Departure 5:00 PM IST (UTC+05:30)
  const targetDate = new Date('2027-01-08T17:00:00+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isCompleted: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isCompleted: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isCompleted: false });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // Google Calendar URL
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    'Wedding of Sk Imran Ali & Saina Sheikh'
  )}&dates=20270108T113000Z/20270109T183000Z&details=${encodeURIComponent(
    'Two-Day Wedding Celebrations of Sk Imran Ali & Saina Sheikh:\n• Friday, 8 Jan 2027: Nikah Ceremony (Departure 5:00 PM)\n• Saturday, 9 Jan 2027: Walima Celebration at Taiba Palace, Furfura Sharif, Hooghly.'
  )}&location=${encodeURIComponent('Taiba Palace, Furfura Sharif, Hooghly')}`;

  // Download .ics file
  const handleDownloadIcs = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Sk Imran Ali & Saina Sheikh Wedding//EN',
      'CALSCALE:GREGORIAN',
      'BEGIN:VEVENT',
      'DTSTART:20270108T113000Z',
      'DTEND:20270109T183000Z',
      'SUMMARY:Wedding of Sk Imran Ali & Saina Sheikh',
      'DESCRIPTION:Two-Day Wedding Celebrations of Sk Imran Ali & Saina Sheikh: Nikah on Friday 8 Jan 2027 & Walima on Saturday 9 Jan 2027 at Taiba Palace\\, Furfura Sharif.',
      'LOCATION:Taiba Palace\\, Furfura Sharif\\, Hooghly',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Imran-Saina-Wedding.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const timeBoxes = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: String(timeLeft.hours).padStart(2, '0') },
    { label: 'Minutes', value: String(timeLeft.minutes).padStart(2, '0') },
    { label: 'Seconds', value: String(timeLeft.seconds).padStart(2, '0') },
  ];

  return (
    <section id="countdown" className="w-full py-8 px-4 sm:px-6 flex flex-col items-center">
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
            <IslamicStar size={24} className="text-amber-300 mb-2 opacity-90" />
            <span className="font-cinzel text-xs sm:text-sm tracking-[0.25em] text-amber-200 uppercase font-semibold">
              The Auspicious Countdown
            </span>
            <p className="font-serif italic text-sm text-amber-100/80 mt-1">
              Counting every moment until we celebrate together
            </p>
          </div>
        </MughalArchFrame>

        <div className="gold-divider-line !my-4 max-w-[220px] mx-auto" />

        {/* Target Time Announcement */}
        <div className="mb-6">
          <p className="font-cinzel text-lg sm:text-xl text-amber-100 font-bold tracking-wider">
            FRIDAY, 8 JANUARY 2027
          </p>
          <p className="font-sans text-xs tracking-widest text-amber-300/80 uppercase font-medium mt-0.5">
            DEPARTURE 5:00 PM • NIKAH CEREMONY
          </p>
        </div>

        {/* Countdown Grid */}
        <div className="grid grid-cols-4 gap-2 sm:gap-3 my-4">
          {timeBoxes.map((box, index) => (
            <motion.div
              key={box.label}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative p-2.5 sm:p-3 rounded-xl bg-gradient-to-b from-[#0a3523] to-[#041d13] border border-amber-400/40 shadow-[0_4px_12px_rgba(0,0,0,0.4)] flex flex-col items-center justify-center"
            >
              <div className="absolute top-1 right-1 w-1 h-1 rounded-full bg-amber-400/60"></div>
              <span className="font-cinzel text-2xl sm:text-3xl font-extrabold text-amber-200 tracking-tight leading-none drop-shadow">
                {box.value}
              </span>
              <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-wider text-amber-300/80 font-medium mt-1.5">
                {box.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Calendar Action Buttons */}
        <div className="mt-7 flex flex-col sm:flex-row gap-2.5 justify-center">
          <a
            href={googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="royal-btn-gold text-xs py-2.5 px-4 font-semibold"
          >
            <Calendar size={14} />
            <span>Google Calendar</span>
            <ExternalLink size={12} className="opacity-70" />
          </a>

          <button
            onClick={handleDownloadIcs}
            className="royal-btn-emerald text-xs py-2.5 px-4 font-semibold"
          >
            <Download size={14} />
            <span>Apple / Outlook (.ics)</span>
          </button>
        </div>
      </motion.div>
    </section>
  );
};
