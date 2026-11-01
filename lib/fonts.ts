import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// Inter for Latin words on /fa/ (Next.js, React…), without next/font's
// metric-adjusted Arial fallback: Arial has Persian glyphs, so with it in the
// stack Persian text would render in Arial instead of falling through to
// IRANSansX.
export const interFa = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter-fa',
  adjustFontFallback: false,
});

// IRANSansX (FaNum) for Persian text on /fa/: commercial font, self-hosted
// under its web license. Only the weights the site uses (300–700).
export const iranSansX = localFont({
  src: [
    { path: '../app/fonts/iransansx/IRANSansXFaNum-Light.woff2', weight: '300', style: 'normal' },
    { path: '../app/fonts/iransansx/IRANSansXFaNum-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../app/fonts/iransansx/IRANSansXFaNum-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../app/fonts/iransansx/IRANSansXFaNum-DemiBold.woff2', weight: '600', style: 'normal' },
    { path: '../app/fonts/iransansx/IRANSansXFaNum-Bold.woff2', weight: '700', style: 'normal' },
  ],
  display: 'swap',
  variable: '--font-iransansx',
});
