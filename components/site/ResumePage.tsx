import { Contact } from '@/components/sections/Contact';
import { Education } from '@/components/sections/Education';
import { Experience } from '@/components/sections/Experience';
import { Footer } from '@/components/sections/Footer';
import { Hero } from '@/components/sections/Hero';
import { Nav } from '@/components/sections/Nav';
import { Skills } from '@/components/sections/Skills';
import { Summary } from '@/components/sections/Summary';
import { FloatingDownloadButton } from '@/components/ui/FloatingDownloadButton';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { CONTENT } from '@/data/content';
import type { Locale } from '@/lib/i18n';

/** The single-page resume, rendered in the given language. */
export function ResumePage({ locale }: { locale: Locale }) {
  const content = CONTENT[locale];
  const { ui, personal } = content;

  return (
    <>
      <ScrollProgress />
      <Nav
        locale={locale}
        navLinks={content.navLinks}
        resumeUrl={personal.resumeUrl}
        resumeFilename={personal.resumeFilename}
        ui={ui}
      />
      <main id="main">
        <Hero content={content} />
        <Summary content={content} />
        <Skills content={content} />
        <Experience content={content} />
        <Education content={content} />
        <Contact content={content} />
      </main>
      <Footer content={content} />
      <FloatingDownloadButton
        resumeUrl={personal.resumeUrl}
        resumeFilename={personal.resumeFilename}
        label={ui.downloadResumeLabel}
      />
    </>
  );
}
