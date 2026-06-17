import { useState } from 'react'
import { useLang } from '../i18n.jsx'
import DetailPanel from './DetailPanel.jsx'
import ProjectVisual from './ProjectVisual.jsx'

export default function FlatView({ projects, isInCart, onCartToggle }) {
  const { t, lang } = useLang()
  const [selected, setSelected] = useState(null)

  const handleSelect = (id) => {
    setSelected(prev => prev === id ? null : id)
  }

  const selectedProject = projects.find(p => p.id === selected)

  return (
    <div>
      <div className="flat-grid">
        {projects.map(p => (
          <div
            key={p.id}
            className={`flat-card${selected === p.id ? ' selected' : ''}`}
            onClick={() => handleSelect(p.id)}
          >
            <ProjectVisual project={p} />
            <div className="pcard-body">
              <div className="pcard-title">{(lang === 'en' && p.nameEn) ? p.nameEn : p.name}</div>
              <div className="pcard-meta">{p.meta}</div>
              <button
                className={`pcard-add${isInCart(p.id) ? ' in-cart' : ''}`}
                onClick={e => {
                  e.stopPropagation()
                  onCartToggle(p.id, (lang === 'en' && p.nameEn) ? p.nameEn : p.name)
                }}
              >
                {isInCart(p.id) ? t('added') : t('addResume')}
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <DetailPanel
          project={selectedProject}
          isInCart={isInCart}
          onCartToggle={onCartToggle}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  )
}
