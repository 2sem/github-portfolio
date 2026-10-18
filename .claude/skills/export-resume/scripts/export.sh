#!/usr/bin/env bash
# Usage: export.sh <resume.html> [preview-dir]
# Renders HTML -> PDF (same folder, same basename) with headless Chrome,
# prints page count, and writes page PNGs to preview-dir if given.
set -euo pipefail
html="$(cd "$(dirname "$1")" && pwd)/$(basename "$1")"
pdf="${html%.html}.pdf"
chrome="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

"$chrome" --headless=new --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="$pdf" "file://$html" 2>/dev/null

swift "$(dirname "$0")/pages.swift" "$pdf" "${2:-}"
echo "pdf: $pdf"
