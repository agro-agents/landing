// src/i18n/utils.ts
import { ui, languages, defaultLang } from './ui';

export function getLocaleFromUrl(url: URL): string {
  const pathSegments = url.pathname.split('/');
  const baseSegment = import.meta.env.BASE_URL.split('/')[1];

  let potentialLocaleSegmentIndex = 1;
  if (baseSegment && pathSegments[1] === baseSegment) {
    potentialLocaleSegmentIndex = 2;
  }

  if (pathSegments.length > potentialLocaleSegmentIndex) {
    const localeFromPath = pathSegments[potentialLocaleSegmentIndex];
    if (localeFromPath in languages) {
      return localeFromPath;
    }
  }

  return defaultLang;
}

export function useTranslations(locale: string) {
  // Ensure locale is a valid key, otherwise fallback to defaultLang
  const effectiveLocale = (locale in ui) ? locale : defaultLang;
  return function t(key: keyof typeof ui[typeof defaultLang]) { // Use defaultLang for keyof type
    return ui[effectiveLocale as keyof typeof ui]?.[key as any] || ui[defaultLang][key as any];
  };
}

export function getLocalizedPath(path: string, locale: string) {
  const rawBase = import.meta.env.BASE_URL; 
  const base     = rawBase.replace(/\/$/, ''); 
  const defaultLang = 'en';
  const trimmedPath = path.replace(/\/$/, '');
  const withoutBase = trimmedPath.startsWith(base)
    ? trimmedPath.slice(base.length)
    : trimmedPath;

  const langSegment = locale === defaultLang ? defaultLang : locale;
  return `${base}/${langSegment}${withoutBase}`;
}
