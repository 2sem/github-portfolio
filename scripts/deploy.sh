#!/usr/bin/env bash
# Local deploy (the only deploy path; no GitHub Actions workflow).
# Builds, then mirrors dist/ into 2sem/2sem.github.io (main).
set -euo pipefail

cd "$(dirname "$0")/.."
sha=$(git rev-parse HEAD)
work=$(mktemp -d)
trap 'rm -rf "$work"' EXIT

npm ci
npm run build

git clone --depth 1 git@github.com:2sem/2sem.github.io.git "$work/site"
# Replace everything except .git with the fresh build.
find "$work/site" -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
cp -R dist/. "$work/site/"
touch "$work/site/.nojekyll"

cd "$work/site"
git add -A
if git diff --cached --quiet; then
  echo "No changes to deploy."
  exit 0
fi
git commit -q -m "deploy: 2sem/github-portfolio@$sha"
git push origin HEAD:main
