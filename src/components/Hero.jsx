import React, { useState, useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';
import { 
  ArrowRight, 
  ArrowLeft,
  Sparkles, 
  Code, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  Activity, 
  CheckCircle2, 
  Terminal,
  ExternalLink,
  Layers,
  Server
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Hero({ onOpenConsultation }) {
  const [activeTab, setActiveTab] = useState('terminal');
  const [terminalLine, setTerminalLine] = useState(0);
  const { language, isRTL, t } = useLanguage();

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const terminalLogs = language === 'ar' ? [
    { text: "> تهيئة محرك بيلدورا buildora_core_v4.2...", color: "text-slate-400" },
    { text: "> تجهيز البنية السحابية: microservices متقدمة...", color: "text-cyan-400" },
    { text: "> ضغط الحزم البرمجية: تحميل في 0.2 ثانية فقط...", color: "text-emerald-400" },
    { text: "> اتصال آمن بقاعدة بيانات PostgreSQL المشفرة (SSL/TLS 1.3)...", color: "text-blue-400" },
    { text: "> توزيع خوادم Edge السحابية: القاهرة، فرانكفورت، دبي...", color: "text-cyan-300" },
    { text: "✔ جاهزية تامة: نظام بيلدورا يعمل بنسبة 99.99% بدون توقف", color: "text-emerald-300 font-bold" }
  ] : [
    { text: "> initializing buildora_core_v4.2...", color: "text-slate-400" },
    { text: "> compiling architecture: cloud-native microservices...", color: "text-cyan-400" },
    { text: "> optimizing bundle size: 38.4kb gzip (0.2s load)...", color: "text-emerald-400" },
    { text: "> connecting secure PostgreSQL cluster (SSL/TLS 1.3)...", color: "text-blue-400" },
    { text: "> deploying edge CDN nodes: Cairo, Frankfurt, Dubai...", color: "text-cyan-300" },
    { text: "✔ BUILDORA SYSTEM ONLINE: 99.99% UPTIME READY", color: "text-emerald-300 font-bold" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTerminalLine((prev) => (prev < terminalLogs.length ? prev + 1 : prev));
    }, 900);
    return () => clearInterval(timer);
  }, [terminalLogs.length]);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden">
      {/* Glow highlight orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/15 to-purple-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-start space-y-6">
            
            {/* Top Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wide backdrop-blur-md shadow-sm shadow-cyan-500/10">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>{t.hero.eyebrowBadge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              {t.hero.headlinePrefix}
              <span className="text-gradient-cyan block sm:inline">
                {t.hero.headlineHighlight}
              </span>
              {t.hero.headlineSuffix}
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              {t.hero.subheadline}
            </p>

            {/* Primary Action Buttons & WhatsApp Integration */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto">
              {/* Start Your Project CTA */}
              <a
                href="#booking"
                className="relative group overflow-hidden px-6 py-3.5 rounded-xl font-bold text-sm text-black bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:shadow-glow-cyan transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <Sparkles className="w-4 h-4" />
                <span>{t.hero.btnStart}</span>
                <ArrowIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Explore Our Work CTA */}
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/50 transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>{t.hero.btnExplore}</span>
              </a>

              {/* Direct WhatsApp Callout CTA */}
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl font-semibold text-sm text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/40 hover:border-emerald-400 transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 w-full sm:w-auto shadow-sm shadow-emerald-950"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
                <span>{t.hero.btnWhatsApp}</span>
              </a>
            </div>

            {/* Trust Bullet Checkmarks */}
            <div className="pt-3 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>{t.hero.trust1}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>{t.hero.trust2}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>{t.hero.trust3}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Futuristic Interactive Technology Cockpit */}
          <div className="lg:col-span-5 relative">
            
            {/* Ambient Backing Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-3xl blur-2xl transform -rotate-1 opacity-70" />

            {/* Cockpit Card Container */}
            <div className="relative rounded-2xl glass-panel border border-cyan-500/30 overflow-hidden shadow-2xl shadow-black/80">
              
              {/* Window Bar */}
              <div className="px-4 py-3 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-[11px] font-mono text-slate-400 mx-2">{t.hero.telemetryTitle}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {t.hero.liveTelemetry}
                  </span>
                </div>
              </div>

              {/* Interactive Tabs */}
              <div className="px-3 pt-2.5 pb-2 bg-slate-900/60 border-b border-slate-800/80 flex items-center gap-1 overflow-x-auto text-xs font-mono">
                <button
                  onClick={() => setActiveTab('terminal')}
                  className={`px-3 py-1 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                    activeTab === 'terminal'
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{t.hero.tabTerminal}</span>
                </button>
                <button
                  onClick={() => setActiveTab('metrics')}
                  className={`px-3 py-1 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                    activeTab === 'metrics'
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Activity className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{t.hero.tabPerformance}</span>
                </button>
                <button
                  onClick={() => setActiveTab('architecture')}
                  className={`px-3 py-1 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                    activeTab === 'architecture'
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Server className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{t.hero.tabArchitecture}</span>
                </button>
              </div>

              {/* Dynamic Tab Body */}
              <div className="p-5 min-h-[300px] flex flex-col justify-between font-mono text-xs">
                
                {/* TAB 1: Terminal Simulator */}
                {activeTab === 'terminal' && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-slate-500 pb-2 border-b border-slate-800/60 text-[11px]">
                      <span>env: production</span>
                      <span>branch: main</span>
                    </div>

                    <div className="space-y-1.5 pt-1">
                      {terminalLogs.slice(0, Math.max(terminalLine, 1)).map((log, index) => (
                        <div key={index} className={`leading-relaxed ${log.color} flex items-start gap-2`}>
                          <span>{log.text}</span>
                        </div>
                      ))}
                      {terminalLine < terminalLogs.length && (
                        <div className="flex items-center gap-1 text-cyan-400">
                          <span className="animate-pulse">_</span>
                        </div>
                      )}
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-800/80 grid grid-cols-2 gap-2 text-[10px]">
                      <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                        <span className="text-slate-400 block">{t.hero.latencyLabel}</span>
                        <span className="text-emerald-400 font-bold text-xs">{t.hero.latencyVal}</span>
                      </div>
                      <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                        <span className="text-slate-400 block">{t.hero.securityLabel}</span>
                        <span className="text-cyan-400 font-bold text-xs">{t.hero.securityVal}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 2: Metrics Dashboard */}
                {activeTab === 'metrics' && (
                  <div className="space-y-3 font-sans">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400 font-mono">{t.hero.uptimeLabel}</span>
                      <span className="text-xs font-bold text-cyan-400">{t.hero.uptimeVal}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                        <div className="text-[11px] text-slate-400">{t.hero.lighthouseScore}</div>
                        <div className="text-xl font-extrabold text-emerald-400 mt-0.5">100 / 100</div>
                        <div className="w-full bg-slate-800 h-1 rounded-full mt-2 overflow-hidden">
                          <div className="bg-emerald-400 h-full w-full" />
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                        <div className="text-[11px] text-slate-400">{t.hero.fcpLabel}</div>
                        <div className="text-xl font-extrabold text-cyan-400 mt-0.5">0.3s FCP</div>
                        <div className="w-full bg-slate-800 h-1 rounded-full mt-2 overflow-hidden">
                          <div className="bg-cyan-400 h-full w-[94%]" />
                        </div>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                      <div className="flex items-center justify-between text-xs mb-1.5">
                        <span className="text-slate-300">{t.hero.ciTitle}</span>
                        <span className="text-emerald-400 font-mono text-[10px]">ALL CHECKS PASSED</span>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] text-slate-400">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span>{t.hero.ciDesc}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 3: Cloud Architecture */}
                {activeTab === 'architecture' && (
                  <div className="space-y-3 font-sans">
                    <span className="text-xs text-slate-400 font-mono">Deploy Target Matrix</span>
                    
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/80 border border-cyan-500/20">
                        <div className="flex items-center gap-2">
                          <Cpu className="w-4 h-4 text-cyan-400" />
                          <span className="text-slate-200">Frontend Layer</span>
                        </div>
                        <span className="text-cyan-300 font-mono text-[11px]">React 19 / Next.js SSR</span>
                      </div>

                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/80 border border-blue-500/20">
                        <div className="flex items-center gap-2">
                          <Server className="w-4 h-4 text-blue-400" />
                          <span className="text-slate-200">API & Logic Engine</span>
                        </div>
                        <span className="text-blue-300 font-mono text-[11px]">Node.js / Python / Docker</span>
                      </div>

                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/80 border border-indigo-500/20">
                        <div className="flex items-center gap-2">
                          <ShieldCheck className="w-4 h-4 text-indigo-400" />
                          <span className="text-slate-200">Data Persistence</span>
                        </div>
                        <span className="text-indigo-300 font-mono text-[11px]">PostgreSQL / Redis / Encrypted</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Bottom Status Bar */}
                <div className="pt-3 mt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>CLUSTER: ACTIVE</span>
                  </div>
                  <a href="#booking" className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
                    <span>{t.hero.btnStart}</span>
                    <ArrowIcon className="w-3 h-3" />
                  </a>
                </div>

              </div>
            </div>

            {/* Floating Micro Badge Card 1 */}
            <div className={`hidden sm:flex absolute -bottom-5 ${isRTL ? '-right-5' : '-left-5'} p-3 rounded-xl glass-panel border border-cyan-400/30 shadow-xl items-center gap-3 animate-float`}>
              <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">{t.hero.badgeSpeed}</div>
                <div className="text-[10px] text-slate-400">{t.hero.badgeSpeedDesc}</div>
              </div>
            </div>

            {/* Floating Micro Badge Card 2 */}
            <div className={`hidden sm:flex absolute -top-5 ${isRTL ? '-left-5' : '-right-5'} p-3 rounded-xl glass-panel border border-emerald-400/30 shadow-xl items-center gap-3 animate-float-delayed`}>
              <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">{t.hero.badgeSecurity}</div>
                <div className="text-[10px] text-slate-400">{t.hero.badgeSecurityDesc}</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
