import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';
import { 
  Search, 
  Layers, 
  Layout, 
  Code2, 
  ShieldCheck, 
  Rocket, 
  HeartHandshake, 
  Sparkles, 
  CheckCircle2,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

const icons = [
  Search,
  Layers,
  Layout,
  Code2,
  ShieldCheck,
  Rocket,
  HeartHandshake
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const { language, isRTL, t } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const steps = t.process.steps || siteConfig.processSteps;

  return (
    <section id="process" className="relative py-24 bg-[#050811] overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-1/2 -left-40 w-[600px] h-[600px] bg-blue-600/10 blur-[170px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.process.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.process.titlePrefix}
            <span className="text-gradient-cyan">{t.process.titleHighlight}</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-400 mt-4 leading-relaxed">
            {t.process.subtitle}
          </p>
        </div>

        {/* Process Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4 text-start">
          {steps.map((step, idx) => {
            const Icon = icons[idx] || Sparkles;
            const isSelected = activeStep === idx;

            return (
              <div
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer rounded-2xl p-5 glass-card transition-all duration-300 relative flex flex-col justify-between ${
                  isSelected
                    ? 'border-cyan-400 bg-slate-900/90 shadow-glow-cyan/30 scale-[1.03]'
                    : 'border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900/60'
                }`}
              >
                {/* Step Number Top Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-2xl font-extrabold font-mono transition-colors ${
                    isSelected ? 'text-cyan-400' : 'text-slate-600'
                  }`}>
                    {step.step}
                  </span>

                  <div className={`p-2 rounded-xl transition-colors ${
                    isSelected ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-800/80 text-slate-400'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Title & Desc */}
                <div>
                  <h3 className="text-sm font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{step.description}</p>
                </div>

                {/* Deliverable Pill */}
                <div className="mt-4 pt-3 border-t border-slate-800/80">
                  <div className="text-[9px] font-mono uppercase text-slate-500">{t.process.deliverableLabel}</div>
                  <div className="text-[11px] font-medium text-cyan-300/90 mt-0.5 truncate">
                    {step.deliverable}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Focused Step Breakdown Banner */}
        <div className="mt-12 p-6 rounded-2xl glass-panel border border-cyan-500/25 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-start">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300 shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-mono text-cyan-400">
                {t.process.activeFocus} {steps[activeStep].step} — {steps[activeStep].title.toUpperCase()}
              </div>
              <div className="text-sm text-slate-200 mt-0.5">
                {steps[activeStep].description}
              </div>
            </div>
          </div>

          <a
            href="#booking"
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-cyan-400 to-blue-500 hover:shadow-glow-cyan transition-all whitespace-nowrap flex items-center gap-1.5 shrink-0"
          >
            <span>{t.process.btnStartStep1}</span>
            <ArrowIcon className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
