# Raw History

Dump zone. Raw, messy, unfiltered. Claude refines → extracts achievements for the profile page.

## Structure

```
histories/
  _template.md              ← copy → <company>/history.md
  _project_template.md      ← copy → <company>/projects/<slug>/project.md
  <company>/
    history.md              ← company-level arc only (role, team, era notes)
    projects/
      <slug>/
        project.md          ← project detail (features, story, achievement)
        screenshots/
          YYMM-description.png
        docs/
```

## Rules for you (raw side)

- **Don't polish.** Brain-dump. Korean/English mix fine. Fragments fine.
- `history.md`: company arc — role changes, team events, era context. Not project detail.
- Per project: `projects/<slug>/project.md` + screenshots.
- Screenshots: `YYMM-description.png`. Before/after: `YYMM-before.png` / `YYMM-after.png`.

## Rules for Claude (refined side)

- Never edits raw files. Reads → writes to `profile/`.
- Flags missing numbers/scope in `profile/_gaps.md`.
- Uses screenshots for GitHub Pages visual cards.

## Notion → TOON tag mapping

When syncing a project from Notion to `data.toon`, map fields to tags:

| Notion field | Value | Tag |
|---|---|---|
| type | Desktop App | `desktop` |
| OS | Windows | `windows` |
| OS | macOS | `macos` |
| type | Web | `web` |
| type | iOS App | `ios` |
| lang | Swift | `swift` |
| lang | TypeScript / TS | `ts`, `typescript` |
| stack | React | `react` |
| stack | Node.js | `node`, `nodejs` |

filterDefs in `data.toon` must cover every tag used. Add new filterDef when adding new tag.

## Good raw entry ingredients

- **Numbers**: users, %, latency, team size, time saved.
- **Verbs**: built / led / migrated / cut / shipped.
- **Before→after**: "8s load → 1.2s".
- **Scope**: solo? led N? cross-team?
