import { profile } from '../data/content'
import { EmailIcon, GitHubIcon, LinkedInIcon } from './icons'
import { SectionHeading } from './SectionHeading'

const socialIcons = {
  Email: EmailIcon,
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
}

export function Contact() {
  return (
    <section id="contact" className="border-t border-[var(--color-line)] py-12 sm:py-16">
      <SectionHeading index="05" title="Contact" />
      <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[var(--color-ink-soft)] sm:text-base">
        For roles, projects, or questions about the work above, feel free to reach out.
      </p>
      <a
        href={`mailto:${profile.email}`}
        className="mt-6 inline-block rounded-full bg-[var(--color-ink)] px-6 py-3 text-sm font-medium text-[var(--color-paper)] transition-opacity hover:opacity-85"
      >
        {profile.email}
      </a>
      <ul className="mt-6 flex items-center gap-6">
        {profile.social.map((item) => {
          const Icon = socialIcons[item.name as keyof typeof socialIcons]
          return (
            <li key={item.name}>
              <a
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                aria-label={item.name}
                className="flex items-center gap-2 text-sm text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-accent)]"
              >
                <Icon className="h-4 w-4" />
                {item.name}
              </a>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
