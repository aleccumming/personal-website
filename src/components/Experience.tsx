import { experience } from '../data/content'
import { SectionHeading } from './SectionHeading'

export function Experience() {
  return (
    <section id="experience" className="border-t border-[var(--color-line)] py-12 sm:py-16">
      <SectionHeading index="02" title="Experience" />
      <div className="mt-8 space-y-10">
        {experience.map((employer) => (
          <div key={employer.company}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-base font-semibold text-[var(--color-ink)]">{employer.company}</h3>
              <span className="font-mono text-xs text-[var(--color-ink-soft)]">{employer.years}</span>
            </div>
            <div className="mt-4 space-y-6 border-l border-[var(--color-line)] pl-5">
              {employer.roles.map((role) => (
                <div key={role.title}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <p className="text-sm font-medium text-[var(--color-ink)]">{role.title}</p>
                    <span className="font-mono text-xs text-[var(--color-ink-soft)]">{role.years}</span>
                  </div>
                  {role.tech && <p className="mt-1 text-xs text-[var(--color-accent)]">{role.tech}</p>}
                  <ul className="mt-2 max-w-2xl space-y-1.5">
                    {role.bullets.map((bullet) => (
                      <li
                        key={bullet.slice(0, 32)}
                        className="text-[15px] leading-relaxed text-[var(--color-ink-soft)]"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
