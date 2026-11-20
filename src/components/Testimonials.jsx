import React from 'react';
import { Star, Quote } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';

export default function Testimonials() {
  const { language, t, h } = useLanguage();
  const items = language === 'ar' && t.testimonials.items?.length ? t.testimonials.items : siteConfig.testimonials;

  return (
    <section id="testimonials" className="py-20 lg:py-24 bg-[#F4F6FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-bold text-ink-900">
            <span className="text-amber-400 tracking-tight">★★★★★</span>
            <span>5.0</span>
          </span>
          <h2 className="section-title mt-5">{h.testimonials.title}</h2>
          <p className="mt-3 text-slate-500">{h.testimonials.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {items.map((it) => (
            <div key={it.id} className="light-card p-6 flex flex-col text-start">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-ink-900 to-brand-600 text-white font-extrabold flex items-center justify-center">
                    {it.name.replace('د. ', '')[0]}
                  </div>
                  <div>
                    <div className="font-extrabold text-ink-900 text-sm">{it.name}</div>
                    <div className="text-xs text-slate-500">{it.company}</div>
                  </div>
                </div>
                <Quote className="w-6 h-6 text-brand-100" />
              </div>
              <div className="mt-4 flex gap-0.5">
                {Array.from({ length: it.rating || 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed flex-1">{it.content}</p>
              <div className="mt-4 pt-4 border-t border-slate-100 text-xs font-bold text-brand-600">{it.projectType}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
