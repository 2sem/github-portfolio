Add one archived job application to the portfolio's Applications section.

Details are provided as free text in $ARGUMENTS (any subset of: company,
job title, applied date, status, job description bullets, original
posting URL, resume file). Anything missing that's required, ask for it
— don't guess company name, role, or date.

## Schema

Full field reference: `applications/README.md`. Required: `id`, `company`,
`jobTitle`, `appliedDate`, `jd`. Optional: `status`, `jdUrl`, `resumeFile`.

## Steps

1. Parse $ARGUMENTS for the fields above. Ask the user for anything
   required that's missing or ambiguous (especially `appliedDate` —
   normalize to `YYYY-MM-DD`).
2. `jobTitle`, `status`, and `jd` are bilingual (`{en, ko}`). If the user
   only gave one language, write a natural translation for the other —
   not a literal one — matching the tone of existing entries in
   `companies/*.toon`. Never invent JD content the user didn't provide.
3. Build `id` as `<YYYY-MM>-<company-slug>` (lowercase, hyphenated,
   ASCII). Check no file in `applications/` already uses that id; if the
   user is applying to the same company again in the same month,
   disambiguate (e.g. append `-2`).
4. Write `applications/<id>.toon` in TOON format. Remember: any array
   needs an explicit count, e.g. `en[2]:` before its `- "..."` lines
   (see `applications/README.md` example — this is the #1 way to break
   the TOON parser). Quote string values.
5. If the user supplied a resume snapshot file, copy it into
   `public/applications/` and set `resumeFile` to `/applications/<file>`.
   Otherwise omit `resumeFile` (falls back to the default resume PDF).
6. Run `npm run build` to confirm the TOON file parses and the build
   still succeeds.
7. Follow this repo's normal git workflow: if on `main`, create a new
   branch describing the addition (e.g. `add-application-<company-slug>`,
   not `-v2`/`-v3`); commit just the new/changed files with a message
   like `Add archived application: <company> <job title>`; push; open a
   PR. This is a content-only change (no user-flow change), so a Mermaid
   diagram in the PR body is not needed.
8. Open the PR in the browser and stop — do not merge. Per this repo's
   rules, merging always waits for the user's explicit instruction after
   they've reviewed it.
