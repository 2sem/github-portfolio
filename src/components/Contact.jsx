import { useEffect, useRef } from 'react'
import { useLang } from '../i18n.jsx'

export default function Contact({ github, linkedin, email, x, threads, facebook, contactMsg, onVisible }) {
  const { t, tr } = useLang()
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
    { href: github,            name: 'GitHub',   handle: '/' + github.split('/').filter(Boolean).pop() },
    { href: linkedin,          name: 'LinkedIn', handle: '/' + linkedin.split('/').filter(Boolean).pop() },
    x       && { href: x,       name: 'X',        handle: '@' + x.split('/').filter(Boolean).pop() },
    threads  && { href: threads,  name: 'Threads',  handle: '@' + threads.split('/').filter(Boolean).pop().replace('@','') },
    facebook && { href: facebook, name: 'Facebook', handle: '/' + facebook.split('/').filter(Boolean).pop() },
    { href: `mailto:${email}`, name: 'Email',    handle: email, mail: true },
  ].filter(Boolean)

  return (
    <section id="contact" className="contact-section" ref={ref}>
      <div className="klabel"><span className="c">//</span> 04 — {t('contact')}</div>
      <div className="contact-box">
        <div>
          <p className="contact-msg">{tr(contactMsg)}</p>
          <div className="contact-links">
            {links.map((l, i) => (
              <a key={i} className="contact-link" href={l.href} target="_blank" rel="noopener noreferrer">
                <span className="arrow">{l.mail ? '✉' : '↗'}</span>
                <span className="sns-name">{l.name}</span>
                <span className="sns-handle">{l.handle}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="contact-art">
          <div className="contact-status">
            <div className="contact-status-row">
              <span className="cs-key">📍</span>
              <span className="cs-val">{t('location').replace('📍 ', '')}</span>
            </div>
            <div className="contact-status-row">
              <span className="cs-key">🕐</span>
              <span className="cs-val">UTC+9 · KST</span>
            </div>
            <div className="contact-status-row">
              <span className="cs-key cs-green">✓</span>
              <span className="cs-val">{t('openToWork')}</span>
            </div>
            <div className="contact-status-row">
              <span className="cs-key">✉</span>
              <span className="cs-val">{t('replyTime')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
