import { useEffect, useRef } from 'react'

export default function Contact({ github, linkedin, email, contactMsg, onVisible }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) onVisible() },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [onVisible])

  const links = [
    { href: github, label: github.replace('https://', ''), type: 'arrow' },
    { href: linkedin, label: linkedin.replace('https://', ''), type: 'arrow' },
    { href: `mailto:${email}`, label: email, type: 'mail' },
  ]

  return (
    <section id="contact" className="contact-section" ref={ref}>
      <div className="klabel"><span className="c">//</span> 04 — contact</div>
      <div className="contact-box">
        <div>
          <p className="contact-msg">{contactMsg}</p>
          <div className="contact-links">
            {links.map((l, i) => (
              <a key={i} className="contact-link" href={l.href} target="_blank" rel="noopener noreferrer">
                <span className="arrow">{l.type === 'mail' ? '✉' : '↗'}</span>
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="contact-art">
          <span className="lbl">📍 location</span>
        </div>
      </div>
    </section>
  )
}
