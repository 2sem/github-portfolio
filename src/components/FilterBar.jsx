import { useLang } from '../i18n.jsx'
import { tagLabel } from '../tagLabels.js'

export default function FilterBar({
  filterDefs,
  search,
  onSearchChange,
  activeChips,
  onChipToggle,
  resultCount,
}) {
  const { lang, t } = useLang()
  const { groups, orderedGroups } = filterDefs.reduce((acc, tag) => {
    const sep = tag.indexOf(':')
    const group = sep >= 0 ? tag.slice(0, sep) : 'other'
    const label = tagLabel(tag)
    if (!acc.groups[group]) {
      acc.groups[group] = []
      acc.orderedGroups.push(group)
    }
    acc.groups[group].push({ tag, label })
    return acc
  }, { groups: {}, orderedGroups: [] })

  return (
    <div className="filterbar">
      <div className="filterbar-cmd">
        <span className="pr">$</span>
        <span>grep </span>
        <input
          className="filterbar-input"
          type="text"
          placeholder={t('searchPlaceholder')}
          value={search}
          onChange={e => onSearchChange(e.target.value)}
          spellCheck={false}
        />
        <span className="filterbar-kbd">⌘K</span>
      </div>
      <div className="filterbar-groups">
        {orderedGroups.map(group => (
          <div key={group} className="filterbar-group">
            <span className="filterbar-group-label">{group}</span>
            <div className="filterbar-chips">
              {groups[group].map(({ tag, label }) => (
                <button
                  key={tag}
                  className={`chip${activeChips.includes(tag) ? ' active' : ''}`}
                  onClick={() => onChipToggle(tag)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="filterbar-footer">
        <span className="filterbar-result">
          // {resultCount}{lang === 'ko' ? '개 프로젝트' : ` project${resultCount !== 1 ? 's' : ''}`} · {t('sortRecent')}
        </span>
      </div>
    </div>
  )
}
