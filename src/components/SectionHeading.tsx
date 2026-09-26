type Props = {
  index: string
  title: string
}

export function SectionHeading({ index, title }: Props) {
  return (
    <h2 className="flex items-baseline gap-3 font-serif text-2xl font-medium text-[var(--color-ink)]">
      <span className="font-mono text-base font-normal text-[var(--color-accent)]">{index}</span>
      {title}
    </h2>
  )
}
