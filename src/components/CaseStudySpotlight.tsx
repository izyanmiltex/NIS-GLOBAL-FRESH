import { useState } from 'react';
import { ArrowRight, TrendingUp, DollarSign, CheckCircle2, Building, Target, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CaseStudySpotlightProps {
  onBookCall: () => void;
}

interface CaseStudy {
  id: string;
  clientType: string;
  location: string;
  badge: string;
  heroMetric: string;
  metricLabel: string;
  secondaryMetrics: { value: string; label: string }[];
  headline: string;
  challenge: string;
  solution: string[];
  results: string[];
  timeframe: string;
}

export default function CaseStudySpotlight({ onBookCall }: CaseStudySpotlightProps) {
  const caseStudies: CaseStudy[] = [
    {
      id: 'logistics',
      clientType: 'Commercial Freight & Logistics Provider',
      location: 'Dallas, TX',
      badge: 'B2B LEAD ACQUISITION',
      heroMetric: '+40% Revenue Increase',
      metricLabel: 'Within 9 Months of System Launch',
      secondaryMetrics: [
        { value: '+$2.4M', label: 'Closed Pipeline Added' },
        { value: '-38%', label: 'Lower Cost Per Acquisition' },
        { value: '147+', label: 'Qualified Enterprise Quotes' },
      ],
      headline: 'Transforming a Referral-Reliant Brokerage into an Inbound Freight Powerhouse',
      challenge:
        'The company was trapped in seasonal revenue troughs, relying entirely on field brokers and inconsistent word-of-mouth. Paid search attempts were squandering budget on retail consumer inquiries rather than commercial procurement managers.',
      solution: [
        'Restructured Google Search campaigns around 40+ high-intent freight RFP and commercial carrier search terms.',
        'Engineered an instant freight quote qualification funnel with automated CRM routing and LinkedIn account matching.',
        'Implemented bi-weekly sales pipeline attribution reviews to reallocate budget exclusively toward high-margin cargo corridors.',
      ],
      results: [
        'Generated $2.4M in closed-won commercial shipping contracts within 9 months.',
        'SDR calendar show-up rates increased from 52% to 89% via automated SMS/Calendar workflows.',
        'Overall business revenue increased by 40% year-over-year with predictable weekly inbound flow.',
      ],
      timeframe: '9 Month Engagement',
    },
    {
      id: 'saas',
      clientType: 'Enterprise Workflow & B2B SaaS',
      location: 'Austin, TX',
      badge: 'PERFORMANCE FUNNEL',
      heroMetric: '+218% Qualified SQLs',
      metricLabel: 'At 46% Lower Acquisition Cost',
      secondaryMetrics: [
        { value: '3.4x', label: 'Pipeline Velocity' },
        { value: '46%', label: 'Reduction in Cost/SQL' },
        { value: '$180K+', label: 'New Monthly Recurring Pipeline' },
      ],
      headline: 'Architecting a Multi-Touch Paid Funnel That Cut Sales Cycles in Half',
      challenge:
        'The SaaS was generating generic demo requests that wasted hundreds of AE hours on unqualified small teams. LinkedIn advertising costs were soaring above $420 per demo without measurable closed-won attribution.',
      solution: [
        'Rebuilt the conversion funnel with an interactive 2-minute product evaluation that pre-qualifies team size and budget.',
        'Deployed intent-data targeting on LinkedIn & Google Display targeting verified director-level buyers.',
        'Constructed a 5-step automated behavioral email and case-study sequence that nurtured prospects before their demo call.',
      ],
      results: [
        '218% increase in sales-qualified leads (SQLs) meeting enterprise headcount criteria.',
        'Average sales cycle duration contracted from 84 days down to 36 days.',
        'Achieved a 4.2x verified ROI on total media expenditure.',
      ],
      timeframe: '6 Month Scale-Up',
    },
    {
      id: 'advisory',
      clientType: 'High-Ticket Strategic Advisory Practice',
      location: 'Chicago, IL',
      badge: 'HIGH-TICKET NURTURE',
      heroMetric: '4.6x Verified ROAS',
      metricLabel: 'From $42M in Sourced Retainer Deals',
      secondaryMetrics: [
        { value: '$42M', label: 'In Sourced Retainer Pipeline' },
        { value: '84+', label: 'Executive Consultations' },
        { value: '82%', label: 'Consultation Show-Up Rate' },
      ],
      headline: 'Filling Senior Partner Calendars with High-Net-Worth Advisory Mandates',
      challenge:
        'As an elite advisory firm charging $25K+ retainers, generic lead forms repelled their target clientele of middle-market CEOs. They needed an acquisition strategy that exuded institutional credibility and exclusivity.',
      solution: [
        'Authored and distributed proprietary industry benchmark reports targeting founders preparing for liquidity events.',
        'Built an invite-only private executive briefing application with bespoke pre-call qualification questionnaires.',
        'Integrated zero-latency calendar synchronization directly connecting vetted prospects with practice partners.',
      ],
      results: [
        'Booked 84 high-net-worth consultations with mid-market CEOs in under 7 months.',
        'Closed 11 enterprise advisory retainers yielding an initial 4.6x direct return on marketing investment.',
        'Established an ongoing pipeline of repeat clients and high-value referrals.',
      ],
      timeframe: '7 Month Program',
    },
  ];

  const [activeTab, setActiveTab] = useState<string>(caseStudies[0].id);
  const activeCase = caseStudies.find((c) => c.id === activeTab) || caseStudies[0];

  return (
    <section id="case-studies" className="py-16 md:py-24 relative overflow-hidden bg-[#F5F2EA]/40 border-y border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAEFE4] border border-[#D5E1D4] text-[10.5px] font-bold tracking-[0.08em] text-stone-800 uppercase mb-4 shadow-2xs">
            <span>CASE STUDY SPOTLIGHT</span>
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
            Measurable Outcomes Engineered for <span className="italic font-normal text-[#7E967A]">US Growth</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-stone-600 leading-relaxed max-w-2xl mx-auto">
            Explore deep-dive breakdowns of how we transformed inconsistent lead pipelines into predictable, high-converting revenue engines.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-10">
          {caseStudies.map((cs) => (
            <button
              key={cs.id}
              onClick={() => setActiveTab(cs.id)}
              className={`px-5 py-3 rounded-full text-xs font-bold tracking-wide transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === cs.id
                  ? 'bg-[#121417] text-white shadow-md'
                  : 'bg-white/90 border border-stone-200/80 text-stone-700 hover:bg-stone-100 hover:text-black'
              }`}
            >
              <span>{cs.clientType}</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                activeTab === cs.id ? 'bg-[#F5B82E] text-stone-950 font-extrabold' : 'bg-stone-100 text-stone-600'
              }`}>
                {cs.heroMetric}
              </span>
            </button>
          ))}
        </div>

        {/* Detailed Breakdown Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCase.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-3xl p-7 sm:p-10 lg:p-12 border border-stone-200/80 shadow-md"
          >
            {/* Top Meta Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-stone-100">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 rounded-full bg-[#EAEFE4] text-stone-800 text-[10.5px] font-bold tracking-wider uppercase">
                    {activeCase.badge}
                  </span>
                  <span className="text-xs text-stone-500 font-medium">
                    {activeCase.location} • {activeCase.timeframe}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#121417] tracking-tight font-['Aeonik',sans-serif]">
                  {activeCase.headline}
                </h3>
              </div>

              {/* Main Metric Spotlight Card */}
              <div className="sm:text-right shrink-0 bg-gradient-to-br from-[#FAF6EE] to-[#E8F0E7] p-4 sm:p-5 rounded-2xl border border-[#E3DACB] shadow-2xs">
                <div className="flex sm:justify-end items-center gap-2 text-stone-900 font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-emerald-800">
                  <TrendingUp size={24} className="text-emerald-700" />
                  <span>{activeCase.heroMetric}</span>
                </div>
                <p className="text-xs font-bold text-stone-600 uppercase tracking-wider mt-1">
                  {activeCase.metricLabel}
                </p>
              </div>
            </div>

            {/* Secondary Metrics Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-8 border-b border-stone-100">
              {activeCase.secondaryMetrics.map((met, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#FAF9F5] border border-stone-200/60 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F5B82E]/20 text-stone-950 flex items-center justify-center shrink-0">
                    <Zap size={18} className="text-stone-900" />
                  </div>
                  <div>
                    <span className="text-xl sm:text-2xl font-black text-[#121417] leading-none block">
                      {met.value}
                    </span>
                    <span className="text-xs text-stone-600 font-medium block mt-0.5">
                      {met.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Challenge & Revenue Solution Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-8 items-start">
              
              {/* Left Column: Challenge & Problem */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-800 bg-rose-50 px-3 py-1 rounded-md w-fit">
                  <Target size={14} />
                  <span>The Core Bottleneck</span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-[#121417] font-['Aeonik',sans-serif]">
                  What Was Holding Back Growth
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {activeCase.challenge}
                </p>
              </div>

              {/* Right Column: Systems Built & Outcomes */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Systems Built */}
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-md w-fit mb-3">
                    <Building size={14} />
                    <span>Revenue Architecture Deployed</span>
                  </div>
                  <div className="space-y-2.5">
                    {activeCase.solution.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                        <CheckCircle2 size={16} className="text-[#7E967A] shrink-0 mt-0.5" />
                        <span className="leading-snug">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quantified Results */}
                <div className="p-5 rounded-2xl bg-[#F4EFE6]/70 border border-[#E8DFC9]">
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-800 block mb-2">
                    Verified Outcomes
                  </span>
                  <ul className="space-y-2">
                    {activeCase.results.map((res, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-800 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F5B82E] mt-1.5 shrink-0" />
                        <span>{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </div>

            {/* Bottom Inquire CTA */}
            <div className="pt-6 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs sm:text-sm font-semibold text-stone-700">
                Ready to replicate these revenue benchmarks in your sector?
              </span>

              <button
                onClick={onBookCall}
                className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#121417] text-white text-xs font-bold tracking-[0.06em] hover:bg-stone-800 transition-all shadow-xs cursor-pointer"
              >
                <span>INQUIRE NOW</span>
                <div className="w-5 h-5 rounded-full bg-[#F5B82E] text-stone-950 flex items-center justify-center group-hover:scale-105 transition-all">
                  <ArrowRight size={11} strokeWidth={2.4} />
                </div>
              </button>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
