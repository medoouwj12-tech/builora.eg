import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';
import { Star, Sparkles, Quote, CheckCircle } from 'lucide-react';

export default function Testimonials() {
  const { language, t } = useLanguage();
  const reviews = t.testimonials.items || siteConfig.testimonials;

  return (
    <section id="testimonials" className="relative py-24 bg-[#050811] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.testimonials.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.testimonials.titlePrefix}
            <span className="text-gradient-cyan">{t.testimonials.titleHighlight}</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-400 mt-4 leading-relaxed">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-start">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="relative rounded-3xl glass-card glass-card-hover p-6 sm:p-8 border border-cyan-500/15 flex flex-col justify-between"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-cyan-500/30" />
                </div>

                {/* Project Badge */}
                <span className="inline-block text-[11px] font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-500/25 px-2.5 py-0.5 rounded-full mb-3">
                  {review.projectType}
                </span>

                {/* Content */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{review.content}"
                </p>
              </div>

              {/* Author Details */}
              <div className="mt-6 pt-5 border-t border-slate-800/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-black text-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white">
                    {review.name}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {review.role}, <span className="text-slate-300">{review.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Verified Disclaimer Note */}
        <div className="mt-12 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
          <CheckCircle className="w-4 h-4 text-emerald-400" />
          <span>{t.testimonials.disclaimer}</span>
        </div>

      </div>
    </section>
  );
}
