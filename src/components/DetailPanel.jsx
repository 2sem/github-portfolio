import Diagram from './Diagram.jsx'
import { useLang } from '../i18n.jsx'

export default function DetailPanel({ project, isInCart, onCartToggle, onClose }) {
  const { t, tr } = useLang()
  const inCart = isInCart(project.id)

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

        <div className="detail-media">
          {project.diagrams.map((code, i) => (
            <div key={i} className="detail-slide detail-slide--diagram">
              <Diagram code={code} />
            </div>
          ))}
          {project.images.map((src, i) => (
            <div key={i} className="detail-slide">
              <img src={src} alt={`${project.name} screenshot ${i + 1}`} />
            </div>
          ))}
          {project.diagrams.length === 0 && project.images.length === 0 && (
            <div className="detail-slide">
              <span className="detail-slide-lbl">{t('noScreenshots')}</span>
            </div>
          )}
        </div>

        <div className="detail-body">
          <div>
            <h4>{t('whatItIs')}</h4>
            <p>{tr(project.desc)}</p>
            <h4 className="detail-sec-gap">{t('myRole')}</h4>
            <p>{tr(project.role)}</p>
          </div>
          <div>
            <h4>{t('techTags')}</h4>
            <div className="detail-chips">
              {project.tech.map(t => (
                <span key={t} className="d-chip accent">{t}</span>
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
    </div>
  )
}
