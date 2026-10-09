import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface HeroMotionBackgroundProps {
  isFixed?: boolean;
}

export default function HeroMotionBackground({ isFixed = false }: HeroMotionBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const resize = () => {
      if (!canvas) return;
      if (isFixed) {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      } else {
        const parent = canvas.parentElement;
        width = canvas.width = parent?.clientWidth || window.innerWidth;
        height = canvas.height = parent?.clientHeight || 650;
      }
    };

    resize();
    window.addEventListener('resize', resize);

    // Visible particles distributed across space
    const particleCount = isFixed
      ? Math.min(45, Math.max(24, Math.floor(width / 34)))
      : Math.min(36, Math.max(20, Math.floor(width / 36)));

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      glow: string;
    }[] = [];

    const colors = [
      { fill: '#F5B82E', glow: 'rgba(245, 184, 46, 0.9)' },
      { fill: '#7E967A', glow: 'rgba(126, 150, 122, 0.9)' },
      { fill: '#E5A922', glow: 'rgba(229, 169, 34, 0.9)' },
      { fill: '#4E5A4D', glow: 'rgba(78, 90, 77, 0.7)' },
    ];

    for (let i = 0; i < particleCount; i++) {
      const c = colors[i % colors.length];
      particles.push({
        x: Math.random() * (width || window.innerWidth),
        y: Math.random() * (height || 650),
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.5,
        radius: 2.2 + Math.random() * 2.5,
        color: c.fill,
        glow: c.glow,
      });
    }

    let mouse = { x: -1000, y: -1000, active: false };
    const onMouseMove = (e: MouseEvent) => {
      if (isFixed) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      } else {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
      }
      mouse.active = true;
    };
    const onMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Connect particles with visible web lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = isFixed ? 150 : 140;

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.38;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(180, 160, 110, ${alpha})`;
            ctx.lineWidth = 1.15;
            ctx.stroke();
          }
        }
      }

      // Draw glowing particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            const force = (140 - dist) / 140;
            p.x -= (dx / dist) * force * 1.5;
            p.y -= (dy / dist) * force * 1.5;
          }
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.shadowColor = p.glow;
        ctx.shadowBlur = 10;
        ctx.fillStyle = p.color;
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isFixed]);

  const containerClass = isFixed
    ? 'fixed inset-0 pointer-events-none z-0 overflow-hidden select-none'
    : 'absolute inset-0 pointer-events-none z-0 overflow-hidden select-none';

  return (
    <div className={containerClass}>
      
      {/* 1. Large Vibrant Animated Aurora Orbs with High Visibility */}
      {/* Warm Golden Orb - Moving Top Right */}
      <motion.div
        animate={{
          x: [0, -70, 50, 0],
          y: [0, 60, -40, 0],
          scale: [1, 1.28, 0.94, 1],
          opacity: [0.55, 0.85, 0.6, 0.55],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        className="absolute -top-12 -right-8 w-[540px] h-[540px] rounded-full bg-gradient-to-br from-[#F5B82E]/45 via-[#FFCC4D]/35 to-transparent blur-3xl"
      />

      {/* Sage Energy Aura - Moving Top Left */}
      <motion.div
        animate={{
          x: [0, 80, -60, 0],
          y: [0, -50, 45, 0],
          scale: [0.95, 1.25, 0.98, 0.95],
          opacity: [0.5, 0.75, 0.55, 0.5],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        className="absolute -top-20 -left-12 w-[580px] h-[580px] rounded-full bg-gradient-to-tr from-[#7E967A]/40 via-[#A4C4A0]/35 to-transparent blur-3xl"
      />

      {/* Luminous Center Amber Hearth */}
      <motion.div
        animate={{
          scale: [0.92, 1.15, 0.92],
          opacity: [0.45, 0.7, 0.45],
          x: [0, -30, 30, 0],
          y: [0, 20, -20, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[380px] rounded-full bg-gradient-to-r from-[#F5B82E]/35 via-[#FDE1A9]/40 to-[#8CAE88]/30 blur-2xl"
      />

      {/* 2. Distinct Continuous Undulating Flowing SVG Wave Ribbons */}
      <div className="absolute inset-0 flex items-center justify-center opacity-65 pointer-events-none">
        {/* Wave 1: Sage Flow Wave */}
        <motion.div
          animate={{
            x: ['-25%', '0%'],
            y: [0, -12, 0],
          }}
          transition={{
            x: { duration: 18, repeat: Infinity, ease: 'linear' },
            y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
          }}
          className="absolute -bottom-10 left-0 w-[200%] h-48 pointer-events-none"
        >
          <svg viewBox="0 0 1440 320" fill="none" className="w-full h-full" preserveAspectRatio="none">
            <path
              d="M0,160 C320,280 420,40 720,160 C1020,280 1120,60 1440,160 L1440,320 L0,320 Z"
              fill="url(#wave-grad-sage)"
              opacity="0.35"
            />
            <path
              d="M0,160 C320,280 420,40 720,160 C1020,280 1120,60 1440,160"
              stroke="#7E967A"
              strokeWidth="2.5"
              fill="none"
              opacity="0.6"
            />
            <defs>
              <linearGradient id="wave-grad-sage" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#7E967A" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#7E967A" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Wave 2: Radiant Gold Flow Wave */}
        <motion.div
          animate={{
            x: ['0%', '-25%'],
            y: [0, 14, 0],
          }}
          transition={{
            x: { duration: 15, repeat: Infinity, ease: 'linear' },
            y: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
          }}
          className="absolute -bottom-16 left-0 w-[200%] h-52 pointer-events-none"
        >
          <svg viewBox="0 0 1440 320" fill="none" className="w-full h-full" preserveAspectRatio="none">
            <path
              d="M0,192 C280,80 500,260 760,180 C1040,100 1200,240 1440,192 L1440,320 L0,320 Z"
              fill="url(#wave-grad-gold)"
              opacity="0.4"
            />
            <path
              d="M0,192 C280,80 500,260 760,180 C1040,100 1200,240 1440,192"
              stroke="#F5B82E"
              strokeWidth="2.5"
              fill="none"
              opacity="0.75"
            />
            <defs>
              <linearGradient id="wave-grad-gold" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#F5B82E" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#F5B82E" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </div>

      {/* 3. Interactive Particles Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
    </div>
  );
}
