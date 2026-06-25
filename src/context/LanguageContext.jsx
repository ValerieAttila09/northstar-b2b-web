'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { DEFAULT_LANGUAGE, getLanguageFromCookie, normalizeLanguage, setLanguageCookie } from '../lib/i18n/locale.mjs';

const LanguageContext = createContext(null);

const getInitialLanguage = () => {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE;

  try {
    const stored = window.localStorage.getItem('northstar-language');
    if (stored) return normalizeLanguage(stored);

    return getLanguageFromCookie(window.document.cookie);
  } catch {
    return getLanguageFromCookie(window.document.cookie);
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => getInitialLanguage());

  useEffect(() => {
    const initialLanguage = getInitialLanguage();
    setLanguage(initialLanguage);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const nextLanguage = normalizeLanguage(language);

    try {
      window.localStorage.setItem('northstar-language', nextLanguage);
    } catch {
      // Ignore storage errors and continue with cookie persistence.
    }

    setLanguageCookie(nextLanguage);
    document.documentElement.lang = nextLanguage === 'id' ? 'id' : 'en';
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage: (nextLanguage) => setLanguage(normalizeLanguage(nextLanguage)),
      toggleLanguage: () => setLanguage((current) => (current === 'en' ? 'id' : 'en')),
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }

  return context;
}
