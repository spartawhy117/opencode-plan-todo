# Upgrade Checklist / 升级检查清单

## English

### Positioning

This repository is a workflow layer built on top of OpenCode's extension points. It is **not** a fork of the OpenCode CLI.

Plugin mode simplifies distribution and installation, but it does **not** remove upgrade compatibility concerns. This document focuses on what to verify after upgrading either OpenCode or `opencode-enhance-plan`.

### When to check

- After running `opencode upgrade`
- After upgrading `opencode-enhance-plan` to a new version
- After OpenCode announces breaking changes to agent, command, or tool APIs

### Post-upgrade checklist

| # | Check item | How to verify |
|---|-----------|---------------|
| 1 | `enhance-plan` still appears as a primary agent | Open the agent list in the UI and confirm it is still discoverable |
| 2 | Commands are still recognized | Trigger any `/` command and confirm it appears and runs normally |
| 3 | Agent and command frontmatter still behave as expected | Compare headers in `agents/` and `commands/` with the latest OpenCode documentation |
| 4 | Planning tools such as `todowrite` and `question` still work | Execute a complete planning flow and confirm the tools are callable |
| 5 | `@opencode-ai/plugin` remains compatible | If the plugin fails to load or deploy, check whether a newer compatible version is required |

### Plugin-specific notes

- Plugin assets are deployed to `~/.config/opencode/` on each startup.
- **Files you manually modified will not be overwritten automatically.** This protects local customization, but it can also leave old behavior in place after an upgrade.
- If an updated file does not seem to take effect, remove the local overridden copy and restart OpenCode to let the plugin deploy it again.
- After upgrading the plugin version, **restart OpenCode** to trigger re-deployment.

### If something breaks

1. Compare the latest OpenCode documentation with this repository's assumptions, especially around frontmatter, discovery rules, and tool naming.
2. Update `agents/` and `commands/` first, because they are usually the most sensitive to upstream changes.
3. Keep the planning artifact model stable unless OpenCode introduces a clearly better primitive.

## 中文

### 定位

这个仓库是建立在 OpenCode 官方扩展点之上的 workflow layer，**不是** OpenCode CLI 的源码 fork。

改成 plugin 模式后，分发和安装流程确实更简单了，但这**不代表升级兼容问题消失**。这份文档主要用于说明：当 OpenCode 或 `opencode-enhance-plan` 升级后，应该重点检查哪些点。

### 什么时候看

- 执行 `opencode upgrade` 之后
- 将 `opencode-enhance-plan` 升级到新版本之后
- OpenCode 官方宣布 agent、command 或 tool API 有 breaking change 之后

### 升级后检查项

| # | 检查项 | 如何验证 |
|---|--------|----------|
| 1 | `enhance-plan` 是否仍显示为 primary agent | 打开 UI 里的 agent 列表，确认仍然能看到并选择它 |
| 2 | Commands 是否仍能被识别 | 随便触发一个 `/` 命令，确认可以正常显示并执行 |
| 3 | Agent 和 command 的 frontmatter 是否仍按预期工作 | 对照最新 OpenCode 文档，检查 `agents/` 和 `commands/` 中的头部字段定义 |
| 4 | `todowrite`、`question` 等 planning tools 是否仍可用 | 实际跑一遍完整 planning 流程，确认这些工具都还能正常调用 |
| 5 | `@opencode-ai/plugin` 是否仍兼容 | 如果插件加载失败、部署失败或行为异常，先检查是否需要升级到兼容版本 |

### 插件模式注意事项

- 插件资源会在每次启动时部署到 `~/.config/opencode/`。
- **你手动改过的文件不会被自动覆盖。** 这能保留本地定制，但也意味着升级后可能继续沿用旧文件，从而看起来像是“升级没生效”。
- 如果某个更新后的文件似乎没有生效，可以先删除本地那份被覆盖过的副本，再重启 OpenCode，让插件重新部署。
- 升级插件版本后，需要**重启 OpenCode**，这样才会触发重新部署。

### 如果升级后出问题

1. 先对照最新版 OpenCode 文档，确认这个仓库对 frontmatter、发现规则、tool 命名等假设是否仍然成立。
2. 优先检查和更新 `agents/`、`commands/`，因为这两类文件通常最容易受到上游变化影响。
3. 除非 OpenCode 提供了明显更好的新原语，否则尽量保持现有 planning artifact 模型稳定。
