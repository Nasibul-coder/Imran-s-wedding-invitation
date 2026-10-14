// Official Royal Wedding Audio Engine
// Track: "Wedding Bells (Kalyanam)" by A. R. Rahman
// Loopable, touch-gated, smooth volume control with subscriber synchronization.

class RoyalWeddingAudioEngine {
  constructor() {
    this.audio = null;
    this.isPlaying = false;
    this.audioSrc = '/audio/wedding_bells.mp3';
    this.listeners = new Set();
    this.volume = 0.55;
  }

  // Subscribe UI components to music state changes
  subscribe(listener) {
    this.listeners.add(listener);
    listener(this.isPlaying);
    return () => this.listeners.delete(listener);
  }

  notify() {
    this.listeners.forEach((fn) => {
      try {
        fn(this.isPlaying);
      } catch (e) {
        // safely ignore listener exceptions
      }
    });
  }

  init() {
    if (!this.audio && typeof window !== 'undefined') {
      this.audio = new Audio(this.audioSrc);
      this.audio.loop = true;
      this.audio.preload = 'auto';
      this.audio.volume = this.volume;

      this.audio.addEventListener('play', () => {
        this.isPlaying = true;
        this.notify();
      });

      this.audio.addEventListener('pause', () => {
        this.isPlaying = false;
        this.notify();
      });

      this.audio.addEventListener('ended', () => {
        this.isPlaying = false;
        this.notify();
      });

      this.audio.addEventListener('error', (e) => {
        console.warn('HTMLAudio error, falling back if needed:', e);
        this.isPlaying = false;
        this.notify();
      });
    }
  }

  play() {
    this.init();
    if (!this.audio) return false;

    const promise = this.audio.play();
    if (promise !== undefined) {
      promise
        .then(() => {
          this.isPlaying = true;
          this.notify();
        })
        .catch((err) => {
          console.warn('Audio play was prevented or blocked by browser policy:', err);
          this.isPlaying = false;
          this.notify();
        });
    }
    return true;
  }

  pause() {
    if (this.audio) {
      this.audio.pause();
    }
    this.isPlaying = false;
    this.notify();
    return false;
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

  setVolume(vol) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.audio) {
      this.audio.volume = this.volume;
    }
  }

  getTrackInfo() {
    return {
      title: 'Wedding Bells (Kalyanam)',
      artist: 'A. R. Rahman',
      src: this.audioSrc,
    };
  }
}

export const royalAudio = new RoyalWeddingAudioEngine();
