import type { ReactNode } from 'react';
import { Providers } from '@/components/providers';
import { StructuredData } from '@/components/seo/StructuredData';
import { CONTENT } from '@/data/content';
import { LOCALE_DIR, type Locale } from '@/lib/i18n';

type DocumentProps = {
  locale: Locale;
  /** next/font variable classes for this language. */
  fontClassName: string;
  children: ReactNode;
};

/** The <html> shell shared by the English and Persian root layouts. */
export function Document({ locale, fontClassName, children }: DocumentProps) {
  return (
    <html
      lang={locale}
      dir={LOCALE_DIR[locale]}
      className={fontClassName}
      suppressHydrationWarning
    >
      {/* Root-layout shell (App Router), not a pages/ component. */}
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        {/* Without JS the typewriter never runs, so show the full title. */}
        <noscript>
          <style>{'.typed-rest{opacity:1!important}'}</style>
        </noscript>
      </head>
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:start-4 focus:z-[100] focus:rounded-md focus:bg-accent-500 focus:px-4 focus:py-2 focus:text-white"
        >
          {CONTENT[locale].ui.skipToContent}
        </a>
        <Providers>{children}</Providers>
        <StructuredData locale={locale} />
      </body>
    </html>
  );
}
