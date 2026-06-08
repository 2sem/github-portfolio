import { useEffect, useRef, useState } from 'react'
import mermaid from 'mermaid'

mermaid.initialize({ startOnLoad: false, theme: 'dark' })

let idCounter = 0

function renderMermaid(code) {
  const id = `mermaid-${++idCounter}`
  return mermaid.render(id, code).then(({ svg }) =>
    svg.replace(/style="[^"]*max-width[^"]*"/, 'style="width:100%;height:auto;display:block;"')
  )
}

function DiagramModal({ svg, onClose }) {
  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) ref.current.innerHTML = svg
  }, [svg])

  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div className="diagram-overlay" onClick={onClose}>
      <div className="diagram-modal" onClick={e => e.stopPropagation()}>
        <button className="diagram-modal-close" onClick={onClose}>✕</button>
        <div className="diagram-wrap diagram-wrap--full" ref={ref} />
      </div>
    </div>
  )
}

export default function Diagram({ code, interactive = true }) {
  const ref = useRef(null)
  const [svg, setSvg] = useState(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!code) return
    renderMermaid(code).then(svg => {
      setSvg(svg)
      if (ref.current) ref.current.innerHTML = svg
    })
  }, [code])

  return (
    <>
      <div
        className={`diagram-wrap${interactive ? ' diagram-wrap--thumb' : ''}`}
        ref={ref}
        onClick={() => interactive && svg && setOpen(true)}
        title={interactive ? 'Click to zoom' : undefined}
      />
      {interactive && open && svg && <DiagramModal svg={svg} onClose={() => setOpen(false)} />}
    </>
  )
}
