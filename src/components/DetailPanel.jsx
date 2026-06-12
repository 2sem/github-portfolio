import { useEffect, useState } from 'react'
import Diagram from './Diagram.jsx'
import { ProjectCover } from './ProjectVisual.jsx'
import { useLang } from '../i18n.jsx'
import { tagLabel } from '../tagLabels.js'

function ImageModal({ src, alt, onClose }) {
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div className="diagram-overlay" onClick={onClose}>
      <div className="diagram-modal" onClick={e => e.stopPropagation()}>
        <button className="diagram-modal-close" onClick={onClose}>✕</button>
        <img className="image-modal-img" src={src} alt={alt} />
      </div>
    </div>
  )
}

export default function DetailPanel({ project, isInCart, onCartToggle, onClose }) {
  const { t, tr } = useLang()
  const inCart = isInCart(project.id)
  const [zoom, setZoom] = useState(null)

  const techLower = new Set(project.tech.map(x => x.toLowerCase()))
  const extraTags = project.tags
    .map(tagLabel)
    .filter(label => !techLower.has(label.toLowerCase()))

  return (
    <div className="detail-panel">
      <div className="detail-inner">
        <div className="detail-top">
          <div>
            <h3>{project.name}</h3>
            <div className="detail-meta">{project.meta}</div>
          </div>
          <button className="detail-close" onClick={onClose}>
            {t('collapse')}
          </button>
        </div>

        {project.images.length > 0 && (
          <div className="detail-shots">
            {project.images.map((src, i) => {
              const alt = `${project.name} screenshot ${i + 1}`
              return (
                <div
                  key={`i${i}`}
                  className="detail-shot"
                  onClick={() => setZoom({ src, alt })}
                  title="Click to zoom"
                >
                  <img src={src} alt={alt} />
                </div>
              )
            })}
          </div>
        )}
        {(project.diagrams.length > 0 || project.images.length === 0) && (
          <div className="detail-media">
            {project.diagrams.length > 0 ? (
              project.diagrams.map((code, i) => (
                <div key={`d${i}`} className="detail-slide detail-slide--diagram">
                  <Diagram code={code} />
                </div>
              ))
            ) : (
              <div className="detail-slide has-cover">
                <ProjectCover project={project} />
              </div>
            )}
          </div>
        )}

        <div className="detail-body">
          <div>
            <h4>{t('whatItIs')}</h4>
            <p>{tr(project.desc)}</p>
            <h4 className="detail-sec-gap">{t('myRole')}</h4>
            <p>{tr(project.role)}</p>
            {project.achievement && (
              <>
                <h4 className="detail-sec-gap">{t('achievement')}</h4>
                <p>{tr(project.achievement)}</p>
              </>
            )}
          </div>
          <div>
            <h4>{t('techTags')}</h4>
            <div className="detail-chips">
              {project.tech.map(tech => (
                <span key={tech} className="d-chip accent">{tech}</span>
              ))}
              {extraTags.map(label => (
                <span key={label} className="d-chip">{label}</span>
              ))}
            </div>
            {project.links.length > 0 && (
              <>
                <h4>{t('links')}</h4>
                <div className="detail-links">
                  {project.links.map((l, i) => (
                    <a key={i} className="detail-link" href={l.href} target="_blank" rel="noopener noreferrer">
                      {l.label}
                    </a>
                  ))}
                </div>
              </>
            )}
            <button
              className={`detail-add-btn${inCart ? ' in-cart' : ''}`}
              onClick={() => onCartToggle(project.id, project.name)}
            >
              {inCart ? t('inResume') : t('addToResume')}
            </button>
          </div>
        </div>
      </div>
      {zoom && <ImageModal src={zoom.src} alt={zoom.alt} onClose={() => setZoom(null)} />}
    </div>
  )
}
