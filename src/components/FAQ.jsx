import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';
import { ChevronDown, HelpCircle } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const { language, t } = useLanguage();

  const faqs = t.faq.items || siteConfig.faqs;

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="relative py-24 bg-[#070B14] overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 -left-40 w-[600px] h-[600px] bg-cyan-600/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{t.faq.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.faq.titlePrefix}
            <span className="text-gradient-cyan">{t.faq.titleHighlight}</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-400 mt-4 leading-relaxed">
            {t.faq.subtitle}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 text-start">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl glass-card transition-all duration-300 overflow-hidden border ${
                  isOpen ? 'border-cyan-500/40 bg-slate-900/90 shadow-glow-cyan/20' : 'border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 sm:p-6 text-start flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-white tracking-wide">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-slate-800 transition-transform duration-300 shrink-0 ${
                    isOpen ? 'rotate-180 bg-cyan-500/20 text-cyan-400' : 'text-slate-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Direct Question Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-[#0B1222] to-slate-900 border border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-start">
          <div>
            <div className="text-sm font-bold text-white">{t.faq.unansweredTitle}</div>
            <div className="text-xs text-slate-400 mt-0.5">{t.faq.unansweredDesc}</div>
          </div>

          <a
            href={siteConfig.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl text-xs font-semibold text-emerald-300 bg-emerald-950/60 border border-emerald-500/40 hover:bg-emerald-900/60 flex items-center gap-2 transition-all whitespace-nowrap"
          >
            <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
            <span>{t.faq.btnChatWhatsApp}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
