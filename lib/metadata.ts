import type { Metadata, Viewport } from 'next';
import { PERSONAL } from '@/data/resume';
import { BASE_PATH, SITE_URL } from '@/lib/site';

// Search Console HTML-tag token (public: it ships in the page's <head>).
// The GOOGLE_SITE_VERIFICATION repo variable can override it; `||` because the
// workflow passes an empty string when that variable is unset.
const googleVerification =
  process.env.GOOGLE_SITE_VERIFICATION ||
  'iECZJoSaDjiMc2GI0zg1Z7BwFIAJ8Yp9CW2XxBQnEdE';

/** Metadata shared by every language version; layouts add the localized parts. */
export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: PERSONAL.name,
  authors: [{ name: PERSONAL.name, url: PERSONAL.linkedinUrl }],
  creator: PERSONAL.name,
  publisher: PERSONAL.name,
  category: 'technology',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: `${BASE_PATH}/icon-32.png`, sizes: '32x32', type: 'image/png' },
      { url: `${BASE_PATH}/icon-192.png`, sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: `${BASE_PATH}/apple-touch-icon.png`, sizes: '180x180' }],
  },
  // Stops iOS from turning dates/numbers in the resume into phone links.
  formatDetection: { telephone: false, address: false, email: false },
  ...(googleVerification && { verification: { google: googleVerification } }),
};

export const OG_IMAGE = {
  url: 'og-image.png',
  width: 1200,
  height: 630,
  alt: `${PERSONAL.name} — ${PERSONAL.title}`,
  type: 'image/png',
} as const;

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAFAFA' },
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' },
  ],
  width: 'device-width',
  initialScale: 1,
};
