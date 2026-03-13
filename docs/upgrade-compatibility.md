# Upgrade Compatibility / 升级兼容性

## English

### Positioning

This repository is a workflow layer built on top of OpenCode's extension points. It is not a fork of the OpenCode CLI.

### Stable parts

These are expected to remain relatively stable:
- planning concepts and lifecycle
- feature artifact structure
- template files
- the `plan-todo` planning kernel itself

### Potentially changing parts

These may need adjustment after OpenCode upgrades:
- agent frontmatter behavior
- command frontmatter behavior
- primary agent discovery in the UI
- command discovery rules
- tool permissions and tool naming

### Recommended upgrade policy

- keep custom files in `~/.config/opencode/` or project `.opencode/`
- do not modify the OpenCode installation directory
- after `opencode upgrade`, verify that:
  - `plan-todo` still appears as a primary agent
  - commands are still recognized
  - command frontmatter still behaves as expected
  - planning tools such as `todowrite` and `question` still work as intended

### If something breaks

1. Compare the new OpenCode docs with this repository's assumptions.
2. Update `agents/` and `commands/` first.
3. Keep the planning artifact model stable unless OpenCode introduces a clearly better primitive.

### Plugin mode notes

If you installed via the plugin method (`opencode.json`):
- Plugin assets are deployed to `~/.config/opencode/` on each startup
- The plugin will not overwrite files you have manually modified (unless forced)
- After upgrading `opencode-plan-todo` to a new version, restart OpenCode to re-deploy updated assets
- If the `@opencode-ai/plugin` API changes in a breaking way, check for a compatible version of `opencode-plan-todo`

## 中文

### 定位

这个仓库是建立在 OpenCode 官方扩展点之上的 workflow layer，不是 OpenCode CLI 的源码 fork。

### 相对稳定的部分

这些内容通常相对稳定：
- planning 概念与生命周期
- feature 工件结构
- 模板文件
- `plan-todo` 的 planning kernel 本身

### 可能变化的部分

OpenCode 升级后，这些点可能需要适配：
- agent frontmatter 行为
- command frontmatter 行为
- UI 中 primary agent 的发现方式
- command 发现规则
- tool 权限与命名

### 推荐升级策略

- 自定义文件放在 `~/.config/opencode/` 或项目 `.opencode/`
- 不要修改 OpenCode 安装目录
- 执行 `opencode upgrade` 后，检查：
  - `plan-todo` 是否还显示为 primary agent
  - commands 是否还能识别
  - command frontmatter 是否仍按预期工作
  - `todowrite`、`question` 等 planning 工具是否仍正常

### 如果升级后出问题

1. 对照新版 OpenCode 文档，检查当前仓库假设是否仍成立。
2. 优先更新 `agents/` 和 `commands/`。
3. 除非 OpenCode 提供了明显更好的新原语，否则尽量保持 planning artifact 模型稳定。
