import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { Content } from '@/data/content';

function highlight(text: string, terms: readonly string[]) {
  if (terms.length === 0) return [{ text, hl: false, key: 0 }];
  const sorted = [...terms].sort((a, b) => b.length - a.length);
  const pattern = sorted
    .map((s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|');
  const re = new RegExp(`(${pattern})`, 'g');
  return text.split(re).map((chunk, i) => ({
    text: chunk,
    hl: terms.some((t) => t.toLowerCase() === chunk.toLowerCase()),
    key: i,
  }));
}

export function Summary({ content }: { content: Content }) {
  const section = content.ui.sections.summary;
  const tokens = highlight(content.summary, content.summaryHighlights);

  return (
    <section
      id="summary"
      aria-label={section.label}
      className="scroll-mt-20 py-16 md:py-24"
    >
      <Container>
        <SectionHeading eyebrow={section.eyebrow}>{section.title}</SectionHeading>
        <p
          className="reveal max-w-3xl text-[15px] leading-[1.85] text-primary/80 dark:text-secondary/80 sm:text-base"
        >
          {tokens.map((t) =>
            t.hl ? (
              <strong
                key={t.key}
                className="font-semibold text-primary dark:text-secondary"
              >
                {t.text}
              </strong>
            ) : (
              <span key={t.key}>{t.text}</span>
            ),
          )}
        </p>
      </Container>
    </section>
  );
}
