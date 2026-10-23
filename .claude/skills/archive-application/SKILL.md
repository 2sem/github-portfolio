---
name: archive-application
description: Archive a finished job application (resume, spec/JD; not before/applied screenshots) into application-history/ with the repo's naming convention. Use when the user says they applied somewhere, asks to "store/archive/save this application", or drops a folder of files for one company.
---

# Archive application

Layout and naming rules live in `application-history/README.md`; read it first.

## Steps

1. Get company and apply date. Take the date from the screenshot file names
   (`MMDD-<company>-지원*.png` → year from context) — do not open screenshots.
   If there is no apply screenshot, ask; otherwise use `undated/<company>/`.
2. Folder: `application-history/applications/<YYYY-MM-DD>_<company>/`
   (same company applied twice → separate dated folders).
3. Rename while moving (never leave the original export names):
   `resume.{md,docx,pdf}`, `spec.docx|md`, `jd.*`, `cover-letter.*`,
   Do NOT store before/applied screenshots (지원전, 지원/지원후/지원완료) in the repo:
   read the apply date from their names, then leave them out (move to a local
   folder outside the repo or delete, ask the user).
   Normalize Korean file names to NFC.
4. Add a row to the Applications table in `application-history/README.md`
   (keep it sorted by date).
   For material filed under `undated/<company>/`, add or update its row in the
   Undated table with a Status (`pending` / `skipped` / `applied` / `unknown`) and a
   short Note (date + reason when skipped). When a pending company is later applied to,
   move it to `applications/` and drop its Undated row.
5. Phone numbers: never reveal or print one (not in chat, README, commits, logs).
   Run `python3 -I .claude/skills/archive-application/scripts/check_phone.py <folder>`
   (prints file paths only). For any docx/pdf/md it flags, create a phone-free `.md`
   (redact the number, keep the rest), keep the flagged original out of the repo, and
   do not store tracker spreadsheets (History.xlsx).
6. If the user also wants it on the site, run the `add-application` command
   with the same date; point `resumeFile` at a PDF copied to `public/applications/`.
7. Do not commit: this repo is public and the archive holds personal data.
   Ask the user before committing or pushing anything under `application-history/`.
