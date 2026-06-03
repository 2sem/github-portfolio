import { useEffect, useRef } from 'react'
import mermaid from 'mermaid'

mermaid.initialize({ startOnLoad: false, theme: 'dark', darkMode: true })

let idCounter = 0

export default function Diagram({ code }) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current || !code) return
    const id = `mermaid-${++idCounter}`
    mermaid.render(id, code).then(({ svg }) => {
      if (ref.current) ref.current.innerHTML = svg
    })
  }, [code])

  return <div className="diagram-wrap" ref={ref} />
}
