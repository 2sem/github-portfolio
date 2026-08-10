# github-portfolio

Terminal-styled developer portfolio for **Lee Young-jun** — bilingual (en/ko),
64 projects across 7 companies, with per-project diagrams, screenshots, and a
resume builder. Live at **https://2sem.github.io**.

Built with React + Vite. Project data is authored in [TOON](https://github.com/toon-format/toon)
and loaded by a small Vite plugin. Deploys to GitHub Pages via GitHub Actions on
push to `main`.

## Develop

```bash
npm install
npm run dev        # http://localhost:5173 — hot-reloads on source & .toon save
npm run build      # production build (also validates every .toon)
npm run preview    # serve the production build locally
```

Push to `main` → GitHub Actions builds and deploys to 2sem.github.io (~1 min).

---

# Editing content

All project data lives in **`.toon`** files, loaded automatically by the Vite
plugin (`vite-plugin-toon.js`). No registration or build step: add content, it
appears. Two folders:

```
companies/              employers
  01-credif.toon        CREDiF
  02-indie.toon         Indie apps
  03-siwonschool.toon   Siwonschool
  04-kickgoing.toon     KICKGOING
  06-freelance.toon     (empty)
  07-skcc.toon          SK AX / SKCC
sides/                  personal work
  side-projects.toon    Side projects
```

In the Projects section, companies are ordered **by their most recent project
date** (newest first); the filename prefix does not control display order.
Everything from `sides/` is always parked **below the whole company list**.

## Anatomy of one project

```toon
  - id: skcc-ai-sdk                    # unique slug — never duplicate
    name: "AI Layer iOS SDK"           # shown; if Korean, add nameEn for EN mode
    nameEn: "..."                      # optional — English-mode title
    meta: "2025.01 – 2025.10 · SDK · Swift"
    tags[2]: platform:ios,lang:swift
    desc:                              # "What it is" — product only
      en: "..."
      ko: "..."
    role:                              # "My role"
      en: "..."
      ko: "..."
    work:                              # "My work" — OPTIONAL, omit to hide
      en: "..."
      ko: "..."
    achievement:                       # "Achievement" — OPTIONAL
      en: "..."
      ko: "..."
    highlight:                         # ★ teaser line on the card
      en: "..."
      ko: "..."
    tech[3]: Swift,GitLab,Slack        # chips
    image: null                        # or "/images/.../shot.jpeg"
    images[1]:                         # screenshots (zoomable)
      - "/images/..."
    links[1]:
      - label: "Medium: ..."
        href: "https://..."
    diagrams[1]:                       # Mermaid strings, \n for newlines
      - "flowchart TD\n  A --> B"
```

## Rules

- Every text field is `{en, ko}`. Keep both in sync — EN mode falls back to `ko`
  when `en` is missing, which looks broken.
- **Bullets:** `desc` / `role` / `work` / `achievement` render as a paragraph
  when the value is one string, or as a bullet list when it's an array. Use the
  array form for multiple distinct items — keep the `en`/`ko` item counts equal:

  ```toon
      achievement:
        en[2]:
          - "First achievement."
          - "Second achievement."
        ko[2]:
          - "첫 번째 성과."
          - "두 번째 성과."
  ```
- **Section order on screen is fixed:** What it is → My role → My work →
  Achievement. `work` and `achievement` are optional — delete the whole block
  (the `work:` line plus its `en`/`ko`) to hide that section.
- The `[N]` in `tags[2]`, `images[1]`, `tech[3]` is the array length — **update
  the number if you add or remove items**, or decode fails.
- Escape `"` inside a string as `\"`; newlines inside Mermaid as `\n`.

## Two common gotchas

1. **Korean `name` without `nameEn`** → shows Korean in English mode. Add `nameEn`.
2. **Wrong `[N]` count** → decode error / missing data.

## Edit → preview → publish

```bash
npm run dev        # hot-reloads on .toon save
npm run build      # optional: errors out if any .toon is malformed
git add -A && git commit -m "content: <what you changed>" && git push
```
