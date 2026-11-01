import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Document } from '@/components/site/Document';
import { PERSONAL } from '@/data/resume';
import { PERSONAL_FA } from '@/data/resume.fa';
import { HREFLANG, OG_LOCALE } from '@/lib/i18n';
import { interFa, iranSansX } from '@/lib/fonts';
import { baseMetadata, OG_IMAGE } from '@/lib/metadata';
import { SITE_DESCRIPTION_FA, SITE_TITLE_FA } from '@/lib/site';
import '../globals.css';

export { viewport } from '@/lib/metadata';

export const metadata: Metadata = {
  ...baseMetadata,
  title: {
    default: `${SITE_TITLE_FA} | ${PERSONAL.name}`,
    template: `%s | ${PERSONAL_FA.name}`,
  },
  description: SITE_DESCRIPTION_FA,
  keywords: [
    PERSONAL_FA.name,
    'Mohammadreza Ghamari',
    PERSONAL_FA.title,
    'برنامه‌نویس فرانت‌اند',
    'توسعه‌دهنده React',
    'توسعه‌دهنده Next.js',
    'برنامه‌نویس فرانت‌اند تهران',
  ],
  alternates: { canonical: '/fa/', languages: HREFLANG },
  openGraph: {
    type: 'profile',
    url: '/fa/',
    siteName: PERSONAL_FA.name,
    title: SITE_TITLE_FA,
    description: SITE_DESCRIPTION_FA,
    locale: OG_LOCALE.fa,
    alternateLocale: [OG_LOCALE.en],
    username: PERSONAL.linkedinHandle,
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE_FA,
    description: SITE_DESCRIPTION_FA,
    images: [OG_IMAGE.url],
  },
};

export default function PersianLayout({ children }: { children: ReactNode }) {
  return (
    <Document locale="fa" fontClassName={`${interFa.variable} ${iranSansX.variable}`}>
      {children}
    </Document>
  );
}
