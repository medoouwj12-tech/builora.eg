import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // Default to Arabic ('ar') or saved preference
  const [language, setLanguageState] = useState(() => {
    try {
      const saved = localStorage.getItem('buildora_lang');
      return saved === 'en' ? 'en' : 'ar';
    } catch (e) {
      return 'ar';
    }
  });

  const isRTL = language === 'ar';

  const setLanguage = (lang) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('buildora_lang', lang);
    } catch (e) {}
  };

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  useEffect(() => {
    // Update HTML root attributes
    document.documentElement.lang = language;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';

    if (isRTL) {
      document.body.classList.add('font-cairo');
      document.body.classList.remove('font-sans');
    } else {
      document.body.classList.add('font-sans');
      document.body.classList.remove('font-cairo');
    }
  }, [language, isRTL]);

  const t = translations[language] || translations.ar;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, isRTL, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
