// Import type definitions
import type { Language, Translations } from '@/types';

// Import all translation files
import en from './locales/en.json';
import ja from './locales/ja.json';
import th from './locales/th.json';

// Default language is Japanese, but will auto-detect from browser
export const DEFAULT_LANG: Language = 'ja';

// Define all supported languages
export const LANGUAGES: Language[] = ['en', 'ja', 'th'];

// Language display names in their native language
export const LANGUAGE_NAMES: Record<Language, string> = {
  en: 'English',
  ja: '日本語',
  th: 'ไทย',
};

// Store translations in a typed object
const translations: Record<Language, Translations> = {
  en,
  ja,
  th,
};

/**
 * Get translation for a specific key in the specified language
 * @param lang - The language code
 * @param key - The translation key (supports dot notation for nested keys)
 * @param fallback - Optional fallback text if translation not found
 * @returns The translated string, array, or object
 *
 * Example usage:
 * t('en', 'nav.home') // Returns "Home"
 * t('ja', 'hero.title') // Returns Japanese translation
 * t('en', 'about.expertise_areas') // Returns array of expertise areas
 */
export function t(lang: Language, key: string, fallback?: any): any {
  // Get the translations object for the specified language
  const langTranslations = translations[lang] || translations[DEFAULT_LANG];

  // Split the key by dots to handle nested objects (e.g., 'nav.home')
  const keys = key.split('.');

  // Navigate through the nested translation object
  let result: any = langTranslations;

  for (const k of keys) {
    // If key doesn't exist at any level, return fallback or key itself
    if (result && typeof result === 'object') {
      result = result[k];
    } else {
      // Translation not found, return fallback or original key
      return fallback || key;
    }
  }

  // Return the found translation or fallback
  return result !== undefined ? result : fallback || key;
}

/**
 * Detect browser language with fallback to default
 * @returns Detected language or default language
 */
export function detectBrowserLanguage(): Language {
  // Check if we're in a browser environment
  if (typeof window === 'undefined') {
    return DEFAULT_LANG;
  }

  // Get browser language preferences
  const browserLang = navigator.language || navigator.languages?.[0] || 'en';

  // Extract language code (e.g., 'en-US' -> 'en')
  const langCode = browserLang.split('-')[0].toLowerCase();

  // Check if the detected language is supported
  if (LANGUAGES.includes(langCode as Language)) {
    return langCode as Language;
  }

  // Fallback to default language
  return DEFAULT_LANG;
}

/**
 * Get the language from the URL path
 * @param url - The current URL object or string
 * @returns The detected language or default language
 *
 * Example:
 * getLangFromUrl('/ja/about') // Returns 'ja'
 * getLangFromUrl('/contact') // Returns 'en' (default)
 */
export function getLangFromUrl(url: URL | string): Language {
  // Convert string to URL object if needed
  const urlObj =
    typeof url === 'string' ? new URL(url, 'http://localhost') : url;

  // Remove base path if present (for GitHub Pages deployment)
  let pathname = urlObj.pathname;
  if (pathname.startsWith('/vinc-placement-website/')) {
    pathname = pathname.replace('/vinc-placement-website', '');
  }

  // Extract the first segment of the pathname
  const [, langSegment] = pathname.split('/');

  // Check if the segment is a valid language code
  if (langSegment && LANGUAGES.includes(langSegment as Language)) {
    return langSegment as Language;
  }

  // Return default language if not found
  return DEFAULT_LANG;
}

/**
 * Generate alternate language URLs for SEO (hreflang tags)
 * @param currentPath - The current page path without language prefix
 * @returns Array of alternate language URLs
 *
 * Example:
 * getAlternateUrls('/about') // Returns [
 *   { lang: 'en', href: '/en/about' },
 *   { lang: 'ja', href: '/ja/about' },
 *   { lang: 'th', href: '/th/about' }
 * ]
 */
export function getAlternateUrls(
  currentPath: string
): { lang: Language; href: string }[] {
  return LANGUAGES.map((lang) => ({
    lang,
    href: `/${lang}${currentPath}`,
  }));
}

/**
 * Remove language prefix from path
 * @param path - The full path with language prefix
 * @returns Path without language prefix
 *
 * Example:
 * removeLanguagePrefix('/en/about') // Returns '/about'
 * removeLanguagePrefix('/ja/') // Returns '/'
 */
export function removeLanguagePrefix(path: string): string {
  // Remove leading slash
  const pathWithoutLeadingSlash = path.startsWith('/') ? path.slice(1) : path;

  // Check if path starts with a language code
  for (const lang of LANGUAGES) {
    if (
      pathWithoutLeadingSlash.startsWith(`${lang}/`) ||
      pathWithoutLeadingSlash === lang
    ) {
      return '/' + pathWithoutLeadingSlash.slice(lang.length + 1);
    }
  }

  // Return original path if no language prefix found
  return '/' + pathWithoutLeadingSlash;
}

/**
 * Get all translations for a specific language
 * @param lang - The language code
 * @returns All translations for the specified language
 */
export function getAllTranslations(lang: Language): Translations {
  return translations[lang] || translations[DEFAULT_LANG];
}

/**
 * Client-side language detection and redirection
 * This function should be called on the client side to redirect users
 * to their preferred language if they visit the root URL
 */
export function handleLanguageRedirect(): void {
  if (typeof window === 'undefined') return;

  const currentPath = window.location.pathname;

  // Only redirect if user is on root path without language prefix
  if (currentPath === '/' || currentPath === '') {
    const detectedLang = detectBrowserLanguage();
    const newUrl = `/${detectedLang}/`;

    // Use replace to avoid adding to browser history
    window.location.replace(newUrl);
  }
}
