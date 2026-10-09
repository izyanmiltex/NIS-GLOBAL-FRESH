import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold tracking-[-0.03em] text-[#111827] leading-[1.15]">
            Real Results, Real Impact.
            <span className="block mt-1">Our Success Stories</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-500 font-normal max-w-xl mx-auto">
            Real-world success stories showcasing growth, performance, and productivity improvements.
          </p>
        </div>

        {/* 3-column / 2-row Bento Grid matching the exact screenshot layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          
          {/* Card 1: Mila Ass (Top Left) */}
          <div className="bg-white rounded-2xl md:rounded-3xl p-7 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between hover:shadow-lg transition-all duration-200">
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              "The team delivered exceptional design quality with a clear understanding of our business goals. The final product exceeded expectations and improved user engagement significantly."
            </p>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-slate-900">Mila Ass</h4>
                <p className="text-xs text-slate-400">Marketer</p>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center text-indigo-600 gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill="currentColor" />
                  ))}
                </div>
                <span className="text-[10px] text-slate-400 mt-0.5">4.9 out of 5.0</span>
              </div>
            </div>
          </div>

          {/* Card 2: Robert Fox (Top Center) */}
          <div className="bg-white rounded-2xl md:rounded-3xl p-7 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between hover:shadow-lg transition-all duration-200">
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              "From concept to execution, everything was handled with precision. Our conversion rate noticeably after launch."
            </p>
            <div className="mt-6 pt-4 border-t border-slate-100">
              <h4 className="text-sm font-bold text-slate-900">Robert Fox</h4>
              <p className="text-xs text-slate-400">Marketer</p>
            </div>
          </div>

          {/* Card 3: Photo of Robert Fox (Top Right) */}
          <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-slate-200/90 min-h-[220px] relative group">
            <img
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=80"
              alt="Robert Fox portrait"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <span className="text-white text-xs font-semibold">Robert Fox • Marketer</span>
            </div>
          </div>

          {/* Card 4: Photo of Esther Howard (Bottom Left) */}
          <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-slate-200/90 min-h-[220px] relative group">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80"
              alt="Esther Howard portrait"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <span className="text-white text-xs font-semibold">Esther Howard • Marketer</span>
            </div>
          </div>

          {/* Card 5: Esther Howard (Bottom Center) */}
          <div className="bg-white rounded-2xl md:rounded-3xl p-7 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between hover:shadow-lg transition-all duration-200">
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              "They transformed our ideas into a clean, modern digital experience. Communication was smooth."
            </p>
            <div className="mt-6 pt-4 border-t border-slate-100">
              <h4 className="text-sm font-bold text-slate-900">Esther Howard</h4>
              <p className="text-xs text-slate-400">Marketer</p>
            </div>
          </div>

          {/* Card 6: Josh Biler (Bottom Right) */}
          <div className="bg-white rounded-2xl md:rounded-3xl p-7 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between hover:shadow-lg transition-all duration-200">
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              "A reliable partner who truly understands design strategy. Their attention to detail and structured workflow made a real difference. Outstanding UI/UX work. The designs are intuitive , with our users' needs."
            </p>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-slate-900">Josh Biler</h4>
                <p className="text-xs text-slate-400">Marketer</p>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center text-indigo-600 gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill="currentColor" />
                  ))}
                </div>
                <span className="text-[10px] text-slate-400 mt-0.5">4.9 out of 5.0</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
