import { useState } from 'react'
import { DATA } from '../data.js'
import { useLang, resolve } from '../i18n.jsx'

const TEMPLATES = ['Compact', 'Detailed', '1-pager']

function endKey(when) {
  const years = [...String(when).matchAll(/(\d{4})(?:\.(\d{2}))?/g)]
    .map(m => Number(m[1]) * 100 + (m[2] ? Number(m[2]) : 0))
  return years.length ? Math.max(...years) : 0
}

function groupByCompany(cart) {
  const cartIds = new Set(cart.map(x => x.id))
  return DATA.companies
    .map(co => ({
      ...co,
      cartProjects: co.projects.filter(p => cartIds.has(p.id)),
    }))
    .filter(co => co.cartProjects.length > 0)
    .sort((a, b) => endKey(b.when) - endKey(a.when))
}

function buildResumeHTML(cart, template, lang, roleLabel) {
  const tr = (v) => resolve(v, lang)
  const isDetailed = template === 'Detailed'
  const isOnePager = template === '1-pager'

  const groups = groupByCompany(cart)

  const groupsHTML = groups.map(co => {
    const projectsHTML = co.cartProjects.map(p => `
      <div class="proj">
        <div class="proj-name">${lang === 'en' && p.nameEn ? p.nameEn : p.name}</div>
        <div class="proj-meta">${p.meta}</div>
        ${p.highlight ? `<div class="proj-highlight">${tr(p.highlight)}</div>` : ''}
        ${isDetailed ? `<p class="proj-desc">${tr(p.desc)}</p>` : ''}
        ${isDetailed ? `<p class="proj-role"><strong>${roleLabel}:</strong> ${tr(p.role)}</p>` : ''}
        ${isOnePager
          ? `<div class="proj-tech-inline">${p.tech.join(' · ')}</div>`
          : `<div class="proj-tech">${p.tech.map(t => `<span>${t}</span>`).join('')}</div>`}
        ${!isOnePager && p.links.length ? `<div class="proj-links">${p.links.map(l => `<a href="${l.href}">${l.label}</a>`).join(' ')}</div>` : ''}
      </div>
    `).join('')

    return `
      <div class="co-block">
        <div class="co-header">
          <div class="co-name-row">
            <strong class="co-name">${co.name}</strong>
            <span class="co-when">${co.when}</span>
            <span class="co-role">${tr(co.role)}</span>
          </div>
          ${co.story ? `<p class="co-story">${tr(co.story)}</p>` : ''}
        </div>
        <div class="projects">${projectsHTML}</div>
      </div>
    `
  }).join('')

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
      font-size: ${isOnePager ? '12px' : '14px'};
      line-height: 1.5;
      padding: ${isOnePager ? '20px 28px' : '32px 48px'};
      max-width: 800px;
      margin: 0 auto;
    }
    a { color: #1a1a1a; }
    .header { margin-bottom: ${isOnePager ? '14px' : '24px'}; border-bottom: 2px solid #1a1a1a; padding-bottom: 14px; }
    .header h1 { font-size: ${isOnePager ? '20px' : '28px'}; font-weight: 700; letter-spacing: -0.5px; }
    .header .role { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #555; margin-top: 4px; }
    .header .contact { font-family: 'JetBrains Mono', monospace; font-size: 10px; color: #555; margin-top: 6px; display: flex; gap: 16px; flex-wrap: wrap; }
    .co-block { margin-top: ${isOnePager ? '14px' : '24px'}; }
    .co-block + .co-block { border-top: 1px solid #e0e0e0; padding-top: ${isOnePager ? '14px' : '24px'}; }
    .co-header { margin-bottom: ${isOnePager ? '8px' : '12px'}; }
    .co-name-row { display: flex; align-items: baseline; gap: 8px; flex-wrap: wrap; }
    .co-name { font-size: ${isOnePager ? '12px' : '15px'}; font-weight: 700; letter-spacing: 0.02em; }
    .co-when { font-family: 'JetBrains Mono', monospace; font-size: ${isOnePager ? '9px' : '11px'}; color: #444; }
    .co-role { font-family: 'JetBrains Mono', monospace; font-size: ${isOnePager ? '9px' : '11px'}; color: #333; }
    .co-story { font-size: ${isOnePager ? '11px' : '13px'}; color: #333; margin-top: 4px; font-style: italic; }
    .projects { ${isOnePager ? 'display: grid; grid-template-columns: 1fr 1fr; gap: 0 20px;' : ''} padding-top: ${isOnePager ? '6px' : '10px'}; }
    .proj { margin-bottom: ${isOnePager ? '8px' : '16px'}; padding-bottom: ${isOnePager ? '8px' : '16px'}; border-bottom: 1px solid #ddd; }
    .proj:last-child { border-bottom: none; margin-bottom: 0; }
    .proj-name { font-size: ${isOnePager ? '11px' : '15px'}; font-weight: 600; }
    .proj-meta { font-family: 'JetBrains Mono', monospace; font-size: 9px; color: #444; margin-top: 2px; }
    .proj-desc { margin-top: 5px; color: #222; font-size: ${isOnePager ? '11px' : '13px'}; }
    .proj-role { margin-top: 4px; color: #222; font-size: ${isOnePager ? '11px' : '13px'}; }
    .proj-tech { display: flex; flex-wrap: wrap; gap: 4px; margin-top: 6px; }
    .proj-tech span { font-family: 'JetBrains Mono', monospace; font-size: 9px; border: 1px solid #bbb; border-radius: 3px; padding: 1px 6px; color: #333; }
    .proj-highlight { font-size: ${isOnePager ? '10.5px' : '12px'}; color: #333; margin-top: 3px; margin-bottom: 2px; font-weight: 500; font-style: italic; }
    .proj-tech-inline { font-family: 'JetBrains Mono', monospace; font-size: 9px; color: #555; margin-top: 2px; }
    .proj-links { margin-top: 5px; font-family: 'JetBrains Mono', monospace; font-size: 10px; }
    .proj-links a { margin-right: 10px; color: #444; }
    @media print {
      body { padding: 0; }
      @page { margin: 12mm 14mm; size: A4; }
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>${DATA.name}</h1>
    <div class="role">${tr(DATA.role)}</div>
    <div class="contact">
      <span>${DATA.email}</span>
      <span>2sem.github.io</span>
      <span>${DATA.linkedin.replace('https://', '')}</span>
    </div>
  </div>
  ${groupsHTML}
</body>
</html>`
}

export default function ResumeCart({ cart, onRemove, onClose }) {
  const { lang, t } = useLang()
  const [template, setTemplate] = useState('Compact')

  const groups = groupByCompany(cart)
  const totalProjects = groups.reduce((n, co) => n + co.cartProjects.length, 0)

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
              {totalProjects}{lang === 'ko' ? '개 프로젝트' : ` project${totalProjects !== 1 ? 's' : ''}`}
              {' · '}{groups.length}{lang === 'ko' ? '개 회사' : ` compan${groups.length !== 1 ? 'ies' : 'y'}`}
            </p>
            <div className="cart-groups">
              {groups.map(co => (
                <div key={co.id} className="cart-group">
                  <div className="cart-group-header">
                    <span className="cart-group-name">{co.name}</span>
                    <span className="cart-group-when">{co.when}</span>
                  </div>
                  {co.cartProjects.map(p => (
                    <div key={p.id} className="cart-item">
                      <span className="cart-item-name">
                        {lang === 'en' && p.nameEn ? p.nameEn : p.name}
                      </span>
                      <button
                        className="cart-item-rm"
                        onClick={() => onRemove(p.id)}
                        aria-label="Remove"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="cart-opts">
              <h4>{t('template')}</h4>
              <div className="template-seg">
                {TEMPLATES.map(tpl => (
                  <button
                    key={tpl}
                    className={`template-opt${template === tpl ? ' active' : ''}`}
                    onClick={() => setTemplate(tpl)}
                  >
                    {tpl}
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
