# opencode-plan-todo

## English

`opencode-plan-todo` is a lightweight workflow layer for OpenCode that adds a stronger planning experience without modifying the built-in CLI.

It introduces:
- a dedicated primary agent: `plan-todo`
- planning commands: `/init-plan`, `/plan-feature`, `/feature-switch`, `/plan-handoff`
- project templates for persistent feature plans and minimal build handoff

### Why this exists

Built-in planning modes are often good at analysis but weak at preserving feature-specific todo state, explicit review checkpoints, and lightweight execution handoff. This repository treats planning as a first-class workflow.

### Design goals

- keep the built-in `/init` and `plan` behaviors intact
- add a stronger planning mode instead of patching built-in behavior
- keep execution context small by handing build mode a focused `handoff.md`
- store feature planning as durable artifacts instead of disposable chat state
- default to Chinese in runtime conversation while keeping repository docs bilingual

### Repository contents

- `agents/` - custom agent definitions
- `commands/` - custom slash commands
- `templates/` - files used by `/init-plan`
- `docs/` - installation, usage, lifecycle, and upgrade notes
- `scripts/install.ps1` - optional Windows install helper

### Quick start

1. Copy `agents/`, `commands/`, and `templates/` into your OpenCode config directory, or run `scripts/install.ps1`.
2. Restart OpenCode.
3. Switch to `plan-todo`.
4. Run `/init-plan` inside a project.
5. Run `/plan-feature <feature-name>` to start planning.
6. Run `/plan-handoff` before switching to build mode.

### Key workflow

- Plan in `plan-todo`
- Keep one active feature at a time
- Persist plan artifacts under `plan/active/<feature>/`
- Generate a concise `handoff.md`
- Build from the handoff with minimal additional context

## 中文

`opencode-plan-todo` 是一个构建在 OpenCode 之上的轻量工作流层，用来增强规划体验，而不是修改 OpenCode 内置 CLI 行为。

它提供：
- 一个专用主代理：`plan-todo`
- 一组规划命令：`/init-plan`、`/plan-feature`、`/feature-switch`、`/plan-handoff`
- 一套用于持久化 feature 计划和最小 build handoff 的项目模板

### 为什么要做这个仓库

内置 planning 模式通常擅长分析，但在 feature 级 todo 持久化、显式审阅节点、以及轻量执行交接方面往往不够强。这套仓库把 planning 当作第一公民来处理。

### 设计目标

- 保持内置 `/init` 和 `plan` 的原始语义不变
- 通过新增更强的 planning mode，而不是打补丁修改内置行为
- 通过聚焦 `handoff.md` 来压缩 build 上下文
- 将 feature 规划保存为持久化工件，而不是一次性聊天状态
- 运行时默认可用中文交互，同时仓库文档提供英中双语内容

### 仓库内容

- `agents/` - 自定义 agent 定义
- `commands/` - 自定义斜杠命令
- `templates/` - `/init-plan` 使用的项目模板
- `docs/` - 安装、使用、生命周期、升级兼容说明
- `scripts/install.ps1` - 可选的 Windows 安装脚本

### 快速开始

1. 将 `agents/`、`commands/`、`templates/` 复制到你的 OpenCode 全局配置目录，或运行 `scripts/install.ps1`。
2. 重启 OpenCode。
3. 切换到 `plan-todo`。
4. 在项目中运行 `/init-plan`。
5. 用 `/plan-feature <feature-name>` 开始规划。
6. 在切到 build 前运行 `/plan-handoff`。

### 核心工作流

- 在 `plan-todo` 中做规划
- 同一时间只维护一个 active feature
- 将计划工件持久化到 `plan/active/<feature>/`
- 生成简洁的 `handoff.md`
- build 阶段以 handoff 为主上下文执行

## Documentation / 文档

- `docs/installation.md`
- `docs/usage.md`
- `docs/feature-lifecycle.md`
- `docs/upgrade-compatibility.md`

## Scope note / 范围说明

This repository is not a fork of OpenCode. It is a public workflow layer built on top of OpenCode's documented extension points.

本仓库不是 OpenCode 的源码 fork，而是构建在 OpenCode 官方扩展点之上的公开工作流层。
