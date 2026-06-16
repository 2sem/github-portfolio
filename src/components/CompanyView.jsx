import { useState } from 'react'
import { useLang } from '../i18n.jsx'
import ProjectCard from './ProjectCard.jsx'
import DetailPanel from './DetailPanel.jsx'

export default function CompanyView({ companies, isInCart, onCartToggle }) {
  const { t, tr } = useLang()
  const [selected, setSelected] = useState(null)

  const handleSelect = (projectId, companyId) => {
    if (selected?.projectId === projectId) {
      setSelected(null)
    } else {
      setSelected({ projectId, companyId })
    }
  }

  const getProject = (id) => {
    for (const co of companies) {
      const p = co.projects.find(p => p.id === id)
      if (p) return p
    }
    return null
  }

  return (
    <div>
      {companies.filter(co => co.projects.length > 0).map(co => (
        <div key={co.id} className="co-section">
          <div className="co-head">
            <span className="co-name">## {co.name}</span>
            <span className="co-when">
              {co.when} · {tr(co.role)}
              {co.cur && <> · <span className="co-cur">{t('now')}</span></>}
            </span>
          </div>
          <div className="scroll-hint">{t('scrollHint')}</div>
          <div className="gallery">
            {co.projects.map(p => (
              <ProjectCard
                key={p.id}
                project={p}
                isSelected={selected?.projectId === p.id}
                isInCart={isInCart}
                onSelect={(id) => handleSelect(id, co.id)}
                onCartToggle={onCartToggle}
              />
            ))}
          </div>
          {selected?.companyId === co.id && selected?.projectId && (
            <DetailPanel
              project={getProject(selected.projectId)}
              isInCart={isInCart}
              onCartToggle={onCartToggle}
              onClose={() => setSelected(null)}
            />
          )}
        </div>
      ))}
    </div>
  )
}
