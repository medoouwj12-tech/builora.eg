import React, { useState, useEffect, useRef } from 'react';
import { siteConfig } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';
import { Shield, Clock, Award, Sparkles, CheckCircle } from 'lucide-react';

export default function TrustStats() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState(siteConfig.statistics.map(() => 0));
  const sectionRef = useRef(null);
  const { language, t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          siteConfig.statistics.forEach((stat, index) => {
            const duration = 1600;
            const steps = 40;
            const stepValue = stat.number / steps;
            let current = 0;
            const interval = setInterval(() => {
              current += stepValue;
              if (current >= stat.number) {
                current = stat.number;
                clearInterval(interval);
              }
              setCounts((prev) => {
                const copy = [...prev];
                copy[index] = Math.floor(current);
                return copy;
              });
            }, duration / steps);
          });
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="relative py-16 bg-[#050811] border-y border-cyan-500/10 overflow-hidden">
      {/* Background glow strip */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading Tag */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.trustStats.eyebrow}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {t.trustStats.title}
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            {t.trustStats.subtitle}
          </p>
        </div>

        {/* Dynamic Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {siteConfig.statistics.map((stat, idx) => {
            const statText = t.trustStats.stats[idx] || stat;

            return (
              <div
                key={stat.id}
                className="relative p-6 rounded-2xl glass-card glass-card-hover border border-cyan-500/15 group overflow-hidden"
              >
                {/* Top ambient line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 opacity-30 group-hover:opacity-100 transition-opacity" />

                <div className="flex flex-col items-center sm:items-start text-center sm:text-start">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-mono flex items-center">
                    <span>{hasAnimated ? counts[idx] : stat.number}</span>
                    <span className="text-cyan-400">{stat.suffix}</span>
                  </div>
                  <div className="text-sm sm:text-base font-bold text-slate-200 mt-2">
                    {statText.label}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    {statText.subtext}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enterprise Trust Badges */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-center sm:text-start">
          {t.trustStats.badges.map((badge, idx) => (
            <div key={idx} className="flex items-center justify-center sm:justify-start gap-2 text-xs font-medium text-slate-300">
              <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>{badge}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
