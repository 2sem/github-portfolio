import { useLang } from '../i18n.jsx'
import ProjectVisual from './ProjectVisual.jsx'

export default function ProjectCard({ project, isSelected, isInCart, onSelect, onCartToggle, className = '' }) {
  const { t, tr } = useLang()
  const inCart = isInCart(project.id)

  return (
    <div
      className={`pcard${isSelected ? ' selected' : ''} ${className}`}
      onClick={() => onSelect(project.id)}
    >
      <ProjectVisual project={project} />
      <div className="pcard-body">
        <div className="pcard-title">{project.name}</div>
        <div className="pcard-meta">{project.meta}</div>
        {project.highlight && (
          <div className="pcard-highlight">
            <span className="pcard-highlight-star">★</span>
            {tr(project.highlight)}
          </div>
        )}
        <button
          className={`pcard-add${inCart ? ' in-cart' : ''}`}
          onClick={e => {
            e.stopPropagation()
            onCartToggle(project.id, project.name)
          }}
        >
          {inCart ? t('added') : t('addResume')}
        </button>
      </div>
    </div>
  )
}
