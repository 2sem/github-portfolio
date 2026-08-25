# Archived applications

Each `.toon` file in this directory is one archived job application. The
"Applications" section on the site only renders when at least one file
exists here — add one to make the section (and its nav link) appear.

## Fields

- `id` (required) — unique slug, e.g. `2026-02-acme-ios`
- `company` (required) — plain string
- `jobTitle` (required) — string or `{en, ko}`
- `appliedDate` (required) — `"YYYY-MM-DD"`, used for sorting (newest first)
- `status` (optional) — string or `{en, ko}`, shown as a small pill next to the date
- `jd` (required) — job description; string (paragraph) or array (bullets), each as `{en, ko}` or plain string
- `jdUrl` (optional) — link to the original posting
- `resumeFile` (optional) — path under `public/` to a resume PDF snapshot used for this application (e.g. `/applications/acme-resume-ko.pdf`); falls back to the default `/Lee-Young-jun-Resume-{lang}.pdf` when omitted

## Example

```toon
id: 2026-02-acme-ios
company: "Acme Corp"
jobTitle:
  en: "Senior iOS Engineer"
  ko: "시니어 iOS 엔지니어"
appliedDate: "2026-02-10"
status:
  en: "No response"
  ko: "무응답"
jd:
  en[2]:
    - "5+ years Swift/SwiftUI experience"
    - "Own a feature end to end"
  ko[2]:
    - "Swift/SwiftUI 5년 이상"
    - "기능 전체를 오너십 있게 담당"
jdUrl: "https://example.com/jobs/123"
resumeFile: "/applications/acme-resume-ko.pdf"
```

If you keep a resume snapshot per application, drop the PDF under
`public/applications/` and point `resumeFile` at it.
