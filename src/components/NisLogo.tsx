import { useState } from 'react';
import nisLogoImg from '../assets/nislogo.jpg';

interface NisLogoProps {
  size?: number;
  className?: string;
  showTagline?: boolean;
  variant?: 'full' | 'compact' | 'icon';
  preferImage?: boolean;
}

/**
 * High-fidelity vector replica of the official NIS Global Marketing logo:
 * - Geometric "NIS" logomark with 3D green globe and golden ascending growth arrow
 * - Hairline vertical divider
 * - Bold "GLOBAL MARKETING" typography
 * - "LEAD GENERATION | OPT-IN DATA | GLOBAL REACH" tagline
 */
export function NisLogoMark({ size = 40, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size * 1.3}
      height={size}
      viewBox="0 0 500 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Golden Arrow Metallic Gradient */}
        <linearGradient id="goldArrowGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C8881A" />
          <stop offset="35%" stopColor="#F5B82E" />
          <stop offset="65%" stopColor="#FED872" />
          <stop offset="100%" stopColor="#DF9316" />
        </linearGradient>

        {/* Globe 3D Sphere Shading */}
        <radialGradient id="globeSphericalGrad" cx="35%" cy="32%" r="65%">
          <stop offset="0%" stopColor="#D5E5D3" />
          <stop offset="35%" stopColor="#9AB897" />
          <stop offset="70%" stopColor="#638060" />
          <stop offset="95%" stopColor="#3B4F3A" />
          <stop offset="100%" stopColor="#253324" />
        </radialGradient>

        {/* Globe Specular Highlight */}
        <linearGradient id="globeRimLight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#9AB897" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.5" />
        </linearGradient>

        {/* Dark Charcoal Letter Gradient */}
        <linearGradient id="letterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#22252A" />
          <stop offset="50%" stopColor="#121417" />
          <stop offset="100%" stopColor="#0B0D0F" />
        </linearGradient>

        {/* Globe Clip Path */}
        <clipPath id="globeClip">
          <circle cx="258" cy="98" r="54" />
        </clipPath>
      </defs>

      {/* --- Letter 'N' --- */}
      <path
        d="M 42 110 L 112 110 L 198 220 L 198 128 L 222 128 L 222 220 L 152 220 L 66 110 L 66 220 L 42 220 Z"
        fill="url(#letterGrad)"
      />
      <polygon
        points="42,110 42,220 18,220"
        fill="url(#letterGrad)"
      />

      {/* --- 3D Globe with Continents & Grid --- */}
      <g>
        <circle cx="258" cy="98" r="54" fill="url(#globeSphericalGrad)" stroke="#526A4F" strokeWidth="1.5" />

        <g clipPath="url(#globeClip)">
          <ellipse cx="258" cy="98" rx="54" ry="24" fill="none" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.35" />
          <ellipse cx="258" cy="98" rx="26" ry="54" fill="none" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.35" />
          <line x1="258" y1="44" x2="258" y2="152" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.35" />
          <line x1="204" y1="98" x2="312" y2="98" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.35" />

          {/* Continents */}
          <path
            d="M 235 62 Q 248 58 260 66 Q 268 74 256 86 Q 248 94 238 90 Q 230 82 226 72 Q 228 64 235 62 Z"
            fill="#EAF3E8"
            opacity="0.92"
          />
          <path
            d="M 242 96 Q 256 94 258 106 Q 260 120 252 136 Q 244 142 240 134 Q 238 120 240 108 Z"
            fill="#EAF3E8"
            opacity="0.92"
          />
          <path
            d="M 276 68 Q 288 64 296 74 Q 302 88 296 102 Q 288 122 280 136 Q 274 130 278 114 Q 282 96 276 82 Z"
            fill="#EAF3E8"
            opacity="0.88"
          />

          <circle cx="258" cy="98" r="54" fill="url(#globeRimLight)" />
        </g>
      </g>

      {/* --- Letter 'I' --- */}
      <rect x="232" y="128" width="28" height="92" fill="url(#letterGrad)" />

      {/* --- Letter 'S' --- */}
      <path
        d="M 390 128 H 304 C 290 128 284 136 284 150 C 284 168 296 174 316 177 L 366 184 C 382 186 392 192 392 205 C 392 220 376 220 354 220 H 284 V 200 H 354 C 366 200 370 196 370 192 C 370 185 362 181 346 178 L 302 171 C 282 168 262 160 262 144 C 262 130 278 128 304 128 Z"
        fill="url(#letterGrad)"
      />

      {/* --- Ascending Golden Growth Arrow Swoosh --- */}
      <g>
        <path
          d="M 16 208 C 16 228 34 238 60 236 C 120 232 200 206 280 166 C 350 130 405 92 442 66 L 434 56 C 395 84 340 122 272 158 C 194 196 116 222 58 226 C 38 227 26 220 26 208 Z"
          fill="url(#goldArrowGrad)"
        />

        <polygon
          points="472,42 418,62 444,88 472,42"
          fill="url(#goldArrowGrad)"
        />
        <polygon
          points="472,42 432,68 448,84"
          fill="#FED872"
        />
      </g>
    </svg>
  );
}

export default function NisLogo({
  size = 42,
  className = '',
  showTagline = true,
  variant = 'full',
  preferImage = true,
}: NisLogoProps) {
  const [useFallback, setUseFallback] = useState(false);

  // If user requested the official image logo, render the high-res asset
  // (mirrored from https://aryezmiltex.com/nislogo with zero risk of broken loading)
  if (preferImage && !useFallback) {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <img
          src={nisLogoImg}
          alt="NIS GLOBAL MARKETING, LLC"
          style={{ height: size, maxHeight: size }}
          className="w-auto object-contain mix-blend-multiply transition-opacity duration-200"
          onError={() => setUseFallback(true)}
        />
      </div>
    );
  }

  // If variant is icon only, just render the mark
  if (variant === 'icon') {
    return <NisLogoMark size={size} className={className} />;
  }

  return (
    <div className={`inline-flex flex-col select-none ${className}`}>
      {/* Top Lockup: [Mark] + [Hairline Divider] + [GLOBAL MARKETING] */}
      <div className="flex items-center gap-2 sm:gap-2.5">
        {/* Logomark (NIS + Globe + Golden Arrow) */}
        <div style={{ height: size }} className="flex items-center shrink-0">
          <NisLogoMark size={size} />
        </div>

        {/* Hairline Divider */}
        <div
          style={{ height: size * 0.72 }}
          className="w-[1.5px] bg-[#121417] shrink-0 opacity-90 mx-0.5"
        />

        {/* Typography: GLOBAL / MARKETING */}
        <div className="flex flex-col justify-center leading-none tracking-tight">
          <span
            style={{
              fontFamily: "'Aeonik', sans-serif",
              fontSize: `${Math.round(size * 0.44)}px`,
              fontWeight: 800,
              letterSpacing: '0.04em',
              color: '#111111',
              lineHeight: 1.05,
            }}
          >
            GLOBAL
          </span>
          <span
            style={{
              fontFamily: "'Aeonik', sans-serif",
              fontSize: `${Math.round(size * 0.35)}px`,
              fontWeight: 700,
              letterSpacing: '0.06em',
              color: '#111111',
              lineHeight: 1.05,
              marginTop: `${Math.max(1, Math.round(size * 0.05))}px`,
            }}
          >
            MARKETING
          </span>
        </div>
      </div>

      {/* Bottom Tagline: LEAD GENERATION | OPT-IN DATA | GLOBAL REACH */}
      {showTagline && variant === 'full' && (
        <div
          className="mt-1 flex items-center justify-between text-[#111111] font-bold uppercase tracking-[0.14em] sm:tracking-[0.18em]"
          style={{
            fontFamily: "'Aeonik', sans-serif",
            fontSize: `${Math.max(8, Math.round(size * 0.2))}px`,
            opacity: 0.95,
          }}
        >
          <span>LEAD GENERATION</span>
          <span className="opacity-40 font-light mx-1">|</span>
          <span>OPT-IN DATA</span>
          <span className="opacity-40 font-light mx-1">|</span>
          <span>GLOBAL REACH</span>
        </div>
      )}
    </div>
  );
}
