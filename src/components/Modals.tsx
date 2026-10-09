import { useState } from 'react';
import { X, ArrowRight, CheckCircle2, Calendar, Sparkles, PhoneCall, Building, Mail, User, Globe, ChevronRight } from 'lucide-react';
import NisLogo from './NisLogo';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'bookCall' | 'growthPlan' | 'service';
  serviceName?: string;
}

export default function Modals({ isOpen, onClose, initialMode = 'bookCall', serviceName = '' }: ModalProps) {
  const [activeTab, setActiveTab] = useState<'bookCall' | 'growthPlan'>(
    initialMode === 'growthPlan' ? 'growthPlan' : 'bookCall'
  );
  const [submitted, setSubmitted] = useState(false);

  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [website, setWebsite] = useState('');
  const [industry, setIndustry] = useState('B2B Companies & Professional Services');
  const [monthlyGoal, setMonthlyGoal] = useState('$50k - $150k New Revenue');
  const [selectedTime, setSelectedTime] = useState('Tomorrow 2:00 PM EST');
  const [bottleneck, setBottleneck] = useState('Need Predictable Lead Flow');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-[#FAF9F5] rounded-3xl border border-stone-300/80 shadow-2xl p-6 sm:p-8 overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-900 hover:bg-stone-200/60 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <NisLogo size={30} />
        </div>

        {submitted ? (
          <div className="py-10 text-center space-y-3 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 bg-[#F5B82E]/20 text-[#121417] rounded-full mx-auto flex items-center justify-center">
              <CheckCircle2 size={36} className="text-emerald-600" />
            </div>
            <h3 className="text-2xl font-extrabold text-[#121417]">
              {activeTab === 'bookCall' ? 'Strategy Session Confirmed!' : 'Growth Plan In Preparation!'}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 max-w-sm mx-auto leading-relaxed">
              {activeTab === 'bookCall'
                ? `A calendar invite and preparation brief have been sent to ${email || 'your email'}. Our senior strategist looks forward to speaking with you.`
                : `We are analyzing your market landscape and generating your custom growth roadmap. Expect your proposal within 2 hours.`}
            </p>
          </div>
        ) : (
          <div>
            {/* Modal Navigation Tabs */}
            <div className="flex border-b border-stone-200 mb-6">
              <button
                type="button"
                onClick={() => setActiveTab('bookCall')}
                className={`pb-3 text-xs font-bold tracking-wider uppercase transition-colors mr-6 flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'bookCall'
                    ? 'border-b-2 border-stone-900 text-stone-900'
                    : 'text-stone-400 hover:text-stone-600'
                }`}
              >
                <PhoneCall size={13} />
                <span>Book Strategy Call</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('growthPlan')}
                className={`pb-3 text-xs font-bold tracking-wider uppercase transition-colors flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'growthPlan'
                    ? 'border-b-2 border-stone-900 text-stone-900'
                    : 'text-stone-400 hover:text-stone-600'
                }`}
              >
                <Sparkles size={13} className="text-[#F5B82E]" />
                <span>Get Growth Plan</span>
              </button>
            </div>

            {serviceName && (
              <div className="mb-4 p-2.5 rounded-xl bg-[#EAEFE4] border border-[#D5E1D4] text-xs font-semibold text-stone-800 flex items-center justify-between">
                <span>Inquiring about: <strong>{serviceName}</strong></span>
                <span className="text-[10px] uppercase font-bold text-stone-500 bg-white px-2 py-0.5 rounded">Selected</span>
              </div>
            )}

            {activeTab === 'bookCall' ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-[#121417]">
                    Book a Free Strategy Call
                  </h3>
                  <p className="text-xs text-stone-500 mt-0.5">
                    30-minute 1-on-1 session with a senior US growth strategist. Zero sales pitch, 100% actionable pipeline review.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10.5px] font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User size={14} className="absolute left-3.5 top-3 text-stone-400" />
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Alex Morgan"
                        className="w-full pl-9 pr-3 py-2 rounded-xl border border-stone-300 bg-white text-xs text-stone-900 focus:outline-none focus:border-stone-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10.5px] font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Work Email *
                    </label>
                    <div className="relative">
                      <Mail size={14} className="absolute left-3.5 top-3 text-stone-400" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="alex@company.com"
                        className="w-full pl-9 pr-3 py-2 rounded-xl border border-stone-300 bg-white text-xs text-stone-900 focus:outline-none focus:border-stone-900"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10.5px] font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Company Name *
                    </label>
                    <div className="relative">
                      <Building size={14} className="absolute left-3.5 top-3 text-stone-400" />
                      <input
                        type="text"
                        required
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Apex Technologies"
                        className="w-full pl-9 pr-3 py-2 rounded-xl border border-stone-300 bg-white text-xs text-stone-900 focus:outline-none focus:border-stone-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10.5px] font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Website / Domain
                    </label>
                    <div className="relative">
                      <Globe size={14} className="absolute left-3.5 top-3 text-stone-400" />
                      <input
                        type="text"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        placeholder="apextech.com"
                        className="w-full pl-9 pr-3 py-2 rounded-xl border border-stone-300 bg-white text-xs text-stone-900 focus:outline-none focus:border-stone-900"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[10.5px] font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Select Your Market Segment
                  </label>
                  <select
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 bg-white text-xs text-stone-900 font-medium focus:outline-none"
                  >
                    <option>US-Based Growth Companies & Enterprises</option>
                    <option>B2B Companies & Professional Services</option>
                    <option>Startups & Scale-Ups (Funded & Growth Stage)</option>
                    <option>E-commerce & Direct-to-Consumer Brands</option>
                    <option>High-Ticket & Service-Based Businesses</option>
                    <option>Agencies & Strategic Partners (White-Label)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10.5px] font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Preferred Time (US Time Zones)
                  </label>
                  <div className="relative">
                    <Calendar size={14} className="absolute left-3.5 top-3 text-stone-400" />
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 rounded-xl border border-stone-300 bg-white text-xs text-stone-900 font-medium focus:outline-none"
                    >
                      <option>Tomorrow 11:00 AM EST (8:00 AM PST)</option>
                      <option>Tomorrow 2:00 PM EST (11:00 AM PST)</option>
                      <option>Tomorrow 4:30 PM EST (1:30 PM PST)</option>
                      <option>Next Business Day 10:00 AM EST (7:00 AM PST)</option>
                      <option>Next Business Day 1:00 PM EST (10:00 AM PST)</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-[#121417] text-white text-xs font-bold tracking-wider uppercase hover:bg-stone-800 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <span>Confirm Free Strategy Call</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-[#121417]">
                    Get a Custom Growth Plan Built for Your Market
                  </h3>
                  <p className="text-xs text-stone-500 mt-0.5">
                    We will architect a bespoke customer acquisition blueprint for your specific sector and geography.
                  </p>
                </div>

                <div>
                  <label className="block text-[10.5px] font-bold uppercase tracking-wider text-stone-700 mb-1">
                    1. Primary Growth Bottleneck
                  </label>
                  <select
                    value={bottleneck}
                    onChange={(e) => setBottleneck(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 bg-white text-xs text-stone-900 font-medium"
                  >
                    <option>Need Consistent & Predictable Lead Flow</option>
                    <option>High Paid Ad CAC / Low ROAS</option>
                    <option>Lead Quality Low / Poor Show-up Rates</option>
                    <option>Scaling Out of State / Nationwide in the US</option>
                    <option>Need Automated CRM Funnels & Follow-ups</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10.5px] font-bold uppercase tracking-wider text-stone-700 mb-1">
                    2. Monthly Revenue Target
                  </label>
                  <select
                    value={monthlyGoal}
                    onChange={(e) => setMonthlyGoal(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 bg-white text-xs text-stone-900 font-medium"
                  >
                    <option>$25k - $50k New Revenue / Month</option>
                    <option>$50k - $150k New Revenue / Month</option>
                    <option>$150k - $500k New Revenue / Month</option>
                    <option>$500k+ Enterprise Scale</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10.5px] font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full px-3 py-2 rounded-xl border border-stone-300 bg-white text-xs text-stone-900"
                    />
                  </div>
                  <div>
                    <label className="block text-[10.5px] font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Deliver Plan To (Work Email) *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane@company.com"
                      className="w-full px-3 py-2 rounded-xl border border-stone-300 bg-white text-xs text-stone-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10.5px] font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Company Website
                  </label>
                  <input
                    type="text"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    placeholder="https://yourcompany.com"
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 bg-white text-xs text-stone-900"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-[#F5B82E] text-stone-950 text-xs font-bold tracking-wider uppercase hover:bg-[#eab027] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <Sparkles size={14} />
                    <span>Generate Custom Growth Plan</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
