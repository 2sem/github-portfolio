import { useEffect, useRef } from 'react'
import { useLang } from '../i18n.jsx'

export default function Skills({ skills, onVisible }) {
  const { t, tr } = useLang()
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
      <div className="klabel"><span className="c">//</span> 03 — {t('skills')}</div>
      <div className="skills-grid">
        {skills.map((sg, i) => (
          <div className="skill-group" key={i}>
            <h4>{tr(sg.group)}</h4>
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
