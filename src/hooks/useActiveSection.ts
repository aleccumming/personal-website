import { useEffect, useState } from 'react'

export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) return

    let frame = 0

    const update = () => {
      frame = 0

      // Once scrolled to the bottom of the page, the last section should be
      // active even if it's too short to ever push its top past the
      // reference line below (which would otherwise leave the previous
      // section stuck as "active").
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      if (atBottom) {
        setActive(elements[elements.length - 1].id)
        return
      }

      // Otherwise, a section is "active" once it has scrolled up past this
      // line. Walking the sections in document order and taking the last
      // one past the line avoids picking a section whose top merely happens
      // to fall in some narrow band (which breaks for short sections).
      const referenceLine = window.innerHeight * 0.35

      let current = elements[0].id
      for (const el of elements) {
        if (el.getBoundingClientRect().top <= referenceLine) {
          current = el.id
        } else {
          break
        }
      }
      setActive(current)
    }

    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [ids])

  return active
}
