export default function LogoCloud() {
  return (
    <section className="py-12 md:py-16 border-y border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* Label */}
          <div className="text-center lg:text-left shrink-0">
            <p className="text-xs sm:text-sm font-medium text-slate-500 leading-snug tracking-tight max-w-[200px]">
              Endorsed by the globe's leading innovative enterprises.
            </p>
          </div>

          {/* Logos Row */}
          <div className="w-full flex-1 flex flex-wrap items-center justify-center lg:justify-between gap-8 md:gap-12 opacity-65 hover:opacity-90 transition-opacity">
            {/* Logo 1: Logoipsum style */}
            <div className="flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-slate-700">
                <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="2.5" />
                <circle cx="15" cy="15" r="6" stroke="currentColor" strokeWidth="2.5" />
              </svg>
              <span className="font-bold text-base tracking-tight text-slate-700">logoipsum</span>
            </div>

            {/* Logo 2: Three interlocking circles / chain */}
            <div className="flex items-center">
              <svg width="48" height="24" viewBox="0 0 64 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-slate-600">
                <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="3" />
                <circle cx="32" cy="12" r="8" stroke="currentColor" strokeWidth="3" />
                <circle cx="52" cy="12" r="8" stroke="currentColor" strokeWidth="3" />
              </svg>
            </div>

            {/* Logo 3: Infinity ribbon / loops */}
            <div className="flex items-center">
              <svg width="36" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-slate-600">
                <path d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 23.5817 4 28 4C32.4183 4 36 7.58172 36 12C36 16.4183 32.4183 20 28 20C23.5817 20 16.4183 4 12 4Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>

            {/* Logo 4: Modern geometric typography / capsules */}
            <div className="flex items-center">
              <svg width="56" height="24" viewBox="0 0 70 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-slate-700">
                <rect x="2" y="4" width="16" height="16" rx="8" stroke="currentColor" strokeWidth="3" />
                <rect x="26" y="4" width="16" height="16" rx="8" stroke="currentColor" strokeWidth="3" />
                <rect x="50" y="4" width="16" height="16" rx="8" stroke="currentColor" strokeWidth="3" />
              </svg>
            </div>

            {/* Logo 5: Abstract Enterprise Monogram */}
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-sm bg-slate-700 rotate-45" />
              <span className="font-extrabold text-base tracking-widest text-slate-700">IPSL</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
