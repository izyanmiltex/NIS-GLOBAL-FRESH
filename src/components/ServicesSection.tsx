import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Megaphone, Target, Search, Share2, Palette, Mail, Globe, Cpu, ArrowRight, CheckCircle2 
} from 'lucide-react';
import { NIS_SERVICES } from '../data/nisMarketingData';
import { ServiceCategory } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceCategory) => void;
  onBookCall: () => void;
}

export default function ServicesSection({ onBookCall }: ServicesSectionProps) {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const getIcon = (name: string) => {
    switch (name) {
      case 'Target': return <Target className="w-5 h-5 text-stone-950" />;
      case 'Megaphone': return <Megaphone className="w-5 h-5 text-stone-950" />;
      case 'Search': return <Search className="w-5 h-5 text-stone-950" />;
      case 'Share2': return <Share2 className="w-5 h-5 text-stone-950" />;
      case 'Palette': return <Palette className="w-5 h-5 text-stone-950" />;
      case 'Mail': return <Mail className="w-5 h-5 text-stone-950" />;
      case 'Globe': return <Globe className="w-5 h-5 text-stone-950" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-stone-950" />;
      default: return <Target className="w-5 h-5 text-stone-950" />;
    }
  };

  const filteredServices = activeFilter === 'all'
    ? NIS_SERVICES
    : activeFilter === 'acquisition'
    ? NIS_SERVICES.filter(s => ['lead-generation', 'performance-marketing', 'seo'].includes(s.id))
    : activeFilter === 'engagement'
    ? NIS_SERVICES.filter(s => ['social-media', 'content-creative', 'email-sms-automation'].includes(s.id))
    : NIS_SERVICES.filter(s => ['website-funnel-dev', 'ai-growth-solutions'].includes(s.id));

  return (
    <section id="services" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with 2 columns: Left text, Right subtle geometric graphic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-10 sm:mb-12">
          
          {/* Col 1: Heading Text & Narrative */}
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAEFE4] border border-[#D5E1D4] text-[10.5px] font-bold tracking-[0.08em] text-stone-800 uppercase mb-4 shadow-2xs">
              <span>FULL-SPECTRUM REVENUE ARCHITECTURE</span>
            </div>

            <h2
              style={{
                fontFamily: "'Aeonik', sans-serif",
                fontStyle: 'normal',
                fontWeight: 400,
                color: 'rgb(17, 17, 17)',
              }}
              className="text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.12]"
            >
              Comprehensive Services Built to <span className="italic font-normal text-[#7E967A]">Scale Revenue</span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-stone-600 leading-relaxed max-w-2xl">
              We don’t just run campaigns — we build revenue systems that generate consistent, high-quality leads and measurable business growth across every stage of your pipeline.
            </p>
          </div>

          {/* Col 2: Subtle Geometric Vector Graphic Art filling the right blank space */}
          <div className="lg:col-span-5 xl:col-span-4 flex items-center justify-center lg:justify-end">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center select-none pointer-events-none">
              
              {/* Subtle ambient soft backdrop glow */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-[#F5B82E]/18 via-[#7E967A]/16 to-transparent blur-2xl" />

              {/* Rotating outer orbit ring with nodes */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-3 rounded-full border border-dashed border-[#7E967A]/40 flex items-center justify-center"
              >
                {/* 8 Orbiting Satellite Micro-Nodes representing the 8 Services */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
                  <div
                    key={deg}
                    style={{
                      transform: `rotate(${deg}deg) translate(${deg % 90 === 0 ? '118px' : '118px'}) rotate(-${deg}deg)`,
                    }}
                    className="absolute w-2.5 h-2.5 rounded-full bg-white border border-stone-300 flex items-center justify-center shadow-xs"
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${i % 2 === 0 ? 'bg-[#F5B82E]' : 'bg-[#7E967A]'}`} />
                  </div>
                ))}
              </motion.div>

              {/* Counter-rotating inner dashed orbit ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
                className="absolute w-44 h-44 rounded-full border border-stone-300/80 border-t-[#F5B82E] border-r-[#7E967A]"
              />

              {/* Middle geometric radar crosshairs & concentric circles */}
              <svg className="w-52 h-52 absolute inset-0 m-auto text-stone-400" viewBox="0 0 200 200" fill="none">
                <circle cx="100" cy="100" r="70" stroke="#7E967A" strokeWidth="1" strokeOpacity="0.25" />
                <circle cx="100" cy="100" r="44" stroke="#F5B82E" strokeWidth="1.2" strokeDasharray="3 3" strokeOpacity="0.5" />
                <line x1="100" y1="20" x2="100" y2="180" stroke="#7E967A" strokeWidth="0.75" strokeOpacity="0.3" />
                <line x1="20" y1="100" x2="180" y2="100" stroke="#7E967A" strokeWidth="0.75" strokeOpacity="0.3" />
                <line x1="43" y1="43" x2="157" y2="157" stroke="#F5B82E" strokeWidth="0.6" strokeOpacity="0.25" strokeDasharray="2 2" />
                <line x1="157" y1="43" x2="43" y2="157" stroke="#F5B82E" strokeWidth="0.6" strokeOpacity="0.25" strokeDasharray="2 2" />
              </svg>

              {/* Central Glowing Hexagonal Node */}
              <motion.div
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#121417] to-stone-900 border border-white/20 shadow-lg flex items-center justify-center"
              >
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#F5B82E] to-[#FED872] flex items-center justify-center text-stone-950 shadow-inner">
                  <ArrowRight size={15} strokeWidth={2.6} className="-rotate-45" />
                </div>
              </motion.div>

              {/* Subtle Ambient Badges */}
              <div className="absolute top-2 right-1 z-20 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-xs border border-stone-200/90 shadow-2xs text-[9.5px] font-bold tracking-wider text-stone-700 uppercase">
                <span className="text-[#B37B08] font-extrabold mr-1">360°</span> Engine
              </div>

              <div className="absolute bottom-2 left-1 z-20 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-xs border border-stone-200/90 shadow-2xs text-[9.5px] font-bold tracking-wider text-stone-700 uppercase flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                8 Channels
              </div>

            </div>
          </div>

        </div>

        {/* Filter Pills row placed cleanly below header */}
        <div className="mb-10 sm:mb-12 flex flex-wrap gap-2">
          {[
            { id: 'all', label: 'All 8 Services' },
            { id: 'acquisition', label: 'Lead Gen & Paid Ads' },
            { id: 'engagement', label: 'Creative & Lifecycle' },
            { id: 'systems', label: 'Web, Funnels & AI' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-[#121417] text-white shadow-xs'
                  : 'bg-white/80 border border-stone-200/80 text-stone-600 hover:bg-stone-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid (8 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-white/90 backdrop-blur-xs rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-stone-200/80 hover:border-stone-300 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Bar: Icon & Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#F5B82E] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-700 border border-stone-200/60">
                    {service.badge}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-[#121417] mb-2 leading-snug font-['Aeonik',sans-serif]">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-stone-500 mb-5 leading-relaxed">
                  {service.description}
                </p>

                {/* Sub-deliverables list */}
                <div className="space-y-2 pt-4 border-t border-stone-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block mb-1">
                    Key Deliverables
                  </span>
                  {service.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                      <CheckCircle2 size={13} className="text-[#7E967A] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Action prompt under services with INQUIRE NOW and yellow arrow icon */}
        <div className="mt-14 text-center flex items-center justify-center">
          <button
            onClick={onBookCall}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#121417] text-white text-xs font-bold tracking-[0.06em] hover:bg-stone-800 transition-all shadow-xs cursor-pointer"
          >
            <span>INQUIRE NOW</span>
            <div className="w-5 h-5 rounded-full bg-[#F5B82E] text-stone-950 flex items-center justify-center group-hover:scale-105 transition-all">
              <ArrowRight size={11} strokeWidth={2.4} />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
}
