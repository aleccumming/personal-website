import { skills } from '../data/content'
import { SectionHeading } from './SectionHeading'

export function Skills() {
  return (
    <section id="skills" className="border-t border-[var(--color-line)] py-12 sm:py-16">
      <SectionHeading index="03" title="Skills" />
      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="text-sm font-medium tracking-wide text-[var(--color-ink-soft)] uppercase">
              {group.category}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--color-line)] px-3 py-1 text-sm text-[var(--color-ink)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
