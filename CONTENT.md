# Editing portfolio content

All project data lives in **`companies/*.toon`** — one file per company, loaded
automatically by the Vite plugin (`vite-plugin-toon.js`). No registration or
build step: add content, it appears.

```
companies/
  01-credif.toon        CREDiF
  02-indie.toon         Indie apps
  03-siwonschool.toon   Siwonschool
  04-kickgoing.toon     KICKGOING
  05-side-projects.toon Side projects
  06-freelance.toon     (empty)
  07-skcc.toon          SK AX / SKCC
```

Files load in **filename order** (`01-`, `02-`…), so the number prefix controls
company ordering.

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
npm run dev        # http://localhost:5173 — hot-reloads on .toon save
```

Save a `.toon` file → the browser reloads with your change. Then:

```bash
npm run build      # optional: errors out if any .toon is malformed
git add -A && git commit -m "content: <what you changed>" && git push
```

Push to `main` → GitHub Actions builds and deploys to 2sem.github.io
automatically (~1 min).
