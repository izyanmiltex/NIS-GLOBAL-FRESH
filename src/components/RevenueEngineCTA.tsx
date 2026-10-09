import { ArrowRight } from 'lucide-react';

interface RevenueEngineCTAProps {
  onBookCall: () => void;
}

export default function RevenueEngineCTA({ onBookCall }: RevenueEngineCTAProps) {
  return (
    <section className="py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Card with Signature Dark Palette, Warm Glows & Celestial Rings */}
        <div className="relative rounded-3xl sm:rounded-[36px] bg-[#121417] text-white p-8 sm:p-14 lg:p-18 overflow-hidden shadow-2xl">
          
          {/* Subtle Celestial Orbit Rings & Glow in Background */}
          <div className="absolute -right-16 -top-16 w-[420px] h-[420px] rounded-full border border-white/10 pointer-events-none" />
          <div className="absolute -right-32 -top-32 w-[600px] h-[600px] rounded-full border border-white/5 pointer-events-none" />
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-[#F5B82E]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl">

            {/* Headline in Aeonik Font */}
            <h2
              style={{
                fontFamily: "'Aeonik', sans-serif",
                fontStyle: 'normal',
                fontWeight: 400,
                color: '#ffffff',
              }}
              className="text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.12]"
            >
              Ready To Generate Consistent, <span className="italic font-normal text-[#B0C4AC]">High-Quality Leads?</span>
            </h2>

            {/* Copy */}
            <p className="mt-5 text-sm sm:text-base text-stone-300 leading-relaxed max-w-xl">
              If you're a US-based business ready to scale with a performance-driven lead generation system, we'd love to partner with you.
            </p>

            {/* CTAs: INQUIRE NOW with yellow arrow icon */}
            <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              
              <button
                onClick={onBookCall}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#121417] text-white text-xs font-bold tracking-[0.06em] border border-white/20 hover:bg-stone-800 active:scale-[0.98] transition-all shadow-md cursor-pointer"
              >
                <span>INQUIRE NOW</span>
                <div className="w-5 h-5 rounded-full bg-[#F5B82E] text-stone-950 flex items-center justify-center group-hover:scale-105 transition-all">
                  <ArrowRight size={11} strokeWidth={2.4} />
                </div>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
