import { useEffect, useRef } from 'react'
import { useLang } from '../i18n.jsx'
import { DATA } from '../data.js'

export default function Experiences({ onVisible }) {
  const { t, tr } = useLang()
  const ref = useRef(null)

  useEffect(() => {
    if (!onVisible) return
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) onVisible() },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [onVisible])

  const endKey = (when) => {
    const years = [...String(when).matchAll(/(\d{4})(?:\.(\d{2}))?/g)]
      .map(m => Number(m[1]) * 100 + (m[2] ? Number(m[2]) : 0))
    return years.length ? Math.max(...years) : 0
  }

  const companies = DATA.companies
    .filter(c => c.story)
    .sort((a, b) => endKey(b.when) - endKey(a.when))

  return (
    <section id="experiences" className="section" ref={ref}>
      <div className="klabel"><span className="c">//</span> 02 — {t('experiences')}</div>
      <div className="exp-list">
        {companies.map(c => (
          <div key={c.id} className="exp-row">
            <div className="exp-top">
              <span className="exp-name">{c.name}</span>
              <span className="exp-when">{c.when}</span>
              <span className="exp-desc">{tr(c.desc)}</span>
            </div>
            <div className="exp-story">{tr(c.story)}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
