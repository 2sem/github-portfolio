import { useState, useEffect, useCallback, useMemo } from 'react'
import { DATA } from './data.js'
import { useLang } from './i18n.jsx'
import Topbar from './components/Topbar.jsx'
import Sidebar from './components/Sidebar.jsx'
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
    })
  }, [search, activeChips, lang, tr])

  const filteredCompanies = useMemo(() => {
    const visibleIds = new Set(filteredProjects.map(p => p.id))
    return DATA.companies
      .map(co => ({ ...co, projects: co.projects.filter(p => visibleIds.has(p.id)) }))
      .filter(co => co.projects.length > 0)
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
          resume={DATA.resume}
          activeSection={activeSection}
        />

        <main className="main-content">
          <Summary
            tagline={DATA.tagline}
            bio={DATA.bio}
            stats={DATA.stats}
            tags={DATA.tags}
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
            contactMsg={DATA.contactMsg}
            onVisible={() => setActiveSection('contact')}
          />
        </main>
      </div>
    </div>
  )
}
