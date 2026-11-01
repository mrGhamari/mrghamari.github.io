import { Languages as LanguagesIcon } from 'lucide-react';
import { AnimatedCard } from '@/components/ui/AnimatedCard';
import type { Content } from '@/data/content';

export function Languages({ content }: { content: Content }) {
  return (
    <AnimatedCard>
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent-500/10 text-accent-500">
          <LanguagesIcon className="h-5 w-5" aria-hidden="true" />
        </span>
        <h3 className="text-base font-bold text-primary dark:text-secondary">
          {content.ui.languagesTitle}
        </h3>
      </div>
      <ul className="mt-4 space-y-2">
        {content.languages.map((l) => (
          <li key={l.name} className="flex flex-wrap items-baseline gap-x-2">
            <span className="font-medium text-primary dark:text-secondary">
              {l.name}
            </span>
            <span className="text-sm text-muted">— {l.level}</span>
          </li>
        ))}
      </ul>
    </AnimatedCard>
  );
}
