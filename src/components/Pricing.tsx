import { useState } from 'react';
import { Check } from 'lucide-react';

interface PricingProps {
  onSelectPlan: (plan: string) => void;
}

export default function Pricing({ onSelectPlan }: PricingProps) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const features = [
    'Access to core features',
    'Faster turnaround time',
    'Standard design support',
    'Everything in Starter',
    'Standard design support',
    'Automation & workflow',
    'Email support',
    'Premium Integrations'
  ];

  return (
    <section id="pricing" className="py-20 md:py-28 bg-[#FAFAFC] border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold tracking-[-0.03em] text-[#111827] leading-[1.15]">
            Flexible Pricing For Every Team
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-500 font-normal max-w-xl mx-auto">
            Choose a plan that fits your needs—whether you're just getting started or managing complex projects at scale.
          </p>

          {/* Toggle pill */}
          <div className="mt-8 inline-flex p-1 bg-white border border-slate-200 rounded-full shadow-xs">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-[#5843E0] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${
                billingCycle === 'yearly'
                  ? 'bg-[#5843E0] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Yearly <span className="text-[10px] opacity-80">(Save 20%)</span>
            </button>
          </div>
        </div>

        {/* 2 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Plan 1: Starter Plan */}
          <div className="bg-white rounded-2xl md:rounded-3xl p-8 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between hover:shadow-lg transition-all duration-200">
            <div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">Starter Plan</h3>
                  <p className="mt-1 text-xs text-slate-400 font-medium">Perfect for individuals and small teams.</p>
                </div>
                <div className="text-right">
                  <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                    {billingCycle === 'monthly' ? '$49' : '$39'}
                  </span>
                  <span className="text-xs text-slate-400 font-medium block">/ Per Hour</span>
                </div>
              </div>

              {/* Divider */}
              <div className="my-6 border-t border-slate-100" />

              {/* Features Included Header */}
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-4">
                Features Included
              </h4>

              {/* 2-Column Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                {features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                    <div className="w-4 h-4 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={10} strokeWidth={3} />
                    </div>
                    <span className="leading-snug">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Button */}
            <div className="mt-8 pt-6 border-t border-slate-100">
              <button
                onClick={() => onSelectPlan('Starter Plan')}
                className="w-full py-3 rounded-full text-xs font-bold text-white bg-[#5843E0] hover:bg-[#4a36d4] active:scale-[0.98] transition-all shadow-md shadow-indigo-500/20"
              >
                Get Started Free
              </button>
            </div>
          </div>

          {/* Plan 2: Professional Plan */}
          <div className="bg-white rounded-2xl md:rounded-3xl p-8 border-2 border-indigo-500 shadow-[0_8px_30px_rgba(88,67,224,0.08)] flex flex-col justify-between hover:shadow-xl transition-all duration-200 relative">
            <div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">Professional Plan</h3>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#5843E0] text-white">
                      Most Popular
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-slate-400 font-medium">Perfect for individuals and small teams.</p>
                </div>
                <div className="text-right">
                  <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                    {billingCycle === 'monthly' ? '$99' : '$79'}
                  </span>
                  <span className="text-xs text-slate-400 font-medium block">/ Per Hour</span>
                </div>
              </div>

              {/* Divider */}
              <div className="my-6 border-t border-slate-100" />

              {/* Features Included Header */}
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-4">
                Features Included
              </h4>

              {/* 2-Column Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                {features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                    <div className="w-4 h-4 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={10} strokeWidth={3} />
                    </div>
                    <span className="leading-snug">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Button */}
            <div className="mt-8 pt-6 border-t border-slate-100">
              <button
                onClick={() => onSelectPlan('Professional Plan')}
                className="w-full py-3 rounded-full text-xs font-bold text-white bg-[#5843E0] hover:bg-[#4a36d4] active:scale-[0.98] transition-all shadow-md shadow-indigo-500/20"
              >
                Get Started Free
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
