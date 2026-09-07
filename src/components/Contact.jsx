import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import { useLanguage } from '../context/LanguageContext';
import { 
  Phone, 
  Mail, 
  Clock, 
  Sparkles, 
  Send, 
  ArrowRight, 
  ArrowLeft
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Contact() {
  const [quickMsg, setQuickMsg] = useState({ name: '', phone: '', message: '' });
  const { language, isRTL, t } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const handleQuickSubmit = (e) => {
    e.preventDefault();
    if (!quickMsg.name || !quickMsg.phone) return;

    const formatted = language === 'ar' ?
`مرحباً بيلدورا (BUILDORA)،
رسالة استفسار سريعة من الموقع:
👤 الاسم: ${quickMsg.name}
📞 الهاتف: ${quickMsg.phone}
💬 الرسالة: ${quickMsg.message || 'أرغب في التحدث مع فريقكم بخصوص مشروعي.'}`
    :
`Hello Buildora,
Quick Inquiry from Website:
👤 Name: ${quickMsg.name}
📞 Phone: ${quickMsg.phone}
💬 Message: ${quickMsg.message || 'I would like to speak with your team.'}`;

    const url = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(formatted)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="relative py-24 bg-[#050811] overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[500px] bg-cyan-600/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.contact.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.contact.titlePrefix}
            <span className="text-gradient-cyan">{t.contact.titleHighlight}</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-400 mt-4 leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-start">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Main Company Card */}
            <div className="p-8 rounded-3xl glass-card border border-cyan-500/25 space-y-6">
              <div>
                <div className="text-2xl font-extrabold text-white flex items-center gap-2">
                  <span>{siteConfig.companyName}</span>
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                </div>
                <div className="text-xs font-mono text-cyan-400 mt-0.5 tracking-wider">
                  {t.nav.softwareSubtitle}
                </div>
                <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                  {language === 'ar' 
                    ? "نبني تجارب رقمية تصنع الفارق للشركات الطموحة. برمجيات مفصلة، ومواقع سريعة، وبنية سحابية قوية."
                    : "Building digital experiences that matter. Tailor-made software, responsive websites, and enterprise cloud solutions."}
                </p>
              </div>

              {/* Direct Channels */}
              <div className="space-y-4 pt-4 border-t border-slate-800">
                {/* Phone */}
                <a
                  href={`tel:${siteConfig.contact.phoneTel}`}
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-900/80 hover:bg-slate-800/80 border border-slate-800 hover:border-cyan-500/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">{t.contact.callLabel}</div>
                    <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors" dir="ltr">
                      {siteConfig.contact.phoneDisplay}
                    </div>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-emerald-950/30 hover:bg-emerald-950/50 border border-emerald-500/30 hover:border-emerald-400 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                    <WhatsAppIcon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] font-mono text-emerald-400 uppercase">{t.contact.whatsappLabel}</div>
                    <div className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors" dir="ltr">
                      +201007466197
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-900/40 px-2 py-0.5 rounded border border-emerald-500/30">
                    {t.contact.onlineBadge}
                  </span>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-900/80 hover:bg-slate-800/80 border border-slate-800 hover:border-cyan-500/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">{t.contact.emailLabel}</div>
                    <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors" dir="ltr">
                      {siteConfig.contact.email}
                    </div>
                  </div>
                </a>

                {/* Working Hours */}
                <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-900/40 border border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">{t.contact.hoursLabel}</div>
                    <div className="text-xs text-slate-300">
                      {language === 'ar' ? 'السبت – الخميس: 10:00 صباحاً – 8:00 مساءً (توقيت القاهرة)' : siteConfig.contact.workingHours}
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Fast WhatsApp Message Box */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl glass-panel border border-cyan-500/25 shadow-2xl">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white">{t.contact.quickFormTitle}</h3>
                <p className="text-xs text-slate-400 mt-1">
                  {t.contact.quickFormSubtitle}
                </p>
              </div>

              <form onSubmit={handleQuickSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">{t.contact.nameLabel}</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Karim Mansour"
                      value={quickMsg.name}
                      onChange={(e) => setQuickMsg({ ...quickMsg, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-400 text-white text-sm focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">{t.contact.phoneLabel}</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 01007466197"
                      value={quickMsg.phone}
                      onChange={(e) => setQuickMsg({ ...quickMsg, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-400 text-white text-sm focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">{t.contact.msgLabel}</label>
                  <textarea
                    rows={4}
                    placeholder={t.contact.msgPlaceholder}
                    value={quickMsg.message}
                    onChange={(e) => setQuickMsg({ ...quickMsg, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-400 text-white text-sm focus:outline-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs text-black bg-gradient-to-r from-cyan-400 to-blue-500 hover:shadow-glow-cyan transition-all flex items-center justify-center gap-2"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-black" />
                    <span>{t.contact.btnSendQuick}</span>
                    <Send className="w-3.5 h-3.5 text-black" />
                  </button>
                </div>
              </form>

              {/* Or Deep Request */}
              <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">{t.contact.fullFormPrompt}</span>
                <a href="#booking" className="text-cyan-400 hover:underline font-bold flex items-center gap-1">
                  <span>{t.contact.fullFormLink}</span>
                  <ArrowIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
