import React, { useState } from 'react';
import { servicesData } from '../data/servicesData';
import { useLanguage } from '../context/LanguageContext';
import { 
  Globe, 
  ShoppingBag, 
  Cpu, 
  CalendarCheck, 
  QrCode, 
  LayoutDashboard, 
  Layers, 
  Code2, 
  Palette, 
  ArrowRight, 
  ArrowLeft,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import ServiceModal from './ServiceModal';

const iconMap = {
  Globe,
  ShoppingBag,
  Cpu,
  CalendarCheck,
  QrCode,
  LayoutDashboard,
  Layers,
  Code2,
  Palette
};

export default function Services({ onSelectServiceForBooking }) {
  const [selectedService, setSelectedService] = useState(null);
  const { language, isRTL, t } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  // Merge base service data with language translations
  const activeServices = language === 'ar' && t.services.items && t.services.items.length > 0
    ? t.services.items.map((arItem, idx) => ({
        ...servicesData[idx],
        ...arItem
      }))
    : servicesData;

  const handleOpenModal = (service) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  const handleRequestFromModal = (serviceTitle) => {
    handleCloseModal();
    onSelectServiceForBooking(serviceTitle);
  };

  return (
    <section id="services" className="relative py-24 bg-[#050811] overflow-hidden">
      {/* Background glow pools */}
      <div className="absolute top-1/4 -left-[200px] w-[600px] h-[600px] bg-cyan-500/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-[200px] w-[600px] h-[600px] bg-indigo-600/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.services.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.services.titlePrefix}
            <span className="text-gradient-cyan">{t.services.titleHighlight}</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-400 mt-4 leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* 9 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {activeServices.map((service) => {
            const Icon = iconMap[service.iconName] || Code2;

            return (
              <div
                key={service.id}
                className="group relative rounded-2xl glass-card glass-card-hover p-6 sm:p-7 flex flex-col justify-between border border-cyan-500/15 overflow-hidden transition-all duration-300 text-start"
              >
                {/* Subtle top gradient accent on hover */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} opacity-40 group-hover:opacity-100 transition-opacity`} />

                <div>
                  {/* Icon & Category Tag Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-900/80 border border-slate-700/80 group-hover:border-cyan-400/50 flex items-center justify-center text-cyan-400 group-hover:text-cyan-300 group-hover:scale-105 transition-all duration-300 shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-[11px] font-mono text-cyan-300/80 bg-cyan-950/60 border border-cyan-500/20 px-2.5 py-0.5 rounded-full">
                      {service.categoryTag}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* 3 Quick Highlight Features */}
                  <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-2">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => handleOpenModal(service)}
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group-hover:underline focus:outline-none"
                  >
                    <span>{t.services.btnLearnMore}</span>
                    <ArrowIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => onSelectServiceForBooking(service.title)}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/40 transition-colors"
                  >
                    {t.services.btnGetQuote}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Bottom Banner Callout */}
        <div className="mt-16 p-8 rounded-2xl glass-card border border-cyan-500/25 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-start">
          <div>
            <h3 className="text-xl font-bold text-white">{t.services.customBannerTitle}</h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              {t.services.customBannerDesc}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#booking"
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-cyan-400 to-blue-500 hover:shadow-glow-cyan transition-all"
            >
              {t.services.btnDiscussCustom}
            </a>
          </div>
        </div>

      </div>

      {/* Service Deep-Dive Specification Modal */}
      <ServiceModal
        service={selectedService}
        isOpen={!!selectedService}
        onClose={handleCloseModal}
        onRequestService={handleRequestFromModal}
      />
    </section>
  );
}
