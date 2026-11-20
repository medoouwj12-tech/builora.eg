import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';

export default function FAQ() {
  const { language, t, h } = useLanguage();
  const [open, setOpen] = useState(0);
  const items = language === 'ar' && t.faq.items?.length ? t.faq.items : siteConfig.faqs;

  return (
    <section id="faq" className="py-20 lg:py-24 bg-[#F4F6FB] dark:bg-ink-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="section-eyebrow">{h.faq.eyebrow}</span>
          <h2 className="section-title mt-4">{h.faq.title}</h2>
        </div>

        <div className="space-y-3">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className={`light-card overflow-hidden ${isOpen ? 'border-brand-200' : ''}`}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-start"
                  aria-expanded={isOpen}
                >
                  <span className="font-extrabold text-ink-900 dark:text-white text-sm sm:text-base">{it.question}</span>
                  <span className={`w-7 h-7 shrink-0 rounded-full flex items-center justify-center ${isOpen ? 'bg-brand-500 text-white' : 'text-brand-600'}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{it.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
