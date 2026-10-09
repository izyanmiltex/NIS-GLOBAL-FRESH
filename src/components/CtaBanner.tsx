import { useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function CtaBanner() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 4000);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner with Cloud / Sky Atmosphere */}
        <div className="relative rounded-3xl overflow-hidden p-10 sm:p-14 md:p-20 text-center shadow-xl border border-indigo-100 bg-gradient-to-b from-[#DDE7FF] via-[#E9EFFF] to-[#F2EFFF]">
          
          {/* Subtle cloud and mist light overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/60 via-transparent to-transparent pointer-events-none" />
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[800px] h-[220px] bg-white/50 rounded-full blur-2xl pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.035em] text-[#111827] leading-[1.15]">
              Let's create digital experiences that deliver results.
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-600 font-normal">
              Turn your vision into impactful design—faster, clearer, and more effective.
            </p>

            {/* Email Form */}
            <div className="mt-8 max-w-md mx-auto">
              {submitted ? (
                <div className="p-3.5 rounded-full bg-white/95 border border-emerald-300 shadow-md flex items-center justify-center gap-2 text-xs font-semibold text-emerald-700 animate-fade-in">
                  <CheckCircle2 size={16} />
                  <span>Thank you! Your request has been received. We'll be in touch shortly.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-2 sm:gap-0 p-1.5 rounded-full bg-white shadow-lg border border-slate-200/80">
                  <input
                    type="email"
                    required
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-5 py-2.5 rounded-full text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none bg-transparent"
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-[#5843E0] hover:bg-[#4a36d4] active:scale-[0.98] transition-all whitespace-nowrap shadow-md shadow-indigo-500/20"
                  >
                    Send Request
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
