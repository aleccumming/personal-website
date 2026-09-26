import { projects } from '../data/content'
import { ArrowUpRightIcon, GitHubIcon } from './icons'
import { SectionHeading } from './SectionHeading'

export function Projects() {
  return (
    <section id="projects" className="border-t border-[var(--color-line)] py-12 sm:py-16">
      <SectionHeading index="04" title="Projects" />

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="flex flex-col rounded-2xl border border-[var(--color-line)] p-6 transition-all hover:border-[var(--color-accent)] hover:shadow-[0_4px_20px_-8px_rgba(0,0,0,0.12)]"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-serif text-xl font-medium text-[var(--color-ink)]">{project.name}</h3>
              <span className="font-mono text-xs text-[var(--color-ink-soft)]">{project.years}</span>
            </div>
            <p className="mt-2 text-[15px] leading-relaxed text-[var(--color-ink-soft)]">{project.summary}</p>

            {(project.live || project.repo) && (
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                {project.live && (
                  <a
                    href={project.live.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-[13px] font-medium text-[var(--color-accent)] hover:underline"
                  >
                    {project.live.label}
                    <ArrowUpRightIcon className="h-3.5 w-3.5" />
                  </a>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-ink-soft)] hover:text-[var(--color-accent)]"
                  >
                    <GitHubIcon className="h-3.5 w-3.5" />
                    Source
                  </a>
                )}
              </div>
            )}

            <ul className="mt-4 space-y-2">
              {project.highlights.map((highlight) => (
                <li
                  key={highlight.slice(0, 32)}
                  className="flex gap-2.5 text-[15px] leading-relaxed text-[var(--color-ink-soft)]"
                >
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                  {highlight}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2 pt-1">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-[var(--color-paper-raised)] px-3 py-1 font-mono text-xs text-[var(--color-ink-soft)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
