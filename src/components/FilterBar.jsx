export default function FilterBar({
  filterDefs,
  search,
  onSearchChange,
  activeChips,
  onChipToggle,
  resultCount,
}) {
  return (
    <div className="filterbar">
      <div className="filterbar-cmd">
        <span className="pr">$</span>
        <span>grep </span>
        <input
          className="filterbar-input"
          type="text"
          placeholder="projects, or type a tag…"
          value={search}
          onChange={e => onSearchChange(e.target.value)}
          spellCheck={false}
        />
        <span className="filterbar-kbd">⌘K</span>
      </div>
      <div className="filterbar-chips">
        {filterDefs.map(tag => (
          <button
            key={tag}
            className={`chip${activeChips.includes(tag) ? ' active' : ''}`}
            onClick={() => onChipToggle(tag)}
          >
            {tag}
          </button>
        ))}
        <span className="filterbar-result">
          // {resultCount} project{resultCount !== 1 ? 's' : ''} · sort:recent
        </span>
      </div>
    </div>
  )
}
