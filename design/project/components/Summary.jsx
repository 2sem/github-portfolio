import { useEffect, useRef, useState } from 'react'
import { useLang } from '../i18n.jsx'

function useCountUp(target) {
  const [val, setVal] = useState(target) // safe default = real number
  useEffect(() => {
    const n = Number(target)
    if (!isFinite(n) || n === 0) { setVal(target); return }
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) { setVal(target); return }
    let raf, start, cleanup
    const run = () => {
      setVal(0)
      const step = (ts) => {
        if (!start) start = ts
        const p = Math.min((ts - start) / 900, 1)
        setVal(Math.round((1 - Math.pow(1 - p, 3)) * n))
        if (p < 1) raf = requestAnimationFrame(step); else setVal(n)
      }
      raf = requestAnimationFrame(step)
    }
    if (document.visibilityState === 'visible') { run() }
    else {
      const onVis = () => { if (document.visibilityState === 'visible') { run(); document.removeEventListener('visibilitychange', onVis) } }
      document.addEventListener('visibilitychange', onVis)
      cleanup = () => document.removeEventListener('visibilitychange', onVis)
    }
    return () => { if (raf) cancelAnimationFrame(raf); if (cleanup) cleanup() }
  }, [target])
  return val
}

function StatNum({ s }) {
  const v = useCountUp(s.num)
  return <div className="stat-num">{v}{s.em && <em>{s.em}</em>}</div>
}

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
            <StatNum s={s} />
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
