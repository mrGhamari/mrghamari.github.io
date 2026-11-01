import { LOCALE_PATH, LOCALES, type Locale } from '@/lib/i18n';
import { cn } from '@/lib/utils';

const LABEL: Record<Locale, string> = { en: 'EN', fa: 'FA' };

type LanguageSwitchProps = {
  locale: Locale;
  /** Accessible name of the group, in the current language. */
  label: string;
  className?: string;
};

/**
 * EN / FA segmented switch. Plain links (no JS): each language has its own root
 * layout, so switching is a full page load to the other version.
 */
export function LanguageSwitch({ locale, label, className }: LanguageSwitchProps) {
  return (
    <nav
      aria-label={label}
      // Keep EN on the left in both directions, like a fixed toggle.
      dir="ltr"
      className={cn(
        'inline-flex shrink-0 items-center rounded-full border border-black/10 p-0.5 text-xs font-semibold',
        'bg-white dark:border-white/10 dark:bg-white/[0.04]',
        className,
      )}
    >
      {LOCALES.map((l) => {
        const current = l === locale;
        return (
          <a
            key={l}
            href={LOCALE_PATH[l]}
            hrefLang={l}
            lang={l}
            aria-current={current ? 'page' : undefined}
            className={cn(
              'rounded-full px-2.5 py-1 tracking-wide transition-colors',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500',
              current
                ? 'bg-accent-500 text-white'
                : 'text-muted hover:text-accent-500 dark:hover:text-accent-400',
            )}
          >
            {LABEL[l]}
          </a>
        );
      })}
    </nav>
  );
}
