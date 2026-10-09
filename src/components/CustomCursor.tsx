import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Raw mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring physics for trailing outer ring
  const springConfig = { damping: 24, stiffness: 220, mass: 0.6 };
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  // Faster spring for the central precision dot
  const dotConfig = { damping: 30, stiffness: 600, mass: 0.2 };
  const dotX = useSpring(mouseX, dotConfig);
  const dotY = useSpring(mouseY, dotConfig);

  useEffect(() => {
    // Only activate custom cursor on fine pointer devices (desktop/mouse)
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!mediaQuery.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Track clickable elements hover state
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        'button, a, input, textarea, select, [role="button"], [data-cursor-hover]'
      );

      setIsHovered(!!interactive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible, mouseX, mouseY]);

  // Don't render on mobile/touch screens
  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer Smooth Trailing Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 will-change-transform"
        style={{
          x: ringX,
          y: ringY,
        }}
        animate={{
          width: isHovered ? 46 : isClicked ? 24 : 32,
          height: isHovered ? 46 : isClicked ? 24 : 32,
          opacity: isVisible ? 1 : 0,
          scale: isClicked ? 0.85 : 1,
          backgroundColor: isHovered ? 'rgba(245, 184, 46, 0.16)' : 'rgba(18, 20, 23, 0.04)',
          borderColor: isHovered ? '#F5B82E' : 'rgba(18, 20, 23, 0.35)',
          borderWidth: isHovered ? '1.5px' : '1px',
        }}
        transition={{
          type: 'spring',
          damping: 20,
          stiffness: 300,
          mass: 0.5,
        }}
      />

      {/* Center Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 will-change-transform"
        style={{
          x: dotX,
          y: dotY,
        }}
        animate={{
          width: isHovered ? 6 : 4.5,
          height: isHovered ? 6 : 4.5,
          opacity: isVisible ? 1 : 0,
          scale: isClicked ? 1.4 : 1,
          backgroundColor: isHovered ? '#121417' : '#121417',
        }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 400,
        }}
      />
    </div>
  );
}
