import { profile } from '../data/content'

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-1 px-6 text-center text-xs text-[var(--color-ink-soft)] sm:px-10 lg:px-12">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  )
}
