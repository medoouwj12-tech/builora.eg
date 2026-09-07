import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';
import WhatsAppIcon from './WhatsAppIcon';

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);
  const { isRTL, t } = useLanguage();

  return (
    <aside 
      aria-label="WhatsApp Quick Support" 
      className={`fixed bottom-6 ${isRTL ? 'left-6' : 'right-6'} z-40 flex items-center group`}
    >
      {/* Tooltip Pill */}
      <div 
        className={`hidden sm:flex items-center ${isRTL ? 'ml-3' : 'mr-3'} px-3.5 py-2 rounded-xl bg-slate-950/95 border border-emerald-500/40 text-emerald-300 text-xs font-semibold backdrop-blur-md shadow-2xl transition-all duration-200 group-hover:scale-105`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse mx-1.5" />
        <span>
          {isHovered ? t.floatingWhatsApp.hoverText : t.floatingWhatsApp.defaultText}
        </span>
      </div>

      {/* Main Floating Button with Authentic WhatsApp Logo */}
      <a
        href={siteConfig.contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl shadow-emerald-950/80 hover:shadow-emerald-400/50 hover:scale-110 active:scale-95 transition-all duration-300 group"
        title={t.floatingWhatsApp.defaultText}
        aria-label={t.floatingWhatsApp.defaultText}
      >
        {/* Pulsing Beacon Ring */}
        <span className="absolute -inset-1.5 rounded-full bg-[#25D366]/40 animate-ping -z-10 opacity-75" />
        <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300 border-2 border-[#070B14]" />
        </span>

        {/* Official WhatsApp Icon */}
        <WhatsAppIcon className="w-7 h-7 text-white fill-white drop-shadow-sm" />
      </a>
    </aside>
  );
}
