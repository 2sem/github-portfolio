import { createContext, useContext, useState, useCallback, useEffect } from 'react'

export const LANGS = ['en', 'ko']

const UI = {
  en: {
    summary: 'summary',
    experiences: 'experience',
    projects: 'projects',
    skills: 'skills',
    contact: 'contact',
    openToWork: 'open to new roles',
    replyTime: 'replies within 24h',
    downloadResume: '⬇ download résumé',
    byCompany: 'by company',
    flatGrid: 'flat grid',
    scrollHint: 'scroll ↔ · click card for details',
    now: 'now',
    screenshot: 'screenshot',
    addResume: '+ resume',
    added: '✓ added',
    collapse: 'collapse ✕',
    noScreenshots: 'no screenshots',
    whatItIs: 'What it is',
    myRole: 'My role',
    achievement: 'Achievement',
    techTags: 'Tech / tags',
    links: 'Links',
    addToResume: '+ Add to resume',
    inResume: '✓ In resume',
    resumeCart: '// resume cart',
    cartEmpty: 'No projects yet — add with “+ resume”.',
    dragReorder: 'drag to reorder',
    template: 'Template',
    generatePdf: 'Generate PDF →',
    theme: 'theme',
    resume: 'resume',
    location: '📍 Seoul, South Korea',
    selectedProjects: '// selected projects',
    roleLabel: 'Role',
    sortRecent: 'sort:recent',
    searchPlaceholder: 'projects, or type a tag…',
    addAll: 'add all',
    inCart: '✓ all added',
  },
  ko: {
    summary: '소개',
    experiences: '경력',
    projects: '프로젝트',
    skills: '기술',
    contact: '연락처',
    openToWork: '새로운 기회에 열려있음',
    replyTime: '24시간 내 답변',
    downloadResume: '⬇ 이력서 다운로드',
    byCompany: '회사별',
    flatGrid: '전체 보기',
    scrollHint: '좌우 스크롤 ↔ · 카드 클릭 시 상세',
    now: '현재',
    screenshot: '스크린샷',
    addResume: '+ 이력서',
    added: '✓ 추가됨',
    collapse: '접기 ✕',
    noScreenshots: '스크린샷 없음',
    whatItIs: '프로젝트 소개',
    myRole: '담당 역할',
    achievement: '성과',
    techTags: '기술 / 태그',
    links: '링크',
    addToResume: '+ 이력서에 추가',
    inResume: '✓ 추가됨',
    resumeCart: '// 이력서 카트',
    cartEmpty: '아직 프로젝트가 없습니다 — “+ 이력서”로 추가하세요.',
    dragReorder: '드래그하여 순서 변경',
    template: '템플릿',
    generatePdf: 'PDF 생성 →',
    theme: '테마',
    resume: '이력서',
    location: '📍 서울, 대한민국',
    selectedProjects: '// 선택한 프로젝트',
    roleLabel: '역할',
    sortRecent: '최신순',
    searchPlaceholder: '프로젝트명 또는 태그 입력…',
    addAll: '전체 추가',
    inCart: '✓ 전체 추가됨',
  },
}

// Resolve a data field that may be a {en, ko} object or a plain value.
export function resolve(val, lang) {
  if (val && typeof val === 'object' && !Array.isArray(val) && ('en' in val || 'ko' in val)) {
    return val[lang] ?? val.en ?? val.ko ?? ''
  }
  return val
}

const LangContext = createContext(null)

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = typeof localStorage !== 'undefined' && localStorage.getItem('lang')
    if (saved && LANGS.includes(saved)) return saved
    if (typeof navigator !== 'undefined' && navigator.language?.startsWith('ko')) return 'ko'
    return 'en'
  })

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.setAttribute('lang', lang)
  }, [lang])

  const t = useCallback((key) => UI[lang][key] ?? UI.en[key] ?? key, [lang])
  const tr = useCallback((val) => resolve(val, lang), [lang])

  return (
    <LangContext.Provider value={{ lang, setLang, t, tr }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LangProvider')
  return ctx
}
