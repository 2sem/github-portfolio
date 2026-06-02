export default function Topbar({ theme, onToggleTheme, cartCount, onToggleCart }) {
  return (
    <div className="topbar">
      <div className="topbar-dots">
        <span className="topbar-dot" style={{ background: '#e05252' }} />
        <span className="topbar-dot" style={{ background: '#e0c34f' }} />
        <span className="topbar-dot" style={{ background: '#34d986' }} />
      </div>
      <span className="topbar-path">
        ~/portfolio <b>$</b>{' '}
        <span style={{ opacity: 0.55 }}>./run --layout=A</span>
      </span>
      <div className="topbar-right">
        <button className="pill" onClick={onToggleTheme}>
          ◑ theme:{theme}
        </button>
        <button className="pill" onClick={onToggleCart}>
          resume <span className="pill-badge">{cartCount}</span>
        </button>
      </div>
    </div>
  )
}
