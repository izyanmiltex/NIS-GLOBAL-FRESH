import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroMotionBackground from './HeroMotionBackground';

interface HeroProps {
  onBookCall: () => void;
}

export default function Hero({ onBookCall }: HeroProps) {
  const handleViewServices = () => {
    const servicesEl = document.getElementById('services');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative isolate pt-38 sm:pt-42 md:pt-50 pb-17 sm:pb-21 md:pb-30 overflow-hidden">
      
      {/* High-end vibrant motion background */}
      <HeroMotionBackground />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center relative z-10">
        
        {/* Tag Pill: U.S. Focused Revenue & Lead Systems in Montserrat, BOLD text as requested */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="inline-flex items-center mb-4 sm:mb-5 px-3.5 py-1 rounded-full bg-[#F5B82E] text-[11.5px] sm:text-[12px] font-['Montserrat',sans-serif] font-bold tracking-wide text-stone-950 shadow-2xs"
        >
          <span>U.S. Focused Revenue & Lead Systems</span>
        </motion.div>

        {/* Headline with Aeonik, normal, 400, rgb(17, 17, 17) */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          style={{
            fontFamily: "'Aeonik', sans-serif",
            fontStyle: 'normal',
            fontWeight: 400,
            color: 'rgb(17, 17, 17)',
          }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[62px] leading-[1.08] lg:leading-[64px] tracking-[-0.03em] max-w-4xl mx-auto"
        >
          Driving Scalable Growth Through <span className="italic font-normal text-[#7E967A]">Data, Strategy &amp; Performance</span>
        </motion.h1>

        {/* Centered S-Curve Connecting Line under Headline */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.8 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
          className="relative my-2 sm:my-2.5 w-full max-w-lg mx-auto pointer-events-none select-none flex justify-center"
        >
          <svg viewBox="0 0 650 36" fill="none" className="w-full max-w-md h-3.5 sm:h-4 overflow-visible">
            <circle cx="325" cy="18" r="3.5" fill="#CDC7BB" />
            <path
              d="M 100 18 L 315 18 M 335 18 L 550 18"
              stroke="#DDD6C9"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>

        {/* Paragraph description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-sm sm:text-base text-stone-600 font-normal leading-normal sm:leading-relaxed max-w-2xl mx-auto"
        >
          We don’t just run campaigns — we build revenue systems that generate consistent, high-quality leads and measurable business growth.
        </motion.p>

        {/* Action Button: "VIEW SERVICES" with yellow arrow icon */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.34, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-6 sm:mt-8 flex items-center justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.025 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleViewServices}
            className="group inline-flex items-center justify-center gap-3 px-7 py-3 rounded-full bg-[#121417] text-white text-xs font-bold tracking-[0.06em] hover:bg-stone-800 active:scale-[0.98] transition-all shadow-md cursor-pointer"
          >
            <span>VIEW SERVICES</span>
            <div className="w-5 h-5 rounded-full bg-[#F5B82E] text-stone-950 flex items-center justify-center group-hover:scale-105 transition-all">
              <ArrowRight size={12} strokeWidth={2.4} />
            </div>
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
