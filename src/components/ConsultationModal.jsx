import React, { useState, useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';
import { 
  X, 
  Calendar, 
  Send, 
  Sparkles
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import confetti from 'canvas-confetti';

export default function ConsultationModal({ isOpen, onClose }) {
  const { language, isRTL, t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: language === 'ar' ? 'تطوير مواقع الويب' : 'Website Development',
    preferredDate: '',
    preferredTime: language === 'ar' ? 'ظهراً (1:00 م – 5:00 م)' : 'Afternoon (1:00 PM – 5:00 PM)',
    description: ''
  });

  const [errors, setErrors] = useState({});

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

  if (!isOpen) return null;

  const servicesList = language === 'ar' ? [
    'تطوير مواقع الويب (Websites)',
    'تطوير المتاجر الإلكترونية (E-Commerce)',
    'أنظمة إدارة الشركات (ERP / CRM)',
    'أنظمة الحجز والمواعيد (Booking)',
    'منيو مطاعم رقمي بالـ QR',
    'لوحات التحكم وإدارة البيانات',
    'تطبيقات الويب السحابية (Web Apps)',
    'برمجيات مخصصة (Custom Software)',
    'تصميم UI/UX',
    'استشارة استراتيجية عامة'
  ] : [
    'Website Development',
    'E-Commerce Development',
    'Custom Business Systems',
    'Booking Systems',
    'Restaurant Digital Menus',
    'Admin Dashboards',
    'Web Applications',
    'Software Development',
    'UI/UX Design',
    'Technical Strategy Consultation'
  ];

  const timeSlots = language === 'ar' ? [
    t.consultation.timeMorning,
    t.consultation.timeAfternoon,
    t.consultation.timeEvening,
    t.consultation.timeAny
  ] : [
    'Morning (10:00 AM – 1:00 PM)',
    'Afternoon (1:00 PM – 5:00 PM)',
    'Evening (5:00 PM – 8:00 PM)',
    'Anytime'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = language === 'ar' ? 'يرجى إدخال اسمك.' : 'Please enter your name.';
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 8) {
      newErrors.phone = language === 'ar' ? 'يرجى إدخال رقم هاتف أو واتساب صحيح.' : 'Please enter a valid phone or WhatsApp number.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      confetti({ particleCount: 70, spread: 60, origin: { y: 0.5 } });
    } catch (e) {}

    const message = language === 'ar' ? 
`مرحباً بيلدورا (BUILDORA)،
أود حجز جلسة استشارة مجانية لمشروعي.

👤 الاسم: ${formData.name}
📞 الهاتف / الواتساب: ${formData.phone}
🎯 الخدمة المهتم بها: ${formData.service}
📅 التاريخ المفضل: ${formData.preferredDate || 'في أقرب موعد متاح'}
⏰ الوقت المفضل للتواصل: ${formData.preferredTime}
📝 نبذة عن المشروع: ${formData.description || 'مناقشة التفاصيل خلال الاتصال'}

برجاء تأكيد موعد الاستشارة.`
    :
`Hello Buildora,
I would like to book a Free Consultation session.

👤 Name: ${formData.name}
📞 Phone / WhatsApp: ${formData.phone}
🎯 Interested Service: ${formData.service}
📅 Preferred Date: ${formData.preferredDate || 'Flexible / Next Available'}
⏰ Preferred Time: ${formData.preferredTime}
📝 Brief Project Overview: ${formData.description || 'Discuss during call'}

Please confirm our consultation slot.`;

    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encoded}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg rounded-3xl glass-panel border border-cyan-500/30 p-6 sm:p-8 shadow-2xl shadow-cyan-950/50 my-8 z-10 animate-in zoom-in-95 text-start">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-5 ${isRTL ? 'left-5' : 'right-5'} p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 transition-colors`}
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
            <Calendar className="w-6 h-6" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] font-mono text-cyan-400 uppercase tracking-wider">
              <Sparkles className="w-3 h-3" />
              <span>{t.consultation.badge}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              {t.consultation.title}
            </h3>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block text-slate-300 font-medium mb-1">
              {t.consultation.nameLabel} <span className="text-rose-400">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t.consultation.namePlaceholder}
              className={`w-full px-4 py-2.5 rounded-xl bg-slate-900 border ${
                errors.name ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-400'
              } text-white text-sm focus:outline-none`}
            />
            {errors.name && <p className="text-rose-400 text-[10px] mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-slate-300 font-medium mb-1">
              {t.consultation.phoneLabel} <span className="text-rose-400">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. 01157554462"
              className={`w-full px-4 py-2.5 rounded-xl bg-slate-900 border ${
                errors.phone ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-400'
              } text-white text-sm focus:outline-none`}
            />
            {errors.phone && <p className="text-rose-400 text-[10px] mt-1">{errors.phone}</p>}
          </div>

          <div>
            <label className="block text-slate-300 font-medium mb-1">
              {t.consultation.serviceLabel}
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-400 text-white text-sm focus:outline-none cursor-pointer"
            >
              {servicesList.map((s) => (
                <option key={s} value={s} className="bg-slate-950">
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-300 font-medium mb-1">
                {t.consultation.dateLabel}
              </label>
              <input
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-400 text-white text-sm focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-medium mb-1">
                {t.consultation.timeLabel}
              </label>
              <select
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-400 text-white text-sm focus:outline-none cursor-pointer"
              >
                {timeSlots.map((tItem) => (
                  <option key={tItem} value={tItem} className="bg-slate-950">
                    {tItem}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-slate-300 font-medium mb-1">
              {t.consultation.descLabel}
            </label>
            <textarea
              name="description"
              rows={3}
              value={formData.description}
              onChange={handleChange}
              placeholder={language === 'ar' ? 'نبذة مختصرة عن فكرة مشروعك...' : 'Brief summary of what your business needs...'}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-400 text-white text-sm focus:outline-none"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3 px-5 rounded-xl font-bold text-xs text-black bg-gradient-to-r from-cyan-400 to-blue-500 hover:shadow-glow-cyan transition-all flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 text-black" />
              <span>{t.consultation.btnConfirm}</span>
              <Send className="w-3.5 h-3.5 text-black" />
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
