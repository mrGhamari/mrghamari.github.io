import type { MetadataRoute } from 'next';
import { LOCALE_PATH, LOCALES } from '@/lib/i18n';
import { SITE_URL } from '@/lib/site';

export const dynamic = 'force-static';

const url = (path: string) => new URL(path, SITE_URL).href;

// Each language version lists the other as an hreflang alternate.
const languages = Object.fromEntries(LOCALES.map((l) => [l, url(LOCALE_PATH[l])]));

export default function sitemap(): MetadataRoute.Sitemap {
  return LOCALES.map((locale) => ({
    url: url(LOCALE_PATH[locale]),
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: locale === 'en' ? 1 : 0.9,
    alternates: { languages },
  }));
}
