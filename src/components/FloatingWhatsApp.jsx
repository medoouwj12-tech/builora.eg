import React, { useState, useEffect } from 'react';
import { Phone, X } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';
import WhatsAppIcon from './WhatsAppIcon';

export default function FloatingWhatsApp() {
  const { h } = useLanguage();
  const [toast, setToast] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setToast(true), 4000);
    return () => clearTimeout(id);
  }, []);

  return (
    <div className="fixed bottom-5 start-5 z-40 flex flex-col items-start gap-3" dir="ltr">
      <a
        href={`tel:${siteConfig.contact.phoneTel}`}
        aria-label="Call"
        className="relative w-12 h-12 rounded-full bg-white text-brand-600 shadow-xl ring-1 ring-slate-200 flex items-center justify-center hover:scale-105 transition-transform"
      >
        <Phone className="w-5 h-5" />
        <span className="absolute top-0 right-0 w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-white" />
      </a>
      <div className="flex items-center gap-2">
        <a
          href={siteConfig.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="relative w-14 h-14 rounded-full shadow-xl hover:scale-105 transition-transform"
        >
          <WhatsAppIcon variant="filled" className="w-14 h-14" />
          <span className="absolute top-0.5 right-0.5 w-3 h-3 rounded-full bg-emerald-400 ring-2 ring-white animate-pulse" />
        </a>
        {toast && (
          <div className="relative bg-white rounded-xl shadow-xl ring-1 ring-slate-200 ps-3 pe-8 py-2 max-w-[220px]">
            <button
              onClick={() => setToast(false)}
              className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center"
              aria-label="close"
            >
              <X className="w-3 h-3" />
            </button>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              {h.floating.online}
            </span>
            <p className="mt-1 text-xs font-semibold text-slate-700" dir="auto">{h.floating.msg}</p>
          </div>
        )}
      </div>
    </div>
  );
}
