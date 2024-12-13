export const LANGUAGES = {
  en: 'English',
  es: 'Español'
} as const;

export type Language = keyof typeof LANGUAGES;

export const DEFAULT_LANGUAGE: Language = 'en';

export function getBrowserLanguage(): Language {
  const browserLang = navigator.language.split('-')[0];
  return browserLang === 'es' ? 'es' : 'en';
} 