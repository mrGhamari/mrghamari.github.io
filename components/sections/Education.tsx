import { GraduationCap } from 'lucide-react';
import { AnimatedCard } from '@/components/ui/AnimatedCard';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Languages } from '@/components/sections/Languages';
import type { Content } from '@/data/content';

export function Education({ content }: { content: Content }) {
  const section = content.ui.sections.education;

  return (
    <section
      id="education"
      aria-label={section.label}
      className="scroll-mt-20 py-16 md:py-24"
    >
      <Container>
        <SectionHeading eyebrow={section.eyebrow}>{section.title}</SectionHeading>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {content.education.map((e) => (
            <AnimatedCard
              key={e.degree}
              href={e.url}
              target={e.url ? '_blank' : undefined}
              rel={e.url ? 'noopener noreferrer' : undefined}
              ariaLabel={`${e.degree} — ${e.school}`}
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent-500/10 text-accent-500">
                  <GraduationCap className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="text-base font-bold text-primary dark:text-secondary">
                  {e.degree}
                </h3>
              </div>
              <p className="mt-3 text-sm text-muted ltr:italic">{e.school}</p>
            </AnimatedCard>
          ))}

          <Languages content={content} />
        </div>
      </Container>
    </section>
  );
}
