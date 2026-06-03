import { readFileSync } from 'fs'
import { decode } from '@toon-format/toon'

function arr(v) {
  return Array.isArray(v) ? v : []
}

function normalizeProject(p) {
  return { ...p, tech: arr(p.tech), links: arr(p.links), tags: arr(p.tags) }
}

function normalize(data) {
  return {
    ...data,
    stats: arr(data.stats),
    tags: arr(data.tags),
    filterDefs: arr(data.filterDefs),
    skills: arr(data.skills),
    companies: arr(data.companies).map(c => ({
      ...c,
      projects: arr(c.projects).map(normalizeProject),
    })),
  }
}

export function toonPlugin() {
  return {
    name: 'vite-plugin-toon',
    load(id) {
      if (!id.endsWith('.toon')) return null
      const content = readFileSync(id, 'utf-8')
      const data = normalize(decode(content))
      return `export default ${JSON.stringify(data)}`
    },
    handleHotUpdate({ file, server }) {
      if (file.endsWith('.toon')) {
        server.ws.send({ type: 'full-reload' })
      }
    },
  }
}
