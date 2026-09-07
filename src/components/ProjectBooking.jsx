import React, { useState, useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';
import confetti from 'canvas-confetti';
import { 
  Send, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  Building2, 
  User, 
  DollarSign,
  Copy, 
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function ProjectBooking({ preselectedService, prefilledReference }) {
  const { language, isRTL, t } = useLanguage();

  const [formData, setFormData] = useState({
    clientName: '',
    companyName: '',
    phoneNumber: '',
    whatsappNumber: '',
    email: '',
    country: language === 'ar' ? 'مصر' : 'Egypt',
    projectType: language === 'ar' ? 'موقع شركة احترافي' : 'Business Website',
    projectDescription: '',
    selectedFeatures: [],
    customFeatures: '',
    budget: language === 'ar' ? '10,000 – 20,000 جنيه مصري' : '10,000 – 20,000 EGP',
    preferredDeliveryDate: '',
    referenceWebsite: '',
    preferredContactMethod: 'WhatsApp'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [generatedMessage, setGeneratedMessage] = useState('');
  const [copied, setCopied] = useState(false);

  // Sync preselected service if passed
  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, projectType: preselectedService }));
    }
  }, [preselectedService]);

  // Sync prefilled reference if passed
  useEffect(() => {
    if (prefilledReference) {
      setFormData((prev) => ({
        ...prev,
        projectDescription: prev.projectDescription
          ? `${prev.projectDescription}\n\n${prefilledReference}`
          : prefilledReference
      }));
    }
  }, [prefilledReference]);

  const projectTypeOptions = language === 'ar' ? [
    'موقع شركة احترافي (Business Website)',
    'متجر إلكتروني متكامل (E-Commerce Store)',
    'نظام حجز ومواعيد ذكي (Booking System)',
    'منيو مطاعم رقمي بالـ QR (Restaurant Menu)',
    'نظام إدارة شركات مخصص (ERP / CRM)',
    'تطبيق ويب متقدم (Web Application)',
    'برمجية خاصة ومخصصة (Custom Software)',
    'تصميم واجهات وتجربة مستخدم (UI/UX Design)',
    'أخرى / استشارة مخصصة'
  ] : [
    'Business Website',
    'E-Commerce Store',
    'Booking System',
    'Restaurant Digital Menu',
    'Company Management System',
    'Web Application',
    'Custom Software',
    'UI/UX Design',
    'Other'
  ];

  const budgetOptions = language === 'ar' ? [
    'أقل من 5,000 جنيه مصري',
    '5,000 – 10,000 جنيه مصري',
    '10,000 – 20,000 جنيه مصري',
    '20,000 – 50,000 جنيه مصري',
    'أكثر من 50,000 جنيه مصري',
    'دعنا نناقش ذلك معاً'
  ] : [
    'Less than 5,000 EGP',
    '5,000 – 10,000 EGP',
    '10,000 – 20,000 EGP',
    '20,000 – 50,000 EGP',
    '50,000+ EGP',
    "Let's Discuss"
  ];

  const commonFeatures = language === 'ar' ? [
    'ربط فوري مع واتساب وإشعارات آلية',
    'بوابات دفع إلكتروني (Paymob / فوري / فيزا)',
    'لوحة تحكم وإدارة سهلة للمحتوى',
    'دعم اللغتين (العربية والإنجليزية)',
    'تهيئة وتوافق فائق مع الموبايل والتابلت',
    'تسجيل دخول وحسابات مستخدمين',
    'تهيئة لمحركات البحث وSEO ومشاركة السوشيال ميديا',
    'قاعدة بيانات سحابية ونسخ احتياطي تلقائي'
  ] : [
    'WhatsApp Instant CTA / Notifications',
    'Payment Gateway Integration (Paymob / Fawry)',
    'Admin Control Panel / Dashboard',
    'Multi-Language (Arabic & English)',
    'Mobile Responsive Optimization',
    'User Accounts & Authentication',
    'SEO & Social Share Setup',
    'Cloud Database & Automated Backups'
  ];

  const handleFeatureToggle = (feature) => {
    setFormData((prev) => {
      const exists = prev.selectedFeatures.includes(feature);
      const updated = exists
        ? prev.selectedFeatures.filter((f) => f !== feature)
        : [...prev.selectedFeatures, feature];
      return { ...prev, selectedFeatures: updated };
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === 'phoneNumber' && !formData.whatsappNumber) {
      setFormData((prev) => ({ ...prev, whatsappNumber: value }));
    }

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.clientName.trim() || formData.clientName.trim().length < 2) {
      newErrors.clientName = language === 'ar' ? 'يرجى إدخال اسمك بالكامل.' : 'Please enter your full name.';
    }

    if (!formData.phoneNumber.trim() || formData.phoneNumber.trim().length < 8) {
      newErrors.phoneNumber = language === 'ar' ? 'يرجى إدخال رقم هاتف صحيح.' : 'Please enter a valid phone number.';
    }

    if (!formData.whatsappNumber.trim()) {
      newErrors.whatsappNumber = language === 'ar' ? 'يرجى إدخال رقم الواتساب للتواصل.' : 'Please enter your WhatsApp number.';
    }

    if (!formData.email.trim() || !formData.email.includes('@')) {
      newErrors.email = language === 'ar' ? 'يرجى إدخال بريد إلكتروني صحيح.' : 'Please enter a valid email address.';
    }

    if (!formData.projectDescription.trim() || formData.projectDescription.trim().length < 10) {
      newErrors.projectDescription = language === 'ar' ? 'يرجى تقديم وصف لمشروعك (10 أحرف على الأقل).' : 'Please provide a brief description (min 10 characters).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formatWhatsAppMessage = () => {
    const combinedFeatures = [
      ...formData.selectedFeatures,
      ...(formData.customFeatures ? [formData.customFeatures] : [])
    ].join(', ');

    if (language === 'ar') {
      return `مرحباً بيلدورا (BUILDORA)،
أود طلب تنفيذ مشروع برمجي جديد.

👤 الاسم: ${formData.clientName}
🏢 الشركة: ${formData.companyName || 'غير محدد'}
📞 رقم الهاتف: ${formData.phoneNumber}
💬 رقم الواتساب: ${formData.whatsappNumber}
✉️ البريد الإلكتروني: ${formData.email}
🌍 الدولة: ${formData.country || 'مصر'}

🎯 نوع المشروع: ${formData.projectType}
📝 وصف المشروع المطلوب:
${formData.projectDescription}

⚡ الميزات والخصائص المطلوبة:
${combinedFeatures || 'الميزات القياسية المتكاملة'}

💰 الميزانية التقديرية: ${formData.budget}
📅 تاريخ التسليم المفضل: ${formData.preferredDeliveryDate || 'في أقرب وقت ممكن'}
🔗 موقع مرجعي: ${formData.referenceWebsite || 'لا يوجد'}
📱 طريقة التواصل المفضلة: ${formData.preferredContactMethod}

برجاء التواصل معي لمناقشة تفاصيل المشروع وتقديم عرض السعر.`;
    }

    return `Hello Buildora,
I would like to request a new project.

👤 Name: ${formData.clientName}
🏢 Company: ${formData.companyName || 'Not specified'}
📞 Phone: ${formData.phoneNumber}
💬 WhatsApp: ${formData.whatsappNumber}
✉️ Email: ${formData.email}
🌍 Country: ${formData.country || 'Egypt'}

🎯 Project Type: ${formData.projectType}
📝 Project Description: 
${formData.projectDescription}

⚡ Required Features: 
${combinedFeatures || 'Standard full features'}

💰 Estimated Budget: ${formData.budget}
📅 Preferred Delivery Date: ${formData.preferredDeliveryDate || 'As soon as possible'}
🔗 Reference Website: ${formData.referenceWebsite || 'None provided'}
📱 Preferred Contact Method: ${formData.preferredContactMethod}

Please contact me to discuss the project and provide a quote.`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      const firstErrorEl = document.querySelector('.form-error-field');
      if (firstErrorEl) {
        firstErrorEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitting(true);

    const message = formatWhatsAppMessage();
    setGeneratedMessage(message);

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {}

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(generatedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="booking" className="relative py-24 bg-[#070B14] overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-1/4 -right-[200px] w-[600px] h-[600px] bg-cyan-500/10 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -left-[200px] w-[600px] h-[600px] bg-blue-600/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.booking.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.booking.titlePrefix}
            <span className="text-gradient-cyan">{t.booking.titleHighlight}</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-400 mt-3 leading-relaxed">
            {t.booking.subtitle}
          </p>
        </div>

        {/* Project Request Card Container */}
        <div className="rounded-3xl glass-panel border border-cyan-500/25 p-6 sm:p-10 shadow-2xl relative overflow-hidden text-start">
          
          {/* Top Banner */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/20 mb-8 text-xs">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0" />
              <span className="text-slate-200">
                {t.booking.guarantee}
              </span>
            </div>
            <div className="font-mono text-cyan-400 flex items-center gap-1.5 shrink-0" dir="ltr">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{siteConfig.contact.phoneDisplay}</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Step 1: Contact & Client Information */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-wider pb-2 border-b border-slate-800">
                <User className="w-4 h-4" />
                <span>{t.booking.step1Title}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Client Name */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    {t.booking.nameLabel} <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="clientName"
                    value={formData.clientName}
                    onChange={handleInputChange}
                    placeholder={t.booking.namePlaceholder}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border ${
                      errors.clientName ? 'border-rose-500 form-error-field' : 'border-slate-800 focus:border-cyan-400'
                    } text-white placeholder-slate-500 text-sm focus:outline-none transition-colors`}
                  />
                  {errors.clientName && (
                    <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.clientName}
                    </p>
                  )}
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    {t.booking.companyLabel}
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder={t.booking.companyPlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-cyan-400 text-white placeholder-slate-500 text-sm focus:outline-none transition-colors"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    {t.booking.phoneLabel} <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder={t.booking.phonePlaceholder}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border ${
                      errors.phoneNumber ? 'border-rose-500 form-error-field' : 'border-slate-800 focus:border-cyan-400'
                    } text-white placeholder-slate-500 text-sm focus:outline-none transition-colors`}
                  />
                  {errors.phoneNumber && (
                    <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phoneNumber}
                    </p>
                  )}
                </div>

                {/* WhatsApp Number */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    {t.booking.whatsappLabel} <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="tel"
                    name="whatsappNumber"
                    value={formData.whatsappNumber}
                    onChange={handleInputChange}
                    placeholder={t.booking.whatsappPlaceholder}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border ${
                      errors.whatsappNumber ? 'border-rose-500 form-error-field' : 'border-slate-800 focus:border-cyan-400'
                    } text-white placeholder-slate-500 text-sm focus:outline-none transition-colors`}
                  />
                  {errors.whatsappNumber && (
                    <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.whatsappNumber}
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    {t.booking.emailLabel} <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t.booking.emailPlaceholder}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border ${
                      errors.email ? 'border-rose-500 form-error-field' : 'border-slate-800 focus:border-cyan-400'
                    } text-white placeholder-slate-500 text-sm focus:outline-none transition-colors`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>

                {/* Country */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    {t.booking.countryLabel}
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    placeholder={t.booking.countryPlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-cyan-400 text-white placeholder-slate-500 text-sm focus:outline-none transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Project Specifications */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-wider pb-2 border-b border-slate-800">
                <Building2 className="w-4 h-4" />
                <span>{t.booking.step2Title}</span>
              </div>

              {/* Project Type Dropdown */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  {t.booking.projectTypeLabel} <span className="text-rose-400">*</span>
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-400 text-white text-sm focus:outline-none transition-colors cursor-pointer"
                >
                  {projectTypeOptions.map((type) => (
                    <option key={type} value={type} className="bg-slate-950 text-white">
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Project Description */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  {t.booking.descriptionLabel} <span className="text-rose-400">*</span>
                </label>
                <textarea
                  name="projectDescription"
                  rows={4}
                  value={formData.projectDescription}
                  onChange={handleInputChange}
                  placeholder={t.booking.descriptionPlaceholder}
                  className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border ${
                    errors.projectDescription ? 'border-rose-500 form-error-field' : 'border-slate-800 focus:border-cyan-400'
                  } text-white placeholder-slate-500 text-sm focus:outline-none transition-colors`}
                />
                {errors.projectDescription && (
                  <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.projectDescription}
                  </p>
                )}
              </div>

              {/* Required Features Selectors */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-2">
                  {t.booking.featuresLabel}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {commonFeatures.map((feat) => {
                    const isChecked = formData.selectedFeatures.includes(feat);
                    return (
                      <div
                        key={feat}
                        onClick={() => handleFeatureToggle(feat)}
                        className={`cursor-pointer p-2.5 rounded-xl border text-xs flex items-center gap-2.5 transition-all ${
                          isChecked
                            ? 'bg-cyan-500/15 border-cyan-500/40 text-cyan-200'
                            : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-300'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                          isChecked ? 'bg-cyan-400 border-cyan-400 text-black' : 'border-slate-700'
                        }`}>
                          {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                        </div>
                        <span className="truncate">{feat}</span>
                      </div>
                    );
                  })}
                </div>

                <input
                  type="text"
                  name="customFeatures"
                  value={formData.customFeatures}
                  onChange={handleInputChange}
                  placeholder={t.booking.customFeaturesPlaceholder}
                  className="w-full mt-2 px-4 py-2.5 rounded-xl bg-slate-900/60 border border-slate-800 focus:border-cyan-400 text-white placeholder-slate-500 text-xs focus:outline-none"
                />
              </div>

            </div>

            {/* Step 3: Budget, Timeline & References */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-wider pb-2 border-b border-slate-800">
                <DollarSign className="w-4 h-4" />
                <span>{t.booking.step3Title}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Budget Range Dropdown */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    {t.booking.budgetLabel} <span className="text-rose-400">*</span>
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-400 text-white text-sm focus:outline-none transition-colors cursor-pointer"
                  >
                    {budgetOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-slate-950 text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Preferred Delivery Date */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    {t.booking.deliveryDateLabel}
                  </label>
                  <input
                    type="date"
                    name="preferredDeliveryDate"
                    value={formData.preferredDeliveryDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-400 text-white text-sm focus:outline-none transition-colors"
                  />
                </div>

                {/* Reference Website URL */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    {t.booking.refUrlLabel}
                  </label>
                  <input
                    type="url"
                    name="referenceWebsite"
                    value={formData.referenceWebsite}
                    onChange={handleInputChange}
                    placeholder={t.booking.refUrlPlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-400 text-white placeholder-slate-500 text-sm focus:outline-none transition-colors"
                  />
                </div>

                {/* Preferred Contact Method */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    {t.booking.contactMethodLabel}
                  </label>
                  <select
                    name="preferredContactMethod"
                    value={formData.preferredContactMethod}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-400 text-white text-sm focus:outline-none transition-colors cursor-pointer"
                  >
                    <option value="WhatsApp" className="bg-slate-950">{t.booking.contactWhatsApp}</option>
                    <option value="Phone Call" className="bg-slate-950">{t.booking.contactPhone}</option>
                    <option value="Email" className="bg-slate-950">{t.booking.contactEmail}</option>
                  </select>
                </div>

              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-2xl font-extrabold text-sm text-black bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:shadow-glow-cyan active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <WhatsAppIcon className="w-5 h-5 text-black" />
                <span>{t.booking.btnSubmit}</span>
                <Send className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="text-center text-[11px] text-slate-400 mt-3 flex items-center justify-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>{t.booking.securityNote}</span>
              </div>
            </div>

          </form>

        </div>

      </div>

      {/* Post-Submission Success / Fallback Modal */}
      {isSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-lg rounded-3xl glass-panel border border-cyan-500/40 p-6 sm:p-8 shadow-2xl text-center animate-in zoom-in-95">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-extrabold text-white">
              {t.booking.successTitle}
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              {t.booking.successDesc}
            </p>

            {/* Quick Action Buttons */}
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(generatedMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-emerald-400 to-teal-500 hover:shadow-lg flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4 text-black" />
                <span>{t.booking.btnOpenWhatsApp}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={handleCopyMessage}
                className="w-full py-3 px-4 rounded-xl text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-700 hover:bg-slate-800 flex items-center justify-center gap-2 transition-colors"
              >
                <Copy className="w-4 h-4 text-cyan-400" />
                <span>{copied ? t.booking.btnCopied : t.booking.btnCopyText}</span>
              </button>

              <button
                onClick={() => setIsSuccess(false)}
                className="text-xs text-slate-400 hover:text-white pt-2"
              >
                {t.booking.btnBack}
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
