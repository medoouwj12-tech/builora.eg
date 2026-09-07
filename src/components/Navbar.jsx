import React, { useState, useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';
import { 
  Menu, 
  X, 
  ArrowRight, 
  ArrowLeft,
  Sparkles,
  Calendar,
  Globe
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Navbar({ onOpenConsultation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { language, toggleLanguage, isRTL, t } = useLanguage();

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = siteConfig.navLinks.map(l => l.href.replace('#', ''));
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItemLabels = {
    home: t.nav.home,
    about: t.nav.about,
    services: t.nav.services,
    projects: t.nav.projects,
    process: t.nav.process,
    'why-us': t.nav.whyUs,
    testimonials: t.nav.testimonials,
    faq: t.nav.faq,
    contact: t.nav.contact
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070B14]/85 backdrop-blur-xl border-b border-cyan-500/15 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 via-blue-600/20 to-indigo-600/20 border border-cyan-400/30 group-hover:border-cyan-400 transition-all duration-300 shadow-glow-cyan/20">
              <img 
                src="/logo.jpeg" 
                alt="BUILDORA Logo" 
                className="w-8 h-8 rounded-lg object-contain transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-cyan-400 rounded-full animate-ping opacity-75" />
            </div>

            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-wider text-white font-sans flex items-center gap-1">
                BUILDORA
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block animate-pulse" />
              </span>
              <span className="text-[9px] font-mono tracking-widest text-cyan-400/90 uppercase -mt-0.5">
                {t.nav.softwareSubtitle}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-4 py-1.5 rounded-full bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
            {siteConfig.navLinks.map((link) => {
              const sectionKey = link.href.replace('#', '');
              const label = navItemLabels[sectionKey] || link.label;
              const isActive = activeSection === sectionKey;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 text-xs xl:text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-cyan-300 bg-cyan-500/15 border border-cyan-500/30 shadow-sm shadow-cyan-500/20'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {label}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Bilingual Language Switcher Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-cyan-300 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-400/50 transition-all duration-200 shadow-sm"
              title={language === 'ar' ? 'Switch to English' : 'التحويل للغة العربية'}
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span>{language === 'ar' ? 'English' : 'عربي'}</span>
            </button>

            {/* Consultation Quick Button */}
            <button
              onClick={onOpenConsultation}
              className="hidden md:flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/60 border border-transparent hover:border-slate-700/80 transition-all duration-200"
              title={t.nav.freeConsultation}
            >
              <Calendar className="w-3.5 h-3.5 text-cyan-400" />
              <span>{t.nav.freeConsultation}</span>
            </button>

            {/* Direct WhatsApp Callout */}
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all duration-200 shadow-sm"
              title="WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4" />
            </a>

            {/* Main Primary CTA: Start Your Project */}
            <a
              href="#booking"
              className="relative group overflow-hidden px-4 py-2 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:shadow-glow-cyan transition-all duration-300 active:scale-95 flex items-center gap-1.5"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.nav.startProject}</span>
                <ArrowIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </a>
          </div>

          {/* Mobile Menu Toggle & Language Switcher */}
          <div className="flex items-center sm:hidden gap-2">
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1.5 rounded-lg text-xs font-bold text-cyan-300 bg-slate-900 border border-slate-800 flex items-center gap-1"
            >
              <Globe className="w-3 h-3 text-cyan-400" />
              <span>{language === 'ar' ? 'EN' : 'عربي'}</span>
            </button>

            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400"
            >
              <WhatsAppIcon className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white bg-slate-900/80 border border-slate-800"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Animated Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden fixed inset-x-0 top-[65px] bg-[#070B14]/95 backdrop-blur-2xl border-b border-cyan-500/20 px-6 py-6 transition-all duration-300 shadow-2xl max-h-[calc(100vh-70px)] overflow-y-auto">
          <div className="flex flex-col space-y-3">
            {siteConfig.navLinks.map((link) => {
              const sectionKey = link.href.replace('#', '');
              const label = navItemLabels[sectionKey] || link.label;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 text-sm font-medium text-slate-200 hover:text-cyan-300 hover:bg-slate-800/60 rounded-xl transition-colors flex items-center justify-between"
                >
                  <span>{label}</span>
                  <ArrowIcon className="w-3.5 h-3.5 text-slate-500" />
                </a>
              );
            })}

            <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  toggleLanguage();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 rounded-xl"
              >
                <Globe className="w-4 h-4 text-cyan-400" />
                <span>{language === 'ar' ? 'Switch to English' : 'التحويل للغة العربية'}</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-700/60 rounded-xl hover:bg-slate-800"
              >
                <Calendar className="w-4 h-4 text-cyan-400" />
                <span>{t.nav.freeConsultation}</span>
              </button>

              <a
                href="#booking"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-black bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl shadow-glow-cyan/50"
              >
                <Sparkles className="w-4 h-4" />
                <span>{t.nav.startProject}</span>
              </a>

              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 rounded-xl"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>{t.nav.talkWhatsApp} ({siteConfig.contact.phoneDisplay})</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
