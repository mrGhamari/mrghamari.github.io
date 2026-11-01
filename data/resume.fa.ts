/**
 * Persian (fa) version of the resume content. Mirrors the English data in
 * `resume.ts` one-to-one; technology and company names stay in Latin script,
 * as they are used in Iranian tech teams. Keep both files in sync.
 */
import type { Education, Experience, Language, NavLink, SkillGroup } from '@/data/resume';
import { EXPERIENCE, SKILL_GROUPS } from '@/data/resume';

export const PERSONAL_FA = {
  name: 'محمدرضا قمری',
  title: 'توسعه‌دهنده ارشد فرانت‌اند',
  location: 'تهران، ایران',
} as const;

export const SUMMARY_FA =
  'توسعه‌دهنده‌ی فرانت‌اند با پنج سال سابقه هستم و روی ساخت وب‌اپلیکیشن‌های مقیاس‌پذیر و پرسرعت تمرکز دارم. تخصص اصلی‌ام React و Next.js است و در Vue.js هم تجربه‌ی کاری دارم؛ در کنار این‌ها در مدیریت state، دیزاین‌سیستم‌های UI/UX و سئو مهارت دارم. همیشه در حال یادگیری‌ام و فناوری‌های تازه را در پروژه‌های واقعی به کار می‌گیرم. فراتر از مهارت فنی، در کار تیمی بین‌بخشی خوب عمل می‌کنم و ارتباط بین توسعه‌دهنده‌ها، طراح‌ها و ذی‌نفعان را برقرار می‌کنم تا نتیجه‌ی کار واقعاً اثرگذار باشد.';

export const SUMMARY_HIGHLIGHTS_FA: readonly string[] = [
  'توسعه‌دهنده‌ی فرانت‌اند',
  'پنج سال',
  'React',
  'Next.js',
  'Vue.js',
  'مدیریت state',
  'دیزاین‌سیستم‌های UI/UX',
  'سئو',
];

const CATEGORY_FA: Record<string, string> = {
  Languages: 'زبان‌های برنامه‌نویسی',
  Frameworks: 'فریم‌ورک‌ها',
  'Styling & UI': 'استایل و UI',
  Libraries: 'کتابخانه‌ها',
  Testing: 'تست',
  'Version Control System': 'کنترل نسخه',
  Databases: 'پایگاه داده',
  Other: 'سایر',
};

/** Same groups, levels and items as English; only the category names change. */
export const SKILL_GROUPS_FA: readonly SkillGroup[] = SKILL_GROUPS.map((g) => ({
  ...g,
  category: CATEGORY_FA[g.category] ?? g.category,
}));

const ROLE_FA: Record<string, string> = {
  'Senior Frontend Developer': 'توسعه‌دهنده ارشد فرانت‌اند',
  'Frontend Developer': 'توسعه‌دهنده فرانت‌اند',
};

type JobFa = { period: string; bullets: readonly string[] };

/**
 * Keyed by company so a job added to `EXPERIENCE` can't pick up another job's
 * text. Periods use Gregorian months, as in the English resume.
 */
const JOBS_FA: Record<string, JobFa> = {
  'Omid Tech': {
    period: 'ژوئن ۲۰۲۶ – اکنون',
    bullets: [
      'ساخت اینترنت‌بانک سپه، پلتفرم جدید بانکداری اینترنتی بانک سپه، از صفر با Next.js 16، React 19، TypeScript، Tailwind CSS v4 و shadcn/ui. اپلیکیشن فارسی‌محور (RTL) است، نسخه‌ی انگلیسی هم دارد، از تم روشن و تیره پشتیبانی می‌کند و به‌صورت PWA قابل نصب است.',
      'پیاده‌سازی ورود با OTP برای دستگاه‌های جدید، تغییر اجباری رمز عبور و بازیابی رمز، به‌همراه ثبت‌نام چندمرحله‌ای با احراز هویت غیرحضوری (KYC).',
      'توسعه‌ی بخش‌های حساب‌ها، کارت‌ها، صورت‌حساب و تسهیلات (به‌همراه پرداخت اقساط) و انتقال وجه داخلی، پایا، ساتنا، کارت‌به‌کارت و کارت‌به‌شبا، با تأیید OTP، رسید، انتقال‌های دوره‌ای زمان‌بندی‌شده و فهرست تأیید برای انتقال‌های در انتظار.',
      'طراحی معماری و قوانین امنیتی پیش از عرضه‌ی اولین قابلیت: مرزبندی لایه‌ها با ESLint، نشست‌های مبتنی بر کوکی httpOnly که در هر درخواست سمت سرور بررسی می‌شوند، و اعتبارسنجی با Zod در همه‌ی مرزهای داده.',
      'پوشش اپلیکیشن با تست‌های واحد، یکپارچه‌سازی، E2E و دسترس‌پذیری با Vitest و Playwright، و استقرار با Docker.',
    ],
  },
  'Trend Marketing Solution': {
    period: 'سپتامبر ۲۰۲۵ – مارس ۲۰۲۶',
    bullets: [
      'ساخت داشبورد ماژولار با بخش‌های مدیریت کاربران، مدیریت کمپین‌ها و اتصال به شبکه‌های اجتماعی با Next.js و shadcn/ui.',
    ],
  },
  Mahdaad: {
    period: 'مه ۲۰۲۵ – سپتامبر ۲۰۲۵',
    bullets: [
      'مسئول توسعه، رفع باگ و نگهداری وب‌سایت Agility (پلتفرمی مبتنی بر بلاگ، ساخته‌شده با Nuxt.js و Vue.js) و داشبورد مدیریتی آن.',
      'پیاده‌سازی SSR و بهینه‌سازی سئو با Nuxt SEO برای بهبود سرعت و دیده‌شدن در موتورهای جستجو.',
      'توسعه‌ی قابلیت‌های بک‌اند با Directus (headless CMS)، طراحی اسکیمای پایگاه داده و مدل‌های داده و یکپارچه‌سازی آن‌ها با دیتابیس.',
      'هدایت بازطراحی UI و کنار گذاشتن Nuxt UI؛ پیاده‌سازی دیزاین‌سیستم داخلی شرکت (Pantograph) با Tailwind CSS برای یکدستی و نگهداری‌پذیری بیشتر.',
    ],
  },
  Lamasoo: {
    period: 'سپتامبر ۲۰۲۴ – مه ۲۰۲۵',
    bullets: [
      'توسعه‌ی وب‌سایت یک هتل از صفر با Nuxt 3 و Vue 3، با معماری مدرن و مقیاس‌پذیر مبتنی بر SSR، و بهینه‌سازی سئو با Nuxt SEO برای سرعت، نگهداری‌پذیری و دیده‌شدن بهتر در موتورهای جستجو.',
    ],
  },
  Techonica: {
    period: 'ژوئیه ۲۰۲۳ – اوت ۲۰۲۴',
    bullets: [
      'توسعه و نگهداری پلتفرم معاملاتی DeltaFX با React و Next.js (App Router).',
      'توسعه‌ی سیستم پرداخت شامل پنل‌های ادمین، کاربر و ارائه‌دهنده.',
      'توسعه‌ی سیستم مدیریت ریسک شامل ماژول‌های Insight، مشتریان و تراکنش‌ها.',
    ],
  },
  Aasood: {
    period: 'نوامبر ۲۰۲۲ – اوت ۲۰۲۳',
    bullets: [
      'توسعه‌ی پنل مدیریت Aasood.',
      'بازنویسی و توسعه‌ی دو پنل مدیریتی قدیمی با فناوری‌های مدرن.',
    ],
  },
  'Tejarat Shayan': {
    period: 'فوریه ۲۰۲۲ – سپتامبر ۲۰۲۲',
    bullets: [
      'طراحی و توسعه‌ی وب‌اپلیکیشن Ecotam با معماری سمت سرور با Nuxt 3 (نسخه‌ی بتا) و Vue 3، و پیاده‌سازی راه‌حل‌های مقیاس‌پذیر و پرسرعت برای تجربه‌ای مدرن و کاربرپسند.',
    ],
  },
};

/** Same jobs in the same order as `EXPERIENCE`; company names stay in Latin script. */
export const EXPERIENCE_FA: readonly Experience[] = EXPERIENCE.map((job) => {
  const fa = JOBS_FA[job.company];
  // Fail the build rather than ship an English or mismatched entry on /fa/.
  if (!fa) throw new Error(`Missing Persian translation for "${job.company}" in data/resume.fa.ts`);
  return {
    ...job,
    role: ROLE_FA[job.role] ?? job.role,
    period: fa.period,
    location: PERSONAL_FA.location,
    bullets: fa.bullets,
  };
});

export const EDUCATION_FA: readonly Education[] = [
  {
    degree: 'کارشناسی مهندسی صنایع',
    school: 'دانشگاه ایوانکی',
    url: 'https://www.eyc.ac.ir/',
  },
];

export const LANGUAGES_FA: readonly Language[] = [
  { name: 'انگلیسی', level: 'تسلط کاری (در حال پیشرفت)' },
];

export const NAV_LINKS_FA: readonly NavLink[] = [
  { id: 'summary', label: 'خلاصه' },
  { id: 'skills', label: 'مهارت‌ها' },
  { id: 'experience', label: 'سوابق کاری' },
  { id: 'education', label: 'تحصیلات' },
  { id: 'contact', label: 'تماس' },
];
