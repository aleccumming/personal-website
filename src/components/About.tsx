import { education, profile } from '../data/content'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section id="about" className="py-10 sm:py-14 lg:pt-20 lg:pb-16">
      <SectionHeading index="01" title="About" />
      <div className="mt-4 max-w-2xl space-y-4 text-[15px] leading-relaxed text-[var(--color-ink-soft)] sm:text-base">
        {profile.bio.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>
      <p className="mt-5 text-sm text-[var(--color-ink-soft)]">
        <span className="text-[var(--color-ink)]">{education.school}</span> — {education.degree}
        <span className="block text-[var(--color-ink-soft)]">{education.years}</span>
      </p>
    </section>
  )
}
