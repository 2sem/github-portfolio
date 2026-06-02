export default function DetailPanel({ project, isInCart, onCartToggle, onClose }) {
  const inCart = isInCart(project.id)

  return (
    <div className="detail-panel">
      <div className="detail-inner">
        <div className="detail-top">
          <div>
            <h3>{project.name}</h3>
            <div className="detail-meta">{project.meta}</div>
          </div>
          <button className="detail-close" onClick={onClose}>
            collapse ✕
          </button>
        </div>

        <div className="detail-media">
          <div className="detail-slide">
            {project.image
              ? <img src={project.image} alt={project.name} />
              : <span className="detail-slide-lbl">screenshot slideshow</span>
            }
          </div>
          <div className="detail-slide">
            <span className="detail-slide-lbl">demo / video</span>
          </div>
        </div>

        <div className="detail-body">
          <div>
            <h4>What it is</h4>
            <p>{project.desc}</p>
            <h4 className="detail-sec-gap">My role</h4>
            <p>{project.role}</p>
          </div>
          <div>
            <h4>Tech / tags</h4>
            <div className="detail-chips">
              {project.tech.map(t => (
                <span key={t} className="d-chip accent">{t}</span>
              ))}
            </div>
            {project.links.length > 0 && (
              <>
                <h4>Links</h4>
                <div className="detail-links">
                  {project.links.map((l, i) => (
                    <a key={i} className="detail-link" href={l.href} target="_blank" rel="noopener noreferrer">
                      {l.label}
                    </a>
                  ))}
                </div>
              </>
            )}
            <button
              className={`detail-add-btn${inCart ? ' in-cart' : ''}`}
              onClick={() => onCartToggle(project.id, project.name)}
            >
              {inCart ? '✓ In resume' : '+ Add to resume'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
