// Derives a tasteful file-extension cover for a project that has no screenshot yet.
const EXT_MAP = {
  vb: 'vb', c: 'c', cpp: 'cpp', java: 'java', objc: 'm', swift: 'swift',
  ts: 'ts', js: 'js', php: 'php', bash: 'sh', sql: 'sql', kotlin: 'kt',
  python: 'py', go: 'go', rust: 'rs',
}

export function coverExt(project) {
  const fw = project.tags.find(t => t.startsWith('framework:'))
  if (fw && fw.includes('react')) return 'tsx'
  const langTag = project.tags.find(t => t.startsWith('lang:'))
  const key = langTag ? langTag.slice(langTag.indexOf(':') + 1) : null
  return EXT_MAP[key] || 'src'
}

export default function ProjectCover({ project }) {
  return (
    <div className="pcard-cover">
      <span className="pcard-cover-dots"><i /><i /><i /></span>
      <span className="pcard-cover-ext">.{coverExt(project)}</span>
    </div>
  )
}
