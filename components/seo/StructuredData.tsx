import { CONTENT } from '@/data/content';
import { PERSONAL } from '@/data/resume';
import { LOCALE_PATH, type Locale } from '@/lib/i18n';
import {
  SITE_DESCRIPTION,
  SITE_DESCRIPTION_FA,
  SITE_TITLE,
  SITE_TITLE_FA,
  SITE_URL,
} from '@/lib/site';

// One Person and one WebSite for both language versions (same @id on every
// page), and one ProfilePage per language.
const personId = `${SITE_URL}#person`;
const websiteId = `${SITE_URL}#website`;

const PAGE: Record<Locale, { title: string; description: string }> = {
  en: { title: SITE_TITLE, description: SITE_DESCRIPTION },
  fa: { title: SITE_TITLE_FA, description: SITE_DESCRIPTION_FA },
};

function buildStructuredData(locale: Locale) {
  const { personal, experience, education, skillGroups, languages } = CONTENT[locale];
  const { title, description } = PAGE[locale];
  const pageUrl = new URL(LOCALE_PATH[locale], SITE_URL).href;
  const otherName = locale === 'fa' ? PERSONAL.name : PERSONAL.nameFa;

  // "Present" is checked on the English data: the source of truth for dates.
  const current = CONTENT.en.experience[0];
  const isCurrentJob = current?.period.endsWith('Present') ?? false;
  const skills = skillGroups.flatMap((g) => g.items);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfilePage',
        '@id': `${pageUrl}#profile`,
        url: pageUrl,
        name: title,
        description,
        inLanguage: locale,
        isPartOf: { '@id': websiteId },
        mainEntity: { '@id': personId },
        primaryImageOfPage: `${SITE_URL}og-image.png`,
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: SITE_URL,
        name: SITE_TITLE,
        alternateName: [PERSONAL.name, PERSONAL.nameFa],
        inLanguage: ['en', 'fa'],
        publisher: { '@id': personId },
      },
      {
        '@type': 'Person',
        '@id': personId,
        name: personal.name,
        alternateName: otherName,
        ...(locale === 'en' && {
          givenName: personal.name.split(' ')[0],
          familyName: personal.name.split(' ').slice(1).join(' '),
        }),
        jobTitle: personal.title,
        description,
        url: SITE_URL,
        image: `${SITE_URL}og-image.png`,
        email: `mailto:${personal.email}`,
        telephone: personal.phoneHref,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Tehran',
          addressCountry: 'IR',
        },
        sameAs: [personal.linkedinUrl, personal.githubUrl],
        knowsAbout: skills,
        knowsLanguage: languages.map((l) => l.name),
        alumniOf: education.map((e) => ({
          '@type': 'CollegeOrUniversity',
          name: e.school,
          ...(e.url && { url: e.url }),
        })),
        ...(isCurrentJob && {
          worksFor: { '@type': 'Organization', name: current.company },
        }),
        hasOccupation: {
          '@type': 'Occupation',
          name: experience[0]?.role ?? personal.title,
          occupationLocation: { '@type': 'City', name: 'Tehran' },
          skills: skills.join(', '),
        },
      },
    ],
  };
}

export function StructuredData({ locale }: { locale: Locale }) {
  // Escape `<` so resume text can never close the <script> element early.
  const json = JSON.stringify(buildStructuredData(locale)).replace(/</g, '\\u003c');
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
