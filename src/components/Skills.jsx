import { useEffect, useRef } from 'react'

export default function Skills({ skills, onVisible }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) onVisible() },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [onVisible])

  return (
    <section id="skills" className="skills-section" ref={ref}>
      <div className="klabel"><span className="c">//</span> 03 — skills</div>
      <div className="skills-grid">
        {skills.map(sg => (
          <div className="skill-group" key={sg.group}>
            <h4>{sg.group}</h4>
            <div className="skill-chips">
              {sg.chips.map(c => (
                <span className="s-chip" key={c}>{c}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
