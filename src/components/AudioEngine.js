// Royal Wedding Ambient Audio Engine using Web Audio API
// Generates a serene, acoustic royal instrumental raga (Santoor, Flute & Tanpura drone)
// Zero external network dependencies, offline-ready, touch-gated (no autoplay).

class RoyalWeddingAudioEngine {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.masterGain = null;
    this.droneGain = null;
    this.timerId = null;
    this.melodyIndex = 0;

    // Raag Yaman / Wedding Pentatonic scale frequencies (Hz):
    // D3, F#3, A3, B3, C#4, D4, E4, F#4, A4, B4, D5
    this.scale = [
      146.83, 185.00, 220.00, 246.94, 277.18, 
      293.66, 329.63, 369.99, 440.00, 493.88, 587.33
    ];

    // Elegant traditional melody sequence
    this.melodyPattern = [
      { note: 5, dur: 1.2 }, // D4
      { note: 7, dur: 0.8 }, // F#4
      { note: 8, dur: 1.5 }, // A4
      { note: 7, dur: 0.8 }, // F#4
      { note: 9, dur: 1.2 }, // B4
      { note: 8, dur: 1.0 }, // A4
      { note: 10, dur: 2.2 }, // D5
      { note: 9, dur: 0.8 }, // B4
      { note: 8, dur: 1.2 }, // A4
      { note: 7, dur: 1.0 }, // F#4
      { note: 6, dur: 0.8 }, // E4
      { note: 5, dur: 2.5 }, // D4
      { note: 4, dur: 0.8 }, // C#4
      { note: 2, dur: 1.2 }, // A3
      { note: 5, dur: 2.0 }, // D4
    ];
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();

      // Master output
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.18, this.ctx.currentTime);

      // Lowpass filter for warm acoustic timbre
      this.filter = this.ctx.createBiquadFilter();
      this.filter.type = 'lowpass';
      this.filter.frequency.setValueAtTime(1400, this.ctx.currentTime);
      this.filter.Q.setValueAtTime(1.5, this.ctx.currentTime);

      // Convolver / Reverb simulation using delay network
      this.reverbGain = this.ctx.createGain();
      this.reverbGain.gain.setValueAtTime(0.35, this.ctx.currentTime);

      const delay = this.ctx.createDelay();
      delay.delayTime.setValueAtTime(0.32, this.ctx.currentTime);

      const feedback = this.ctx.createGain();
      feedback.gain.setValueAtTime(0.38, this.ctx.currentTime);

      this.masterGain.connect(this.filter);
      this.filter.connect(this.ctx.destination);

      // Send to delay/reverb
      this.masterGain.connect(delay);
      delay.connect(feedback);
      feedback.connect(delay);
      delay.connect(this.reverbGain);
      this.reverbGain.connect(this.ctx.destination);
    }
  }

  startDrone() {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    // Tanpura Root D2 (73.42 Hz) & Fifth A2 (110 Hz)
    const droneFreqs = [73.42, 110.00, 146.83];
    this.droneOscs = [];

    this.droneGain = this.ctx.createGain();
    this.droneGain.gain.setValueAtTime(0.001, now);
    this.droneGain.gain.exponentialRampToValueAtTime(0.08, now + 3);
    this.droneGain.connect(this.masterGain);

    droneFreqs.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      osc.type = idx === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, now);

      // Subtle detune for shimmer
      osc.detune.setValueAtTime((idx - 1) * 3, now);

      const oscGain = this.ctx.createGain();
      oscGain.gain.setValueAtTime(1 / (idx + 1), now);

      osc.connect(oscGain);
      oscGain.connect(this.droneGain);
      osc.start(now);
      this.droneOscs.push(osc);
    });
  }

  playPluck(freq, duration = 1.0) {
    if (!this.ctx || !this.isPlaying) return;
    const now = this.ctx.currentTime;

    // Pluck note (Santoor / acoustic bell quality)
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const noteGain = this.ctx.createGain();

    osc1.type = 'triangle';
    osc1.frequency.setValueAtTime(freq, now);

    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(freq * 2, now); // Octave overtone

    // Quick pluck attack, long crystalline decay
    noteGain.gain.setValueAtTime(0.0001, now);
    noteGain.gain.linearRampToValueAtTime(0.22, now + 0.04);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, now + duration + 0.8);

    osc1.connect(noteGain);
    osc2.connect(noteGain);
    noteGain.connect(this.masterGain);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + duration + 1.0);
    osc2.stop(now + duration + 1.0);
  }

  scheduleNextNote() {
    if (!this.isPlaying) return;

    const currentItem = this.melodyPattern[this.melodyIndex];
    const freq = this.scale[currentItem.note] || 293.66;
    this.playPluck(freq, currentItem.dur);

    this.melodyIndex = (this.melodyIndex + 1) % this.melodyPattern.length;

    // Interval to next note
    const nextDelayMs = (currentItem.dur + Math.random() * 0.3) * 1000;
    this.timerId = setTimeout(() => {
      this.scheduleNextNote();
    }, nextDelayMs);
  }

  play() {
    this.init();
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    if (this.isPlaying) return;

    this.isPlaying = true;
    this.startDrone();
    this.scheduleNextNote();
  }

  pause() {
    this.isPlaying = false;
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
    if (this.droneGain && this.ctx) {
      const now = this.ctx.currentTime;
      this.droneGain.gain.linearRampToValueAtTime(0.0001, now + 0.6);
      setTimeout(() => {
        if (this.droneOscs) {
          this.droneOscs.forEach(o => {
            try { o.stop(); } catch (e) {}
          });
          this.droneOscs = [];
        }
      }, 700);
    }
  }

  toggle() {
    if (this.isPlaying) {
      this.pause();
      return false;
    } else {
      this.play();
      return true;
    }
  }
}

export const royalAudio = new RoyalWeddingAudioEngine();
