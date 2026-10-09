import { ArrowRight, Search, Wand2, Sparkles, Share2 } from 'lucide-react';

interface OurServiceProps {
  onLearnMore: () => void;
  onSelectService?: (serviceName: string) => void;
}

export default function OurService({ onLearnMore, onSelectService }: OurServiceProps) {
  const services = [
    {
      title: 'SEO Strategy',
      description: 'Search architecture, technical audits, and organic intent optimization.',
      icon: <Search size={20} className="text-stone-900" strokeWidth={2.4} />,
    },
    {
      title: 'Influencer Marketing',
      description: 'High-converting creator partnerships tailored to product niches.',
      icon: <Wand2 size={20} className="text-stone-900" strokeWidth={2.4} />,
    },
    {
      title: 'Marketing Strategy',
      description: 'Comprehensive go-to-market roadmaps and multi-channel attribution.',
      icon: <Sparkles size={20} className="text-stone-900" strokeWidth={2.4} />,
    },
    {
      title: 'Social Media Marketing',
      description: 'Viral social campaigns, community growth, and automated engagement.',
      icon: <Share2 size={20} className="text-stone-900" strokeWidth={2.4} />,
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Split: Text & Team Collaboration Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16 md:mb-20">
          
          {/* Left Column: Headline & Description */}
          <div className="lg:col-span-6 max-w-xl">
            {/* Tag Pill: OUR SERVICE */}
            <div className="inline-block mb-6">
              <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#F5B82E] text-[10px] sm:text-[11px] font-extrabold tracking-[0.08em] text-stone-950 uppercase shadow-xs">
                OUR SERVICE
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.035em] text-[#121417] leading-[1.12]">
              We offer the best services for our customer
            </h2>

            {/* Paragraph description */}
            <p className="mt-6 text-xs sm:text-sm text-stone-500 font-normal leading-relaxed">
              Find effective digital reach of your business, powered by humans behaviour and driven by data
            </p>

            {/* Link: LEARN MORE -> */}
            <div className="mt-8">
              <button
                onClick={onLearnMore}
                className="group inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.08em] text-stone-900 hover:text-stone-600 transition-colors uppercase cursor-pointer"
              >
                <span>LEARN MORE</span>
                <div className="w-6 h-6 rounded-full border border-stone-900/80 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-all">
                  <ArrowRight size={12} strokeWidth={2.2} />
                </div>
              </button>
            </div>
          </div>

          {/* Right Column: High Quality Collaboration Photo */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-md lg:max-w-lg rounded-2xl md:rounded-3xl overflow-hidden border border-stone-200/80 shadow-[0_12px_32px_rgba(0,0,0,0.06)] bg-stone-100">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&auto=format&fit=crop&q=80"
                alt="Creative team collaborating in meeting"
                className="w-full h-[280px] sm:h-[320px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

        </div>

        {/* Bottom Row: 4 Circular Gold Icon Service Items */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-6 pt-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              onClick={() => onSelectService && onSelectService(service.title)}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              {/* Gold/Yellow Circular Badge with Icon */}
              <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-gradient-to-br from-[#FDD85D] to-[#F5B82E] shadow-[0_8px_20px_rgba(245,184,46,0.25)] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_12px_28px_rgba(245,184,46,0.4)]">
                {service.icon}
              </div>

              {/* Service Title */}
              <h3 className="mt-4 sm:mt-5 text-sm sm:text-base font-bold text-stone-900 tracking-tight leading-snug">
                {service.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
