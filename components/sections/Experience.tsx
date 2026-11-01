import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TimelineItem } from '@/components/ui/TimelineItem';
import type { Content } from '@/data/content';

export function Experience({ content }: { content: Content }) {
  const section = content.ui.sections.experience;
  const { experience } = content;

  return (
    <section
      id="experience"
      aria-label={section.label}
      className="scroll-mt-20 py-16 md:py-24"
    >
      <Container>
        <SectionHeading eyebrow={section.eyebrow}>{section.title}</SectionHeading>
        <ol>
          {experience.map((item, idx) => (
            <TimelineItem
              key={`${item.company}-${item.period}`}
              item={item}
              isLast={idx === experience.length - 1}
            />
          ))}
        </ol>
      </Container>
    </section>
  );
}
