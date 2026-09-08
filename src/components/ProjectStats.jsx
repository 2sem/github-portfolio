import { useLang } from '../i18n.jsx'

// Renders a project's App Store Connect-style metric block: a sparkline of the
// active-devices history plus a few headline numbers. Driven by the optional
// `stats` field on a project (see README "Anatomy of one project").
export default function ProjectStats({ stats }) {
  const { t, tr } = useLang()
  if (!stats) return null

  const series = (stats.series ?? []).map(Number).filter(n => Number.isFinite(n))
  const W = 320
  const H = 64
  const PAD = 3

  let path = null
  let area = null
  let peakDot = null
  let lastDot = null

  if (series.length > 1) {
    const max = Math.max(...series)
    const min = Math.min(...series)
    const span = max - min || 1
    const pts = series.map((v, i) => {
      const x = PAD + (i / (series.length - 1)) * (W - PAD * 2)
      const y = PAD + (1 - (v - min) / span) * (H - PAD * 2)
      return [x, y]
    })
    path = pts.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(' ')
    area = `${path} L${pts[pts.length - 1][0].toFixed(1)} ${H} L${pts[0][0].toFixed(1)} ${H} Z`
    const peakIdx = series.indexOf(max)
    peakDot = pts[peakIdx]
    lastDot = pts[pts.length - 1]
  }

  return (
    <div className="detail-stats">
      <div className="detail-stats-head">
        <h4>{t('statistics')}</h4>
        {stats.source && <span className="detail-stats-source">{stats.source}</span>}
      </div>

      {path && (
        <svg
          className="detail-stats-spark"
          viewBox={`0 0 ${W} ${H}`}
          preserveAspectRatio="none"
          role="img"
          aria-label={tr(stats.note) || 'active devices trend'}
        >
          <path className="spark-area" d={area} />
          <path className="spark-line" d={path} />
          {peakDot && <circle className="spark-dot spark-dot--peak" cx={peakDot[0]} cy={peakDot[1]} r="2.6" />}
          {lastDot && <circle className="spark-dot" cx={lastDot[0]} cy={lastDot[1]} r="2.6" />}
        </svg>
      )}

      <div className="detail-stats-nums">
        {stats.current && (
          <div className="stat-num">
            <b>{stats.current}</b>
            <span>{tr(stats.currentNote)}</span>
          </div>
        )}
        {stats.peak && (
          <div className="stat-num">
            <b>~{stats.peak}</b>
            <span>{t('statPeak')}{stats.peakWhen ? ` · ${stats.peakWhen}` : ''}</span>
          </div>
        )}
        {stats.since && (
          <div className="stat-num">
            <b>{stats.since}</b>
            <span>{t('statSince')}</span>
          </div>
        )}
      </div>

      {stats.note && <p className="detail-stats-note">{tr(stats.note)}</p>}
    </div>
  )
}
