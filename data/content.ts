/**
 * Everything a page renders, per language: resume data plus UI strings.
 * Sections take a `Content` object instead of importing `resume.ts` directly.
 */
import {
  EDUCATION,
  EXPERIENCE,
  LANGUAGES,
  NAV_LINKS,
  PERSONAL,
  SKILL_GROUPS,
  SUMMARY,
  SUMMARY_HIGHLIGHTS,
  type Education,
  type Experience,
  type Language,
  type NavLink,
  type Personal,
  type SkillGroup,
} from '@/data/resume';
import {
  EDUCATION_FA,
  EXPERIENCE_FA,
  LANGUAGES_FA,
  NAV_LINKS_FA,
  PERSONAL_FA,
  SKILL_GROUPS_FA,
  SUMMARY_FA,
  SUMMARY_HIGHLIGHTS_FA,
} from '@/data/resume.fa';
import type { Locale } from '@/lib/i18n';

type Section = { eyebrow: string; title: string; label: string };

/** Plain strings only, so they can be passed to client components. */
export type UiStrings = {
  skipToContent: string;
  heroEyebrow: string;
  heroIntro: string;
  downloadResume: string;
  downloadResumeLabel: string;
  primaryNav: string;
  toggleMenu: string;
  themeToLight: string;
  themeToDark: string;
  themeToggle: string;
  languageSwitch: string;
  sections: Record<'summary' | 'skills' | 'experience' | 'education' | 'contact', Section>;
  contact: { email: string; phone: string; location: string; linkedin: string };
  languagesTitle: string;
  skillLevel: string; // "{level}" and "{max}" are replaced
  footerBuiltWith: string;
  footerBy: string;
  footerLove: string;
  footerLabel: string;
};

export type Content = {
  locale: Locale;
  personal: Personal;
  summary: string;
  summaryHighlights: readonly string[];
  skillGroups: readonly SkillGroup[];
  experience: readonly Experience[];
  education: readonly Education[];
  languages: readonly Language[];
  navLinks: readonly NavLink[];
  ui: UiStrings;
};

const UI_EN: UiStrings = {
  skipToContent: 'Skip to content',
  heroEyebrow: 'Curriculum Vitae',
  heroIntro: `Five years building scalable, high-performance web apps with React, Next.js, and Vue. Currently based in ${PERSONAL.location}.`,
  downloadResume: 'Download Resume',
  downloadResumeLabel: 'Download resume as PDF',
  primaryNav: 'Primary',
  toggleMenu: 'Toggle menu',
  themeToLight: 'Switch to light mode',
  themeToDark: 'Switch to dark mode',
  themeToggle: 'Toggle theme',
  languageSwitch: 'Language',
  sections: {
    summary: { eyebrow: '01 — Summary', title: 'A quick introduction.', label: 'Summary' },
    skills: { eyebrow: '02 — Skills', title: 'The stack I build with.', label: 'Skills' },
    experience: { eyebrow: '03 — Experience', title: 'Where I’ve worked.', label: 'Professional experience' },
    education: { eyebrow: '04 — Education', title: 'The fundamentals.', label: 'Education' },
    contact: { eyebrow: '05 — Contact', title: 'Let’s build something.', label: 'Contact' },
  },
  contact: { email: 'Email', phone: 'Phone', location: 'Location', linkedin: 'LinkedIn' },
  languagesTitle: 'Languages',
  skillLevel: 'Skill level {level} of {max}',
  footerBuiltWith: 'Built with',
  footerBy: 'by',
  footerLove: 'love',
  footerLabel: 'Footer',
};

const UI_FA: UiStrings = {
  skipToContent: 'رفتن به محتوا',
  heroEyebrow: 'رزومه',
  heroIntro: `پنج سال تجربه در ساخت وب‌اپلیکیشن‌های مقیاس‌پذیر و پرسرعت با React، Next.js و Vue. ساکن ${PERSONAL_FA.location}.`,
  downloadResume: 'دانلود رزومه',
  downloadResumeLabel: 'دانلود رزومه (PDF)',
  primaryNav: 'منوی اصلی',
  toggleMenu: 'باز و بسته کردن منو',
  themeToLight: 'تغییر به تم روشن',
  themeToDark: 'تغییر به تم تیره',
  themeToggle: 'تغییر تم',
  languageSwitch: 'زبان',
  sections: {
    summary: { eyebrow: '۰۱ — خلاصه', title: 'معرفی کوتاه.', label: 'خلاصه' },
    skills: { eyebrow: '۰۲ — مهارت‌ها', title: 'ابزارهایی که با آن‌ها می‌سازم.', label: 'مهارت‌ها' },
    experience: { eyebrow: '۰۳ — سوابق کاری', title: 'جاهایی که کار کرده‌ام.', label: 'سوابق کاری' },
    education: { eyebrow: '۰۴ — تحصیلات', title: 'پایه‌ها.', label: 'تحصیلات' },
    contact: { eyebrow: '۰۵ — تماس', title: 'بیایید چیزی بسازیم.', label: 'تماس' },
  },
  contact: { email: 'ایمیل', phone: 'تلفن', location: 'موقعیت', linkedin: 'لینکدین' },
  languagesTitle: 'زبان‌ها',
  skillLevel: 'سطح مهارت {level} از {max}',
  footerBuiltWith: 'ساخته‌شده با',
  footerBy: 'توسط',
  footerLove: 'عشق',
  footerLabel: 'پانویس',
};

export const CONTENT: Record<Locale, Content> = {
  en: {
    locale: 'en',
    personal: PERSONAL,
    summary: SUMMARY,
    summaryHighlights: SUMMARY_HIGHLIGHTS,
    skillGroups: SKILL_GROUPS,
    experience: EXPERIENCE,
    education: EDUCATION,
    languages: LANGUAGES,
    navLinks: NAV_LINKS,
    ui: UI_EN,
  },
  fa: {
    locale: 'fa',
    personal: { ...PERSONAL, ...PERSONAL_FA },
    summary: SUMMARY_FA,
    summaryHighlights: SUMMARY_HIGHLIGHTS_FA,
    skillGroups: SKILL_GROUPS_FA,
    experience: EXPERIENCE_FA,
    education: EDUCATION_FA,
    languages: LANGUAGES_FA,
    navLinks: NAV_LINKS_FA,
    ui: UI_FA,
  },
};
