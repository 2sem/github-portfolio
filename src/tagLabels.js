const TAG_LABELS = {
  csharp: 'C#',
  objc: 'Obj-C',
  ts: 'TypeScript',
  vb: 'VB',
}

export function tagValue(tag) {
  const sep = tag.indexOf(':')
  return sep >= 0 ? tag.slice(sep + 1) : tag
}

export function tagLabel(tag) {
  const value = tagValue(tag)
  return TAG_LABELS[value.toLowerCase()] || value
}
