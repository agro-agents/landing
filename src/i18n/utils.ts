import { ui, languages } from './ui';

export function getLocaleFromUrl(url: URL): string {
  const [, locale] = url.pathname.split('/');
  if (locale in languages) return locale;
  return 'en'; 
}

export function useTranslations(locale: string) {
  return function t(key: keyof typeof ui.en) {
    return ui[locale as keyof typeof ui][key] || ui.en[key];
  };
}

export function getLocalizedPath(path: string, locale: string) {
  const pathWithoutLeadingSlash = path.replace(/^\//, '');
  return locale === 'en' 
    ? `/${pathWithoutLeadingSlash}` 
    : `/${locale}/${pathWithoutLeadingSlash}`;
}
