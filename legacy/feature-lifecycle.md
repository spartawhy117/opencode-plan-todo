# Feature Lifecycle / Feature 生命周期

## English

Each non-trivial feature plan should move through explicit states.

### States

#### `prepare`
Requirements, scope, and constraints are still being clarified.

#### `ready`
A reviewable plan exists, but execution is not yet approved.

#### `approved`
The user has explicitly approved execution.

#### `building`
The feature has been handed off to build mode.

#### `partial-done`
Some implementation is complete, but the plan needs to be updated before more work continues.

#### `finished`
The tracked feature work is complete.

#### `archived`
The feature plan is preserved for reference and reuse.

### Important rules

- `ready` does not mean implementation can begin.
- Only explicit user approval can move a feature to `approved`.
- `build` should begin from `handoff.md`, not from the entire planning history.
- A single active plan should focus on a single feature.

## 中文

每个非简单 feature plan 都应该经历一套明确的状态机。

### 状态说明

#### `prepare`
需求、范围、限制条件仍在澄清中。

#### `ready`
已经形成可审阅的计划草稿，但还没有获得执行批准。

#### `approved`
用户已经明确批准执行。

#### `building`
该 feature 已经切换到 build mode 开始执行。

#### `partial-done`
已经完成了一部分实现，但在继续之前需要先回到 planning 更新计划。

#### `finished`
该 feature 的追踪工作已经完成。

#### `archived`
该 feature plan 被归档，仅用于参考与复用。

### 重要规则

- `ready` 不等于可以直接开始实现。
- 只有显式用户确认才能让 feature 进入 `approved`。
- `build` 应优先从 `handoff.md` 开始，而不是从完整 planning 历史开始。
- 一个 active plan 只应聚焦一个 feature。
