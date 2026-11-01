import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Document } from '@/components/site/Document';
import { PERSONAL } from '@/data/resume';
import { HREFLANG, OG_LOCALE } from '@/lib/i18n';
import { inter } from '@/lib/fonts';
import { baseMetadata, OG_IMAGE } from '@/lib/metadata';
import { SITE_DESCRIPTION, SITE_TITLE } from '@/lib/site';
import '../globals.css';

export { viewport } from '@/lib/metadata';

export const metadata: Metadata = {
  ...baseMetadata,
  title: {
    // The Persian name in the title helps the page rank for searches in Persian.
    default: `${PERSONAL.name} (${PERSONAL.nameFa}) — ${PERSONAL.title}`,
    template: `%s | ${PERSONAL.name}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'Mohammadreza Ghamari',
    PERSONAL.nameFa,
    'Senior Frontend Developer',
    'Frontend Developer Tehran',
    'React Developer',
    'Next.js Developer',
    'Vue.js Developer',
    'Nuxt.js',
    'TypeScript',
    'Tehran',
    'Iran',
  ],
  alternates: { canonical: '/', languages: HREFLANG },
  openGraph: {
    type: 'profile',
    url: '/',
    siteName: PERSONAL.name,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: OG_LOCALE.en,
    alternateLocale: [OG_LOCALE.fa],
    firstName: PERSONAL.name.split(' ')[0],
    lastName: PERSONAL.name.split(' ').slice(1).join(' '),
    username: PERSONAL.linkedinHandle,
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE.url],
  },
};

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return (
    <Document locale="en" fontClassName={inter.variable}>
      {children}
    </Document>
  );
}
