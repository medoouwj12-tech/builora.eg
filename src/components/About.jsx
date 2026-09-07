import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft,
  Layers, 
  Cpu, 
  ShieldCheck, 
  Rocket, 
  Code
} from 'lucide-react';

export default function About({ onOpenConsultation }) {
  const { language, isRTL, t } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const pillars = [
    {
      icon: Layers,
      title: t.about.pillar1Title,
      desc: t.about.pillar1Desc
    },
    {
      icon: Cpu,
      title: t.about.pillar2Title,
      desc: t.about.pillar2Desc
    },
    {
      icon: ShieldCheck,
      title: t.about.pillar3Title,
      desc: t.about.pillar3Desc
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-[#070B14] overflow-hidden">
      {/* Background glow orb */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid: Story + Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: The Buildora Story */}
          <div className="lg:col-span-6 space-y-6 text-start">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.about.eyebrow}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {t.about.titlePrefix}
              <span className="text-gradient-cyan">
                {t.about.titleHighlight}
              </span>
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              {t.about.p1}
            </p>

            <p className="text-slate-400 text-sm leading-relaxed">
              {t.about.p2}
            </p>

            {/* Who We Work With Checkmarks */}
            <div className="pt-2">
              <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                {t.about.whoWeServeTitle}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {t.about.capabilities.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href="#booking"
                className="px-6 py-3 rounded-xl font-bold text-xs text-black bg-gradient-to-r from-cyan-400 to-blue-500 hover:shadow-glow-cyan transition-all duration-200 flex items-center gap-2"
              >
                <span>{t.about.btnStart}</span>
                <ArrowIcon className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onOpenConsultation}
                className="px-5 py-3 rounded-xl font-semibold text-xs text-slate-300 hover:text-white bg-slate-900 border border-slate-700/80 hover:border-cyan-500/40 transition-all duration-200"
              >
                {t.about.btnConsultation}
              </button>
            </div>

          </div>

          {/* Right Column: Premium Engineering Architecture Visual */}
          <div className="lg:col-span-6 relative">
            <div className="p-8 rounded-3xl glass-card border border-cyan-500/20 relative overflow-hidden shadow-2xl">
              
              {/* Top ambient badge */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Code className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">{t.about.cardTitle}</h3>
                    <p className="text-[11px] text-slate-400 font-mono">{t.about.cardSubtitle}</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-cyan-400 px-2.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30">
                  {t.about.tierBadge}
                </span>
              </div>

              {/* 3 Interactive Pillars in Card */}
              <div className="space-y-4 my-6">
                {pillars.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/30 transition-all duration-200 flex items-start gap-4 text-start"
                    >
                      <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">{pillar.title}</h4>
                        <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{pillar.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* System Lifecycle Graphic */}
              <div className="p-4 rounded-xl bg-[#040710] border border-cyan-500/15">
                <div className="text-[11px] font-mono text-slate-400 mb-2 flex items-center justify-between">
                  <span>{t.about.lifecycleTitle}</span>
                  <span className="text-emerald-400">{t.about.lifecycleStatus}</span>
                </div>
                
                <div className="flex items-center justify-between text-center text-[10px] font-mono text-slate-300">
                  <div className="px-2 py-1.5 rounded bg-slate-800/80 border border-slate-700">{t.about.step1}</div>
                  <ArrowIcon className="w-3 h-3 text-cyan-400" />
                  <div className="px-2 py-1.5 rounded bg-slate-800/80 border border-slate-700">{t.about.step2}</div>
                  <ArrowIcon className="w-3 h-3 text-cyan-400" />
                  <div className="px-2 py-1.5 rounded bg-slate-800/80 border border-slate-700">{t.about.step3}</div>
                  <ArrowIcon className="w-3 h-3 text-cyan-400" />
                  <div className="px-2 py-1.5 rounded bg-cyan-950/80 border border-cyan-500/50 text-cyan-300">{t.about.step4}</div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
