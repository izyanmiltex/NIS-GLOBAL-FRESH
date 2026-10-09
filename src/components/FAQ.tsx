import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What services do you offer?',
      answer:
        'TaskGo offers comprehensive task management, automated workflow creation, real-time team collaboration, customizable sprint boards, progress analytics, and direct integrations with 50+ third-party tools.',
    },
    {
      question: 'Who are your services best suited for?',
      answer:
        'Our platform is engineered for modern product teams, growing startups, marketing departments, software developers, and enterprise organizations that require velocity, transparency, and structure.',
    },
    {
      question: 'Do you offer custom solutions?',
      answer:
        'Yes! We provide tailored enterprise onboarding, dedicated customer success managers, custom SSO/SAML integrations, custom API endpoints, and private cloud deployment options.',
    },
    {
      question: 'What is your typical project timeline?',
      answer:
        'You can get started instantly with our self-serve guided onboarding. Full team workspaces and historical project migrations typically take less than 1 to 2 business days.',
    },
    {
      question: 'How does the collaboration process work?',
      answer:
        'Team members can collaborate concurrently with live card updates, inline commenting, file previews, automated notifications, and customizable role-based permissions across all devices.',
    },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-28 bg-[#FAFAFC] border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold tracking-[-0.03em] text-[#111827] leading-[1.15]">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-500 font-normal max-w-xl mx-auto">
            Everything you need to know before getting started. Helping teams move forward with confidence.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full px-6 py-4.5 text-left flex items-center gap-4 hover:bg-slate-50/50 transition-colors cursor-pointer"
                >
                  {/* Purple Plus/Minus Box */}
                  <div className="w-6 h-6 rounded-lg bg-indigo-50 border border-indigo-100 text-[#5843E0] flex items-center justify-center shrink-0">
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </div>

                  <span className="text-sm sm:text-[15px] font-bold text-slate-900 tracking-tight flex-1">
                    {faq.question}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-500 leading-relaxed pl-16 border-t border-slate-50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
