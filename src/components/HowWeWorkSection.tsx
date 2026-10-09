import { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Activity, Users, Send, DollarSign } from 'lucide-react';
import { HOW_WE_WORK_STAGES } from '../data/nisMarketingData';

interface HowWeWorkProps {
  onBookCall: () => void;
}

export default function HowWeWorkSection({ onBookCall }: HowWeWorkProps) {
  const [activeStage, setActiveStage] = useState<number>(0);

  const getStageIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Activity size={20} className="text-stone-950" />;
      case 1: return <Users size={20} className="text-stone-950" />;
      case 2: return <Send size={20} className="text-stone-950" />;
      case 3: return <DollarSign size={20} className="text-stone-950" />;
      default: return <Activity size={20} className="text-stone-950" />;
    }
  };

  return (
    <section id="how-we-work" className="py-16 md:py-24 bg-[#F5F2EA]/60 border-y border-stone-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAEFE4] border border-[#D5E1D4] text-[10.5px] font-bold tracking-[0.08em] text-stone-800 uppercase mb-4 shadow-2xs">
            <span>THE NIS REVENUE ENGINE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#121417]">
            How We Work
          </h2>

          <div className="mt-3 flex items-center justify-center gap-2 sm:gap-4 flex-wrap text-base sm:text-xl font-bold text-stone-800">
            <span className="text-[#121417] bg-white/90 px-3 py-1 rounded-lg border border-stone-200 shadow-2xs">Traffic</span>
            <span className="text-stone-400">→</span>
            <span className="text-[#121417] bg-white/90 px-3 py-1 rounded-lg border border-stone-200 shadow-2xs">Conversion</span>
            <span className="text-stone-400">→</span>
            <span className="text-[#121417] bg-white/90 px-3 py-1 rounded-lg border border-stone-200 shadow-2xs">Nurture</span>
            <span className="text-stone-400">→</span>
            <span className="text-emerald-800 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200 shadow-2xs font-extrabold">Sales</span>
          </div>

          <p className="mt-5 text-sm sm:text-base text-stone-600 leading-relaxed max-w-2xl mx-auto">
            Instead of disconnected tactics, we engineer an interconnected system that systematically captures high-intent prospects and guides them toward booked revenue.
          </p>
        </div>

        {/* 4 Pipeline Stages Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOW_WE_WORK_STAGES.map((stage, idx) => (
            <div
              key={stage.id}
              onClick={() => setActiveStage(idx)}
              className={`cursor-pointer rounded-2xl sm:rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between border ${
                activeStage === idx
                  ? 'bg-white border-[#F5B82E] shadow-md -translate-y-1'
                  : 'bg-white/80 border-stone-200/80 hover:bg-white hover:border-stone-300'
              }`}
            >
              <div>
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-2xl font-black tracking-tight text-stone-300">
                    {stage.stepNumber}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#F5B82E] flex items-center justify-center shadow-2xs">
                    {getStageIcon(idx)}
                  </div>
                </div>

                <span className="text-[10px] uppercase tracking-wider font-bold text-stone-400 block">
                  {stage.subtitle}
                </span>

                <h3 className="text-xl font-extrabold text-[#121417] mt-1">
                  {stage.title}
                </h3>

                <p className="mt-2.5 text-xs text-stone-600 leading-relaxed">
                  {stage.description}
                </p>

                {/* Deliverables */}
                <div className="mt-5 pt-4 border-t border-stone-100 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block mb-1">
                    Key Deliverables
                  </span>
                  {stage.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-1.5 text-[11.5px] text-stone-700 font-medium">
                      <CheckCircle2 size={12} className="text-[#7E967A] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* KPI Outcome */}
              <div className="mt-6 pt-4 border-t border-stone-100">
                <span className="text-[9.5px] uppercase tracking-wider font-bold text-stone-400 block">
                  Target Outcome
                </span>
                <span className="text-xs font-bold text-[#121417] block mt-0.5">
                  {stage.kpi}
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Flow Summary & CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onBookCall}
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#121417] text-white text-xs font-bold tracking-[0.06em] hover:bg-stone-800 transition-all shadow-xs cursor-pointer"
          >
            <span>DISCUSS IMPLEMENTING THIS SYSTEM FOR YOUR BUSINESS</span>
            <ArrowRight size={13} />
          </button>
        </div>

      </div>
    </section>
  );
}
