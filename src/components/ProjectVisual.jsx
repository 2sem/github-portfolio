import Diagram from './Diagram.jsx'
import { useLang } from '../i18n.jsx'

export default function ProjectVisual({ project }) {
  const { t } = useLang()
  const diagram = project.diagrams?.[0]

  return (
    <div className={`pcard-shot${!project.image && diagram ? ' pcard-shot--diagram' : ''}`}>
      {project.image ? (
        <img src={project.image} alt={project.name} />
      ) : diagram ? (
        <Diagram code={diagram} interactive={false} />
      ) : (
        <span className="pcard-shot-lbl">{t('screenshot')}</span>
      )}
    </div>
  )
}
