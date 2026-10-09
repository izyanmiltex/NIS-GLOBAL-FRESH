import { useState } from 'react';
import { X, ArrowRight, CheckCircle2, Mail, User, Phone, MessageSquare, ShieldCheck } from 'lucide-react';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceInquiry?: string;
}

export default function ContactFormModal({ isOpen, onClose, serviceInquiry }: ContactFormModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName) {
      setErrorMsg('Please enter your name.');
      return;
    }

    if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    // Prepare email payload directly addressed to info@nisglobalmarketing.com
    const recipientEmail = 'info@nisglobalmarketing.com';
    const subject = encodeURIComponent(
      `New Lead Inquiry from ${trimmedName}${serviceInquiry ? ` - ${serviceInquiry}` : ''}`
    );
    const bodyContent = encodeURIComponent(
      `Hello NIS Global Marketing Team,\n\n` +
      `You have received a new consultation inquiry through your website:\n\n` +
      `• Name: ${trimmedName}\n` +
      `• Email ID: ${trimmedEmail}\n` +
      `• Phone: ${phone.trim() || 'Not provided'}\n` +
      `• Project Message: ${message.trim() || 'I would like to discuss scalable lead generation systems for our business.'}\n\n` +
      `Sent via NIS Global Marketing Contact System.`
    );

    // Trigger mailto client dispatch to info@nisglobalmarketing.com
    const mailtoUrl = `mailto:${recipientEmail}?subject=${subject}&body=${bodyContent}`;

    setTimeout(() => {
      try {
        const mailWindow = window.open(mailtoUrl, '_blank');
        if (!mailWindow) {
          window.location.href = mailtoUrl;
        }
      } catch {
        window.location.href = mailtoUrl;
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 400);
  };

  const handleResetAndClose = () => {
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setIsSubmitted(false);
    setErrorMsg('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-900/65 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-[#FAF9F5] rounded-3xl border border-stone-300 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar - Clean title without logo, 24-hr or info@ */}
        <div className="px-6 py-4.5 border-b border-stone-200/80 bg-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F5B82E]" />
            <h3 className="text-base font-bold text-stone-900 uppercase tracking-wider font-['Aeonik',sans-serif]">
              Inquire Now
            </h3>
          </div>

          <button
            onClick={handleResetAndClose}
            className="p-1.5 rounded-full text-stone-400 hover:text-stone-900 hover:bg-stone-100 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {isSubmitted ? (
            /* Confirmation Screen */
            <div className="py-6 text-center space-y-4 animate-in zoom-in-95 duration-200">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle2 size={32} />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-stone-900 tracking-tight font-['Aeonik',sans-serif]">
                  Inquiry Dispatched!
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-2 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong>{name}</strong>. Your inquiry has been submitted. A senior strategist will review your details and get back to you shortly.
                </p>
              </div>

              {/* Direct Company Details Card */}
              <div className="mt-6 p-4 rounded-2xl bg-white border border-stone-200 text-left text-xs space-y-2 text-stone-700">
                <div className="font-bold text-stone-900 uppercase tracking-wider font-['Aeonik',sans-serif]">
                  NIS GLOBAL MARKETING, LLC
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={13} className="text-[#F5B82E]" />
                  <a href="tel:+19177356865" className="hover:underline text-stone-900 font-semibold">
                    +1 91773 56865
                  </a>
                </div>
                <div className="text-stone-500 pt-1 border-t border-stone-100">
                  30 N Gould ST STE R, Sheridan, WY 82801 USA
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleResetAndClose}
                  className="w-full py-3 px-6 rounded-full bg-[#121417] text-white text-xs font-bold tracking-wider uppercase hover:bg-stone-800 transition-colors shadow-md cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            /* Direct Inquiry Form */
            <div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[#121417] tracking-tight font-['Aeonik',sans-serif]">
                  Get In Touch
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Fill out your details below and our team will connect with you.
                </p>
              </div>

              {errorMsg && (
                <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium">
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Input */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5 font-['Aeonik',sans-serif]">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Sarah Jenkins"
                      required
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-stone-300 text-stone-900 placeholder:text-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#F5B82E] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Email ID Input */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5 font-['Aeonik',sans-serif]">
                    Email ID <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. sarah@company.com"
                      required
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-stone-300 text-stone-900 placeholder:text-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#F5B82E] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Phone Number (Optional) */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5 font-['Aeonik',sans-serif]">
                    Phone Number <span className="text-stone-400 font-normal lowercase">(optional)</span>
                  </label>
                  <div className="relative">
                    <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +1 917 735 6865"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-stone-300 text-stone-900 placeholder:text-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#F5B82E] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Message (Optional) */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5 font-['Aeonik',sans-serif]">
                    How can we help? <span className="text-stone-400 font-normal lowercase">(optional)</span>
                  </label>
                  <div className="relative">
                    <MessageSquare size={16} className="absolute left-3.5 top-3 text-stone-400" />
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your lead generation goals or requirements..."
                      rows={3}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-stone-300 text-stone-900 placeholder:text-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#F5B82E] focus:border-transparent transition-all resize-none"
                    />
                  </div>
                </div>

                {/* Security Assurance */}
                <div className="flex items-center gap-2 text-[11px] text-stone-500 pt-1">
                  <ShieldCheck size={14} className="text-[#7E967A] shrink-0" />
                  <span>Your information is strictly confidential. No spam guarantee.</span>
                </div>

                {/* Submit Button */}
                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group flex items-center justify-center gap-3 py-3.5 px-6 rounded-full bg-[#121417] text-white text-xs tracking-[0.08em] font-bold uppercase hover:bg-stone-800 active:scale-[0.98] transition-all cursor-pointer shadow-md disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Submitting...</span>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <div className="w-5 h-5 rounded-full bg-[#F5B82E] text-stone-950 flex items-center justify-center group-hover:scale-105 transition-all">
                          <ArrowRight size={11} strokeWidth={2.4} />
                        </div>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* Footer Contact */}
        <div className="px-6 py-3 bg-stone-100 border-t border-stone-200 text-stone-600 text-[11px] flex items-center justify-between shrink-0">
          <span>NIS GLOBAL MARKETING, LLC</span>
          <a href="tel:+19177356865" className="font-semibold text-stone-900 hover:underline">
            +1 91773 56865
          </a>
        </div>
      </div>
    </div>
  );
}
