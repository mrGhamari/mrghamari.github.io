import { Download, Mail, MapPin, Phone } from 'lucide-react';
import type { CSSProperties } from 'react';
import { LinkedinIcon } from '@/components/ui/icons/LinkedinIcon';
import { ContactPill } from '@/components/ui/ContactPill';
import { Container } from '@/components/ui/Container';
import { HandleToName } from '@/components/ui/HandleToName';
import { LanguageSwitch } from '@/components/ui/LanguageSwitch';
import { TypedTitle } from '@/components/ui/TypedTitle';
import type { Content } from '@/data/content';
import { cn } from '@/lib/utils';

const delay = (seconds: number): CSSProperties => ({
  animationDelay: `${seconds}s`,
});

export function Hero({ content }: { content: Content }) {
  const { personal, ui, locale } = content;
  const titleClass = 'mt-4 min-h-[1.5em] text-xl font-light tracking-wide text-muted md:text-2xl';

  return (
    <section
      id="top"
      aria-label={personal.name}
      className="relative flex min-h-[calc(100vh-3.5rem)] items-center pt-24 pb-16 md:min-h-screen md:pt-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-20 -z-10 h-72 bg-[radial-gradient(60%_60%_at_50%_30%,rgba(59,130,246,0.18),transparent_70%)]"
      />

      <Container>
        <div className="animate-fade-up flex items-center justify-between gap-4">
          <p className="text-xs font-medium uppercase tracking-[0.4em] text-accent-500 ltr:font-mono dark:text-accent-400">
            {ui.heroEyebrow}
          </p>
          <LanguageSwitch locale={locale} label={ui.languageSwitch} />
        </div>

        <h1
          aria-label={personal.name}
          className={cn(
            'mt-4 font-bold leading-[1.05] tracking-tight text-primary dark:text-secondary md:text-6xl',
            // The fluid size keeps the long Latin name on one line on phones;
            // the Persian name is short enough for the regular size.
            locale === 'en' ? 'text-[clamp(1.5rem,7.2vw,2.25rem)]' : 'text-4xl',
          )}
        >
          {/* The mrGhamari -> full-name motion only applies to the Latin spelling. */}
          {locale === 'en' ? (
            <HandleToName name={personal.name} handle={personal.linkedinHandle} />
          ) : (
            <span className="animate-fade-up inline-block">{personal.name}</span>
          )}
        </h1>

        {/* Typing Persian one letter at a time breaks letter joining, so it's static there. */}
        {locale === 'en' ? (
          <TypedTitle text={personal.title} startDelay={1500} className={titleClass} />
        ) : (
          <p style={delay(0.15)} className={`animate-fade-up ${titleClass}`}>
            {personal.title}
          </p>
        )}

        <p
          style={delay(0.3)}
          className="animate-fade-up mt-6 max-w-2xl text-base leading-relaxed text-primary/70 dark:text-secondary/70"
        >
          {ui.heroIntro}
        </p>

        <div
          style={delay(0.45)}
          className="animate-fade-up mt-8 flex flex-wrap items-center gap-2"
        >
          <ContactPill icon={Mail} label={personal.email} href={`mailto:${personal.email}`} ltr />
          <ContactPill icon={Phone} label={personal.phone} href={`tel:${personal.phoneHref}`} ltr />
          <ContactPill icon={MapPin} label={personal.location} href="#contact" />
          <ContactPill icon={LinkedinIcon} label={personal.linkedinHandle} href={personal.linkedinUrl} external ltr />
          <ContactPill icon={Download} label={ui.downloadResume} href={personal.resumeUrl} download={personal.resumeFilename} />
        </div>
      </Container>
    </section>
  );
}
