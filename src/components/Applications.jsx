import { useEffect, useRef, useState } from 'react'
import { useLang } from '../i18n.jsx'
import { DATA } from '../data.js'

// A prose field is either a single string (→ paragraph) or an array of
// strings (→ bullet list), same convention as project desc/role fields.
function Prose({ value }) {
  if (Array.isArray(value)) {
    return (
      <ul className="detail-list">
        {value.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    )
  }
  return <p>{value}</p>
}

function appliedKey(app) {
  const m = String(app.appliedDate || '').match(/(\d{4})-(\d{2})(?:-(\d{2}))?/)
  if (!m) return 0
  return Number(m[1]) * 10000 + Number(m[2]) * 100 + Number(m[3] || 1)
}

function monthOf(app) {
  const m = String(app.appliedDate || '').match(/(\d{4}-\d{2})/)
  return m ? m[1] : ''
}

export default function Applications({ onVisible }) {
  const { t, tr, lang } = useLang()
  const ref = useRef(null)
  const [selectedId, setSelectedId] = useState(null)
  const [query, setQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState(null)

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

  const applications = [...(DATA.applications || [])].sort((a, b) => appliedKey(b) - appliedKey(a))

  if (applications.length === 0) return null

  const statuses = [...new Set(applications.map(a => a.status && tr(a.status)).filter(Boolean))]
  const q = query.trim().toLowerCase()
  const visible = applications.filter(a => {
    if (statusFilter && (a.status ? tr(a.status) : null) !== statusFilter) return false
    if (!q) return true
    return `${a.company} ${tr(a.jobTitle)}`.toLowerCase().includes(q)
  })
  const groups = []
  for (const app of visible) {
    const month = monthOf(app)
    const last = groups[groups.length - 1]
    if (last && last.month === month) last.items.push(app)
    else groups.push({ month, items: [app] })
  }
  const resumeHref = (app) => app.resumeFile || (lang === 'ko' ? '/Lee-Young-jun-Resume-ko.pdf' : '/Lee-Young-jun-Resume-en.pdf')

  return (
    <section id="applications" className="section applications-section" ref={ref}>
      <div className="klabel"><span className="c">//</span> 06 — {t('applications')}</div>
      <div className="app-toolbar">
        <span className="app-count">
          {visible.length === applications.length
            ? t('appCount').replace('{n}', applications.length)
            : t('appCountFiltered').replace('{n}', visible.length).replace('{total}', applications.length)}
        </span>
        <input
          className="app-search"
          type="search"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder={t('appSearchPlaceholder')}
          aria-label={t('appSearchPlaceholder')}
        />
      </div>
      {statuses.length > 1 && (
        <div className="app-filters">
          {statuses.map(st => (
            <button
              key={st}
              type="button"
              className={`app-chip${statusFilter === st ? ' on' : ''}`}
              aria-pressed={statusFilter === st}
              onClick={() => setStatusFilter(statusFilter === st ? null : st)}
            >
              {st}
            </button>
          ))}
        </div>
      )}
      {visible.length === 0 && <div className="app-empty">{t('appNoMatch')}</div>}
      <div className="app-list">
        {groups.map(group => (
          <div key={group.month} className="app-group">
            <div className="app-month">{group.month}</div>
            {group.items.map(app => (
          <div key={app.id}>
            <div
              className={`app-row${selectedId === app.id ? ' active' : ''}`}
              role="button"
              tabIndex={0}
              aria-expanded={selectedId === app.id}
              onClick={() => setSelectedId(selectedId === app.id ? null : app.id)}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setSelectedId(selectedId === app.id ? null : app.id)
                }
              }}
            >
              <span className="app-company">{app.company}</span>
              <span className="app-title">{tr(app.jobTitle)}</span>
              <span className="app-when">{app.appliedDate}</span>
              {app.status && <span className="app-status">{tr(app.status)}</span>}
            </div>
            {selectedId === app.id && (
              <div className="detail-panel app-detail">
                <div className="detail-inner">
                  <div className="detail-top">
                    <div>
                      <h3>{app.company}</h3>
                      <div className="detail-meta">{tr(app.jobTitle)} · {app.appliedDate}</div>
                    </div>
                    <button className="detail-close" onClick={() => setSelectedId(null)}>
                      {t('collapse')}
                    </button>
                  </div>
                  <div className="detail-body">
                    <div>
                      {app.jd && (
                        <>
                          <h4>{t('jobDescription')}</h4>
                          <Prose value={tr(app.jd)} />
                        </>
                      )}
                      {app.jdUrl && (
                        <div className="detail-links">
                          <a className="detail-link" href={app.jdUrl} target="_blank" rel="noopener noreferrer">
                            {t('originalPosting')}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="resume-dl">
                    <a
                      className="resume-dl-btn"
                      href={resumeHref(app)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t('viewResume')}
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
