import { ArrowRight, BarChart3, Target, Layers, ShieldCheck } from 'lucide-react';

interface WhoWeAreProps {
  onBookCall: () => void;
}

export default function WhoWeAreSection({ onBookCall }: WhoWeAreProps) {
  const pillars = [
    {
      icon: <BarChart3 className="w-5 h-5 text-stone-900" />,
      title: 'Revenue-Anchored Economics',
      description:
        'We measure success in booked pipeline, customer acquisition cost (CAC), and realized revenue — not vanity clicks or impressions.',
    },
    {
      icon: <Target className="w-5 h-5 text-stone-900" />,
      title: 'U.S. Market Specialization',
      description:
        'Built exclusively around American buyer behavior, compliance standards, and competitive search and social channels.',
    },
    {
      icon: <Layers className="w-5 h-5 text-stone-900" />,
      title: 'Full-Funnel Ownership',
      description:
        'We bridge front-end paid acquisition directly into high-converting funnels, automated CRM nurturing, and closed deals.',
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Left Narrative + Right Core Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Mission & Identity */}
          <div className="lg:col-span-6">
            
            {/* Tag Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAEFE4] border border-[#D5E1D4] text-[10.5px] font-bold tracking-[0.08em] text-stone-800 uppercase mb-5 shadow-2xs">
              <span>WHO WE ARE</span>
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
              A Growth Partner Engineered For <span className="italic font-normal text-[#7E967A]">Measurable Revenue.</span>
            </h2>

            <div className="mt-6 space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed">
              <p>
                NIS Global Marketing is a specialized revenue and lead acquisition consultancy. We partner with ambitious companies to design, build, and scale predictable customer acquisition engines across the United States.
              </p>
              <p>
                We don’t treat marketing as an isolated expense or an artistic experiment. We approach growth as an engineering discipline — uniting paid media precision, conversion design, automated CRM pipelines, and revenue attribution into a synchronized system.
              </p>
            </div>

            {/* Strategic Highlights */}
            <div className="mt-8 pt-6 border-t border-stone-200/70 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-stone-700 font-semibold">
              <span className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#7E967A]" />
                Senior Strategist on Every Account
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#7E967A]" />
                Transparent Live Attribution
              </span>
            </div>

            {/* Action CTA: INQUIRE NOW with yellow arrow icon */}
            <div className="mt-8">
              <button
                onClick={onBookCall}
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#121417] text-white text-xs font-bold tracking-[0.06em] hover:bg-stone-800 transition-all cursor-pointer shadow-xs"
              >
                <span>INQUIRE NOW</span>
                <div className="w-5 h-5 rounded-full bg-[#F5B82E] text-stone-950 flex items-center justify-center group-hover:scale-105 transition-all">
                  <ArrowRight size={11} strokeWidth={2.4} />
                </div>
              </button>
            </div>

          </div>

          {/* Right Column: The 3 Core Pillars Card Stack */}
          <div className="lg:col-span-6 space-y-4">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border border-stone-200/80 shadow-xs hover:border-[#D5E1D4] hover:shadow-md transition-all flex items-start gap-5"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#FAF6EE] border border-[#EBE3D3] flex items-center justify-center shrink-0 shadow-2xs">
                  {pillar.icon}
                </div>
                
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#121417] tracking-tight font-['Aeonik',sans-serif]">
                    {pillar.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
