import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Download, 
  Smartphone, 
  X, 
  CheckCircle2, 
  Zap, 
  WifiOff, 
  ShieldCheck, 
  ExternalLink,
  Share
} from 'lucide-react';

export default function InstallAppPrompt({ isOpen, onClose, triggerOrigin = 'auto' }) {
  const { t, isRTL } = useLanguage();
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [showAutoBanner, setShowAutoBanner] = useState(false);

  useEffect(() => {
    // Check if already installed / standalone
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || 
                         window.navigator.standalone === true;
    if (isStandalone) {
      setIsInstalled(true);
      return;
    }

    // Detect iOS
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIOS(isIosDevice);

    // Listen for PWA beforeinstallprompt
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);

      // Check if user dismissed prompt during this session
      const dismissed = sessionStorage.getItem('buildora_app_prompt_dismissed');
      if (!dismissed) {
        const timer = setTimeout(() => {
          setShowAutoBanner(true);
        }, 3000);
        return () => clearTimeout(timer);
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Listen for app installed
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setShowAutoBanner(false);
      setDeferredPrompt(null);
    };
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      if (choiceResult.outcome === 'accepted') {
        setIsInstalled(true);
      }
      setDeferredPrompt(null);
      setShowAutoBanner(false);
      if (onClose) onClose();
    }
  };

  const handleDismissBanner = () => {
    setShowAutoBanner(false);
    sessionStorage.setItem('buildora_app_prompt_dismissed', 'true');
    if (onClose) onClose();
  };

  const shouldRenderModal = isOpen;
  const shouldRenderBanner = !isInstalled && showAutoBanner && !isOpen;

  if (isInstalled && !isOpen) return null;

  return (
    <>
      {/* Floating Bottom Notification Banner (Auto prompt) */}
      {shouldRenderBanner && (
        <div className={`fixed bottom-6 ${isRTL ? 'left-6' : 'right-6'} z-50 max-w-sm w-[calc(100vw-3rem)] animate-bounce-in`}>
          <div className="relative p-4 rounded-2xl bg-[#0b1329]/95 backdrop-blur-xl border border-cyan-500/40 shadow-[0_10px_35px_rgba(6,182,212,0.25)] text-slate-100">
            <button
              onClick={handleDismissBanner}
              className="absolute top-2.5 right-2.5 p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-start gap-3">
              <div className="relative w-11 h-11 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-[1px] shadow-lg flex-shrink-0">
                <div className="w-full h-full bg-[#070B14] rounded-xl flex items-center justify-center overflow-hidden">
                  <img src="/logo.jpeg" alt="BUILDORA" className="w-9 h-9 object-contain" />
                </div>
                <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
                </span>
              </div>

              <div className="flex-1 min-w-0 pr-4">
                <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                  <span>{t.app.installTitle}</span>
                  <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    APP
                  </span>
                </h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  {t.app.installDesc}
                </p>

                <div className="mt-3 flex items-center gap-2">
                  {deferredPrompt ? (
                    <button
                      onClick={handleInstallClick}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-black bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 shadow-md flex items-center gap-1.5 transition-all"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>{t.app.btnInstall}</span>
                    </button>
                  ) : isIOS ? (
                    <div className="text-[11px] text-amber-300 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1.5 rounded-lg flex items-center gap-1.5">
                      <Share className="w-3.5 h-3.5 text-amber-400" />
                      <span>{t.app.iosHintDesc}</span>
                    </div>
                  ) : (
                    <a
                      href="https://github.com/medoouwj12-tech/builora.eg/releases"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg text-xs font-bold text-cyan-300 bg-cyan-950/60 border border-cyan-500/40 hover:bg-cyan-900/60 flex items-center gap-1.5 transition-all"
                    >
                      <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{t.app.directApk}</span>
                    </a>
                  )}

                  <button
                    onClick={handleDismissBanner}
                    className="px-2.5 py-1.5 rounded-lg text-xs text-slate-400 hover:text-slate-200"
                  >
                    {t.app.btnLater}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Explicit Modal Dialog (Triggered from Navbar or user action) */}
      {shouldRenderModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-lg rounded-3xl bg-[#0B132B] border border-cyan-500/40 shadow-2xl p-6 sm:p-8 text-slate-100 overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header / Logo */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-400 via-sky-500 to-blue-600 p-[2px] shadow-xl">
                <div className="w-full h-full bg-[#070B14] rounded-2xl flex items-center justify-center p-2">
                  <img src="/logo.jpeg" alt="BUILDORA" className="w-12 h-12 object-contain" />
                </div>
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 inline-block mb-1">
                  BUILDORA APP v1.0
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  {t.app.installTitle}
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {t.app.installDesc}
            </p>

            {/* App Features Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-6">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
                <WifiOff className="w-4 h-4 text-cyan-400" />
                <span className="text-slate-200">{t.app.features[0]}</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span className="text-slate-200">{t.app.features[1]}</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-slate-200">{t.app.features[2]}</span>
              </div>
            </div>

            {/* Actions & Instructions */}
            <div className="space-y-3">
              {deferredPrompt ? (
                <button
                  onClick={handleInstallClick}
                  className="w-full py-3.5 px-4 rounded-xl text-sm font-bold text-black bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 shadow-glow-cyan transition-all flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>{t.app.btnInstall}</span>
                </button>
              ) : isIOS ? (
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs space-y-2">
                  <div className="font-bold flex items-center gap-2 text-amber-300">
                    <Share className="w-4 h-4" />
                    <span>{t.app.iosHintTitle}</span>
                  </div>
                  <p className="leading-relaxed">
                    1. اضغط على زر <strong>المشاركة (Share)</strong> أسفل شاشة Safari.<br />
                    2. مرر للأسفل واضغط على <strong>"إضافة إلى الشاشة الرئيسية" (Add to Home Screen)</strong>.<br />
                    3. اضغط على <strong>"إضافة" (Add)</strong> بالأعلى لتجد تطبيق بيلدورا على شاشة هاتفك فوراً!
                  </p>
                </div>
              ) : (
                <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-xs text-slate-300 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <span>جاهز للتثبيت على متصفحك أو تحميل APK</span>
                  </div>
                </div>
              )}

              {/* Direct Android APK / GitHub Release Link */}
              <a
                href="https://github.com/medoouwj12-tech/builora.eg/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl text-xs font-semibold text-cyan-300 bg-slate-900 hover:bg-slate-800 border border-cyan-500/30 hover:border-cyan-400 transition-all flex items-center justify-center gap-2"
              >
                <Smartphone className="w-4 h-4 text-cyan-400" />
                <span>{t.app.directApk}</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
