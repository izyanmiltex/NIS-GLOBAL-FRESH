import { motion } from 'framer-motion';
import { ArrowRight, Building2, Briefcase, Rocket, ShoppingBag, Home, Users2, Sparkles } from 'lucide-react';
import { WHO_WE_SERVE_SEGMENTS } from '../data/nisMarketingData';
import { ClientSegment } from '../types';

interface WhoWeServeProps {
  onBookCall: () => void;
}

interface SegmentColorTheme {
  borderAccent: string;
  gradientHover: string;
  topBarGrad: string;
  iconBg: string;
  iconColor: string;
  badgeBg: string;
  bulletColor: string;
  shadowColor: string;
}

export default function WhoWeServeSection({ onBookCall }: WhoWeServeProps) {
  const getThemeForIndex = (index: number): SegmentColorTheme => {
    const themes: SegmentColorTheme[] = [
      // 0: Warm Golden Amber
      {
        borderAccent: 'group-hover:border-[#F5B82E]',
        gradientHover: 'from-[#F5B82E]/10 via-[#FFF9ED]/60 to-transparent',
        topBarGrad: 'from-[#C8881A] via-[#F5B82E] to-[#FED872]',
        iconBg: 'bg-[#FDF3DB] border-[#FCE1A1]',
        iconColor: 'text-[#B37B08]',
        badgeBg: 'bg-[#FEF5E1] border-[#F9DE96] text-[#8C5E05]',
        bulletColor: 'bg-[#F5B82E]',
        shadowColor: 'hover:shadow-[#F5B82E]/18',
      },
      // 1: Sage Green
      {
        borderAccent: 'group-hover:border-[#7E967A]',
        gradientHover: 'from-[#7E967A]/12 via-[#F4F8F3]/60 to-transparent',
        topBarGrad: 'from-[#526B4F] via-[#7E967A] to-[#A4C4A0]',
        iconBg: 'bg-[#EFF5EE] border-[#CFDFCD]',
        iconColor: 'text-[#486345]',
        badgeBg: 'bg-[#EBF3EA] border-[#C8DCB4] text-[#344E31]',
        bulletColor: 'bg-[#7E967A]',
        shadowColor: 'hover:shadow-[#7E967A]/20',
      },
      // 2: Radiant Ochre Gold
      {
        borderAccent: 'group-hover:border-[#DF9316]',
        gradientHover: 'from-[#DF9316]/10 via-[#FFF8EB]/60 to-transparent',
        topBarGrad: 'from-[#DF9316] via-[#F5B82E] to-[#FED872]',
        iconBg: 'bg-[#FFF4DD] border-[#FCE3AA]',
        iconColor: 'text-[#A86C06]',
        badgeBg: 'bg-[#FFF1D4] border-[#F7D897] text-[#8A5604]',
        bulletColor: 'bg-[#DF9316]',
        shadowColor: 'hover:shadow-amber-500/18',
      },
      // 3: Fresh Emerald Mint Sage
      {
        borderAccent: 'group-hover:border-[#6B9067]',
        gradientHover: 'from-[#6B9067]/12 via-[#F2F8F1]/60 to-transparent',
        topBarGrad: 'from-[#4D6F49] via-[#6B9067] to-[#9BC497]',
        iconBg: 'bg-[#EDF6EC] border-[#C9E2C7]',
        iconColor: 'text-[#3E5C3A]',
        badgeBg: 'bg-[#E7F3E6] border-[#BCDDBA] text-[#2F4E2B]',
        bulletColor: 'bg-[#6B9067]',
        shadowColor: 'hover:shadow-emerald-600/18',
      },
      // 4: Luxury Champagne Amber
      {
        borderAccent: 'group-hover:border-[#E5A922]',
        gradientHover: 'from-[#E5A922]/10 via-[#FFF9EE]/60 to-transparent',
        topBarGrad: 'from-[#C47F0C] via-[#E5A922] to-[#FED872]',
        iconBg: 'bg-[#FEF5E3] border-[#FCE6B7]',
        iconColor: 'text-[#A36B05]',
        badgeBg: 'bg-[#FDF2D9] border-[#F7DB9C] text-[#7F5203]',
        bulletColor: 'bg-[#E5A922]',
        shadowColor: 'hover:shadow-orange-500/18',
      },
      // 5: Modern Deep Sage Teal
      {
        borderAccent: 'group-hover:border-[#5A7C57]',
        gradientHover: 'from-[#5A7C57]/12 via-[#F0F6F0]/60 to-transparent',
        topBarGrad: 'from-[#395637] via-[#5A7C57] to-[#8EB68B]',
        iconBg: 'bg-[#EAF3EA] border-[#C2DBC2]',
        iconColor: 'text-[#365033]',
        badgeBg: 'bg-[#E3EFE3] border-[#B6D4B6] text-[#294226]',
        bulletColor: 'bg-[#5A7C57]',
        shadowColor: 'hover:shadow-teal-700/18',
      },
    ];

    return themes[index % themes.length];
  };

  const getIconForSegment = (id: string, iconClass: string) => {
    switch (id) {
      case 'us-growth-enterprises': return <Building2 size={20} className={iconClass} />;
      case 'b2b-professional-services': return <Briefcase size={20} className={iconClass} />;
      case 'startups-scaleups': return <Rocket size={20} className={iconClass} />;
      case 'ecommerce-dtc': return <ShoppingBag size={20} className={iconClass} />;
      case 'high-ticket-services': return <Home size={20} className={iconClass} />;
      case 'agencies-partners': return <Users2 size={20} className={iconClass} />;
      default: return <Building2 size={20} className={iconClass} />;
    }
  };

  return (
    <section id="work" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with 2 columns to fill blank space on the right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-12 sm:mb-16">
          
          {/* Col 1: Heading Text */}
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAEFE4] border border-[#D5E1D4] text-[10.5px] font-bold tracking-[0.08em] text-stone-800 uppercase mb-4 shadow-2xs">
              <Sparkles size={13} className="text-[#7E967A]" />
              <span>TAILORED MARKET SEGMENTS</span>
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
              Who We <span className="italic font-normal text-[#7E967A]">Serve</span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-stone-600 leading-relaxed max-w-2xl">
              At <strong>NIS Global Marketing</strong>, we partner with ambitious, growth-driven companies across the United States that are looking to build predictable, scalable revenue pipelines — not just run marketing campaigns.
            </p>

            <p className="mt-2 text-xs sm:text-sm font-medium text-stone-500">
              We work best with organizations that value performance, data, and long-term growth systems.
            </p>
          </div>

          {/* Col 2: Subtle Geometric Vector Graphic Art filling the right blank space */}
          <div className="lg:col-span-5 xl:col-span-4 flex items-center justify-center lg:justify-end">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center select-none pointer-events-none">
              
              {/* Subtle ambient soft backdrop glow */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#7E967A]/22 via-[#F5B82E]/18 to-transparent blur-2xl" />

              {/* Slow-rotating outer coordinate ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-3 rounded-full border border-stone-300/80 flex items-center justify-center"
              >
                {/* 4 Cardinal Growth Node markers */}
                {[0, 90, 180, 270].map((deg, i) => (
                  <div
                    key={deg}
                    style={{
                      transform: `rotate(${deg}deg) translate(118px) rotate(-${deg}deg)`,
                    }}
                    className="absolute w-3 h-3 rounded-full bg-white border border-stone-300 flex items-center justify-center shadow-xs"
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${i % 2 === 0 ? 'bg-[#7E967A]' : 'bg-[#F5B82E]'}`} />
                  </div>
                ))}
              </motion.div>

              {/* Counter-rotating dashed radar ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
                className="absolute w-44 h-44 rounded-full border border-dashed border-[#7E967A]/40"
              />

              {/* Subtle 3D Globe & Target Radar Wireframe SVG */}
              <svg className="w-52 h-52 absolute inset-0 m-auto text-stone-400" viewBox="0 0 200 200" fill="none">
                <circle cx="100" cy="100" r="68" stroke="#7E967A" strokeWidth="1" strokeOpacity="0.3" />
                <ellipse cx="100" cy="100" rx="68" ry="28" stroke="#7E967A" strokeWidth="0.8" strokeOpacity="0.25" strokeDasharray="3 3" />
                <ellipse cx="100" cy="100" rx="28" ry="68" stroke="#7E967A" strokeWidth="0.8" strokeOpacity="0.25" strokeDasharray="3 3" />
                <circle cx="100" cy="100" r="38" stroke="#F5B82E" strokeWidth="1" strokeOpacity="0.4" />
                <line x1="100" y1="18" x2="100" y2="182" stroke="#7E967A" strokeWidth="0.75" strokeOpacity="0.25" />
                <line x1="18" y1="100" x2="182" y2="100" stroke="#7E967A" strokeWidth="0.75" strokeOpacity="0.25" />
              </svg>

              {/* Central Glowing Global Reach Node */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-[#121417] via-[#22272E] to-stone-900 border border-white/25 shadow-xl flex items-center justify-center"
              >
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#638060] to-[#9AB897] border border-white/30 flex items-center justify-center text-white shadow-inner">
                  <span className="text-xs font-bold tracking-tighter">US</span>
                </div>
              </motion.div>

              {/* Subtle Ambient Floating Badges */}
              <div className="absolute top-2 right-1 z-20 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-xs border border-stone-200/90 shadow-2xs text-[9.5px] font-bold tracking-wider text-stone-700 uppercase">
                <span className="text-[#3D523A] font-extrabold mr-1">50 US</span> States
              </div>

              <div className="absolute bottom-2 left-1 z-20 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-xs border border-stone-200/90 shadow-2xs text-[9.5px] font-bold tracking-wider text-stone-700 uppercase flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F5B82E] animate-ping" />
                Direct Scale
              </div>

            </div>
          </div>

        </div>

        {/* 6 Client Segments Grid with Motion & Brand Colors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {WHO_WE_SERVE_SEGMENTS.map((segment: ClientSegment, index: number) => {
            const theme = getThemeForIndex(index);
            return (
              <motion.div
                key={segment.id}
                whileHover={{ y: -7 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
                className={`group relative bg-white/95 backdrop-blur-xs rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-stone-200/90 ${theme.borderAccent} shadow-xs hover:shadow-xl ${theme.shadowColor} transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-default`}
              >
                {/* Dynamic Top Glowing Brand Accent Bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 group-hover:h-1.5 bg-gradient-to-r ${theme.topBarGrad} transition-all duration-300`}
                />

                {/* Ambient Soft Glow on Hover inside the card */}
                <div
                  className={`absolute -top-16 -right-16 w-44 h-44 rounded-full bg-gradient-to-br ${theme.gradientHover} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none blur-xl`}
                />

                <div className="relative z-10">
                  {/* Top Sector Icon & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <span className="text-2xl transform group-hover:scale-110 transition-transform duration-300 select-none">
                        {segment.icon}
                      </span>
                      <div
                        className={`w-9 h-9 rounded-xl ${theme.iconBg} border flex items-center justify-center shadow-2xs group-hover:scale-105 group-hover:rotate-1 transition-all duration-300`}
                      >
                        {getIconForSegment(segment.id, theme.iconColor)}
                      </div>
                    </div>

                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${theme.badgeBg} shadow-2xs group-hover:scale-105 transition-transform duration-200`}
                    >
                      {segment.tag}
                    </span>
                  </div>

                  {/* Segment Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#121417] leading-snug font-['Aeonik',sans-serif] group-hover:text-black transition-colors">
                    {segment.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs text-stone-500 leading-relaxed">
                    {segment.description}
                  </p>

                  {/* Target Profiles / Sub-bullets */}
                  <div className="mt-4 pt-3.5 border-t border-stone-100/90">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block mb-2">
                      Target Profiles
                    </span>
                    <ul className="space-y-1.5">
                      {segment.bulletPoints.map((bp: string, idx: number) => (
                        <li key={idx} className="text-xs text-stone-700 flex items-center gap-2">
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${theme.bulletColor} shrink-0 group-hover:scale-125 transition-transform`}
                          />
                          <span>{bp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Primary Growth Focus */}
                  <div className="mt-4 pt-3 border-t border-stone-100/90">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-700 block flex items-center gap-1">
                      <span className={theme.iconColor}>→</span> Growth Focus:
                    </span>
                    <p className="text-xs font-semibold text-stone-900 mt-1 leading-snug">
                      {segment.focus}
                    </p>
                  </div>
                </div>

                {/* Subtle bottom corner shimmer indicator */}
                <div className="mt-4 pt-2 flex items-center justify-between text-[11px] font-medium text-stone-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[10.5px]">NIS Scalable Blueprint</span>
                  <span className={`font-bold ${theme.iconColor}`}>Tailored System &rarr;</span>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Action prompt under Who We Serve with INQUIRE NOW and yellow arrow icon */}
        <div className="mt-12 text-center flex items-center justify-center">
          <button
            onClick={onBookCall}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#121417] text-white text-xs font-bold tracking-[0.08em] uppercase hover:bg-stone-800 active:scale-[0.98] transition-all shadow-md cursor-pointer"
          >
            <span>Inquire Now</span>
            <div className="w-5 h-5 rounded-full bg-[#F5B82E] text-stone-950 flex items-center justify-center group-hover:scale-105 transition-all">
              <ArrowRight size={11} strokeWidth={2.4} />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
}
