import { Inter, Vazirmatn } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// Inter for Latin words on /fa/ (Next.js, React…), without next/font's
// metric-adjusted Arial fallback: Arial has Persian glyphs, so with it in the
// stack Persian text would render in Arial instead of falling through to
// Vazirmatn.
export const interFa = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter-fa',
  adjustFontFallback: false,
});

export const vazirmatn = Vazirmatn({
  subsets: ['arabic'],
  display: 'swap',
  variable: '--font-vazirmatn',
});
