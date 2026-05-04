#!/usr/bin/env bash
# Fetches upstream documentation into ./docs for agent context.
# Run: pnpm docs:fetch
# To add a new source, add a fetch_* function and call it at the bottom.
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DOCS_DIR="$(dirname "$SCRIPT_DIR")/docs"

# Clones a sparse subdirectory from a GitHub repo and copies it to a local dest.
# Usage: fetch_github_dir <repo> <src-path-in-repo> <local-dest>
fetch_github_dir() {
  local repo="$1"    # e.g. tailwindlabs/tailwindcss.com
  local src="$2"     # e.g. src/docs
  local dest="$3"    # e.g. /abs/path/to/docs/tailwind

  local tmp
  tmp=$(mktemp -d)
  trap "rm -rf '$tmp'" EXIT

  git clone --depth 1 --filter=blob:none --sparse \
    "https://github.com/${repo}.git" "$tmp" -q

  git -C "$tmp" sparse-checkout set "$src"

  rm -rf "$dest"
  mkdir -p "$dest"
  cp -r "$tmp/$src/." "$dest/"

  trap - EXIT
  rm -rf "$tmp"
}

fetch_tailwind() {
  echo "Fetching Tailwind CSS docs..."
  fetch_github_dir \
    tailwindlabs/tailwindcss.com \
    src/docs \
    "$DOCS_DIR/tailwind"
  echo "  -> docs/tailwind/ ($(find "$DOCS_DIR/tailwind" -type f | wc -l | tr -d ' ') files)"
}

# --- add more fetch_* calls here as needed ---

fetch_tailwind
