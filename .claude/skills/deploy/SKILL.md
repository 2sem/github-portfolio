---
name: deploy
description: Deploy the portfolio to 2sem.github.io by running scripts/deploy.sh locally (there is no GitHub Actions deploy workflow). Use when the user says deploy, publish the site, or push to 2sem.github.io.
---

# Deploy

Runs `scripts/deploy.sh`: `npm ci`, `npm run build`, then mirrors `dist/` into
`2sem/2sem.github.io` (`main`) and pushes, using the user's git SSH access.
This is the only deploy path; the old Actions workflow was removed because its
`PAGES_DEPLOY_TOKEN` expired.

## Steps

1. Pre-check: `git status --short` and current branch. Deploy builds the working
   tree, so it should be `main`, up to date (`git pull`), with no uncommitted
   source changes. If not, tell the user and stop.
2. This publishes the live site. Unless the user just said to deploy, confirm
   first and say what is going out (`git log --oneline` since the last
   `deploy: 2sem/github-portfolio@<sha>` commit on the site repo).
3. Run `scripts/deploy.sh` (takes about a minute; `npm ci` is the slow part).
4. Report the pushed commit range from the last line (`<old>..<new> HEAD -> main`),
   or "No changes to deploy." Pages takes a minute or so to update.

## Notes

- Never push to the site repo any other way; the script replaces the whole
  tree, keeping `.git` and re-adding `.nojekyll`.
- Don't edit `dist/` by hand.
