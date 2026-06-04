import { useEffect, useRef } from 'react'
import { useLang } from '../i18n.jsx'

export default function Summary({ tagline, bio, stats, tags, onVisible }) {
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
    <section id="summary" className="summary-section" ref={ref}>
      <div className="klabel"><span className="c">//</span> 01 — {t('summary')}</div>
      <h1 className="summary-h1">
        {tr(tagline)}
        <span className="blink-cursor" />
      </h1>
      <p className="summary-bio">{tr(bio)}</p>

      <div className="stats-grid">
        {stats.map((s, i) => (
          <div className="stat-card" key={i}>
            <div className="stat-num">
              {s.num}
              {s.em && <em>{s.em}</em>}
            </div>
            <div className="stat-cap">{tr(s.cap)}</div>
          </div>
        ))}
      </div>

      <div className="tags-row">
        {tags.map((tag, i) => (
          <span className="tag-pill" key={i}>{tr(tag)}</span>
        ))}
      </div>
    </section>
  )
}
