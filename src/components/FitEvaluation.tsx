import { CheckCircle2, XCircle, Zap, ShieldAlert, ArrowRight } from 'lucide-react';
import { FIT_DATA } from '../data/nisMarketingData';

interface FitEvaluationProps {
  onBookCall: () => void;
}

export default function FitEvaluation({ onBookCall }: FitEvaluationProps) {
  return (
    <section id="qualification" className="py-16 md:py-24 bg-[#F5F2EA]/40 border-y border-stone-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAEFE4] border border-[#D5E1D4] text-[10.5px] font-bold tracking-[0.08em] text-stone-800 uppercase mb-4 shadow-2xs">
            <span>QUALIFICATION</span>
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
            Is NIS Global Marketing <span className="italic font-normal text-[#7E967A]">Right for You?</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-stone-600 leading-relaxed max-w-2xl mx-auto">
            We partner with businesses where our systems can deliver real, predictable, and measurable growth.
          </p>
        </div>

        {/* Comparison Grid: Right Fit vs Not a Fit */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Who We're the Right Fit For */}
          <div className="bg-gradient-to-b from-[#E8F0E7]/90 to-white rounded-2xl sm:rounded-3xl p-7 sm:p-9 border border-[#CDE0CC] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                    <Zap size={20} />
                  </div>
                  <span className="text-xs font-black tracking-wider uppercase text-emerald-800">
                    {FIT_DATA.rightFit.badge}
                  </span>
                </div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-100/80 px-2.5 py-1 rounded-full">
                  High Success Rate
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#121417] tracking-tight font-['Aeonik',sans-serif]">
                {FIT_DATA.rightFit.title}
              </h3>

              <ul className="mt-6 space-y-4">
                {FIT_DATA.rightFit.points.map((point: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-stone-800 font-medium">
                    <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-snug">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-emerald-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-emerald-900">
                Ready to build your revenue engine?
              </span>
              <button
                onClick={onBookCall}
                className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#121417] text-white text-xs font-bold hover:bg-stone-800 transition-all cursor-pointer shadow-2xs"
              >
                <span>INQUIRE NOW</span>
                <div className="w-5 h-5 rounded-full bg-[#F5B82E] text-stone-950 flex items-center justify-center group-hover:scale-105 transition-all">
                  <ArrowRight size={11} strokeWidth={2.4} />
                </div>
              </button>
            </div>
          </div>

          {/* Who We're NOT a Fit For */}
          <div className="bg-gradient-to-b from-[#FAF4F2]/90 to-white rounded-2xl sm:rounded-3xl p-7 sm:p-9 border border-[#EAD5CF] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-stone-700 text-white flex items-center justify-center shadow-xs">
                    <ShieldAlert size={20} />
                  </div>
                  <span className="text-xs font-black tracking-wider uppercase text-stone-700">
                    {FIT_DATA.notFit.badge}
                  </span>
                </div>
                <span className="text-xs font-bold text-stone-600 bg-stone-100 px-2.5 py-1 rounded-full">
                  Honest Mutual Fit
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#121417] tracking-tight font-['Aeonik',sans-serif]">
                {FIT_DATA.notFit.title}
              </h3>

              <ul className="mt-6 space-y-4">
                {FIT_DATA.notFit.points.map((point: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-stone-700 font-medium">
                    <XCircle size={18} className="text-rose-500 shrink-0 mt-0.5" />
                    <span className="leading-snug">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-200">
              <div className="p-3.5 rounded-xl bg-stone-100/80 text-xs text-stone-600 leading-relaxed">
                <strong>Our Philosophy:</strong> We value directness. If our framework is not set up to win for your current stage, we will be honest with you up front.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
