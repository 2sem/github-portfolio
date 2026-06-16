import { useLang } from '../i18n.jsx'
import AvatarDot from './AvatarDot.jsx'

const NAV = [
  { id: 'summary', pre: '01' },
  { id: 'projects', pre: '02' },
  { id: 'skills', pre: '03' },
  { id: 'contact', pre: '04' },
]

export default function Sidebar({ name, role, github, linkedin, email, resume, activeSection }) {
  const { t, tr } = useLang()
  return (
    <aside className="sidebar">
      <AvatarDot realSrc="/images/profile.jpeg" alt="Lee Young-jun" />

      <div className="sidebar-ident">
        <div className="nm">{name}</div>
        <div className="role">{tr(role)}</div>
      </div>

      <nav className="sidebar-nav">
        {NAV.map(item => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={activeSection === item.id ? 'active' : ''}
          >
            <span className="nav-pre">{item.pre}</span>
            {t(item.id)}
          </a>
        ))}
      </nav>

      <div className="sidebar-divider" />

      <div className="sidebar-links">
        <a href={github} target="_blank" rel="noopener noreferrer">
          ↗ {github.replace('https://', '')}
        </a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          ↗ {linkedin.replace('https://', '')}
        </a>
        <a href={`mailto:${email}`}>
          ✉ {email}
        </a>
      </div>

      <div className="sidebar-avail">
        <span className="avail-dot" />
        {t('openToWork')}
      </div>

      <div className="sidebar-spacer" />

      <button
        className="dl-btn"
        onClick={() => window.open(resume)}
      >
        {t('downloadResume')}
      </button>
    </aside>
  )
}
