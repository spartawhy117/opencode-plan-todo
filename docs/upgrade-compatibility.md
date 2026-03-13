# Upgrade Checklist / 升级检查清单

> This plugin is a workflow layer on top of OpenCode's extension points — not a fork.
> Plugin mode handles distribution; this checklist covers **what to verify after OpenCode or plugin upgrades**.

## When to check / 什么时候看

- After running `opencode upgrade`
- After bumping `opencode-enhance-plan` to a new version
- After OpenCode announces breaking changes to agent / command / tool APIs

## Post-upgrade checklist / 升级后检查项

| # | Check item | How to verify |
|---|-----------|---------------|
| 1 | `enhance-plan` still appears as primary agent | Open agent list in UI |
| 2 | Commands are recognized | Run any `/` command, confirm it shows up |
| 3 | Agent & command frontmatter still behave as expected | Check `agents/` and `commands/` headers against new OpenCode docs |
| 4 | Planning tools (`todowrite`, `question`, etc.) still work | Execute a planning flow end-to-end |
| 5 | `@opencode-ai/plugin` API is compatible | If plugin fails to load, check for a compatible version |

## Plugin-specific notes / 插件模式注意事项

- Assets are deployed to `~/.config/opencode/` on each startup.
- **Files you manually modified will NOT be overwritten** — this means local edits survive upgrades, but may also hide upstream fixes. If something feels stale, delete the local copy and restart to re-deploy.
- After upgrading the plugin version, **restart OpenCode** to trigger re-deployment.

## If something breaks / 出问题怎么办

1. Compare the new OpenCode docs with this repo's assumptions (frontmatter, discovery rules, tool names).
2. Update `agents/` and `commands/` first — they are the most upstream-sensitive files.
3. Keep the planning artifact model stable unless OpenCode introduces a clearly better primitive.
