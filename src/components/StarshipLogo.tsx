interface StarshipLogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
}

export function StarshipIcon({ size = 26, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 
        Origami/faceted geometric 4-point star in yellow & amber facets:
        Top petal
      */}
      <polygon points="20,2 20,20 26,14" fill="#F8C938" />
      <polygon points="20,2 20,20 14,14" fill="#F5B82E" />

      {/* Right petal */}
      <polygon points="38,20 20,20 26,26" fill="#ECA71E" />
      <polygon points="38,20 20,20 26,14" fill="#F8C938" />

      {/* Bottom petal */}
      <polygon points="20,38 20,20 14,26" fill="#DF9714" />
      <polygon points="20,38 20,20 26,26" fill="#ECA71E" />

      {/* Left petal */}
      <polygon points="2,20 20,20 14,14" fill="#F8D355" />
      <polygon points="2,20 20,20 14,26" fill="#F5B82E" />

      {/* Center facet highlights */}
      <polygon points="20,12 24,20 20,20" fill="#FFE58F" opacity="0.6" />
      <polygon points="20,20 20,28 16,20" fill="#B87708" opacity="0.4" />
    </svg>
  );
}

export default function StarshipLogo({ size = 28, className = '', showText = true }: StarshipLogoProps) {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      <StarshipIcon size={size} />
      {showText && (
        <span className="text-[1.35rem] font-extrabold tracking-[-0.03em] text-[#121417]">
          Starship
        </span>
      )}
    </div>
  );
}
