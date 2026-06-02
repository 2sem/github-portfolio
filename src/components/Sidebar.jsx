const NAV = [
  { id: 'summary', pre: '01', label: 'summary' },
  { id: 'projects', pre: '02', label: 'projects' },
  { id: 'skills', pre: '03', label: 'skills' },
  { id: 'contact', pre: '04', label: 'contact' },
]

export default function Sidebar({ name, role, github, linkedin, email, resume, activeSection }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-avatar">&gt;_</div>

      <div className="sidebar-ident">
        <div className="nm">{name}</div>
        <div className="role">{role}</div>
      </div>

      <nav className="sidebar-nav">
        {NAV.map(item => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={activeSection === item.id ? 'active' : ''}
          >
            <span className="nav-pre">{item.pre}</span>
            {item.label}
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
        open_to_work
      </div>

      <div className="sidebar-spacer" />

      <button
        className="dl-btn"
        onClick={() => window.open(resume)}
      >
        ⬇ download résumé
      </button>
    </aside>
  )
}
