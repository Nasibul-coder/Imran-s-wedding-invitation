import React from 'react';
import { motion } from 'framer-motion';
import { MughalArchFrame, CornerOrnament, IslamicStar } from './RoyalOrnaments';

export const Page3IslamicBlessing = () => {
  return (
    <section id="islamic-blessing" className="w-full py-8 px-4 sm:px-6 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-[460px] ivory-page-card paper-texture rounded-2xl p-6 sm:p-9 text-center shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_1px_1px_rgba(212,175,55,0.45)] border-2 border-[#dfb76c]/60"
      >
        {/* Corner Ornaments */}
        <CornerOrnament position="top-left" />
        <CornerOrnament position="top-right" />
        <CornerOrnament position="bottom-left" />
        <CornerOrnament position="bottom-right" />

        <div className="absolute inset-2.5 sm:inset-3 border border-[#dfb76c]/40 rounded-xl pointer-events-none" />
        <div className="absolute inset-3.5 sm:inset-4 border border-dashed border-[#b89128]/30 rounded-lg pointer-events-none" />

        {/* Mughal Arch Silhouette */}
        <MughalArchFrame>
          <div className="flex flex-col items-center mt-1">
            <IslamicStar size={24} className="text-[#b89128] mb-2 opacity-90" />
            <h3 className="font-cinzel text-xs sm:text-sm tracking-[0.25em] text-[#735512] font-semibold uppercase">
              Sacred Matrimony &amp; Blessings
            </h3>
          </div>
        </MughalArchFrame>

        <div className="gold-divider-line !my-4 max-w-[240px] mx-auto" />

        {/* Sacred Quranic Verse: Surah Ar-Rum (30:21) */}
        <div className="my-3 px-2 sm:px-4">
          <p
            className="arabic-script text-xl sm:text-2xl md:text-[25px] text-[#0c2e21] font-semibold leading-[2.2] text-center"
            lang="ar"
            dir="rtl"
          >
            وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
          </p>

          <p className="font-serif italic text-sm sm:text-base text-[#38463f] leading-relaxed mt-3 max-w-[360px] mx-auto">
            "And among His signs is this, that He created for you mates from among yourselves, that you may dwell in tranquility with them, and He has put love and mercy between your hearts."
          </p>

          <p className="font-sans text-[11px] tracking-widest text-[#8c6a17] uppercase font-semibold mt-1">
            — Surah Ar-Rum [30:21]
          </p>
        </div>

        <div className="gold-divider-line !my-5 max-w-[200px] mx-auto" />

        {/* Sunnah Wedding Prayer (Hadith) */}
        <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-b from-[#f9f3e4] to-[#f3ebd6] border border-[#dfb76c]/50 shadow-inner">
          <p className="font-cinzel text-[11px] tracking-[0.2em] text-[#735512] uppercase font-bold mb-2">
            The Prophetic Wedding Du'a
          </p>

          <p
            className="arabic-script text-xl sm:text-2xl text-[#0c2e21] font-semibold leading-[2.1] text-center"
            lang="ar"
            dir="rtl"
          >
            بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
          </p>

          <p className="font-serif italic text-xs sm:text-sm text-[#46544d] mt-2">
            "Barakallahu laka wa baraka 'alayka wa jama'a baynakuma fee khayr"
          </p>

          <p className="font-serif text-xs sm:text-sm text-[#1e2e26] font-medium mt-1">
            "May Allah bless you, and shower His blessings upon you, and unite you both in goodness."
          </p>
        </div>

        <div className="mt-4 flex justify-center">
          <IslamicStar size={18} className="text-[#b89128] opacity-75" />
        </div>
      </motion.div>
    </section>
  );
};
