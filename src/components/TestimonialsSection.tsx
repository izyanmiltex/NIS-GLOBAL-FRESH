import { Star, Quote, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface TestimonialsSectionProps {
  onBookCall: () => void;
}

export default function TestimonialsSection({ onBookCall }: TestimonialsSectionProps) {
  const testimonials = [
    {
      name: 'Marcus Vance',
      role: 'Founder & CEO',
      location: 'Dallas, TX',
      quote:
        'NIS didn’t just send us random clicks — they built an automated outbound and paid search architecture that consistently fills our pipeline with qualified commercial accounts. The attribution reporting and lead quality are the best we’ve experienced.',
      rating: 5,
    },
    {
      name: 'Elena Rostova',
      role: 'VP of Demand Gen',
      location: 'Austin, TX',
      quote:
        'Before NIS, our customer acquisition cost was spiraling on LinkedIn and Google. Within 90 days of restructuring our multi-channel funnel and landing pages, our qualified sales meetings doubled while our cost-per-lead plummeted.',
      rating: 5,
    },
    {
      name: 'David Chen',
      role: 'Managing Partner',
      location: 'Chicago, IL',
      quote:
        'As a high-ticket professional services firm, credibility and precision targeting are paramount. NIS crafted an end-to-end nurture sequence and targeted search strategy that brings high-value clients directly to our calendar.',
      rating: 5,
    },
    {
      name: 'Sarah Jenkins',
      role: 'Chief Revenue Officer',
      location: 'Miami, FL',
      quote:
        'The level of rigor NIS brings to revenue attribution is extraordinary. Every dollar spent on paid channels is mapped to pipeline velocity and bottom-line revenue. They have become an indispensable growth engine.',
      rating: 5,
    },
  ];

  // Duplicate for seamless infinite looping
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAEFE4] border border-[#D5E1D4] text-[10.5px] font-bold tracking-[0.08em] text-stone-800 uppercase mb-4 shadow-2xs">
            <span>CLIENT RESULTS &amp; REVIEWS</span>
          </div>

          <h2
            style={{
              fontFamily: "'Aeonik', sans-serif",
              fontStyle: 'normal',
              fontWeight: 400,
              color: 'rgb(17, 17, 17)',
            }}
            className="text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.15]"
          >
            Trusted by Growth-Focused <span className="italic font-normal text-[#7E967A]">US Businesses</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-stone-600 leading-relaxed max-w-2xl mx-auto">
            Real performance, real revenue systems, and measurable return on ad spend from US partners who scaled their acquisition pipeline with us.
          </p>
        </div>

      </div>

      {/* Infinite Slow Motion Sliding Carousel (No Arrows) with Fade Edges */}
      <div className="relative w-full overflow-hidden py-4">
        
        {/* Left & Right Edge Fades for Seamless Look */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#FAF9F5] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#FAF9F5] to-transparent z-10" />

        <motion.div
          className="flex gap-6 w-max cursor-grab active:cursor-grabbing"
          animate={{
            x: ['0%', '-50%'],
          }}
          transition={{
            duration: 38,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {duplicatedTestimonials.map((item, idx) => (
            <div
              key={idx}
              className="w-[340px] sm:w-[410px] bg-white rounded-2xl sm:rounded-3xl p-7 sm:p-8 border border-stone-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between shrink-0 select-none"
            >
              {/* Top Row: 5 Stars */}
              <div>
                <div className="flex items-center gap-1 text-[#F5B82E] mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={15} fill="#F5B82E" strokeWidth={0} />
                  ))}
                </div>

                {/* Quote Icon & Clean Body */}
                <Quote size={22} className="text-stone-300 mb-2" />
                
                <p className="text-[13.5px] sm:text-[14px] text-stone-700 leading-relaxed font-normal">
                  "{item.quote}"
                </p>
              </div>

              {/* Author & Location Card - No Brand Name, No Result Tag, No Verified Tag */}
              <div className="mt-6 pt-5 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-[#121417] font-['Aeonik',sans-serif]">
                    {item.name}
                  </h3>
                  
                  <p className="text-xs text-stone-500 font-medium mt-0.5">
                    {item.role}
                  </p>
                  
                  <p className="text-[11px] text-stone-400 mt-0.5">
                    {item.location}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Callout Banner: Only INQUIRE NOW button with yellow arrow icon */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center flex items-center justify-center">
        <button
          onClick={onBookCall}
          className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#121417] text-white text-xs font-bold tracking-[0.06em] hover:bg-stone-800 transition-all cursor-pointer shadow-xs"
        >
          <span>INQUIRE NOW</span>
          <div className="w-5 h-5 rounded-full bg-[#F5B82E] text-stone-950 flex items-center justify-center group-hover:scale-105 transition-all">
            <ArrowRight size={11} strokeWidth={2.4} />
          </div>
        </button>
      </div>

    </section>
  );
}
