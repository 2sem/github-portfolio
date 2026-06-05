# Repository Agent Rules

These rules apply to this repository and override the global `/Users/LYJ/AGENTS.md` defaults.

## Session Start

- Inspect the repository state before editing.
- Preserve existing user changes. Do not revert unrelated dirty files.
- Use `rg`/`rg --files` first for search.

## Project Context

- This is a Vite/React portfolio project.
- Main source files live under `src/`.
- Portfolio content is driven from `data.toon`.
- Generated build output lives under `dist/`; do not edit it directly unless the task explicitly targets build artifacts.
- Historical notes and drafts live under `raw-histories/`, `profile/`, and `.remember/`.

## Implementation Rules

- Keep edits scoped to the requested behavior.
- Follow existing component and CSS patterns before adding new abstractions.
- Do not install new packages unless the user explicitly asks.
- Do not add `axios`.
- Prefer structured parsing or existing project helpers over ad hoc string manipulation.
- When editing frontend UI, verify layout text does not overlap or overflow on common desktop/mobile sizes.

## Git Rules

- If the current branch is `main` and the user asks for commit/PR work, create a new branch before starting.
- Never merge a PR without explicit user instruction.
- Use branch names that describe the goal; do not reuse already merged branch names.
- Do not use destructive git commands such as `git reset --hard` or `git checkout --` unless explicitly requested.

## Verification

- For source changes, run the most relevant available check, usually `npm run build`.
- If verification is skipped or cannot run, state that clearly in the final response.

## Communication

- Keep updates concise and factual.
- State assumptions when the request is ambiguous.
- Final responses should summarize what changed and what was verified.
