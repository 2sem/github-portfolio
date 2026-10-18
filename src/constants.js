const BASE = import.meta.env.BASE_URL

export const resumePdfUrl = (lang) =>
  `${BASE}Lee-Young-jun-Resume-${lang === 'ko' ? 'ko' : 'en'}.pdf`
