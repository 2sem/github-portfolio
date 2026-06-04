import { useLang } from '../i18n.jsx'

export default function ProjectCard({ project, isSelected, isInCart, onSelect, onCartToggle, className = '' }) {
  const { t } = useLang()
  const inCart = isInCart(project.id)

  return (
    <div
      className={`pcard${isSelected ? ' selected' : ''} ${className}`}
      onClick={() => onSelect(project.id)}
    >
      <div className="pcard-shot">
        {project.image
          ? <img src={project.image} alt={project.name} />
          : <span className="pcard-shot-lbl">{t('screenshot')}</span>
        }
      </div>
      <div className="pcard-body">
        <div className="pcard-title">{project.name}</div>
        <div className="pcard-meta">{project.meta}</div>
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
