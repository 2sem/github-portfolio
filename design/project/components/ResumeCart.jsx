import { useState, useRef } from 'react'
import { DATA } from '../data.js'
import { useLang, resolve } from '../i18n.jsx'

const TEMPLATES = ['Compact', 'Detailed', '1-pager']

function buildResumeHTML(cart, template, lang, roleLabel) {
  const tr = (v) => resolve(v, lang)
  const projects = cart
    .map(item => {
      const p = DATA.companies.flatMap(c => c.projects).find(p => p.id === item.id)
      return p || null
    })
    .filter(Boolean)

  const isDetailed = template === 'Detailed'
  const isOnePager = template === '1-pager'

  const projectsHTML = projects.map(p => `
    <div class="proj">
      <div class="proj-name">${p.name}</div>
      <div class="proj-meta">${p.meta}</div>
      ${isDetailed || (!isOnePager) ? `<p class="proj-desc">${tr(p.desc)}</p>` : ''}
      ${isDetailed ? `<p class="proj-role"><strong>${roleLabel}:</strong> ${tr(p.role)}</p>` : ''}
      <div class="proj-tech">${p.tech.map(t => `<span>${t}</span>`).join('')}</div>
      ${p.links.length ? `<div class="proj-links">${p.links.map(l => `<a href="${l.href}">${l.label}</a>`).join(' ')}</div>` : ''}
    </div>
  `).join('')

  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8" />
  <title>${DATA.name} — Resume</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Space Grotesk', sans-serif;
      color: #1a1a1a;
      background: #fff;
      font-size: ${isOnePager ? '13px' : '14px'};
      line-height: 1.5;
      padding: ${isOnePager ? '24px 32px' : '32px 48px'};
      max-width: 800px;
      margin: 0 auto;
    }
    a { color: #1a1a1a; }
    .header { margin-bottom: ${isOnePager ? '16px' : '24px'}; border-bottom: 2px solid #1a1a1a; padding-bottom: 16px; }
    .header h1 { font-size: ${isOnePager ? '22px' : '28px'}; font-weight: 700; letter-spacing: -0.5px; }
    .header .role { font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #555; margin-top: 4px; }
    .header .contact { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #555; margin-top: 8px; display: flex; gap: 16px; flex-wrap: wrap; }
    .section-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: #555;
      margin-bottom: 12px;
      margin-top: ${isOnePager ? '16px' : '24px'};
    }
    .proj { margin-bottom: ${isOnePager ? '12px' : '18px'}; padding-bottom: ${isOnePager ? '12px' : '18px'}; border-bottom: 1px solid #eee; }
    .proj:last-child { border-bottom: none; }
    .proj-name { font-size: ${isOnePager ? '14px' : '16px'}; font-weight: 600; }
    .proj-meta { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #777; margin-top: 2px; }
    .proj-desc { margin-top: 6px; color: #333; }
    .proj-role { margin-top: 4px; color: #333; }
    .proj-tech { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 8px; }
    .proj-tech span { font-family: 'JetBrains Mono', monospace; font-size: 10px; border: 1px solid #ddd; border-radius: 4px; padding: 2px 7px; color: #555; }
    .proj-links { margin-top: 6px; font-family: 'JetBrains Mono', monospace; font-size: 11px; }
    .proj-links a { margin-right: 12px; color: #333; }
    @media print {
      body { padding: 0; }
      @page { margin: 20mm 16mm; }
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>${DATA.name}</h1>
    <div class="role">${tr(DATA.role)}</div>
    <div class="contact">
      <span>${DATA.email}</span>
      <span>${DATA.github.replace('https://', '')}</span>
      <span>${DATA.linkedin.replace('https://', '')}</span>
    </div>
  </div>
  ${projectsHTML}
</body>
</html>`
}

export default function ResumeCart({ cart, onRemove, onReorder, onClose }) {
  const { lang, t } = useLang()
  const [template, setTemplate] = useState('Compact')
  const dragIdx = useRef(null)

  const handleDragStart = (e, idx) => {
    dragIdx.current = idx
    e.dataTransfer.effectAllowed = 'move'
  }

  const handleDragOver = (e, idx) => {
    e.preventDefault()
    if (dragIdx.current === null || dragIdx.current === idx) return
    onReorder(dragIdx.current, idx)
    dragIdx.current = idx
  }

  const handleDragEnd = () => {
    dragIdx.current = null
  }

  const handleGenerate = () => {
    const html = buildResumeHTML(cart, template, lang, t('roleLabel'))
    const win = window.open('', '_blank')
    if (!win) return
    win.document.write(html)
    win.document.close()
    win.onload = () => win.print()
  }

  return (
    <>
      <div className="cart-overlay" onClick={onClose} />
      <div className="cart-drawer">
        <h3>{t('resumeCart')}</h3>
        {cart.length === 0 ? (
          <p className="cart-sub">{t('cartEmpty')}</p>
        ) : (
          <>
            <p className="cart-sub">
              {cart.length}{lang === 'ko' ? '개 프로젝트' : ` project${cart.length !== 1 ? 's' : ''}`} · {t('dragReorder')}
            </p>
            <div>
              {cart.map((item, idx) => (
                <div
                  key={item.id}
                  className="cart-item"
                  draggable
                  onDragStart={e => handleDragStart(e, idx)}
                  onDragOver={e => handleDragOver(e, idx)}
                  onDragEnd={handleDragEnd}
                >
                  <span className="cart-handle">⠿</span>
                  <span className="cart-item-name">{item.name}</span>
                  <button
                    className="cart-item-rm"
                    onClick={() => onRemove(item.id)}
                    aria-label="Remove"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
            <div className="cart-opts">
              <h4>{t('template')}</h4>
              <div className="template-seg">
                {TEMPLATES.map(t => (
                  <button
                    key={t}
                    className={`template-opt${template === t ? ' active' : ''}`}
                    onClick={() => setTemplate(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <button className="gen-btn" onClick={handleGenerate}>
                {t('generatePdf')}
              </button>
            </div>
          </>
        )}
      </div>
    </>
  )
}
