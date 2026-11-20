import React, { useState } from 'react';
import { servicesData } from '../data/servicesData';
import { useLanguage } from '../context/LanguageContext';
import {
  Globe, ShoppingBag, Cpu, CalendarCheck, QrCode, LayoutDashboard, Layers, Code2, Palette, ArrowLeft, ArrowRight
} from 'lucide-react';
import ServiceModal from './ServiceModal';

const iconMap = { Globe, ShoppingBag, Cpu, CalendarCheck, QrCode, LayoutDashboard, Layers, Code2, Palette };

const iconTints = [
  'from-brand-500 to-brand-cyan',
  'from-indigo-500 to-brand-500',
  'from-ink-800 to-brand-600',
  'from-sky-500 to-brand-600',
  'from-brand-600 to-indigo-600',
  'from-cyan-500 to-brand-500',
  'from-brand-500 to-sky-400',
  'from-ink-700 to-brand-500',
  'from-indigo-500 to-brand-cyan'
];

export default function Services({ onSelectServiceForBooking }) {
  const [selectedService, setSelectedService] = useState(null);
  const { language, isRTL, t, h } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const services =
    language === 'ar' && t.services.items?.length
      ? t.services.items.map((ar, i) => ({ ...servicesData[i], ...ar }))
      : servicesData;

  return (
    <section id="services" className="relative py-20 lg:py-24 bg-[#F4F6FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">{h.services.title}</h2>
          <div className="mx-auto mt-3 w-14 h-1 rounded-full bg-brand-500" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((s, i) => {
            const Icon = iconMap[s.iconName] || Globe;
            return (
              <div key={s.id} className="light-card light-card-hover p-7 text-center flex flex-col items-center group">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${iconTints[i % iconTints.length]} p-[2px] mb-5`}>
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    <Icon className="w-7 h-7 text-brand-600 group-hover:scale-110 transition-transform" />
                  </div>
                </div>
                <h3 className="text-lg font-extrabold text-ink-900">{s.title}</h3>
                <p className="mt-3 text-sm text-slate-500 leading-relaxed flex-1">{s.shortDescription}</p>
                <button onClick={() => setSelectedService(s)} className="pill-more mt-5">
                  {h.services.more}
                  <Arrow className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <ServiceModal
        service={selectedService}
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        onRequestService={(title) => {
          setSelectedService(null);
          onSelectServiceForBooking(title);
        }}
      />
    </section>
  );
}
