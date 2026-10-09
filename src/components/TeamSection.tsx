import { ArrowRight, ArrowLeft } from 'lucide-react';

interface TeamSectionProps {
  onViewMore: () => void;
}

export default function TeamSection({ onViewMore }: TeamSectionProps) {
  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Split: Title (Left) and Paragraph + View More (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-12">
          
          {/* Left: Big Headline */}
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl md:text-[2.65rem] font-bold tracking-[-0.035em] text-[#121417] leading-[1.12]">
              We are team with enthusiasm for communication
            </h2>
          </div>

          {/* Right: Paragraph & View More */}
          <div className="lg:col-span-6 flex flex-col justify-end">
            <p className="text-xs sm:text-sm text-stone-500 font-normal leading-relaxed max-w-lg">
              Your business has a story to tell—we'll help you tell it. Our team features a roster of industry experts and highly-skilled creatives because we won't settle for less.
            </p>

            <div className="mt-6">
              <button
                onClick={onViewMore}
                className="group inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.08em] text-stone-900 hover:text-stone-600 transition-colors uppercase cursor-pointer"
              >
                <span>VIEW MORE</span>
                <div className="w-6 h-6 rounded-full border border-stone-900/80 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-all">
                  <ArrowRight size={12} strokeWidth={2.2} />
                </div>
              </button>
            </div>
          </div>

        </div>

        {/* 2 Photographic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Photo 1: Team discussion around table */}
          <div className="rounded-2xl md:rounded-3xl overflow-hidden border border-stone-200/80 shadow-md bg-stone-100 group">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&auto=format&fit=crop&q=80"
              alt="Team discussing project ideas"
              className="w-full h-[280px] sm:h-[340px] md:h-[380px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Photo 2: Creative open office workspace */}
          <div className="rounded-2xl md:rounded-3xl overflow-hidden border border-stone-200/80 shadow-md bg-stone-100 group">
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&auto=format&fit=crop&q=80"
              alt="Creative office environment"
              className="w-full h-[280px] sm:h-[340px] md:h-[380px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

        </div>

        {/* Bottom Navigation Buttons (<-) (->) */}
        <div className="mt-8 flex items-center gap-3">
          <button
            aria-label="Previous team photo"
            className="w-8 h-8 rounded-full border border-stone-400/80 hover:bg-stone-900 hover:text-white hover:border-stone-900 text-stone-800 flex items-center justify-center transition-all cursor-pointer"
          >
            <ArrowLeft size={13} strokeWidth={2} />
          </button>
          <button
            aria-label="Next team photo"
            className="w-8 h-8 rounded-full border border-stone-400/80 hover:bg-stone-900 hover:text-white hover:border-stone-900 text-stone-800 flex items-center justify-center transition-all cursor-pointer"
          >
            <ArrowRight size={13} strokeWidth={2} />
          </button>
        </div>

      </div>
    </section>
  );
}
