import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';
import { 
  Phone, 
  Mail, 
  ArrowUp
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Footer() {
  const { language, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#03060D] border-t border-cyan-500/15 pt-16 pb-12 overflow-hidden text-xs text-start">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-cyan-600/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="flex items-center gap-3 group focus:outline-none">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                <img 
                  src="/logo.jpeg" 
                  alt="BUILDORA" 
                  className="w-8 h-8 rounded-lg object-contain"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-wider text-white font-sans flex items-center gap-1">
                  BUILDORA
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                </span>
                <span className="text-[9px] font-mono tracking-widest text-cyan-400 block uppercase">
                  {t.nav.softwareSubtitle}
                </span>
              </div>
            </a>

            <p className="text-slate-400 leading-relaxed text-xs max-w-sm">
              {t.footer.desc}
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono" dir="ltr">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>HOTLINE: {siteConfig.contact.phoneDisplay}</span>
              </span>
            </div>
          </div>

          {/* Column 2: Company Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">{t.footer.colCompany}</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#home" className="hover:text-cyan-400 transition-colors">{t.nav.home}</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">{t.nav.about}</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">{t.nav.projects}</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">{t.nav.services}</a></li>
              <li><a href="#process" className="hover:text-cyan-400 transition-colors">{t.nav.process}</a></li>
              <li><a href="#why-us" className="hover:text-cyan-400 transition-colors">{t.nav.whyUs}</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors">{t.nav.contact}</a></li>
            </ul>
          </div>

          {/* Column 3: Core Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">{t.footer.colServices}</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">{language === 'ar' ? 'تطوير مواقع الويب' : 'Website Development'}</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">{language === 'ar' ? 'المتاجر الإلكترونية' : 'E-Commerce Development'}</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">{language === 'ar' ? 'أنظمة إدارة الشركات' : 'Custom Business Systems'}</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">{language === 'ar' ? 'أنظمة الحجز والمواعيد' : 'Booking Systems'}</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">{language === 'ar' ? 'قوائم الطعام الرقمية QR' : 'Restaurant Digital Menus'}</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">{language === 'ar' ? 'لوحات التحكم والبيانات' : 'Admin Dashboards'}</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">{language === 'ar' ? 'تطبيقات الويب السحابية' : 'Web Applications & SaaS'}</a></li>
            </ul>
          </div>

          {/* Column 4: Contact & Socials (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">{t.footer.colChannels}</h4>
            
            <div className="space-y-2 text-slate-300">
              <a 
                href={siteConfig.contact.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                dir="ltr"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span>WhatsApp: {siteConfig.contact.phoneDisplay}</span>
              </a>

              <a 
                href={`tel:${siteConfig.contact.phoneTel}`}
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
                dir="ltr"
              >
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Call: {siteConfig.contact.phoneDisplay}</span>
              </a>

              <a 
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
                dir="ltr"
              >
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{siteConfig.contact.email}</span>
              </a>
            </div>

            {/* Social Media Links */}
            <div className="pt-2">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">{t.footer.socialTitle}</div>
              <div className="flex items-center gap-2">
                <a
                  href={siteConfig.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                >
                  Facebook
                </a>
                <a
                  href={siteConfig.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                >
                  Instagram
                </a>
                <a
                  href={siteConfig.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href={siteConfig.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-xs">
          <div>
            © {new Date().getFullYear()} <strong className="text-slate-400">{siteConfig.companyName}</strong>. {t.footer.copyright}
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-800 transition-colors"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
