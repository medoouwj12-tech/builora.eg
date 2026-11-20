import React from 'react';
import { Search, Layers, PenTool, Code2, ShieldCheck, Rocket, Headphones, Lightbulb, Flag } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';

const icons = [Search, Layers, PenTool, Code2, ShieldCheck, Rocket, Headphones];
// step index -> phase index
const phaseOf = [0, 0, 0, 0, 1, 1, 2];

export default function Process({ onOpenConsultation }) {
  const { language, t, h } = useLanguage();
  const steps = language === 'ar' && t.process.steps?.length ? t.process.steps : siteConfig.processSteps;

  return (
    <section id="process" className="py-16 lg:py-20 bg-[#F4F6FB]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="light-card p-6 sm:p-10">
          <div className="text-center">
            <span className="section-eyebrow">{h.process.eyebrow}</span>
            <h2 className="section-title mt-4">{h.process.title}</h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">{h.process.subtitle}</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              {h.process.phases.map((p, i) => (
                <span key={i} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-sm font-bold text-ink-900">
                  <span className="w-5 h-5 rounded-full bg-ink-900 text-white text-[11px] flex items-center justify-center">{i + 1}</span>
                  {p}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mt-10">
            {/* vertical rail */}
            <div className="absolute top-0 bottom-0 end-[18px] w-px bg-gradient-to-b from-brand-500 via-brand-200 to-brand-500" />

            <div className="flex justify-end mb-4">
              <span className="relative z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ink-900 text-white text-xs font-bold">
                <Lightbulb className="w-3.5 h-3.5 text-brand-cyan" />
                {h.process.start}
              </span>
            </div>

            <div className="space-y-4">
              {steps.map((s, i) => {
                const Icon = icons[i] || Code2;
                const showPhase = i === 0 || phaseOf[i] !== phaseOf[i - 1];
                return (
                  <div key={i}>
                    {showPhase && (
                      <div className="pe-14 mb-2 text-xs font-extrabold text-brand-600">
                        {phaseOf[i] + 1}. {h.process.phases[phaseOf[i]]}
                      </div>
                    )}
                    <div className="relative pe-14">
                      <span className="absolute end-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-ink-900 text-white text-xs font-extrabold flex items-center justify-center ring-4 ring-white">
                        {s.step}
                      </span>
                      <div className="rounded-2xl bg-slate-50 border border-slate-200/70 p-5 hover:border-brand-200 hover:bg-white hover:shadow-md transition-all">
                        <div className="flex items-center gap-2">
                          <Icon className="w-4 h-4 text-brand-600" />
                          <h3 className="font-extrabold text-ink-900">{s.title}</h3>
                        </div>
                        <p className="mt-2 text-sm text-slate-500 leading-relaxed">{s.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 flex items-center justify-between gap-3 flex-wrap-reverse">
              <p className="text-sm font-bold text-ink-900">
                {h.process.ready}{' '}
                <button onClick={onOpenConsultation} className="text-brand-600 hover:underline">
                  {h.process.readyLink}
                </button>
              </p>
              <span className="relative z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500 text-white text-xs font-bold">
                <Flag className="w-3.5 h-3.5" />
                {h.process.end}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
