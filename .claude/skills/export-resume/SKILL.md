---
name: export-resume
description: Design and export a finished resume (resume.md) as a styled A4 PDF via HTML + headless Chrome, choosing the page count that fits the content. Use when the user says export/render/make a PDF of a resume, "이력서 PDF로", or asks to design a resume for a company folder under application-history/.
---

# Export Resume (md → HTML → PDF)

Text is already final in `resume.md` (see `yj-resume-writer`). This skill only
lays it out. **Never reword, add, or drop content**; no phone number anywhere.

## Steps

1. Read the target `resume.md` (e.g. `application-history/undated/<회사>/resume.md`).
2. Copy `.claude/skills/export-resume/template/resume.html` next to it as
   `resume.html` and replace the content with the md, keeping the template's
   CSS and structure:
   - header (name, role, contact line) · summary · stat strip
   - `.job` blocks: `.co` + `.period`, `.pos`, `.desc`, `<ul>`, `.tags`
   - trailing sections (외부 활동, AI 활용 경험, 학력)
   - md links → `<a href>`; `**bold**` → `<b>`; backtick tag lines → `.tags` chips
   - Update the stat strip to match the md's 총 경력 line.
3. Render: `.claude/skills/export-resume/scripts/export.sh <resume.html> <scratchpad-dir>`
   Prints page count and writes `p1.png…`; Read the PNGs to check.
   Only `resume.md` is exported; if only `resume-draft.md` exists, ask the user
   to confirm it as final (rename to `resume.md`) first.
4. Fit page count to content, then re-render:
   - Aim for the fewest pages that stay readable: 2 pages for ~15 yrs / 5+
     jobs. Do not leave a near-empty last page (spills > 0 but < ~25%):
     tighten `@page` margin, `body` font-size/line-height, `li` margin,
     `h2`/`.job` margins until it folds back.
   - Keep company blocks whole (`.job + .job { break-inside: avoid }`); no
     orphaned job header at a page bottom.
   - Body font ≥ 9pt. If it needs less, go up a page instead.
5. Check no text overlaps or overflows; links stay clickable.
6. **Gate before copying** (all must pass, else fix and re-render):
   - Page count is the intended one (≤ 2 for a standard resume) and the last
     page is not near-empty (see step 4). State the final page count.
   - No phone number: `python3 -I .claude/skills/archive-application/scripts/check_phone.py <folder>`
     must report `flagged=0` for the folder (it prints paths only).
7. When the gate passes, always copy the PDF to Downloads
   without being asked: `cp resume.pdf ~/Downloads/이영준_이력서_<회사>.pdf`
   (`<회사>` = the application folder name). Overwrite an earlier copy of the same name.

## Notes
- Needs Google Chrome at `/Applications/Google Chrome.app` and `swift` (for page count/preview).
- Font: Pretendard if installed, else Apple SD Gothic Neo.
- `resume.html`/`resume.pdf` live beside `resume.md`; don't commit unless asked.
