import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Globe, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { siteConfig } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';
import { SocialIcon, socialOrder } from './SocialIcons';

export default function Navbar({ onOpenConsultation, onOpenInstallModal }) {
  const { h, language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  const links = [
    { id: 'home', label: h.nav.home },
    { id: 'services', label: h.nav.services },
    { id: 'projects', label: h.nav.projects },
    { id: 'about', label: h.nav.about },
    { id: 'process', label: h.nav.process },
    { id: 'faq', label: h.nav.faq }
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      let current = 'home';
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (el && el.getBoundingClientRect().top <= 120) current = l.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Top bar */}
      <div
        className={`bg-ink-950 border-b border-white/5 transition-all duration-300 overflow-hidden ${
          scrolled ? 'max-h-0 opacity-0' : 'max-h-14 opacity-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-11 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenConsultation}
              className="px-3.5 py-1 rounded-full border border-white/20 text-white/90 text-xs font-semibold hover:bg-white/10 transition-colors"
            >
              {h.topBar.quote}
            </button>
            <button
              onClick={onOpenInstallModal}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-brand-300 text-xs font-semibold hover:text-white transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              {h.topBar.install}
            </button>
          </div>
          <div className="flex items-center gap-1.5">
            {socialOrder.map((s) => (
              <a
                key={s.key}
                href={siteConfig.socialLinks[s.key]}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.key}
                className={`w-7 h-7 rounded-full ${s.bg} text-white flex items-center justify-center hover:scale-110 transition-transform`}
              >
                <SocialIcon name={s.key} className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`transition-all duration-300 ${
          scrolled ? 'bg-ink-950/90 backdrop-blur-xl shadow-[0_10px_30px_-15px_rgba(0,0,0,0.6)]' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between gap-4">
          <a href="#home" className="flex items-center gap-2.5 shrink-0">
            <img src="/logo.jpeg" alt="BUILDORA" className="w-10 h-10 rounded-xl object-cover ring-1 ring-white/10" />
            <div className="leading-tight" dir="ltr">
              <div className="text-white font-extrabold tracking-wide text-lg">BUILDORA</div>
              <div className="text-[10px] text-brand-300 tracking-wider">Software &amp; Programming</div>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={`px-3.5 py-2 rounded-full text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                  active === l.id
                    ? 'bg-brand-500/15 text-white ring-1 ring-brand-500/40'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {active === l.id && <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />}
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Light mode' : 'Dark mode'}
              title={theme === 'dark' ? (language === 'ar' ? 'الوضع الفاتح' : 'Light mode') : language === 'ar' ? 'الوضع الداكن' : 'Dark mode'}
              className="w-9 h-9 rounded-full border border-white/15 text-white flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/15 text-white text-xs font-bold hover:bg-white/10 transition-colors"
            >
              <Globe className="w-3.5 h-3.5" />
              {language === 'ar' ? 'EN' : 'ع'}
            </button>
            <button onClick={onOpenConsultation} className="hidden md:inline-flex btn-primary !py-2.5 !px-5">
              {h.nav.cta}
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden w-10 h-10 rounded-full border border-white/15 text-white flex items-center justify-center"
              aria-label="menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden bg-ink-950/95 backdrop-blur-xl border-t border-white/5 px-4 pb-5 pt-2">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className={`block px-4 py-3 rounded-xl text-sm font-semibold ${
                  active === l.id ? 'bg-brand-500/15 text-white' : 'text-slate-300'
                }`}
              >
                {l.label}
              </a>
            ))}
            <div className="grid grid-cols-2 gap-2 mt-3">
              <button
                onClick={() => {
                  setOpen(false);
                  onOpenConsultation();
                }}
                className="btn-primary !py-3"
              >
                {h.nav.cta}
              </button>
              <button
                onClick={() => {
                  setOpen(false);
                  onOpenInstallModal();
                }}
                className="btn-ghost-dark !py-3"
              >
                <Download className="w-4 h-4" />
                {h.topBar.install}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
