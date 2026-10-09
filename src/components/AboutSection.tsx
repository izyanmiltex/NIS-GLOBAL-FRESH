import { ArrowRight, MoreHorizontal } from 'lucide-react';

interface AboutSectionProps {
  onLearnMore: () => void;
}

export default function AboutSection({ onLearnMore }: AboutSectionProps) {
  const activities = [
    {
      name: 'Zen Richardson',
      time: '3 hours ago',
      product: 'Purchased 1x Gymnocalycium leeonum',
      amount: '$12.50',
      cactusEmoji: '🌵',
    },
    {
      name: 'Nikki Sukamuljo',
      time: '16 hours ago',
      product: 'Purchased 1x Gymnocalycium mihanovichii ..',
      amount: '$26.75',
      cactusEmoji: '🪴',
    },
    {
      name: 'Michelle Wijaya',
      time: '27 Sep 2022',
      product: 'Purchased 1x Tephrocactus artic...',
      amount: '$18.20',
      cactusEmoji: '🌿',
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading & Copy */}
          <div className="lg:col-span-5 max-w-xl">
            
            {/* Tag Pill: ABOUT */}
            <div className="inline-block mb-6">
              <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#F5B82E] text-[10px] sm:text-[11px] font-extrabold tracking-[0.08em] text-stone-950 uppercase shadow-xs">
                ABOUT
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.035em] text-[#121417] leading-[1.12]">
              Grow with a the digital marketing agency ?
            </h2>

            {/* Paragraph description */}
            <p className="mt-6 text-xs sm:text-sm text-stone-500 font-normal leading-relaxed">
              Our digital marketing experts have put together thousands of successful digital marketing campaigns for businesses looking to increase leads.
            </p>

            {/* Link: LEARN MORE -> */}
            <div className="mt-8">
              <button
                onClick={onLearnMore}
                className="group inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.08em] text-stone-900 hover:text-stone-600 transition-colors uppercase cursor-pointer"
              >
                <span>LEARN MORE</span>
                <div className="w-6 h-6 rounded-full border border-stone-900/80 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-all">
                  <ArrowRight size={12} strokeWidth={2.2} />
                </div>
              </button>
            </div>

          </div>

          {/* Right Column: Layered Interactive Activity Cards */}
          <div className="lg:col-span-7 relative flex justify-center">
            
            <div className="relative w-full max-w-lg">
              
              {/* Card 1 (Base): Recent Activity */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.04)] pb-28">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-xs sm:text-sm font-bold text-stone-800 tracking-tight">
                    Recent activity
                  </h3>
                </div>

                <div className="space-y-4">
                  {activities.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-sm shrink-0">
                          {item.cactusEmoji}
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-stone-800 text-[11px] sm:text-xs truncate">
                              {item.name}
                            </span>
                            <span className="text-[10px] text-stone-400 shrink-0">
                              {item.time}
                            </span>
                          </div>
                          <p className="text-[10px] text-stone-500 truncate mt-0.5">
                            {item.product}
                          </p>
                        </div>
                      </div>

                      <span className="font-bold text-stone-900 text-xs shrink-0">
                        {item.amount}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Overlapping Bottom Cards Container */}
              <div className="absolute -bottom-6 left-0 right-0 grid grid-cols-2 gap-3 sm:gap-4 px-2 sm:px-4">
                
                {/* Card 2: Total Sales (Mint/Sage Card) */}
                <div className="bg-[#DCE7DE]/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-[#CFE0D3] shadow-lg flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-stone-600 mb-1">
                      <span className="text-[10px] sm:text-[11px] font-semibold">Total Sales</span>
                      <MoreHorizontal size={14} className="text-stone-400" />
                    </div>

                    <div className="text-xl sm:text-2xl font-bold tracking-tight text-stone-900 mt-1">
                      258
                    </div>

                    <div className="mt-1 flex items-center gap-1.5 flex-wrap">
                      <span className="text-[9px] text-stone-500">Since previous 30 days</span>
                      <span className="inline-flex items-center px-1.5 py-0.2 rounded-full bg-stone-900 text-white text-[9px] font-bold">
                        11% ↑
                      </span>
                    </div>
                  </div>

                  {/* Smooth curved trend chart */}
                  <div className="mt-3 relative h-12 flex items-end justify-between">
                    <svg viewBox="0 0 160 50" className="w-full h-full overflow-visible">
                      <path
                        d="M 0 45 Q 40 40, 70 25 T 130 18 T 160 5"
                        fill="none"
                        stroke="#718B75"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                      <circle cx="160" cy="5" r="3.5" fill="#718B75" />
                    </svg>
                    <span className="absolute right-0 bottom-0 text-[9px] text-stone-500 font-mono">
                      500
                    </span>
                  </div>
                </div>

                {/* Card 3: Today's Order (Warm Cream/Sand Card) */}
                <div className="bg-[#EDE9E1]/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-[#E0DACF] shadow-lg flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-stone-600 mb-1">
                      <span className="text-[10px] sm:text-[11px] font-semibold">Today's order</span>
                      <MoreHorizontal size={14} className="text-stone-400" />
                    </div>

                    <div className="text-xl sm:text-2xl font-bold tracking-tight text-stone-900 mt-1">
                      $150
                    </div>

                    <div className="mt-1 flex items-center gap-1.5 flex-wrap">
                      <span className="text-[9px] text-stone-500">10 products sold</span>
                      <span className="inline-flex items-center px-1.5 py-0.2 rounded-full bg-stone-900 text-white text-[9px] font-bold">
                        2% ↑
                      </span>
                    </div>
                  </div>

                  {/* Vertical bar chart */}
                  <div className="mt-3 relative h-12 flex items-end justify-between gap-1.5 pt-2">
                    {[35, 50, 40, 75, 60, 90, 70, 85].map((height, i) => (
                      <div key={i} className="flex-1 bg-stone-400/30 rounded-t-xs hover:bg-stone-500/50 transition-colors relative" style={{ height: `${height}%` }} />
                    ))}
                    <span className="absolute right-0 top-0 text-[9px] text-stone-500 font-mono">
                      20
                    </span>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
