---
name: job-application
description: Entry point for the whole job-application pipeline (find posting, fit check, resume, skim, refine, PDF, archive, interview prep). Use when the user says "apply to X", "지원 준비", "daily apply", "공고 하나 처리", or asks what the next step is for an application folder. Routes to the right skill or agent; does not do the work itself.
---

# Job Application Pipeline

Run steps in order; skip those already done. State which step you are on.
Applicant: 이영준. Folder per company: `application-history/undated/<회사>/`
until applied, then `applications/<YYYY-MM-DD>_<회사>/`.

| # | Step | Who | Output |
|---|------|-----|--------|
| 0 | Status board + today's plan (session start, or "what next") | `pipeline-tracker` agent | board, flags, ≤3 actions |
| 1 | Find postings (only if none given) | `job-collector` agent | `<회사>/jd.md`, shortlist |
| 2 | Fit check: 3-signal filter, base ①/②, apply/maybe/skip | `jd-analyst` agent | verdict; skip → record reason in `application-history/README.md` |
| 3 | Build resume (order + bold only) | `yj-resume-writer` skill | `resume-draft.md` |
| 4 | Skim as HR + CTO | `resume-skimmer` skill | verdicts, doubts |
| 5 | Minimal fixes | `resume-refiner` agent | edits; user approves any bullet add/rewrite |
| 6 | Confirm final | user | rename `resume-draft.md` → `resume.md` |
| 7 | PDF (page + phone gate, copy to Downloads) | `export-resume` skill | `resume.html`, `resume.pdf` |
| 7b | Company research + cover letter / referral / recruiter message (optional) | `outreach-writer` agent | drafts; user sends |
| 8 | After applying: archive | `archive-application` skill, then `pipeline-tracker` | dated folder + README row + stage |
| 8b | Silent 5-7 days | `pipeline-tracker` flags, `outreach-writer` drafts follow-up | follow-up draft |
| 9 | Interview prep (offer when a reply arrives) | `interview-coach` agent | Q&A, STAR stories |
| 10 | Offer or final round | `offer-advisor` agent | comparison, negotiation points |
| — | JD needs proof the portfolio lacks | `career-curator` agent (Portfolio team) | new entry or reported gap |

## Rules
- Draft is `resume-draft.md`; `resume.md` means final. Only `resume.md` is exported/archived.
- Never reveal phone numbers; never commit `application-history/` without asking (public repo).
- Facts exact; no invented experience. `master.md` is the single source for bullets.
- Delegate steps 0, 1, 2, 5, 7b, 9, 10 to the named agents; the manager coordinates. Team layout: `CLAUDE.md`.
- Agents draft; the user submits, sends, accepts.
