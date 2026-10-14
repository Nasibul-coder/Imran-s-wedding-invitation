import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, MessageSquare, Users, User, Phone, HelpCircle, ChevronDown, ChevronUp, Share2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { MughalArchFrame, CornerOrnament, IslamicStar } from './RoyalOrnaments';

export const Page8RSVP = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    attendance: 'accept', // 'accept' | 'decline'
    eventsAttending: 'both', // 'both' | 'nikah' | 'walima'
    guestCount: '1',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [showConfigGuide, setShowConfigGuide] = useState(false);

  // Check if previously submitted in this browser
  useEffect(() => {
    try {
      const saved = localStorage.getItem('imran_saina_rsvp_last');
      if (saved) {
        const parsed = JSON.parse(saved);
        setSubmittedData(parsed);
      }
    } catch (e) {
      // safe fallback
    }
  }, []);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const submission = {
      ...formData,
      timestamp: new Date().toISOString(),
    };

    // Save to localStorage for demo persistence
    try {
      localStorage.setItem('imran_saina_rsvp_last', JSON.stringify(submission));
      const existing = JSON.parse(localStorage.getItem('imran_saina_all_rsvps') || '[]');
      existing.push(submission);
      localStorage.setItem('imran_saina_all_rsvps', JSON.stringify(existing));
    } catch (err) {
      console.warn('LocalStorage save error:', err);
    }

    setSubmittedData(submission);
    setIsSubmitted(true);

    // Celebratory confetti burst
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#dfb76c', '#fae4ad', '#165c3f', '#ffffff'],
        disableForReducedMotion: true,
      });
    } catch (e) {}
  };

  // Pre-generate WhatsApp message
  const generateWhatsAppUrl = (data) => {
    const groomPhone = '919876543210'; // Configurable host number
    const attendanceText = data.attendance === 'accept' ? 'Joyfully Accept' : 'Regretfully Decline';
    const eventName = data.eventsAttending === 'nikah'
      ? 'Nikah Ceremony (8 Jan)'
      : data.eventsAttending === 'walima'
      ? 'Walima Celebration (9 Jan)'
      : 'Both Ceremonies (Nikah & Walima)';

    const text = encodeURIComponent(
      `Assalamu Alaikum!\n\n` +
      `*Wedding RSVP for Sk Imran Ali & Saina Sheikh*\n` +
      `• *Guest Name:* ${data.fullName}\n` +
      `• *Attendance:* ${attendanceText}\n` +
      (data.attendance === 'accept' ? `• *Events Attending:* ${eventName}\n` : '') +
      (data.attendance === 'accept' ? `• *Guests Attending:* ${data.guestCount}\n` : '') +
      (data.phone ? `• *Phone:* ${data.phone}\n` : '') +
      (data.message ? `• *Wishes/Note:* "${data.message}"\n` : '') +
      `\nLooking forward to celebrating with you! ✨`
    );
    return `https://api.whatsapp.com/send?text=${text}`;
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
    try {
      localStorage.removeItem('imran_saina_rsvp_last');
    } catch (e) {}
  };

  return (
    <section id="rsvp" className="w-full py-8 px-4 sm:px-6 flex flex-col items-center">
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

        {/* Header */}
        <MughalArchFrame>
          <div className="flex flex-col items-center mt-1">
            <IslamicStar size={24} className="text-amber-300 mb-2 opacity-90" />
            <h3 className="font-cinzel text-xs sm:text-sm tracking-[0.25em] text-amber-200 uppercase font-semibold">
              Kindly Respond
            </h3>
            <p className="font-serif italic text-sm text-amber-100/80 mt-1">
              Please RSVP by 25 December 2026
            </p>
          </div>
        </MughalArchFrame>

        <div className="gold-divider-line !my-4 max-w-[220px] mx-auto" />

        {/* Confirmation Screen */}
        <AnimatePresence mode="wait">
          {isSubmitted && submittedData ? (
            <motion.div
              key="confirmed"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="py-4 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-400/10 border-2 border-amber-400/60 flex items-center justify-center text-amber-300 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                <CheckCircle2 size={32} />
              </div>

              <h4 className="font-cinzel text-xl sm:text-2xl font-bold text-amber-100 tracking-wide">
                Shukran &amp; Thank You!
              </h4>
              <p className="font-serif text-base text-amber-200/90 mt-1">
                Alhamdulillah, your response has been recorded.
              </p>

              {/* Summary Card */}
              <div className="my-5 p-4 rounded-xl bg-[#072a1c] border border-amber-400/30 text-left text-xs text-amber-100/90 space-y-2">
                <div className="flex justify-between border-b border-amber-400/20 pb-1.5">
                  <span className="text-amber-300/70 font-sans">Guest Name:</span>
                  <span className="font-semibold text-amber-100">{submittedData.fullName}</span>
                </div>
                <div className="flex justify-between border-b border-amber-400/20 pb-1.5">
                  <span className="text-amber-300/70 font-sans">Attendance:</span>
                  <span className="font-semibold text-amber-200">
                    {submittedData.attendance === 'accept' ? 'Joyfully Attending' : 'Regretfully Declines'}
                  </span>
                </div>
                {submittedData.attendance === 'accept' && (
                  <>
                    <div className="flex justify-between border-b border-amber-400/20 pb-1.5">
                      <span className="text-amber-300/70 font-sans">Event(s):</span>
                      <span className="font-semibold text-amber-100">
                        {submittedData.eventsAttending === 'nikah'
                          ? 'Nikah (8 Jan)'
                          : submittedData.eventsAttending === 'walima'
                          ? 'Walima (9 Jan)'
                          : 'Both (Nikah & Walima)'}
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-amber-400/20 pb-1.5">
                      <span className="text-amber-300/70 font-sans">Guests:</span>
                      <span className="font-semibold">{submittedData.guestCount} person(s)</span>
                    </div>
                  </>
                )}
                {submittedData.message && (
                  <div className="pt-1">
                    <span className="text-amber-300/70 block mb-1 font-sans">Your Message:</span>
                    <p className="font-serif italic text-amber-100 bg-[#041a11] p-2 rounded border border-amber-400/20">
                      "{submittedData.message}"
                    </p>
                  </div>
                )}
              </div>

              {/* Share RSVP via WhatsApp */}
              <div className="space-y-3">
                <a
                  href={generateWhatsAppUrl(submittedData)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="royal-btn-gold w-full py-3 text-xs font-semibold tracking-wider flex items-center justify-center gap-2"
                >
                  <Share2 size={15} />
                  <span>Send Confirmation via WhatsApp</span>
                </a>

                <button
                  onClick={handleReset}
                  className="font-sans text-xs text-amber-300/70 hover:text-amber-200 underline tracking-wider pt-2"
                >
                  Edit or submit another response
                </button>
              </div>
            </motion.div>
          ) : (
            /* RSVP Input Form */
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4 text-left"
              noValidate
            >
              {/* Full Name Field */}
              <div>
                <label className="block font-sans text-xs uppercase tracking-wider text-amber-200/90 font-medium mb-1.5">
                  Full Name <span className="text-amber-400">*</span>
                </label>
                <div className="relative">
                  <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-amber-400/60" />
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: null });
                    }}
                    placeholder="e.g. Dr. Tariq Mahmood & Family"
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#062619] border ${
                      errors.fullName ? 'border-red-400' : 'border-amber-400/40 focus:border-amber-400'
                    } text-amber-100 placeholder-amber-200/30 font-serif text-base focus:outline-none focus:ring-1 focus:ring-amber-400/50 transition-all`}
                  />
                </div>
                {errors.fullName && (
                  <p className="text-red-300 text-[11px] font-sans mt-1">{errors.fullName}</p>
                )}
              </div>

              {/* Attendance Toggle */}
              <div>
                <label className="block font-sans text-xs uppercase tracking-wider text-amber-200/90 font-medium mb-1.5">
                  Will You Attend? <span className="text-amber-400">*</span>
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, attendance: 'accept' })}
                    className={`py-2.5 px-3 rounded-xl border text-xs sm:text-sm font-cinzel font-bold tracking-wider transition-all text-center ${
                      formData.attendance === 'accept'
                        ? 'bg-amber-400 text-emerald-950 border-amber-200 shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                        : 'bg-[#062619] text-amber-200/80 border-amber-400/30 hover:border-amber-400/60'
                    }`}
                  >
                    Joyfully Accepts
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, attendance: 'decline' })}
                    className={`py-2.5 px-3 rounded-xl border text-xs sm:text-sm font-cinzel font-bold tracking-wider transition-all text-center ${
                      formData.attendance === 'decline'
                        ? 'bg-amber-400 text-emerald-950 border-amber-200 shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                        : 'bg-[#062619] text-amber-200/80 border-amber-400/30 hover:border-amber-400/60'
                    }`}
                  >
                    Regretfully Declines
                  </button>
                </div>
              </div>

              {/* Event(s) Attending & Number of Guests (shown if accepting) */}
              {formData.attendance === 'accept' && (
                <>
                  <div>
                    <label className="block font-sans text-xs uppercase tracking-wider text-amber-200/90 font-medium mb-1.5">
                      Which Ceremony Will You Attend?
                    </label>
                    <div className="relative">
                      <select
                        value={formData.eventsAttending}
                        onChange={(e) => setFormData({ ...formData, eventsAttending: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#062619] border border-amber-400/40 text-amber-100 font-serif text-base focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/50 appearance-none cursor-pointer"
                      >
                        <option value="both" className="bg-[#051e14] text-amber-100">Both Ceremonies (Nikah &amp; Walima)</option>
                        <option value="nikah" className="bg-[#051e14] text-amber-100">Nikah Ceremony Only (Friday, 8 Jan)</option>
                        <option value="walima" className="bg-[#051e14] text-amber-100">Walima Celebration Only (Saturday, 9 Jan)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-sans text-xs uppercase tracking-wider text-amber-200/90 font-medium mb-1.5">
                      Number of Guests Attending
                    </label>
                    <div className="relative">
                      <Users size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-amber-400/60" />
                    <select
                      value={formData.guestCount}
                      onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#062619] border border-amber-400/40 text-amber-100 font-serif text-base focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/50 appearance-none cursor-pointer"
                    >
                      <option value="1" className="bg-[#051e14] text-amber-100">1 Guest</option>
                      <option value="2" className="bg-[#051e14] text-amber-100">2 Guests</option>
                      <option value="3" className="bg-[#051e14] text-amber-100">3 Guests</option>
                      <option value="4" className="bg-[#051e14] text-amber-100">4 Guests</option>
                      <option value="5+" className="bg-[#051e14] text-amber-100">5+ Guests (Family)</option>
                    </select>
                    </div>
                  </div>
                </>
              )}

              {/* Phone / Contact */}
              <div>
                <label className="block font-sans text-xs uppercase tracking-wider text-amber-200/90 font-medium mb-1.5">
                  Phone / WhatsApp (Optional)
                </label>
                <div className="relative">
                  <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-amber-400/60" />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#062619] border border-amber-400/40 text-amber-100 placeholder-amber-200/30 font-serif text-base focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/50"
                  />
                </div>
              </div>

              {/* Warm Wishes & Notes */}
              <div>
                <label className="block font-sans text-xs uppercase tracking-wider text-amber-200/90 font-medium mb-1.5">
                  Warm Wishes / Du'as for Imran &amp; Saina
                </label>
                <div className="relative">
                  <MessageSquare size={16} className="absolute left-3.5 top-3 text-amber-400/60" />
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your prayers, blessings, or notes for the couple..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#062619] border border-amber-400/40 text-amber-100 placeholder-amber-200/30 font-serif text-base focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/50 resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="royal-btn-gold w-full py-3.5 text-xs sm:text-sm font-bold tracking-[0.16em]"
                >
                  <Send size={15} className="text-emerald-950" />
                  <span>Confirm RSVP</span>
                </button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>

        {/* Technical Notice: Form Submission Service Connection Explanation */}
        <div className="mt-6 pt-4 border-t border-amber-400/20 text-left">
          <button
            onClick={() => setShowConfigGuide(!showConfigGuide)}
            className="w-full flex items-center justify-between text-[11px] font-sans tracking-wider text-amber-300/75 hover:text-amber-200 transition-colors"
          >
            <span className="flex items-center gap-1.5">
              <HelpCircle size={13} className="text-amber-400" />
              <span>How are RSVPs delivered? (Backend Integration Guide)</span>
            </span>
            {showConfigGuide ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
          </button>

          {showConfigGuide && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-3 p-3 rounded-lg bg-[#041a11] border border-amber-400/25 text-[11px] text-amber-100/80 font-sans leading-relaxed space-y-2"
            >
              <p>
                <strong>Preview Storage:</strong> Currently, RSVP entries are recorded locally in the browser's <code>localStorage</code> so you can test submissions and instantly send them via <strong>WhatsApp</strong>.
              </p>
              <p>
                <strong>Connecting Real Production Backend:</strong>
              </p>
              <ul className="list-disc pl-4 space-y-1 text-amber-200/70">
                <li>
                  <strong>Formspree / Getform:</strong> Replace form handler with an action endpoint (e.g., <code>https://formspree.io/f/YOUR_ID</code>) to receive instant email notifications.
                </li>
                <li>
                  <strong>Google Sheets:</strong> Deploy a free Google Apps Script web app endpoint to stream responses directly into an organized wedding guest spreadsheet.
                </li>
                <li>
                  <strong>EmailJS:</strong> Direct client-side email dispatch without configuring any server.
                </li>
              </ul>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
};
