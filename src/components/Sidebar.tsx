import { liveProjects, profile } from '../data/content'
import { useActiveSection } from '../hooks/useActiveSection'
import { ArrowUpRightIcon, EmailIcon, GitHubIcon, LinkedInIcon } from './icons'

const links = [
  { id: 'about', label: 'About', index: '01' },
  { id: 'experience', label: 'Experience', index: '02' },
  { id: 'skills', label: 'Skills', index: '03' },
  { id: 'projects', label: 'Projects', index: '04' },
  { id: 'contact', label: 'Contact', index: '05' },
] as const

const sectionIds = links.map((link) => link.id)

const socialIcons = {
  Email: EmailIcon,
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
}

export function Sidebar() {
  const active = useActiveSection(sectionIds)

  return (
    <header
      id="top"
      className="flex flex-col pt-14 pb-10 sm:pt-16 lg:sticky lg:top-0 lg:h-screen lg:justify-between lg:py-20"
    >
      <div>
        <img
          src="/images/profilepic.jpg"
          alt="Alec Cumming"
          className="h-20 w-20 rounded-2xl object-cover lg:h-28 lg:w-28"
        />
        <h1 className="mt-5 font-serif text-3xl font-medium tracking-tight text-[var(--color-ink)]">
          {profile.name}
        </h1>
        <p className="mt-2 text-sm tracking-wide text-[var(--color-ink-soft)] uppercase">
          {profile.role} · {profile.location}
        </p>
        <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-[var(--color-ink-soft)] lg:max-w-none">
          {profile.tagline}
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-3 lg:hidden">
          <a
            href="#projects"
            className="rounded-full bg-[var(--color-ink)] px-5 py-2.5 text-sm font-medium text-[var(--color-paper)] transition-opacity hover:opacity-85"
          >
            See my work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-[var(--color-line)] px-5 py-2.5 text-sm font-medium text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            Get in touch
          </a>
        </div>

        <nav className="mt-12 hidden lg:block">
          <ul className="space-y-3">
            {links.map((link) => {
              const isActive = active === link.id
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={`group flex items-center gap-3 text-sm font-medium transition-colors ${
                      isActive ? 'text-[var(--color-ink)]' : 'text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]'
                    }`}
                  >
                    <span
                      className={`h-px w-6 transition-all ${
                        isActive
                          ? 'w-10 bg-[var(--color-accent)]'
                          : 'bg-[var(--color-ink-soft)] group-hover:w-10 group-hover:bg-[var(--color-accent)]'
                      }`}
                    />
                    <span className="font-mono text-xs">{link.index}</span>
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="mt-12">
          <p className="text-xs font-medium tracking-wide text-[var(--color-ink-soft)] uppercase">Live projects</p>
          <ul className="mt-3 space-y-2">
            {liveProjects.map((project) => (
              <li key={project.name}>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-1.5 font-mono text-[13px] text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-accent)]"
                >
                  {project.label}
                  <ArrowUpRightIcon className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ul className="mt-10 flex items-center gap-5 lg:mt-0">
        {profile.social.map((item) => {
          const Icon = socialIcons[item.name as keyof typeof socialIcons]
          return (
            <li key={item.name}>
              <a
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                aria-label={item.name}
                className="block text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-accent)]"
              >
                <Icon className="h-5 w-5" />
              </a>
            </li>
          )
        })}
      </ul>
    </header>
  )
}
