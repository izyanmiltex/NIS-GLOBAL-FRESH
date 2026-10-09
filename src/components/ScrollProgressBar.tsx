import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  
  // Smooth spring physics for a fluid, natural feel
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[99999] pointer-events-none bg-stone-200/40">
      {/* Animated gradient progress bar */}
      <motion.div
        className="h-full bg-gradient-to-r from-[#F5B82E] via-[#fabf35] to-[#7E967A] origin-left shadow-[0_0_8px_rgba(245,184,46,0.6)]"
        style={{ scaleX }}
      />
    </div>
  );
}
