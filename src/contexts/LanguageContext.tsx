import { createContext, useContext, useEffect, useState } from 'react';
import { Language, getBrowserLanguage } from '../i18n/config';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const path = window.location.pathname;
    if (path.startsWith('/es')) {
      setLanguage('es');
    } else if (path.startsWith('/en')) {
      setLanguage('en');
    } else {
      const browserLang = getBrowserLanguage();
      setLanguage(browserLang);
      window.location.pathname = `/${browserLang}${path}`;
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 