import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SkillBadge } from '@/components/ui/SkillBadge';
import { SkillLevelDots } from '@/components/ui/SkillLevelDots';
import type { Content } from '@/data/content';

export function Skills({ content }: { content: Content }) {
  const section = content.ui.sections.skills;

  return (
    <section
      id="skills"
      aria-label={section.label}
      className="scroll-mt-20 py-16 md:py-24"
    >
      <Container>
        <SectionHeading eyebrow={section.eyebrow}>{section.title}</SectionHeading>

        <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {content.skillGroups.map((group) => (
            <div key={group.category} className="reveal">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-sm font-semibold text-primary dark:text-secondary">
                  {group.category}
                </h3>
                <SkillLevelDots
                  level={group.level}
                  locale={content.locale}
                  label={content.ui.skillLevel}
                />
              </div>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <SkillBadge key={item} label={item} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
