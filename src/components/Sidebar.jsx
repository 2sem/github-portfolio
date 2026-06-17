import { useLang } from '../i18n.jsx'
import AvatarDot from './AvatarDot.jsx'

const NAV = [
  { id: 'summary', pre: '01' },
  { id: 'projects', pre: '02' },
  { id: 'skills', pre: '03' },
  { id: 'contact', pre: '04' },
]

export default function Sidebar({ name, role, github, linkedin, email, x, threads, facebook, activeSection }) {
  const { t, tr, lang } = useLang()
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
          <span className="sns-name">GitHub</span>
          <span className="sns-handle">/{github.split('/').filter(Boolean).pop()}</span>
        </a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <span className="sns-name">LinkedIn</span>
          <span className="sns-handle">/{linkedin.split('/').filter(Boolean).pop()}</span>
        </a>
        {x && <a href={x} target="_blank" rel="noopener noreferrer">
          <span className="sns-name">X</span>
          <span className="sns-handle">@{x.split('/').filter(Boolean).pop()}</span>
        </a>}
        {threads && <a href={threads} target="_blank" rel="noopener noreferrer">
          <span className="sns-name">Threads</span>
          <span className="sns-handle">@{threads.split('/').filter(Boolean).pop().replace('@','')}</span>
        </a>}
        {facebook && <a href={facebook} target="_blank" rel="noopener noreferrer">
          <span className="sns-name">Facebook</span>
          <span className="sns-handle">/{facebook.split('/').filter(Boolean).pop()}</span>
        </a>}
        <a href={`mailto:${email}`}>
          <span className="sns-name">Email</span>
          <span className="sns-handle">{email}</span>
        </a>
      </div>

      <div className="sidebar-avail">
        <span className="avail-dot" />
        {t('openToWork')}
      </div>

      <div className="sidebar-spacer" />

      <button
        className="dl-btn"
        onClick={() => window.open(lang === 'ko' ? '/Lee-Young-jun-Resume-ko.pdf' : '/Lee-Young-jun-Resume-en.pdf', '_blank')}
      >
        {t('downloadResume')}
      </button>
    </aside>
  )
}
