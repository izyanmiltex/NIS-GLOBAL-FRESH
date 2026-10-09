import { useState, useEffect } from 'react';
import NisLogo from './NisLogo';
import { ArrowRight, Menu, X, Mail } from 'lucide-react';

interface NavbarProps {
  onContactNow: () => void;
}

export default function Navbar({ onContactNow }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Header menu as requested: Home, About, Services
  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'SERVICES', href: '#services' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 bg-[#ffffff] border-b border-stone-200/80 shadow-xs ${
        scrolled ? 'py-2.5' : 'py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo on Left - official NIS Global Marketing logo from https://aryezmiltex.com/nislogo */}
          <a href="#home" className="hover:opacity-90 transition-opacity flex items-center py-0.5">
            <NisLogo size={85} className="max-h-16 sm:max-h-22" preferImage={true} />
          </a>

          {/* Right Group: Links followed by CONTACT button */}
          <div className="hidden md:flex items-center gap-7 ml-auto">
            <nav className="flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[12.5px] tracking-[0.08em] font-bold text-stone-800 hover:text-black transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Replaced 'INQUIRE NOW' with 'CONTACT' */}
            <button
              onClick={onContactNow}
              className="group flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-[#121417] text-white text-xs tracking-[0.08em] font-bold hover:bg-stone-800 active:scale-[0.98] transition-all cursor-pointer shadow-xs"
            >
              <span>CONTACT</span>
              <div className="w-5 h-5 rounded-full bg-[#F5B82E] text-stone-950 flex items-center justify-center group-hover:scale-105 transition-all">
                <ArrowRight size={11} strokeWidth={2.4} />
              </div>
            </button>
          </div>

          {/* Mobile Menu Actions */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onContactNow}
              className="flex items-center gap-1.5 text-[11px] font-bold text-stone-900 px-3.5 py-1.5 rounded-full bg-[#F5B82E] shadow-2xs"
            >
              <span>CONTACT</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-800 hover:text-stone-950 focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-5 rounded-2xl bg-white border border-stone-200/80 shadow-xl space-y-4 animate-in fade-in slide-in-from-top-2">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs tracking-wider font-bold text-stone-700 hover:text-black py-1"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-stone-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onContactNow();
                }}
                className="w-full py-2.5 text-center text-xs font-bold text-white bg-stone-900 rounded-xl hover:bg-stone-800 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Mail size={14} />
                <span>CONTACT US</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
