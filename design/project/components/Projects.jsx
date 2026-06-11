import { useState, useEffect, useRef } from 'react'
import { useLang } from '../i18n.jsx'
import FilterBar from './FilterBar.jsx'
import CompanyView from './CompanyView.jsx'
import FlatView from './FlatView.jsx'

export default function Projects({
  filterDefs,
  search,
  onSearchChange,
  activeChips,
  onChipToggle,
  filteredProjects,
  filteredCompanies,
  isInCart,
  onCartToggle,
  onVisible,
}) {
  const { t } = useLang()
  const [layout, setLayout] = useState('company')
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) onVisible() },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [onVisible])

  return (
    <section id="projects" className="projects-section" ref={ref}>
      <div className="proj-header">
        <span className="proj-header-label">// 02 — {t('projects')}</span>
        <div className="proj-header-spacer" />
        <div className="view-toggle">
          <button
            className={`view-btn${layout === 'company' ? ' active' : ''}`}
            onClick={() => setLayout('company')}
          >
            {t('byCompany')}
          </button>
          <button
            className={`view-btn${layout === 'flat' ? ' active' : ''}`}
            onClick={() => setLayout('flat')}
          >
            {t('flatGrid')}
          </button>
        </div>
      </div>

      <FilterBar
        filterDefs={filterDefs}
        search={search}
        onSearchChange={onSearchChange}
        activeChips={activeChips}
        onChipToggle={onChipToggle}
        resultCount={filteredProjects.length}
      />

      {layout === 'company' ? (
        <CompanyView
          companies={filteredCompanies}
          isInCart={isInCart}
          onCartToggle={onCartToggle}
        />
      ) : (
        <FlatView
          projects={filteredProjects}
          isInCart={isInCart}
          onCartToggle={onCartToggle}
        />
      )}
    </section>
  )
}
