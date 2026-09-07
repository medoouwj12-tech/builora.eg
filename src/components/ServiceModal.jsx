import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  X, 
  CheckCircle, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft,
  Layers, 
  Cpu, 
  PackageCheck
} from 'lucide-react';

export default function ServiceModal({ service, isOpen, onClose, onRequestService }) {
  const { language, isRTL, t } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !service) return null;

  const labels = language === 'ar' ? {
    featuresTitle: "القدرات والميزات البرمجية",
    deliverablesTitle: "المخرجات التي تستلمها (Deliverables)",
    techStackTitle: "التقنيات المستخدمة:",
    idealForTitle: "مثالي لـ:",
    footerNote: "هل أنت جاهز لبدء هذا المشروع؟ نحن نقدم عروض أسعار تفصيلية ومراحل تسليم واضحة.",
    btnClose: "إغلاق",
    btnRequest: "طلب هذه الخدمة"
  } : {
    featuresTitle: "Core Capabilities & Features",
    deliverablesTitle: "What You Receive (Deliverables)",
    techStackTitle: "Target Tech Stack:",
    idealForTitle: "Ideal For:",
    footerNote: "Ready to build this? We offer transparent scopes and milestones.",
    btnClose: "Close",
    btnRequest: "Request This Service"
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity" 
        onClick={onClose} 
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl rounded-3xl glass-panel border border-cyan-500/30 p-6 sm:p-8 shadow-2xl shadow-cyan-950/50 my-8 z-10 animate-in fade-in zoom-in-95 duration-200 text-start">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-5 ${isRTL ? 'left-5' : 'right-5'} p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 transition-colors`}
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shrink-0">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-[11px] font-mono mb-1.5">
              {service.categoryTag}
            </div>
            <h3 className="text-2xl font-extrabold text-white">{service.title}</h3>
            <p className="text-sm text-slate-300 mt-1 leading-relaxed">{service.shortDescription}</p>
          </div>
        </div>

        {/* Two-Column Grid: Features & Deliverables */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          
          {/* Column 1: Key Features */}
          <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800">
            <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-wider mb-3">
              <Cpu className="w-4 h-4" />
              <span>{labels.featuresTitle}</span>
            </div>
            <ul className="space-y-2.5">
              {service.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Tangible Deliverables */}
          <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800">
            <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-wider mb-3">
              <PackageCheck className="w-4 h-4" />
              <span>{labels.deliverablesTitle}</span>
            </div>
            <ul className="space-y-2.5">
              {service.deliverables.map((deliv, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                  <span>{deliv}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Technologies & Recommended For */}
        <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-3 mb-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-400">{labels.techStackTitle}</span>
            {service.technologies.map((tech, idx) => (
              <span key={idx} className="px-2 py-0.5 rounded-md bg-slate-800 text-cyan-300 text-[11px] font-mono border border-slate-700">
                {tech}
              </span>
            ))}
          </div>

          <div className="text-xs text-slate-400">
            <span className="font-bold text-slate-300">{labels.idealForTitle} </span>
            {service.recommendedFor}
          </div>
        </div>

        {/* Bottom CTA Action Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
          <div className="text-xs text-slate-400 text-center sm:text-start">
            {labels.footerNote}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors w-full sm:w-auto"
            >
              {labels.btnClose}
            </button>
            <button
              onClick={() => onRequestService(service.title)}
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-cyan-400 to-blue-500 hover:shadow-glow-cyan transition-all flex items-center justify-center gap-1.5 w-full sm:w-auto"
            >
              <span>{labels.btnRequest}</span>
              <ArrowIcon className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
