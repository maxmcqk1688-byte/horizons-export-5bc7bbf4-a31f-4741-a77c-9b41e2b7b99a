import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from '../locales/en.json';
import zh from '../locales/zh.json';
import zhTW from '../locales/zh-tw.json';
import ja from '../locales/ja.json';
import es from '../locales/es.json';
import fr from '../locales/fr.json';
import de from '../locales/de.json';
import ko from '../locales/ko.json';

export const supportedLanguages = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'zh', name: 'Simplified Chinese', nativeName: '简体中文', flag: '🇨🇳' },
  { code: 'zh-TW', name: 'Traditional Chinese', nativeName: '繁體中文', flag: '🇹🇼' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
  { code: 'ko', name: 'Korean', nativeName: '한국어', flag: '🇰🇷' }
];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      zh: { translation: zh },
      'zh-TW': { translation: zhTW },
      ja: { translation: ja },
      es: { translation: es },
      fr: { translation: fr },
      de: { translation: de },
      ko: { translation: ko },
    },
    fallbackLng: 'en',
    // Only load the active language: without this, 'zh-TW' silently falls
    // back to 'zh' resources (simplified) instead of traditional Chinese.
    load: 'currentOnly',
    supportedLngs: supportedLanguages.map(l => l.code),
    detection: {
      order: ['path', 'localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupFromPathIndex: 0,
    },
    interpolation: {
      escapeValue: false, // React already safeguards from XSS
    }
  });

export default i18n;

// Match a URL segment to a supported language code case-insensitively,
// so legacy '/zh-tw/...' links keep working after the canonical 'zh-TW' rename.
export function normalizeLangCode(seg) {
  if (!seg) return undefined;
  const found = supportedLanguages.find((l) => l.code.toLowerCase() === String(seg).toLowerCase());
  return found?.code;
}