import React from 'react';
import { Server, Search, MessageCircle, Wrench, Palette, Database, ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { integrations } from '../data/homeContent';
import { useLanguage } from '../context/LanguageContext';

const iconMap = { Server, Search, MessageCircle, Wrench, Palette, Database };

export function ExtraSolutions() {
  const { h, isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="py-16 lg:py-20 bg-[#F4F6FB] dark:bg-ink-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">{h.extras.title}</h2>
          <div className="mx-auto mt-3 w-14 h-1 rounded-full bg-brand-500" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {h.extras.items.map((it, i) => {
            const Icon = iconMap[it.icon] || Server;
            return (
              <div key={i} className="light-card light-card-hover p-7 text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-brand-50 dark:bg-brand-500/15 ring-4 ring-brand-50/60 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-brand-600" />
                </div>
                <h3 className="text-lg font-extrabold text-ink-900 dark:text-white">{it.title}</h3>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 flex-1">{it.desc}</p>
                <a
                  href={`${siteConfig.contact.whatsappUrl}?text=${encodeURIComponent(it.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill-more mt-5"
                >
                  {h.extras.more}
                  <Arrow className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Integrations() {
  const { h, isRTL } = useLanguage();
  const row = [...integrations, ...integrations];

  return (
    <section className="py-16 lg:py-20 bg-white dark:bg-ink-850 border-y border-slate-200/70 dark:border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="section-eyebrow">{h.integrations.eyebrow}</span>
        <h2 className="section-title mt-4">{h.integrations.title}</h2>
        <p className="mt-3 text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">{h.integrations.subtitle}</p>
      </div>
      <div className="relative mt-10 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className={`flex gap-4 w-max ${isRTL ? 'animate-marquee-rtl' : 'animate-marquee'} hover:[animation-play-state:paused]`}>
          {row.map((name, i) => (
            <div
              key={i}
              className="w-40 shrink-0 rounded-2xl bg-white dark:bg-ink-850 border border-slate-200 dark:border-white/10 shadow-sm px-4 py-6 flex flex-col items-center gap-3"
            >
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-ink-900 to-brand-600 text-white flex items-center justify-center text-lg font-extrabold">
                {name[0]}
              </div>
              <div className="flex items-center gap-1 text-xs font-bold text-ink-900 dark:text-white" dir="ltr">
                <ArrowUpRight className="w-3 h-3 text-brand-500" />
                {name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
