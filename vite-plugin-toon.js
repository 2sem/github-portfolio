import { readFileSync, readdirSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { decode } from '@toon-format/toon'

function arr(v) {
  return Array.isArray(v) ? v : []
}

function normalizeProject(p) {
  return { ...p, tech: arr(p.tech), links: arr(p.links), tags: arr(p.tags), images: arr(p.images), diagrams: arr(p.diagrams) }
}

function loadCompanies(data, companiesDir) {
  if (existsSync(companiesDir)) {
    return readdirSync(companiesDir)
      .filter(f => f.endsWith('.toon'))
      .sort()
      .map(f => decode(readFileSync(join(companiesDir, f), 'utf-8')))
  }
  return arr(data.companies)
}

function normalize(data, companiesDir) {
  return {
    ...data,
    stats: arr(data.stats),
    tags: arr(data.tags),
    skills: arr(data.skills),
    companies: loadCompanies(data, companiesDir).map(c => ({
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
      const companiesDir = join(dirname(id), 'companies')
      const data = normalize(decode(content), companiesDir)
      return `export default ${JSON.stringify(data)}`
    },
    handleHotUpdate({ file, server }) {
      if (file.endsWith('.toon')) {
        server.ws.send({ type: 'full-reload' })
      }
    },
  }
}
