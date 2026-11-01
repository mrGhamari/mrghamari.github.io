import type { Metadata } from 'next';
import Link from 'next/link';
import { inter } from '@/lib/fonts';
import './globals.css';

// With one root layout per language there is no shared layout for unmatched
// URLs, so the 404 page renders its own document (experimental.globalNotFound).
export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <main
          id="main"
          className="flex min-h-screen flex-col items-center justify-center px-6 text-center"
        >
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-accent-500">
            404
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight">Page not found</h1>
          <p className="mt-3 text-muted">This page doesn’t exist or has moved.</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="rounded-full bg-accent-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-600"
            >
              Back to the resume
            </Link>
            <Link
              href="/fa/"
              lang="fa"
              dir="rtl"
              className="rounded-full border border-accent-500 px-5 py-2.5 text-sm font-semibold text-accent-500 transition-colors hover:bg-accent-500 hover:text-white"
            >
              نسخه‌ی فارسی
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
