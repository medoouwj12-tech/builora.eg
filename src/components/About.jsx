import React from 'react';
import { Globe, ShoppingBag, Cpu, LayoutDashboard, Phone } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';
import WhatsAppIcon from './WhatsAppIcon';

const featureIcons = [Globe, ShoppingBag, Cpu, LayoutDashboard];

export default function About() {
  const { h } = useLanguage();

  return (
    <section id="about" className="py-16 lg:py-20 bg-[#F4F6FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="light-card p-6 sm:p-10 grid lg:grid-cols-[1fr_300px] gap-10 items-center">
          <div className="text-start">
            <span className="section-eyebrow">{h.about.eyebrow}</span>
            <h2 className="section-title mt-4">{h.about.title}</h2>
            <p className="mt-4 text-slate-500 leading-relaxed max-w-2xl">{h.about.desc}</p>

            <div className="mt-6 grid sm:grid-cols-2 gap-3 max-w-xl">
              {h.about.features.map((f, i) => {
                const Icon = featureIcons[i];
                return (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </span>
                    <span className="text-sm font-bold text-ink-900">{f}</span>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`tel:${siteConfig.contact.phoneTel}`} className="btn-primary !py-3">
                <Phone className="w-4 h-4" />
                {h.about.call}
              </a>
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 font-bold text-sm hover:bg-emerald-100 transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" />
                {h.about.whatsapp}
              </a>
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-b from-slate-50 to-white border border-slate-200/70 p-8 text-center">
            <img src="/logo.jpeg" alt="BUILDORA" className="w-24 h-24 rounded-2xl object-cover mx-auto shadow-lg ring-1 ring-slate-200" />
            <div className="mt-8 grid grid-cols-3 gap-2">
              {h.about.stats.map((s, i) => (
                <div key={i}>
                  <div className="text-2xl font-extrabold text-ink-900" dir="ltr">{s.n}</div>
                  <div className="text-xs text-slate-500 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
