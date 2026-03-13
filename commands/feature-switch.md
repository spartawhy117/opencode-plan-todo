---
description: Switch the active feature plan context while preserving persisted todo state
agent: enhance-plan
subtask: false
---

Switch the active feature plan context.

Rules:
- this command is only valid while `enhance-plan` is the active agent
- if the current agent is not `enhance-plan`, instruct the user to switch to `enhance-plan` first and do not proceed
- inspect `plan/active/*/plan.json` files to build the feature selection list
- present lightweight metadata for selection, including feature id, name, overview, status, and confirmation state
- before switching, persist the current feature todo, status, open questions, and option paths back to the current `plan.json`
- after switching, restore the target feature's todo, plan state, and review context from its `plan.json` and `plan.md`
- do not merge two feature contexts unless the user explicitly requests a merge workflow

If there is only one active feature, say so and show its current state.
