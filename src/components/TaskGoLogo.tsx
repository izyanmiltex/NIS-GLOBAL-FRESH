interface TaskGoLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  textColor?: string;
}

export function TaskGoIcon({ size = 28, className = "" }: { size?: number; className?: string }) {
  return (
    <div 
      className={`relative inline-flex items-center justify-center shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg 
        viewBox="0 0 32 32" 
        width={size} 
        height={size} 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-sm transition-transform duration-200 group-hover:scale-105"
      >
        {/* Modern faceted origami crystal mark matching TaskGo brand */}
        <path d="M16 2L26 8L22 20L16 15L16 2Z" fill="#5E4BEE" />
        <path d="M16 2L6 8L10 20L16 15L16 2Z" fill="#7864F6" />
        <path d="M16 15L22 20L16 30L10 20L16 15Z" fill="#4332D6" />
        <path d="M16 15L10 20L6 8L16 15Z" fill="#9381FB" opacity="0.9" />
        <path d="M16 15L22 20L26 8L16 15Z" fill="#6955F8" />
        <path d="M16 15L16 30L22 20L16 15Z" fill="#3826C7" />
      </svg>
    </div>
  );
}

export default function TaskGoLogo({ 
  className = "", 
  size = 28, 
  showText = true, 
  textColor = "text-slate-900" 
}: TaskGoLogoProps) {
  return (
    <div className={`inline-flex items-center gap-2.5 font-bold tracking-tight select-none ${className}`}>
      <TaskGoIcon size={size} />
      {showText && (
        <span className={`text-[1.35rem] font-extrabold tracking-[-0.03em] ${textColor}`}>
          Task<span className="text-indigo-600">Go</span>
        </span>
      )}
    </div>
  );
}
