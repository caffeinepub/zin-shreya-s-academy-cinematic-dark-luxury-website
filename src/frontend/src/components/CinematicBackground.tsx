import { useEffect, useRef } from 'react';

export default function CinematicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let shouldAnimate = !prefersReducedMotion.matches;

    // Handle reduced motion changes
    const handleMotionChange = (e: MediaQueryListEvent) => {
      shouldAnimate = !e.matches;
      if (!shouldAnimate) {
        // Render one static frame
        renderStaticFrame();
      }
    };
    prefersReducedMotion.addEventListener('change', handleMotionChange);

    // Set canvas size with device pixel ratio for crisp rendering
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      // Set display size (CSS pixels)
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      
      // Set actual size in memory (scaled by DPR)
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      // Scale context to match DPR
      ctx.scale(dpr, dpr);
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    interface Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }

    const particles: Particle[] = [];
    const particleCount = window.innerWidth < 768 ? 15 : 30;

    // Initialize particles
    const initParticles = () => {
      particles.length = 0;
      const width = canvas.width / (window.devicePixelRatio || 1);
      const height = canvas.height / (window.devicePixelRatio || 1);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 4 + 2,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.05 + 0.02,
        });
      }
    };
    initParticles();

    let animationFrameId: number;
    let time = 0;

    const renderFrame = (currentTime: number) => {
      const width = canvas.width / (window.devicePixelRatio || 1);
      const height = canvas.height / (window.devicePixelRatio || 1);
      
      ctx.clearRect(0, 0, width, height);

      // Draw animated gradient background
      const gradient1X = width * (0.3 + Math.sin(currentTime * 0.5) * 0.1);
      const gradient1Y = height * (0.3 + Math.cos(currentTime * 0.5) * 0.1);
      const gradient1 = ctx.createRadialGradient(
        gradient1X,
        gradient1Y,
        0,
        gradient1X,
        gradient1Y,
        width * 0.4
      );
      gradient1.addColorStop(0, 'rgba(255, 140, 0, 0.12)');
      gradient1.addColorStop(1, 'transparent');

      const gradient2X = width * (0.7 + Math.sin(currentTime * 0.3 + Math.PI) * 0.1);
      const gradient2Y = height * (0.7 + Math.cos(currentTime * 0.3 + Math.PI) * 0.1);
      const gradient2 = ctx.createRadialGradient(
        gradient2X,
        gradient2Y,
        0,
        gradient2X,
        gradient2Y,
        width * 0.4
      );
      gradient2.addColorStop(0, 'rgba(255, 105, 180, 0.08)');
      gradient2.addColorStop(1, 'transparent');

      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, width, height);

      // Draw soft light wave
      const waveOffset = (currentTime * 10) % (width * 1.2);
      const waveGradient = ctx.createRadialGradient(
        waveOffset - width * 0.1,
        height * 0.5,
        0,
        waveOffset - width * 0.1,
        height * 0.5,
        width * 0.6
      );
      waveGradient.addColorStop(0, 'rgba(255, 140, 0, 0.08)');
      waveGradient.addColorStop(1, 'transparent');
      
      ctx.globalCompositeOperation = 'screen';
      ctx.fillStyle = waveGradient;
      ctx.fillRect(0, 0, width, height);
      ctx.globalCompositeOperation = 'source-over';

      // Draw and update particles
      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.filter = 'blur(8px)';
        ctx.fill();
        ctx.filter = 'none';

        // Update particle position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around screen
        if (particle.x < -10) particle.x = width + 10;
        if (particle.x > width + 10) particle.x = -10;
        if (particle.y < -10) particle.y = height + 10;
        if (particle.y > height + 10) particle.y = -10;
      });
    };

    const renderStaticFrame = () => {
      // Render a single static cinematic frame
      renderFrame(0.5);
    };

    const animate = () => {
      if (!shouldAnimate) return;
      
      time += 0.001;
      renderFrame(time);
      animationFrameId = requestAnimationFrame(animate);
    };

    // Start animation or render static frame
    if (shouldAnimate) {
      animate();
    } else {
      renderStaticFrame();
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      prefersReducedMotion.removeEventListener('change', handleMotionChange);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="cinematic-background-canvas"
      aria-hidden="true"
    />
  );
}
