import { useEffect, useRef } from 'react'

export default function Summary({ tagline, bio, stats, tags, onVisible }) {
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
      <div className="klabel"><span className="c">//</span> 01 — summary</div>
      <h1 className="summary-h1">
        {tagline}
        <span className="blink-cursor" />
      </h1>
      <p className="summary-bio">{bio}</p>

      <div className="stats-grid">
        {stats.map((s, i) => (
          <div className="stat-card" key={i}>
            <div className="stat-num">
              {s.num}
              {s.em && <em>{s.em}</em>}
            </div>
            <div className="stat-cap">{s.cap}</div>
          </div>
        ))}
      </div>

      <div className="tags-row">
        {tags.map((t, i) => (
          <span className="tag-pill" key={i}>{t}</span>
        ))}
      </div>
    </section>
  )
}
