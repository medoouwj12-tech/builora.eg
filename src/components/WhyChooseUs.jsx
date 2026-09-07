import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';
import { 
  Cpu, 
  Wrench, 
  Smartphone, 
  Zap, 
  Sparkles, 
  TrendingUp, 
  SearchCheck, 
  ShieldAlert, 
  LifeBuoy, 
  MessageSquareQuote,
  ShieldCheck
} from 'lucide-react';

const icons = [
  Cpu,
  Wrench,
  Smartphone,
  Zap,
  Sparkles,
  TrendingUp,
  SearchCheck,
  ShieldAlert,
  LifeBuoy,
  MessageSquareQuote
];

export default function WhyChooseUs() {
  const { language, t } = useLanguage();
  const items = t.whyUs.items || siteConfig.whyChooseUs;

  return (
    <section id="why-us" className="relative py-24 bg-[#070B14] overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-cyan-600/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.whyUs.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.whyUs.titlePrefix}
            <span className="text-gradient-cyan">{t.whyUs.titleHighlight}</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-400 mt-4 leading-relaxed">
            {t.whyUs.subtitle}
          </p>
        </div>

        {/* 10 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 text-start">
          {items.map((item, idx) => {
            const Icon = icons[idx] || ShieldCheck;

            return (
              <div
                key={idx}
                className="group relative rounded-2xl glass-card glass-card-hover p-6 border border-cyan-500/15 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-cyan-400/50 flex items-center justify-center text-cyan-400 group-hover:text-cyan-300 group-hover:scale-105 transition-all duration-200 mb-4 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[10px] font-mono text-cyan-400/80">
                  <span className="w-1 h-1 rounded-full bg-cyan-400" />
                  <span>{t.whyUs.verifiedBadge}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
