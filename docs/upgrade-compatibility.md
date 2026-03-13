# Upgrade Guide / 升级与兼容指南

## English

### Plugin upgrade steps

There is no separate plugin upgrade command documented by OpenCode.

Official plugin behavior:
- npm plugins are installed automatically using Bun at startup
- npm packages and dependencies are cached in `~/.cache/opencode/node_modules/`
- `opencode-enhance-plan` refreshes its own managed runtime assets in `~/.config/opencode/` by default when packaged files change

Recommended plugin config:

```json
{
  "plugin": ["opencode-enhance-plan"]
}
```

To pin a specific plugin version, use a standard npm package spec:

```json
{
  "plugin": ["opencode-enhance-plan@1.6.0"]
}
```

1. Edit `opencode.json` and make sure the plugin entry is present.
2. If you need to force a specific release, change it to `opencode-enhance-plan@<version>`.
3. Restart OpenCode so it re-installs npm plugins at startup and refreshes the plugin's managed runtime files.
4. Verify that `enhance-plan`, `/init-plan`, `/plan-feature`, `/feature-switch`, and `/plan-handoff` are available.
5. If behavior is still stale, inspect whether another local customization or plugin is reintroducing older files.
6. Treat manual edits to this plugin's managed files as ephemeral: they may be overwritten on restart or upgrade.

### Engine upgrade checklist

Run after `opencode upgrade` or any upstream engine/tool change.

- [ ] `enhance-plan` still appears as a primary agent
- [ ] `/init-plan`, `/plan-feature`, `/feature-switch`, and `/plan-handoff` are still discoverable
- [ ] agent and command frontmatter still work with the current engine
- [ ] `todowrite`, `question`, and restricted writes still work
- [ ] `enhance-plan` can still update `AGENTS.md`, `.opencode/README.md`, and `plan/**`
- [ ] `enhance-plan` still does not modify implementation files

## 中文

### 插件升级步骤

OpenCode 官方文档目前没有单独提供“插件升级命令”。

官方插件行为：
- npm 插件会在启动时由 Bun 自动安装
- npm 包和依赖缓存位于 `~/.cache/opencode/node_modules/`
- `opencode-enhance-plan` 会在打包文件发生变化时，默认刷新自己位于 `~/.config/opencode/` 的受管理运行时资产

推荐插件配置：

```json
{
  "plugin": ["opencode-enhance-plan"]
}
```

如果你要强制指定某个插件版本，可以使用标准 npm 包写法：

```json
{
  "plugin": ["opencode-enhance-plan@1.6.0"]
}
```

1. 编辑 `opencode.json`，确认插件项存在。
2. 如果要强制升级到某个版本，把它改成 `opencode-enhance-plan@<version>`。
3. 重启 OpenCode，让它在启动时重新安装 npm 插件，并刷新插件的受管理运行时文件。
4. 验证 `enhance-plan`、`/init-plan`、`/plan-feature`、`/feature-switch`、`/plan-handoff` 是否可用。
5. 如果行为仍然陈旧，检查是否有其他本地定制或插件重新写回了旧文件。
6. 把你对本插件受管理文件的手工修改视为临时修改：它们可能在重启或升级时被覆盖。

### 引擎升级检查清单

在执行 `opencode upgrade` 或上游引擎 / tool API 发生变化后，检查：

- [ ] `enhance-plan` 仍然显示为 primary agent
- [ ] `/init-plan`、`/plan-feature`、`/feature-switch`、`/plan-handoff` 仍可被发现
- [ ] agent 与 command 的 frontmatter 仍按当前引擎预期工作
- [ ] `todowrite`、`question` 与受限写入仍可用
- [ ] `enhance-plan` 仍可更新 `AGENTS.md`、`.opencode/README.md` 与 `plan/**`
- [ ] `enhance-plan` 仍不会修改实现文件
