import { useLang } from '../i18n.jsx'
import ProjectVisual from './ProjectVisual.jsx'

export default function ProjectCard({ project, isSelected, isInCart, onSelect, onCartToggle, className = '' }) {
  const { t, lang } = useLang()
  const inCart = isInCart(project.id)
  const displayName = (lang === 'en' && project.nameEn) ? project.nameEn : project.name

  return (
    <div
      className={`pcard${isSelected ? ' selected' : ''} ${className}`}
      onClick={() => onSelect(project.id)}
    >
      <ProjectVisual project={project} />
      <div className="pcard-body">
        <div className="pcard-title">{displayName}</div>
        <div className="pcard-meta">{project.meta}</div>
        <button
          className={`pcard-add${inCart ? ' in-cart' : ''}`}
          onClick={e => {
            e.stopPropagation()
            onCartToggle(project.id, displayName)
          }}
        >
          {inCart ? t('added') : t('addResume')}
        </button>
      </div>
    </div>
  )
}
