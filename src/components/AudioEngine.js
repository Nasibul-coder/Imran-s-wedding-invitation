// Official Wedding Background Music Engine
// Track: "Wedding Bells (Kalyanam)" by A. R. Rahman
// Single persistent HTMLAudioElement, continuous loop, 35% volume, graceful autoplay handling.

class RoyalWeddingAudioEngine {
  constructor() {
    this.audio = null;
    this.isPlaying = false;
    this.audioSrc = '/audio/wedding_bells.mp3';
    this.volume = 0.35; // 35% volume as requested
  }

  // Initialize the single persistent HTMLAudioElement
  init() {
    if (!this.audio && typeof window !== 'undefined') {
      try {
        this.audio = new Audio(this.audioSrc);
        this.audio.loop = true;
        this.audio.preload = 'auto';
        this.audio.playsInline = true;
        if (typeof this.audio.setAttribute === 'function') {
          this.audio.setAttribute('playsinline', 'true');
          this.audio.setAttribute('webkit-playsinline', 'true');
        }

        // On iOS Safari volume is read-only / hardware-controlled; catch potential throws
        try {
          this.audio.volume = this.volume;
        } catch (volErr) {
          // Ignore volume restrictions on iOS
        }

        this.audio.addEventListener('play', () => {
          this.isPlaying = true;
        });

        this.audio.addEventListener('pause', () => {
          this.isPlaying = false;
        });

        this.audio.addEventListener('ended', () => {
          this.isPlaying = false;
        });

        this.audio.addEventListener('error', (e) => {
          // Log internally, avoid throwing or breaking the page
          console.warn('Background audio resource notification:', e);
          this.isPlaying = false;
        });
      } catch (initErr) {
        console.warn('Audio initialization notice:', initErr);
        this.audio = null;
      }
    }
  }

  // Attempt to play audio smoothly without restarting if already playing
  play() {
    this.init();
    if (!this.audio) return false;

    // Prevent duplicate playback if already actively playing
    if (this.isPlaying && !this.audio.paused) {
      return true;
    }

    try {
      const promise = this.audio.play();
      if (promise !== undefined) {
        promise
          .then(() => {
            this.isPlaying = true;
          })
          .catch((err) => {
            // Autoplay restrictions are normal; do not break UI or throw error
            this.isPlaying = false;
            if (err && err.name !== 'NotAllowedError') {
              console.warn('Audio play status:', err.message);
            }
          });
      }
      return true;
    } catch (e) {
      this.isPlaying = false;
      return false;
    }
  }

  // Automatic playback attempt on site load
  attemptAutoplay() {
    return this.play();
  }

  pause() {
    if (this.audio && !this.audio.paused) {
      this.audio.pause();
    }
    this.isPlaying = false;
  }

  setVolume(vol) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.audio) {
      try {
        this.audio.volume = this.volume;
      } catch (e) {
        // Safe ignore on iOS
      }
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

// Export singleton instance so audio state persists across all components and re-renders
export const royalAudio = new RoyalWeddingAudioEngine();
