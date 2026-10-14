import React, { useEffect, useRef } from 'react';

export const GoldCanvasSparkles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle count: optimal for mobile (lightweight) & desktop
    const isMobile = width < 640;
    const count = isMobile ? 22 : Math.min(40, Math.floor(width / 28));
    const particles = [];

    const goldColors = [
      'rgba(250, 228, 173, ',
      'rgba(223, 183, 108, ',
      'rgba(212, 175, 55, ',
      'rgba(255, 246, 219, ',
    ];

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.6 + 0.6,
        colorPrefix: goldColors[Math.floor(Math.random() * goldColors.length)],
        baseAlpha: Math.random() * 0.5 + 0.2,
        alphaOffset: Math.random() * Math.PI * 2,
        speedY: Math.random() * 0.35 + 0.15,
        speedX: (Math.random() - 0.5) * 0.2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
      });
    }

    let tick = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      tick++;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.y -= p.speedY;
        p.x += Math.sin(tick * 0.01 + p.alphaOffset) * p.speedX;

        // Reset if floated above screen
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }

        const currentAlpha = p.baseAlpha + Math.sin(tick * p.pulseSpeed + p.alphaOffset) * 0.25;
        const safeAlpha = Math.max(0.05, Math.min(0.85, currentAlpha));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.colorPrefix}${safeAlpha})`;
        // Moderate shadow blur to prevent WebKit GPU memory spikes on iOS
        ctx.shadowBlur = isMobile ? 2 : p.radius * 2;
        ctx.shadowColor = 'rgba(223, 183, 108, 0.45)';
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-1 w-full h-full select-none"
      style={{ opacity: 0.8 }}
      aria-hidden="true"
    />
  );
};
