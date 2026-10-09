export default function HeroPortrait() {
  return (
    <div className="relative w-full max-w-[390px] sm:max-w-[420px] flex justify-center">
      
      {/* Soft rounded container matching #F5EFE4 and rounded-[32px] */}
      <div className="relative w-full h-[440px] sm:h-[480px] bg-[#F4EFE6] rounded-[32px] sm:rounded-[36px] overflow-hidden shadow-sm flex items-end justify-center">
        
        {/* SVG Portrait of Woman with Yellow Biker Jacket & Hoop Earrings Pointing Left */}
        <svg
          viewBox="0 0 400 480"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-contain overflow-visible select-none"
        >
          <defs>
            {/* Skin Gradient */}
            <linearGradient id="skin" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F9DFCE" />
              <stop offset="100%" stopColor="#EFCAB2" />
            </linearGradient>
            <linearGradient id="skinShadow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#E2B79C" />
              <stop offset="100%" stopColor="#D5A384" />
            </linearGradient>

            {/* Hair Gradient */}
            <linearGradient id="hair" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1E1E24" />
              <stop offset="100%" stopColor="#0F0F12" />
            </linearGradient>
            <linearGradient id="hairHighlight" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#2E2E38" />
              <stop offset="50%" stopColor="#4A4A58" />
              <stop offset="100%" stopColor="#2E2E38" />
            </linearGradient>

            {/* Jacket Gradients (Yellow / Mustard Leather) */}
            <linearGradient id="jacketMain" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#F9BE2C" />
              <stop offset="45%" stopColor="#F3B01E" />
              <stop offset="100%" stopColor="#DF990E" />
            </linearGradient>
            <linearGradient id="jacketDark" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#D8930D" />
              <stop offset="100%" stopColor="#BA7A05" />
            </linearGradient>
            <linearGradient id="jacketHighlight" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FDE68A" />
              <stop offset="100%" stopColor="#F5B82E" />
            </linearGradient>

            {/* Metallic Zipper / Hardware */}
            <linearGradient id="metallic" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#E2E8F0" />
              <stop offset="50%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#94A3B8" />
            </linearGradient>

            {/* Amber / Golden Hoop Earrings */}
            <linearGradient id="hoopGold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FBBF24" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>

            {/* Soft Shadow Filter */}
            <filter id="cardShadow" x="-10%" y="-10%" width="130%" height="130%">
              <feDropShadow dx="0" dy="8" stdDeviation="12" floodOpacity="0.08" floodColor="#000" />
            </filter>
          </defs>

          {/* BACKGROUND HAIR (Behind Neck & Shoulders) */}
          <path
            d="M 120 180 C 110 240, 115 310, 140 330 C 150 290, 160 250, 165 220 Z"
            fill="url(#hair)"
          />
          <path
            d="M 280 180 C 295 240, 290 310, 265 330 C 255 290, 245 250, 240 220 Z"
            fill="url(#hair)"
          />

          {/* NECK */}
          <path
            d="M 175 190 L 175 250 C 175 265, 225 265, 225 250 L 225 190 Z"
            fill="url(#skin)"
          />
          {/* Neck Shadow under Chin */}
          <path
            d="M 175 190 Q 200 215 225 190 L 225 208 Q 200 226 175 208 Z"
            fill="url(#skinShadow)"
            opacity="0.6"
          />

          {/* INNER YELLOW T-SHIRT */}
          <path
            d="M 160 240 Q 200 280 240 240 L 250 300 Q 200 320 150 300 Z"
            fill="#FACC15"
          />
          <path
            d="M 168 250 Q 200 278 232 250"
            stroke="#EAB308"
            strokeWidth="3"
            fill="none"
          />

          {/* YELLOW LEATHER BIKER JACKET - TORSO & BACK */}
          <path
            d="M 130 250 C 130 250, 95 295, 90 400 L 120 480 L 285 480 L 310 400 C 305 295, 270 250, 270 250 Z"
            fill="url(#jacketMain)"
          />

          {/* JACKET LAPELS & COLLAR */}
          {/* Left Lapel (Viewer's Left) */}
          <path
            d="M 130 250 L 170 340 L 138 335 L 118 290 Z"
            fill="url(#jacketDark)"
          />
          <path
            d="M 130 250 L 175 320 L 195 270 L 155 242 Z"
            fill="url(#jacketHighlight)"
          />
          {/* Metallic Snap on Left Lapel */}
          <circle cx="160" cy="315" r="3.5" fill="url(#metallic)" stroke="#64748B" strokeWidth="0.8" />

          {/* Right Lapel (Viewer's Right) */}
          <path
            d="M 270 250 L 228 348 L 260 340 L 282 290 Z"
            fill="url(#jacketDark)"
          />
          <path
            d="M 270 250 L 222 330 L 202 268 L 245 242 Z"
            fill="url(#jacketHighlight)"
          />
          {/* Metallic Snap on Right Lapel */}
          <circle cx="238" cy="322" r="3.5" fill="url(#metallic)" stroke="#64748B" strokeWidth="0.8" />

          {/* Asymmetrical Diagonal Front Zipper */}
          <path
            d="M 205 275 L 180 480"
            stroke="url(#metallic)"
            strokeWidth="3.5"
            strokeDasharray="4 2"
          />
          <rect x="198" y="295" width="8" height="14" rx="2" fill="url(#metallic)" stroke="#64748B" strokeWidth="0.8" />

          {/* Jacket Seam Detailing */}
          <path d="M 150 350 L 130 480" stroke="#CA8A04" strokeWidth="1.5" strokeDasharray="3 3" />
          <path d="M 250 350 L 270 480" stroke="#CA8A04" strokeWidth="1.5" strokeDasharray="3 3" />

          {/* LEFT ARM & SHOULDER (Viewer's Right) */}
          <path
            d="M 270 250 C 300 270, 325 320, 330 400 L 290 440 L 270 350 Z"
            fill="url(#jacketMain)"
          />

          {/* HEAD & FACE */}
          {/* Head Base Shape */}
          <path
            d="M 148 135 C 148 75, 252 75, 252 135 C 252 185, 230 215, 200 215 C 170 215, 148 185, 148 135 Z"
            fill="url(#skin)"
          />

          {/* CHEEKS BLUSH */}
          <circle cx="168" cy="155" r="14" fill="#F43F5E" opacity="0.12" />
          <circle cx="232" cy="155" r="14" fill="#F43F5E" opacity="0.12" />

          {/* EYES - Joyful curved smiling eyes */}
          <path
            d="M 164 136 C 168 130, 178 130, 184 136"
            stroke="#1E1E24"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 216 136 C 222 130, 232 130, 236 136"
            stroke="#1E1E24"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          {/* Subtle eyelashes / liner flick */}
          <path d="M 184 135 L 188 133" stroke="#1E1E24" strokeWidth="2" strokeLinecap="round" />
          <path d="M 236 135 L 240 133" stroke="#1E1E24" strokeWidth="2" strokeLinecap="round" />

          {/* EYEBROWS */}
          <path
            d="M 160 123 C 168 118, 178 119, 186 124"
            stroke="#2B2624"
            strokeWidth="2.8"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 214 124 C 222 119, 232 118, 240 123"
            stroke="#2B2624"
            strokeWidth="2.8"
            strokeLinecap="round"
            fill="none"
          />

          {/* NOSE */}
          <path
            d="M 197 142 Q 200 155 204 155 Q 207 155 206 151"
            stroke="#D5A384"
            strokeWidth="2.2"
            strokeLinecap="round"
            fill="none"
          />

          {/* BIG HAPPY RADIANT TOOTHY SMILE */}
          {/* Lips Outer Curve */}
          <path
            d="M 176 166 C 182 190, 218 190, 224 166 C 215 168, 185 168, 176 166 Z"
            fill="#D9485C"
          />
          {/* Bright White Upper Teeth */}
          <path
            d="M 179 167 C 186 179, 214 179, 221 167 C 210 168, 190 168, 179 167 Z"
            fill="#FFFFFF"
          />
          {/* Lip definition stroke */}
          <path
            d="M 174 166 Q 200 170 226 166"
            stroke="#BE123C"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
          />

          {/* BIG ORANGE / GOLDEN HOOP EARRINGS */}
          {/* Left Hoop (Viewer's Left) */}
          <ellipse
            cx="140"
            cy="165"
            rx="15"
            ry="24"
            fill="none"
            stroke="url(#hoopGold)"
            strokeWidth="3.2"
          />
          {/* Right Hoop (Viewer's Right) */}
          <ellipse
            cx="260"
            cy="165"
            rx="15"
            ry="24"
            fill="none"
            stroke="url(#hoopGold)"
            strokeWidth="3.2"
          />

          {/* MAIN FRONT HAIR (Chic Dark Bob with Fringe/Bangs) */}
          <path
            d="M 142 145 C 136 100, 155 58, 200 58 C 245 58, 264 100, 258 145 C 255 125, 245 105, 230 100 C 210 95, 190 95, 170 100 C 155 105, 145 125, 142 145 Z"
            fill="url(#hair)"
          />
          {/* Side Hair Strands Framing Face */}
          <path
            d="M 142 135 C 140 170, 145 200, 154 220 C 148 190, 144 160, 146 135 Z"
            fill="url(#hair)"
          />
          <path
            d="M 258 135 C 260 170, 255 200, 246 220 C 252 190, 256 160, 254 135 Z"
            fill="url(#hair)"
          />
          {/* Bangs / Fringe Detailing */}
          <path
            d="M 156 102 Q 178 116 200 108 Q 222 116 244 102 C 230 92, 170 92, 156 102 Z"
            fill="url(#hair)"
          />
          {/* Soft Hair Sheen */}
          <path
            d="M 168 76 C 188 70, 212 70, 232 76"
            stroke="url(#hairHighlight)"
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.75"
          />

          {/* RIGHT ARM & HAND POINTING TO THE LEFT */}
          {/* Yellow Jacket Sleeve Extending Left */}
          <path
            d="M 145 265 C 120 280, 75 295, 30 295 L 30 350 C 70 350, 115 340, 145 320 Z"
            fill="url(#jacketMain)"
          />
          {/* Sleeve Zipper & Cuff Detail */}
          <path d="M 32 295 L 32 350" stroke="url(#metallic)" strokeWidth="4" />
          <rect x="28" y="315" width="8" height="12" rx="2" fill="url(#metallic)" />
          {/* Sleeve Fold Creases */}
          <path d="M 95 290 Q 90 320 105 335" stroke="#CA8A04" strokeWidth="2" fill="none" opacity="0.6" />
          <path d="M 60 295 Q 55 325 70 345" stroke="#CA8A04" strokeWidth="2" fill="none" opacity="0.6" />

          {/* HAND & POINTING FINGER (Reaching out past the card) */}
          {/* Palm & Thumb */}
          <path
            d="M 32 308 C 22 308, 12 315, 14 328 C 16 338, 24 344, 32 344 Z"
            fill="url(#skin)"
          />
          {/* Folded middle, ring, pinky fingers */}
          <rect x="12" y="316" width="14" height="7" rx="3.5" fill="url(#skin)" />
          <rect x="10" y="323" width="14" height="7" rx="3.5" fill="url(#skin)" />
          <rect x="12" y="330" width="12" height="6" rx="3" fill="url(#skin)" />
          
          {/* POINTING INDEX FINGER - Extending straight out to the left towards Congrats card! */}
          <path
            d="M 22 308 L -32 308 C -42 308, -42 318, -32 318 L 22 318 Z"
            fill="url(#skin)"
          />
          {/* Fingernail */}
          <path
            d="M -30 310 Q -36 313 -30 316"
            stroke="#F43F5E"
            strokeWidth="1.2"
            fill="#FFE4E6"
            opacity="0.8"
          />
        </svg>

      </div>

      {/* Floating Congrats Card (Overlaps Left Edge, Finger Points Exactly At It) */}
      <div className="absolute -left-6 sm:-left-14 top-[150px] sm:top-[170px] z-30 bg-gradient-to-br from-[#E2ECE4]/95 via-[#EBF1EB]/95 to-[#EFEAE0]/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-white/80 shadow-[0_16px_36px_rgba(0,0,0,0.08)] w-[215px] sm:w-[235px] transition-transform hover:-translate-y-1 duration-300">
        
        {/* Cactus Product Thumbnail with badge '1' */}
        <div className="relative float-right ml-2 mb-1">
          <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#F5B82E] p-1.5 flex items-center justify-center shadow-xs">
            
            {/* Vector Gymnocalycium mihanovichii (Moon Cactus) */}
            <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 overflow-visible">
              {/* Terracotta Pot */}
              <path d="M 12 30 L 15 44 C 15 45, 33 45, 33 44 L 36 30 Z" fill="#D97443" />
              {/* Pot Rim */}
              <rect x="10" y="28" width="28" height="4" rx="2" fill="#C25E2E" />
              {/* Soil */}
              <ellipse cx="24" cy="29" rx="11" ry="2" fill="#5C3D2E" />

              {/* Cactus Stem (Green Ribbed Column) */}
              <path d="M 19 18 L 19 29 L 29 29 L 29 18 Z" fill="#2D6A4F" />
              <path d="M 24 18 L 24 29" stroke="#40916C" strokeWidth="1.5" />
              <path d="M 21 20 L 21 28" stroke="#1B4332" strokeWidth="1" />
              <path d="M 27 20 L 27 28" stroke="#1B4332" strokeWidth="1" />

              {/* Moon Cactus Crown (Gymnocalycium mihanovichii Mutant - Red/Coral Ribbed Globe) */}
              <circle cx="24" cy="14" r="9" fill="#E63946" />
              {/* Ribs & Highlights */}
              <path d="M 24 5 C 21 9, 21 19, 24 23" stroke="#C1121F" strokeWidth="1.4" fill="none" />
              <path d="M 24 5 C 27 9, 27 19, 24 23" stroke="#C1121F" strokeWidth="1.4" fill="none" />
              <path d="M 16 10 C 18 13, 18 17, 16 20" stroke="#FF758F" strokeWidth="1.2" fill="none" />
              <path d="M 32 10 C 30 13, 30 17, 32 20" stroke="#9B111E" strokeWidth="1.2" fill="none" />
              
              {/* Little Spines / Areoles */}
              <circle cx="24" cy="9" r="0.8" fill="#FFF" />
              <circle cx="24" cy="14" r="0.8" fill="#FFF" />
              <circle cx="24" cy="19" r="0.8" fill="#FFF" />
              <circle cx="19" cy="11" r="0.7" fill="#FFF" />
              <circle cx="18" cy="16" r="0.7" fill="#FFF" />
              <circle cx="29" cy="11" r="0.7" fill="#FFF" />
              <circle cx="30" cy="16" r="0.7" fill="#FFF" />
            </svg>

          </div>

          {/* Badge '1' */}
          <span className="absolute -top-1.5 -left-1.5 w-5 h-5 rounded-full bg-black text-white text-[10px] font-bold flex items-center justify-center shadow-xs">
            1
          </span>
        </div>

        {/* Congrats Copy */}
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-bold text-stone-600 uppercase tracking-wider block">
            New Lead System
          </span>
        </div>
        
        {/* Pipeline Value */}
        <span className="text-2xl sm:text-[28px] font-extrabold tracking-tight text-[#121417] block mt-0.5 leading-none">
          $128.5K
        </span>

        <div className="clear-both pt-2.5">
          <span className="text-[10px] text-emerald-700 font-bold block bg-emerald-100/80 px-2 py-0.5 rounded-md inline-block">
            High-Intent SQL Booked
          </span>
          <p className="text-[10.5px] text-stone-600 font-semibold truncate mt-1" title="US B2B Growth Pipeline Active">
            US B2B Growth Pipeline Active
          </p>
        </div>

      </div>

    </div>
  );
}
