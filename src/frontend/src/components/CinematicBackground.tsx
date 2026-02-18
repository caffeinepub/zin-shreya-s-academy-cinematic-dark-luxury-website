import { useEffect, useRef } from 'react';
import { perfTime, perfTimeEnd } from '../utils/perf';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

export default function CinematicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameIdRef = useRef<number | undefined>(undefined);
  const timeRef = useRef(0);
  const isVisibleRef = useRef(true);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    perfTime('CinematicBackground:init');
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
        renderStaticFrame();
      } else if (isVisibleRef.current) {
        animate();
      }
    };
    prefersReducedMotion.addEventListener('change', handleMotionChange);

    // Pause animation when tab is hidden
    const handleVisibilityChange = () => {
      isVisibleRef.current = !document.hidden;
      
      if (document.hidden) {
        // Tab hidden - cancel animation
        if (animationFrameIdRef.current !== undefined) {
          cancelAnimationFrame(animationFrameIdRef.current);
          animationFrameIdRef.current = undefined;
        }
      } else if (shouldAnimate) {
        // Tab visible again - resume animation
        animate();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Debounced resize handler to avoid excessive work
    let resizeTimeout: number;
    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(() => {
        perfTime('CinematicBackground:resize');
        resizeCanvas();
        initParticles();
        perfTimeEnd('CinematicBackground:resize');
      }, 150);
    };

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
      
      // CRITICAL FIX: Reset transform before scaling to avoid cumulative scaling
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      // Scale context to match DPR
      ctx.scale(dpr, dpr);
    };
    resizeCanvas();
    window.addEventListener('resize', debouncedResize);

    const particleCount = window.innerWidth < 768 ? 15 : 30;

    // Initialize particles
    const initParticles = () => {
      const width = canvas.width / (window.devicePixelRatio || 1);
      const height = canvas.height / (window.devicePixelRatio || 1);
      
      particlesRef.current = [];
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
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

      // OPTIMIZATION: Set filter once before particle loop
      ctx.filter = 'blur(8px)';
      
      // Draw and update particles
      const particles = particlesRef.current;
      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.fill();

        // Update particle position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around screen
        if (particle.x < -10) particle.x = width + 10;
        if (particle.x > width + 10) particle.x = -10;
        if (particle.y < -10) particle.y = height + 10;
        if (particle.y > height + 10) particle.y = -10;
      }
      
      // Reset filter once after particle loop
      ctx.filter = 'none';
    };

    const renderStaticFrame = () => {
      // Render a single static cinematic frame
      renderFrame(0.5);
    };

    const animate = () => {
      // Check if we should continue animating
      if (!shouldAnimate || !isVisibleRef.current) {
        animationFrameIdRef.current = undefined;
        return;
      }
      
      timeRef.current += 0.001;
      renderFrame(timeRef.current);
      animationFrameIdRef.current = requestAnimationFrame(animate);
    };

    // Start animation or render static frame
    if (shouldAnimate && isVisibleRef.current) {
      animate();
    } else {
      renderStaticFrame();
    }

    perfTimeEnd('CinematicBackground:init');

    return () => {
      window.removeEventListener('resize', debouncedResize);
      prefersReducedMotion.removeEventListener('change', handleMotionChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      clearTimeout(resizeTimeout);
      if (animationFrameIdRef.current !== undefined) {
        cancelAnimationFrame(animationFrameIdRef.current);
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
