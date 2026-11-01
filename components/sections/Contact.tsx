import { Mail, MapPin, Phone } from 'lucide-react';
import { LinkedinIcon } from '@/components/ui/icons/LinkedinIcon';
import { ContactCard } from '@/components/ui/ContactCard';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { Content } from '@/data/content';

export function Contact({ content }: { content: Content }) {
  const { personal, ui } = content;
  const section = ui.sections.contact;
  const items = [
    { icon: Mail, label: ui.contact.email, value: personal.email, href: `mailto:${personal.email}`, external: false, ltr: true },
    { icon: Phone, label: ui.contact.phone, value: personal.phone, href: `tel:${personal.phoneHref}`, external: false, ltr: true },
    { icon: MapPin, label: ui.contact.location, value: personal.location, href: '#contact', external: false, ltr: false },
    { icon: LinkedinIcon, label: ui.contact.linkedin, value: personal.linkedinHandle, href: personal.linkedinUrl, external: true, ltr: true },
  ] as const;

  return (
    <section
      id="contact"
      aria-label={section.label}
      className="scroll-mt-20 py-16 md:py-24"
    >
      <Container>
        <SectionHeading eyebrow={section.eyebrow}>{section.title}</SectionHeading>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {items.map((it) => (
            <ContactCard
              key={it.href}
              icon={it.icon}
              label={it.label}
              value={it.value}
              href={it.href}
              external={it.external}
              ltr={it.ltr}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
