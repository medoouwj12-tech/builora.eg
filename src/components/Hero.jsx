import React from 'react';
import { Users, Phone, Rocket, Briefcase, Headphones, ShoppingBag, LayoutDashboard, Bot } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import PhoneScreens from './PhoneScreens';
import { useLanguage } from '../context/LanguageContext';

// Deterministic "network" background nodes
const nodes = [
  [5, 18], [14, 8], [22, 30], [9, 52], [26, 62], [18, 84], [35, 12], [42, 40], [48, 70], [57, 20],
  [63, 52], [70, 8], [76, 38], [83, 66], [90, 22], [96, 48], [88, 88], [66, 90], [32, 92], [52, 96]
];
const edges = [
  [0, 1], [0, 2], [1, 6], [2, 3], [2, 7], [3, 4], [4, 5], [4, 8], [6, 9], [7, 9], [7, 10], [8, 10],
  [9, 11], [10, 12], [11, 14], [12, 14], [12, 13], [13, 15], [14, 15], [13, 16], [16, 17], [17, 8],
  [5, 18], [18, 19], [19, 17], [6, 7], [3, 7]
];

function NetworkBg() {
  return (
    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100" aria-hidden="true">
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]}
          stroke="rgba(77,134,255,0.16)" strokeWidth="0.08"
        />
      ))}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="0.25" fill="rgba(134,176,255,0.55)" />
      ))}
    </svg>
  );
}

function PhoneMockup({ h, isRTL }) {
  const chips = [
    { label: 'iOS', cls: 'top-[4%] -end-6 sm:-end-8', icon: null },
    { label: h.hero.chips.ai, cls: 'top-[40%] -start-6 sm:-start-8', icon: Bot, accent: true },
    { label: h.hero.chips.systems, cls: 'bottom-[30%] -end-6 sm:-end-4', icon: LayoutDashboard },
    { label: 'Android', cls: 'bottom-[12%] -start-4 sm:-start-6', icon: null },
    { label: h.hero.chips.store, cls: 'top-[60%] -start-8 sm:-start-10', icon: ShoppingBag }
  ];

  return (
    <div className="relative mx-auto w-[260px] sm:w-[300px] h-[440px] sm:h-[500px]">
      {/* connector lines */}
      <svg className="absolute -inset-16 w-[calc(100%+8rem)] h-[calc(100%+8rem)] pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        {[[50, 50, 92, 14], [50, 50, 8, 26], [50, 50, 96, 70], [50, 50, 6, 80], [50, 50, 4, 55], [50, 50, 70, 98], [50, 50, 30, 2]].map(
          ([x1, y1, x2, y2], i) => (
            <g key={i}>
              <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(77,134,255,0.35)" strokeWidth="0.25" strokeDasharray="1 1.2" className="animate-dash" />
              <circle cx={x2} cy={y2} r="0.9" fill="#4D86FF" />
            </g>
          )
        )}
      </svg>

      <div className="absolute -inset-10 bg-brand-500/25 blur-[90px] rounded-full" />

      {/* Phone */}
      <div className="relative h-full rounded-[2.6rem] bg-ink-800 p-2.5 ring-1 ring-white/15 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] animate-float">
        <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-24 h-5 rounded-full bg-black z-10" />
        <div className="h-full rounded-[2.1rem] bg-white overflow-hidden">
          <PhoneScreens />
        </div>
      </div>

      {chips.map((c, i) => (
        <div
          key={i}
          className={`absolute ${c.cls} z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold shadow-lg ${
            c.accent ? 'bg-brand-500 text-white' : 'bg-ink-800/95 text-white ring-1 ring-white/15'
          } ${i % 2 ? 'animate-float-delayed' : 'animate-float'}`}
          dir="ltr"
        >
          {c.icon && <c.icon className="w-3.5 h-3.5" />}
          {c.label}
        </div>
      ))}

      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-ink-800 ring-1 ring-white/15 text-white/80 text-[11px] font-semibold whitespace-nowrap">
        {h.hero.phoneCaption}
      </div>
    </div>
  );
}

export default function Hero({ onOpenConsultation }) {
  const { h, isRTL } = useLanguage();
  const statIcons = [Briefcase, Users, Headphones];

  return (
    <section id="home" className="relative overflow-hidden bg-ink-950 pt-36 sm:pt-40 pb-20 lg:pb-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(31,99,255,0.22),transparent_55%),radial-gradient(ellipse_at_10%_90%,rgba(34,211,238,0.10),transparent_50%)]" />
      <NetworkBg />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 lg:gap-10 items-center">
        <div className="text-start">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500 text-white text-sm font-bold shadow-[0_8px_24px_-8px_rgba(31,99,255,0.9)] hover:bg-brand-600 transition-colors"
          >
            <Users className="w-4 h-4" />
            {h.hero.badge}
          </button>

          <h1 className="mt-7 text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold text-white leading-[1.3] tracking-tight">
            {h.hero.titleA}{' '}
            <span className="bg-gradient-to-r from-brand-400 to-brand-cyan bg-clip-text text-transparent">{h.hero.titleB}</span>
            <br className="hidden sm:block" /> {h.hero.titleC}
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-xl">{h.hero.subtitle}</p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3 max-w-md sm:max-w-none">
            <button onClick={onOpenConsultation} className="btn-primary">
              <Rocket className="w-4 h-4" />
              {h.hero.btnPrimary}
            </button>
            <a href={`tel:${siteConfig.contact.phoneTel}`} className="btn-ghost-dark">
              <Phone className="w-4 h-4" />
              {h.hero.btnCall}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {h.hero.stats.map((s, i) => {
              const Icon = statIcons[i];
              return (
                <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 ring-1 ring-white/10 text-white/85 text-xs font-semibold">
                  <Icon className="w-3.5 h-3.5 text-brand-400" />
                  {s}
                </span>
              );
            })}
          </div>
        </div>

        <PhoneMockup h={h} isRTL={isRTL} />
      </div>
    </section>
  );
}
