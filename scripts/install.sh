#!/usr/bin/env bash
set -euo pipefail

TARGET_ROOT="${1:-$HOME/.config/opencode}"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(dirname "$SCRIPT_DIR")"

AGENTS_SOURCE="$REPO_ROOT/agents"
COMMANDS_SOURCE="$REPO_ROOT/commands"
TEMPLATES_SOURCE="$REPO_ROOT/templates"

AGENTS_TARGET="$TARGET_ROOT/agents"
COMMANDS_TARGET="$TARGET_ROOT/commands"
TEMPLATES_TARGET="$TARGET_ROOT/templates"

mkdir -p "$AGENTS_TARGET"
mkdir -p "$COMMANDS_TARGET"
mkdir -p "$TEMPLATES_TARGET"

cp -r "$AGENTS_SOURCE"/. "$AGENTS_TARGET"/
cp -r "$COMMANDS_SOURCE"/. "$COMMANDS_TARGET"/
cp -r "$TEMPLATES_SOURCE"/. "$TEMPLATES_TARGET"/

echo "Installed opencode-enhance-plan into $TARGET_ROOT"
echo "Restart OpenCode to load the updated agents and commands."
