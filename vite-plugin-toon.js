import { readFileSync, readdirSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { decode } from '@toon-format/toon'

function arr(v) {
  return Array.isArray(v) ? v : []
}

function normalizeProject(p) {
  return { ...p, tech: arr(p.tech), links: arr(p.links), tags: arr(p.tags), images: arr(p.images), diagrams: arr(p.diagrams) }
}

function loadDir(dir, extra) {
  if (!existsSync(dir)) return []
  return readdirSync(dir)
    .filter(f => f.endsWith('.toon'))
    .sort()
    .map(f => ({ ...decode(readFileSync(join(dir, f), 'utf-8')), ...extra }))
}

// Employers from companies/, personal work from sides/ (flagged so the UI can
// always park them below the company list regardless of project dates).
function loadCompanies(data, baseDir) {
  const companies = loadDir(join(baseDir, 'companies'), {})
  const sides = loadDir(join(baseDir, 'sides'), { side: true })
  if (companies.length || sides.length) return [...companies, ...sides]
  return arr(data.companies)
}

// Archived job applications from applications/ — one file per application.
function loadApplications(data, baseDir) {
  const applications = loadDir(join(baseDir, 'applications'), {})
  if (applications.length) return applications
  return arr(data.applications)
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
    applications: loadApplications(data, companiesDir),
  }
}

export function toonPlugin() {
  return {
    name: 'vite-plugin-toon',
    load(id) {
      if (!id.endsWith('.toon')) return null
      const content = readFileSync(id, 'utf-8')
      const data = normalize(decode(content), dirname(id))
      return `export default ${JSON.stringify(data)}`
    },
    handleHotUpdate({ file, server }) {
      if (file.endsWith('.toon')) {
        server.ws.send({ type: 'full-reload' })
      }
    },
  }
}
