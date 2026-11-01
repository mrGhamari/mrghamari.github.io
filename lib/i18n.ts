export const LOCALES = ['en', 'fa'] as const;
export type Locale = (typeof LOCALES)[number];

/** Root path of each language version (trailing slash, matching `trailingSlash`). */
export const LOCALE_PATH: Record<Locale, string> = { en: '/', fa: '/fa/' };

export const LOCALE_DIR: Record<Locale, 'ltr' | 'rtl'> = { en: 'ltr', fa: 'rtl' };

/** Open Graph locale codes. */
export const OG_LOCALE: Record<Locale, string> = { en: 'en_US', fa: 'fa_IR' };

/** `hreflang` map for `alternates.languages`, relative to `metadataBase`. */
export const HREFLANG = {
  en: '/',
  fa: '/fa/',
  'x-default': '/',
} as const;

/** Formats a number with the locale's digits (Persian digits for `fa`). */
export function formatNumber(locale: Locale, n: number): string {
  return new Intl.NumberFormat(locale === 'fa' ? 'fa-IR' : 'en-US', {
    useGrouping: false,
  }).format(n);
}
