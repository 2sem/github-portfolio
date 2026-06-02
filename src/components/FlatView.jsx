import { useState } from 'react'
import DetailPanel from './DetailPanel.jsx'

export default function FlatView({ projects, isInCart, onCartToggle }) {
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
            <div className="pcard-shot">
              {p.image
                ? <img src={p.image} alt={p.name} />
                : <span className="pcard-shot-lbl">screenshot</span>
              }
            </div>
            <div className="pcard-body">
              <div className="pcard-title">{p.name}</div>
              <div className="pcard-meta">{p.meta}</div>
              <button
                className={`pcard-add${isInCart(p.id) ? ' in-cart' : ''}`}
                onClick={e => {
                  e.stopPropagation()
                  onCartToggle(p.id, p.name)
                }}
              >
                {isInCart(p.id) ? '✓ added' : '+ resume'}
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
