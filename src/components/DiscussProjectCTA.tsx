import { ArrowRight } from 'lucide-react';

interface DiscussProjectCTAProps {
  onGetStarted: () => void;
}

export default function DiscussProjectCTA({ onGetStarted }: DiscussProjectCTAProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Soft Almond/Warm Cream Rounded Container */}
        <div className="relative rounded-3xl md:rounded-[36px] bg-[#ECE9DF] border border-[#DDD8CC] overflow-hidden p-8 sm:p-12 md:p-16 lg:p-20 shadow-xs">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7 max-w-xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-[-0.035em] text-[#121417] leading-[1.12]">
                Let’s discuss your project
              </h2>

              <p className="mt-5 text-xs sm:text-sm text-stone-600 font-normal leading-relaxed max-w-md">
                The essential to combine empathy, creativity and rationality to meet user needs and business success
              </p>

              {/* GET STARTED Pill Button */}
              <div className="mt-8">
                <button
                  onClick={onGetStarted}
                  className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#121417] text-white text-xs font-bold tracking-[0.06em] hover:bg-stone-800 active:scale-[0.98] transition-all shadow-sm cursor-pointer"
                >
                  <span>GET STARTED</span>
                  <div className="w-5 h-5 rounded-full border border-white/40 flex items-center justify-center group-hover:translate-x-0.5 group-hover:border-white transition-all">
                    <ArrowRight size={12} strokeWidth={2.2} />
                  </div>
                </button>
              </div>
            </div>

            {/* Right Graphic: Concentric arcs with yellow nodes */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="w-full max-w-[340px] sm:max-w-[400px] h-[240px] sm:h-[300px]">
                <svg
                  viewBox="0 0 360 280"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  {/* Concentric Arc Circles */}
                  <circle cx="280" cy="140" r="230" stroke="#121417" strokeWidth="1.2" />
                  <circle cx="280" cy="140" r="170" stroke="#121417" strokeWidth="1.2" />
                  <circle cx="280" cy="140" r="110" stroke="#121417" strokeWidth="1.2" />
                  <circle cx="280" cy="140" r="50" stroke="#121417" strokeWidth="1.2" />

                  {/* Interconnecting Lines */}
                  <line x1="80" y1="130" x2="160" y2="70" stroke="#121417" strokeWidth="1.2" />
                  <line x1="160" y1="70" x2="260" y2="100" stroke="#121417" strokeWidth="1.2" />
                  <line x1="260" y1="100" x2="200" y2="210" stroke="#121417" strokeWidth="1.2" />
                  <line x1="200" y1="210" x2="280" y2="240" stroke="#121417" strokeWidth="1.2" />
                  <line x1="80" y1="130" x2="200" y2="210" stroke="#121417" strokeWidth="1" strokeDasharray="3 3" />

                  {/* Yellow Nodes along the circles */}
                  {/* Node 1: Left */}
                  <circle cx="80" cy="130" r="16" fill="#F5B82E" stroke="#121417" strokeWidth="1.5" />
                  {/* Node 2: Top Middle */}
                  <circle cx="160" cy="70" r="14" fill="#F5B82E" stroke="#121417" strokeWidth="1.5" />
                  {/* Node 3: Center Right */}
                  <circle cx="260" cy="100" r="18" fill="#F5B82E" stroke="#121417" strokeWidth="1.5" />
                  {/* Node 4: Bottom Middle */}
                  <circle cx="200" cy="210" r="22" fill="#F5B82E" stroke="#121417" strokeWidth="1.5" />
                  {/* Node 5: Bottom Right */}
                  <circle cx="280" cy="240" r="12" fill="#F5B82E" stroke="#121417" strokeWidth="1.5" />
                </svg>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
