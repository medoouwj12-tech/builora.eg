import React from 'react';
import { Phone, Mail, MapPin, Clock, Lock, Rocket, Code2, ShieldCheck, FileCode, Headphones } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { servicesData } from '../data/servicesData';
import { useLanguage } from '../context/LanguageContext';
import WhatsAppIcon from './WhatsAppIcon';
import { SocialIcon, socialOrder } from './SocialIcons';

const badgeIcons = [Code2, ShieldCheck, FileCode, Headphones];

export default function Footer({ onOpenConsultation }) {
  const { language, t, h } = useLanguage();
  const services =
    language === 'ar' && t.services.items?.length
      ? t.services.items.map((s) => s.title)
      : servicesData.map((s) => s.title);

  const quick = [
    { href: '#home', label: h.nav.home },
    { href: '#services', label: h.nav.services },
    { href: '#projects', label: h.nav.projects },
    { href: '#about', label: h.nav.about },
    { href: '#process', label: h.nav.process },
    { href: '#faq', label: h.nav.faq }
  ];

  const c = siteConfig.contact;

  return (
    <footer id="contact" className="relative bg-ink-950 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(31,99,255,0.18),transparent_60%)]" />

      {/* CTA band */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-ink-850 to-ink-900 px-6 py-12 sm:py-14 text-center overflow-hidden">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-brand-500/20 blur-[100px] rounded-full" />
          <Rocket className="hidden sm:block absolute end-10 top-1/2 -translate-y-1/2 w-16 h-16 text-brand-400 rotate-[-30deg] animate-float" />
          <h2 className="relative text-2xl sm:text-3xl font-extrabold">{h.cta.title}</h2>
          <p className="relative mt-3 text-slate-300 inline-flex items-center gap-2">
            <Lock className="w-4 h-4 text-brand-cyan" />
            {h.cta.desc}
          </p>
          <div className="relative mt-7">
            <button onClick={onOpenConsultation} className="btn-primary">
              <WhatsAppIcon className="w-4 h-4" />
              {h.cta.btn}
            </button>
          </div>
        </div>
      </div>

      {/* Columns */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2.5">
            <img src="/logo.jpeg" alt="BUILDORA" className="w-11 h-11 rounded-xl object-cover" />
            <div dir="ltr">
              <div className="font-extrabold tracking-wide text-lg">BUILDORA</div>
              <div className="text-[10px] text-brand-300">Software &amp; Programming</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-400 leading-relaxed">{h.footer.desc}</p>
          <div className="mt-5 flex gap-2">
            {socialOrder.map((s) => (
              <a
                key={s.key}
                href={siteConfig.socialLinks[s.key]}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.key}
                className={`w-9 h-9 rounded-full ${s.bg} flex items-center justify-center hover:scale-110 transition-transform`}
              >
                <SocialIcon name={s.key} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-extrabold mb-4">{h.footer.services}</h3>
          <ul className="space-y-2.5">
            {services.slice(0, 7).map((s, i) => (
              <li key={i}>
                <a href="#services" className="text-sm text-slate-400 hover:text-brand-300 transition-colors">{s}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-extrabold mb-4">{h.footer.quick}</h3>
          <ul className="space-y-2.5">
            {quick.map((q) => (
              <li key={q.href}>
                <a href={q.href} className="text-sm text-slate-400 hover:text-brand-300 transition-colors">{q.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-extrabold mb-4">{h.footer.contact}</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href={`tel:${c.phoneTel}`} className="flex items-center gap-3 text-slate-300 hover:text-white">
                <span className="w-8 h-8 rounded-full bg-brand-500 flex items-center justify-center"><Phone className="w-4 h-4" /></span>
                <span dir="ltr">{c.phoneDisplay}</span>
              </a>
            </li>
            <li>
              <a href={c.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-white">
                <WhatsAppIcon variant="filled" className="w-8 h-8" />
                <span>WhatsApp</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${c.email}`} className="flex items-center gap-3 text-slate-300 hover:text-white">
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"><Mail className="w-4 h-4" /></span>
                <span>{c.email}</span>
              </a>
            </li>
            <li className="flex items-center gap-3 text-slate-300">
              <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"><MapPin className="w-4 h-4" /></span>
              <span>{language === 'ar' ? 'القاهرة، مصر' : c.address}</span>
            </li>
            <li className="flex items-center gap-3 text-slate-400 text-xs">
              <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"><Clock className="w-4 h-4" /></span>
              <span>{language === 'ar' ? 'السبت – الخميس: 10 ص – 8 م' : c.workingHours}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Badges */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 grid grid-cols-2 lg:grid-cols-4 gap-3">
        {h.footer.badges.map((b, i) => {
          const Icon = badgeIcons[i];
          return (
            <div key={i} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
              <Icon className="w-6 h-6 text-brand-400 shrink-0" />
              <div>
                <div className="text-sm font-extrabold">{b.t}</div>
                <div className="text-[11px] text-slate-400">{b.s}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <span>© {new Date().getFullYear()} BUILDORA — {h.footer.rights}</span>
          <span>{h.footer.madeIn} 💙</span>
        </div>
      </div>
    </footer>
  );
}
