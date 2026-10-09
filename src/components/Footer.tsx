import NisLogo from './NisLogo';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="pt-16 pb-12 border-t border-stone-200/60 bg-[#FAF9F5]/90 text-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3-Column Footer Grid: Left Logo & Company Name, Chat with us, Find us */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-14 items-start">
          
          {/* 1st Column: Left Logo & Legal Name */}
          <div className="md:col-span-4 space-y-3">
            <a href="#home" className="inline-block hover:opacity-90 transition-opacity">
              <NisLogo size={36} preferImage={true} />
            </a>
            <div className="pt-1">
              <p className="text-xs font-bold tracking-wider uppercase text-stone-800 font-['Aeonik',sans-serif]">
                NIS GLOBAL MARKETING, LLC
              </p>
              <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                Scalable lead generation systems, high-intent opt-in data &amp; US market expansion.
              </p>
            </div>
          </div>

          {/* 2nd Column: Chat with us heading + phone + email */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.08em] text-stone-900 font-['Aeonik',sans-serif]">
              Chat with us
            </h4>
            <div className="space-y-2 text-sm font-medium">
              <div className="flex items-center gap-2 text-stone-700">
                <Phone size={15} className="text-[#F5B82E] shrink-0" />
                <a
                  href="tel:+19177356865"
                  className="hover:text-black hover:underline transition-colors"
                >
                  +1 91773 56865
                </a>
              </div>
              <div className="flex items-center gap-2 text-stone-700">
                <Mail size={15} className="text-[#7E967A] shrink-0" />
                <a
                  href="mailto:info@nisglobalmarketing.com"
                  className="hover:text-black hover:underline transition-colors"
                >
                  info@nisglobalmarketing.com
                </a>
              </div>
            </div>
          </div>

          {/* 3rd Column: Find us heading + official Sheridan, WY address */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.08em] text-stone-900 font-['Aeonik',sans-serif]">
              Find us
            </h4>
            <div className="flex items-start gap-2 text-sm font-medium text-stone-700 leading-relaxed">
              <MapPin size={16} className="text-stone-400 shrink-0 mt-0.5" />
              <address className="not-italic">
                30 N Gould ST STE R,<br />
                Sheridan, WY 82801<br />
                USA
              </address>
            </div>
          </div>

        </div>

        {/* Last Row: Left-aligned copyright & privacy policy */}
        <div className="pt-8 border-t border-stone-200/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500 font-normal">
          <p>
            © 2026 NIS GLOBAL MARKETING, LLC – all rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#home"
              className="hover:text-stone-900 transition-colors"
            >
              Back to Top
            </a>
            <span className="text-stone-300">•</span>
            <a
              href="mailto:info@nisglobalmarketing.com"
              className="hover:text-stone-900 hover:underline transition-colors"
            >
              info@nisglobalmarketing.com
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
