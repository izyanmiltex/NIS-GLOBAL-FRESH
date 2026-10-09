import { useState, useEffect } from 'react';
import { X, ExternalLink, Calendar, ShieldCheck, Clock, Video, RefreshCw, CheckCircle2 } from 'lucide-react';
import NisLogo from './NisLogo';

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceInquiry?: string;
}

export default function CalendlyModal({ isOpen, onClose, serviceInquiry }: CalendlyModalProps) {
  // Default Calendly URL - easily customizable
  const [calendlyUrl, setCalendlyUrl] = useState<string>(
    'https://calendly.com/nisglobalmarketing/strategy-session'
  );
  const [isEditingUrl, setIsEditingUrl] = useState(false);
  const [inputUrl, setInputUrl] = useState(calendlyUrl);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIframeLoaded(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSaveUrl = (e: React.FormEvent) => {
    e.preventDefault();
    let cleaned = inputUrl.trim();
    if (!cleaned.startsWith('http://') && !cleaned.startsWith('https://')) {
      cleaned = 'https://' + cleaned;
    }
    setCalendlyUrl(cleaned);
    setIsEditingUrl(false);
    setIframeLoaded(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-[#FAF9F5] rounded-3xl border border-stone-300 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="px-6 py-4 border-b border-stone-200/80 bg-white/80 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <NisLogo size={28} />
            <div className="hidden sm:block h-5 w-px bg-stone-200" />
            <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-stone-700">
              <Calendar size={14} className="text-[#F5B82E]" />
              <span>Free 30-Min Strategy Call (Calendly)</span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 text-[11px] font-bold tracking-wide transition-colors cursor-pointer"
              title="Open Calendly in a new tab"
            >
              <span>Open in Calendly</span>
              <ExternalLink size={12} />
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-stone-400 hover:text-stone-900 hover:bg-stone-100 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Sub-header info badges */}
        <div className="px-6 py-2.5 bg-[#F3EDE2]/60 border-b border-stone-200/60 flex flex-wrap items-center justify-between gap-2 text-xs shrink-0">
          <div className="flex items-center gap-4 text-stone-600 font-medium text-[11.5px]">
            <span className="flex items-center gap-1 text-stone-900 font-bold">
              <Clock size={13} className="text-[#7E967A]" /> 30 Minutes
            </span>
            <span className="flex items-center gap-1">
              <Video size={13} className="text-stone-500" /> Google Meet / Zoom
            </span>
            <span className="hidden md:flex items-center gap-1">
              <ShieldCheck size={13} className="text-stone-500" /> Senior US Growth Strategist
            </span>
          </div>

          {serviceInquiry && (
            <span className="px-2.5 py-0.5 rounded-full bg-white border border-stone-200 text-[11px] font-semibold text-stone-700">
              Topic: {serviceInquiry}
            </span>
          )}
        </div>

        {/* Calendly Scheduler Container */}
        <div className="relative flex-1 w-full bg-white overflow-hidden min-h-[520px] sm:min-h-[580px]">
          
          {/* Loading Indicator */}
          {!iframeLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#FAF9F5] z-10 space-y-3">
              <div className="w-10 h-10 border-3 border-stone-200 border-t-[#F5B82E] rounded-full animate-spin" />
              <p className="text-xs font-bold text-stone-700 tracking-wider uppercase">
                Loading Calendly Schedule...
              </p>
              <span className="text-[11px] text-stone-500 max-w-xs text-center">
                Syncing available strategy slots with NIS Global Marketing calendar.
              </span>
            </div>
          )}

          {/* Calendly Iframe Embed */}
          <iframe
            src={`${calendlyUrl}?embed_domain=${encodeURIComponent(
              typeof window !== 'undefined' ? window.location.hostname : 'localhost'
            )}&embed_type=Inline&hide_landing_page_details=1&hide_gdpr_banner=1`}
            width="100%"
            height="100%"
            className="w-full h-full border-0 min-h-[560px]"
            title="Schedule Strategy Call with NIS Global Marketing"
            onLoad={() => setIframeLoaded(true)}
          />
        </div>

        {/* Bottom Bar with Link configuration & Assistance */}
        <div className="px-6 py-3 bg-[#FAF9F5] border-t border-stone-200/80 flex flex-wrap items-center justify-between gap-3 text-xs shrink-0">
          <div className="flex items-center gap-2 text-stone-500 text-[11.5px]">
            <CheckCircle2 size={13} className="text-[#7E967A]" />
            <span>Instant calendar confirmation & Google Meet invite automatically emailed</span>
          </div>

          <div className="flex items-center gap-3">
            {isEditingUrl ? (
              <form onSubmit={handleSaveUrl} className="flex items-center gap-2">
                <input
                  type="text"
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  placeholder="https://calendly.com/your-name/slot"
                  className="px-2.5 py-1 text-xs border border-stone-300 rounded-lg bg-white w-64 text-stone-900 focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-2.5 py-1 bg-stone-900 text-white rounded-lg text-xs font-bold hover:bg-stone-800 cursor-pointer"
                >
                  Apply
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditingUrl(false)}
                  className="text-xs text-stone-500 hover:text-stone-800 cursor-pointer"
                >
                  Cancel
                </button>
              </form>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setInputUrl(calendlyUrl);
                  setIsEditingUrl(true);
                }}
                className="text-[11px] font-medium text-stone-400 hover:text-stone-700 flex items-center gap-1 transition-colors cursor-pointer"
                title="Change Calendly link if needed"
              >
                <RefreshCw size={11} />
                <span>Custom Calendly Link</span>
              </button>
            )}

            <a
              href={`mailto:growth@nisglobalmarketing.com?subject=Strategy%20Call%20Booking`}
              className="text-[11px] font-bold text-stone-700 hover:text-stone-950 underline"
            >
              Need another time? Email us
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
