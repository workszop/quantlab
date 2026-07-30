#!/usr/bin/env bash
# Deploy the Quantica website to a checkout of github.com/workszop/q223.
#
# Usage: ./deploy.sh /path/to/q223-clone
#
# Transformation for GitHub Pages:
#  - quantica_website.html is renamed to index.html (served at the repo root)
#  - all links pointing at quantica_website.html are rewritten to index.html
# Commit and push from the target clone after reviewing the diff.
set -euo pipefail

TARGET="${1:?usage: deploy.sh /path/to/q223-clone}"
SRC="$(cd "$(dirname "$0")" && pwd)"

[ -d "$TARGET/.git" ] || { echo "error: $TARGET is not a git checkout" >&2; exit 1; }

for f in "$SRC"/*.html "$SRC"/*.css "$SRC"/*.js "$SRC"/*.png; do
  base="$(basename "$f")"
  [ "$base" = "deploy.sh" ] && continue
  cp "$f" "$TARGET/$base"
done

mv "$TARGET/quantica_website.html" "$TARGET/index.html"
sed -i 's|href="quantica_website.html"|href="index.html"|g' "$TARGET"/*.html

echo "done - review with: git -C $TARGET status"
