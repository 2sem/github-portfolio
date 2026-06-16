import { useState, useEffect, useCallback, useMemo } from 'react'
import { DATA } from './data.js'
import { useLang } from './i18n.jsx'
import Topbar from './components/Topbar.jsx'
import Sidebar from './components/Sidebar.jsx'

// Latest YYYY(.MM) date in a project's meta (handles ranges like "2010.01 – 2017.02").
function recencyKey(meta) {
  const head = String(meta).split('·')[0]
  const dates = [...head.matchAll(/(\d{4})(?:\.(\d{2}))?/g)]
    .map(m => Number(m[1]) * 100 + (m[2] ? Number(m[2]) : 0))
  return dates.length ? Math.max(...dates) : 0
}
const byRecency = (a, b) => recencyKey(b.meta) - recencyKey(a.meta)
import Summary from './components/Summary.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import ResumeCart from './components/ResumeCart.jsx'

export default function App() {
  const { lang, setLang, tr } = useLang()
  const [theme, setTheme] = useState('dark')
  const [cartOpen, setCartOpen] = useState(false)
  const [cart, setCart] = useState([])
  const [search, setSearch] = useState('')
  const [activeChips, setActiveChips] = useState([])
  const [activeSection, setActiveSection] = useState('summary')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme === 'light' ? 'light' : '')
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme(t => t === 'dark' ? 'light' : 'dark')
  }, [])

  const toggleCart = useCallback((id, name) => {
    setCart(prev => {
      const exists = prev.find(x => x.id === id)
      if (exists) return prev.filter(x => x.id !== id)
      return [...prev, { id, name }]
    })
  }, [])

  const removeFromCart = useCallback((id) => {
    setCart(prev => prev.filter(x => x.id !== id))
  }, [])

  const toggleCartAll = useCallback((projects) => {
    setCart(prev => {
      const allIn = projects.every(p => prev.some(x => x.id === p.id))
      if (allIn) return prev.filter(x => !projects.some(p => p.id === x.id))
      const toAdd = projects.filter(p => !prev.some(x => x.id === p.id))
      return [...prev, ...toAdd.map(p => ({ id: p.id, name: p.name }))]
    })
  }, [])

  const reorderCart = useCallback((from, to) => {
    setCart(prev => {
      const next = [...prev]
      const [item] = next.splice(from, 1)
      next.splice(to, 0, item)
      return next
    })
  }, [])

  const isInCart = useCallback((id) => cart.some(x => x.id === id), [cart])

  const toggleChip = useCallback((key) => {
    setActiveChips(prev =>
      prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]
    )
  }, [])

  const filterDefs = useMemo(() => {
    const allTags = DATA.companies.flatMap(c => c.projects.flatMap(p => p.tags))
    return [...new Set(allTags)].sort()
  }, [])

  const filteredProjects = useMemo(() => {
    const allProjects = DATA.companies.flatMap(c => c.projects)
    return allProjects.filter(p => {
      const searchLower = search.toLowerCase()
      const matchesSearch = !search || (
        p.name.toLowerCase().includes(searchLower) ||
        p.meta.toLowerCase().includes(searchLower) ||
        String(tr(p.desc)).toLowerCase().includes(searchLower) ||
        p.tags.some(t => t.toLowerCase().includes(searchLower))
      )
      if (!matchesSearch) return false
      if (!activeChips.length) return true
      return activeChips.some(chip => p.tags.includes(chip))
    }).sort(byRecency)
  }, [search, activeChips, lang, tr])

  const experienceYears = useMemo(() => {
    const earliest = Math.min(
      ...DATA.companies
        .map(co => parseInt(co.when))
        .filter(Boolean)
    )
    return new Date().getFullYear() - earliest
  }, [])

  const projectCount = useMemo(() =>
    DATA.companies.reduce((sum, co) => sum + co.projects.length, 0), [])

  const highlights = useMemo(() =>
    DATA.companies.flatMap(co => co.projects).filter(p => p.highlight).map(p => p.highlight),
  [])

  const stats = useMemo(() => DATA.stats.map((s, i) => {
    if (i === 0) return { ...s, num: experienceYears }
    if (i === 1) return { ...s, num: projectCount }
    if (i === 3) return { ...s, num: highlights.length }
    return s
  }), [experienceYears, projectCount, highlights])

  const filteredCompanies = useMemo(() => {
    const visibleIds = new Set(filteredProjects.map(p => p.id))
    return DATA.companies
      .map(co => ({
        ...co,
        projects: co.projects.filter(p => visibleIds.has(p.id)).sort(byRecency),
      }))
      .filter(co => co.projects.length > 0)
      .sort((a, b) => recencyKey(b.projects[0].meta) - recencyKey(a.projects[0].meta))
  }, [filteredProjects])

  return (
    <div>
      <Topbar
        theme={theme}
        onToggleTheme={toggleTheme}
        lang={lang}
        onToggleLang={() => setLang(lang === 'en' ? 'ko' : 'en')}
        cartCount={cart.length}
        onToggleCart={() => setCartOpen(o => !o)}
      />

      {cartOpen && (
        <ResumeCart
          cart={cart}
          onRemove={removeFromCart}
          onReorder={reorderCart}
          onClose={() => setCartOpen(false)}
          isInCart={isInCart}
        />
      )}

      <div className="shell">
        <Sidebar
          name={DATA.name}
          role={DATA.role}
          github={DATA.github}
          linkedin={DATA.linkedin}
          email={DATA.email}
          x={DATA.x}
          threads={DATA.threads}
          resume={DATA.resume}
          activeSection={activeSection}
        />

        <main className="main-content">
          <Summary
            tagline={DATA.tagline}
            bio={DATA.bio}
            stats={stats}
            tags={DATA.tags}
            highlights={highlights}
            onVisible={() => setActiveSection('summary')}
          />

          <Projects
            filterDefs={filterDefs}
            search={search}
            onSearchChange={setSearch}
            activeChips={activeChips}
            onChipToggle={toggleChip}
            filteredProjects={filteredProjects}
            filteredCompanies={filteredCompanies}
            isInCart={isInCart}
            onCartToggle={toggleCart}
            onCartToggleAll={toggleCartAll}
            onVisible={() => setActiveSection('projects')}
          />

          <Skills
            skills={DATA.skills}
            onVisible={() => setActiveSection('skills')}
          />

          <Contact
            github={DATA.github}
            linkedin={DATA.linkedin}
            email={DATA.email}
            x={DATA.x}
            threads={DATA.threads}
            contactMsg={DATA.contactMsg}
            onVisible={() => setActiveSection('contact')}
          />
        </main>
      </div>
    </div>
  )
}
