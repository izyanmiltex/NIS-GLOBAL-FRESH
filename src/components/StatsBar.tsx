export default function StatsBar() {
  const stats = [
    {
      value: '7+',
      label: 'Years of Experience',
    },
    {
      isStars: true,
      label: 'Average Review Rating',
    },
    {
      value: '147+',
      label: 'Closed Projects',
    },
    {
      value: '112+',
      label: 'Happy Clients',
    },
  ];

  return (
    <section className="py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Rounded card container matching the hero section's warm facet gradient & soft sage tones */}
        <div className="bg-gradient-to-r from-[#F3EDE2] via-[#FAF6EE] to-[#E8F0E7] rounded-2xl sm:rounded-[28px] border border-[#E3DACB] px-6 py-7 sm:px-10 sm:py-8 shadow-xs">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 text-center divide-y sm:divide-y-0 sm:divide-x divide-stone-300/40">
            {stats.map((stat, idx) => (
              <div key={idx} className={`flex flex-col items-center justify-center ${idx > 0 ? 'pt-4 sm:pt-0' : ''}`}>
                
                {stat.isStars ? (
                  /* 4.3 Star Icons representation */
                  <div className="h-[42px] flex items-center justify-center gap-1">
                    <svg className="hidden">
                      <defs>
                        <linearGradient id="rating-star-partial" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="30%" stopColor="#F5B82E" />
                          <stop offset="30%" stopColor="#D5CDC0" />
                        </linearGradient>
                      </defs>
                    </svg>
                    
                    {/* Stars 1, 2, 3, 4 (Full stars) */}
                    {[1, 2, 3, 4].map((starIndex) => (
                      <svg
                        key={starIndex}
                        className="w-6 h-6 sm:w-7 sm:h-7 text-[#F5B82E] drop-shadow-2xs"
                        viewBox="0 0 24 24"
                        fill="#F5B82E"
                        stroke="#F5B82E"
                        strokeWidth="0.5"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}

                    {/* Star 5 (0.3 / 30% filled for 4.3 rating) */}
                    <svg
                      className="w-6 h-6 sm:w-7 sm:h-7 drop-shadow-2xs"
                      viewBox="0 0 24 24"
                      fill="url(#rating-star-partial)"
                      stroke="#C5BDAC"
                      strokeWidth="0.5"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                ) : (
                  <div className="h-[42px] flex items-center justify-center">
                    <span className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#121417] leading-none font-['Aeonik',sans-serif]">
                      {stat.value}
                    </span>
                  </div>
                )}

                {/* Headings matching the exact color of the hero description: text-stone-600 */}
                <span className="mt-2 text-[11px] sm:text-[12px] tracking-[0.06em] font-bold text-stone-600 uppercase font-['Aeonik',sans-serif]">
                  {stat.label}
                </span>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
