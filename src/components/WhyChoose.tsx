import { Sparkles } from 'lucide-react';

export default function WhyChoose() {
  const stats = [
    {
      value: '40%',
      description: 'Faster Task Completion and Automated workflows.',
    },
    {
      value: '3x',
      description: 'Higher Team Alignment and Real-time updates.',
    },
    {
      value: '100%',
      description: 'Real-Time Insights Across and Track bottlenecks.',
    },
    {
      value: '10k+',
      description: 'Active Users Startups, agencies growing teams',
    },
  ];

  return (
    <section id="why-choose" className="py-20 md:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold tracking-[-0.03em] text-[#111827] leading-[1.15]">
            Why Teams Choose TaskGo
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-500 font-normal max-w-xl mx-auto">
            Trusted by teams to manage work more efficiently. Designed to help teams do their best work.
          </p>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl md:rounded-3xl p-7 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg hover:border-indigo-200 transition-all duration-200 flex flex-col justify-between group"
            >
              {/* Top: Value & Sparkle Icon */}
              <div className="flex items-start justify-between">
                <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#111827]">
                  {stat.value}
                </span>
                
                {/* Purple Sparkle Icon inside circle */}
                <div className="w-7 h-7 rounded-full bg-indigo-50 border border-indigo-100/80 flex items-center justify-center text-[#5843E0] group-hover:scale-110 transition-transform">
                  <Sparkles size={14} />
                </div>
              </div>

              {/* Description */}
              <p className="mt-8 text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
