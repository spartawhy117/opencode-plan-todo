---
description: Create or resume a feature plan with persistent artifacts and todo state
agent: enhance-plan
subtask: false
---

Plan the feature described by `$ARGUMENTS`.

Workflow:
- identify or create a normalized feature slug
- if a matching active feature already exists, resume it instead of creating a duplicate
- set that feature as the active planning context
- inspect relevant code, docs, and project rules before proposing implementation structure
- create or update the feature artifacts under `plan/active/<feature>/`
- treat existing artifacts as the source of truth when resuming an active feature

Required artifacts:
- `plan.json`
- `plan.md`
- `.plan-original.md`
- `handoff.md`

Allowed writes for this command:
- `plan/active/<feature>/plan.json`
- `plan/active/<feature>/plan.md`
- `plan/active/<feature>/.plan-original.md`
- `plan/active/<feature>/handoff.md`

The resulting plan must:
- start in `prepare` or `ready` depending on confidence
- maintain a structured todo list with ids, dependencies, and statuses
- include an `Option Paths` section when multiple reasonable directions exist
- wait for explicit user confirmation before any handoff is considered approved

`plan.json` must be kept current with:
- `status`
- `hasConfirmed`
- `todolist`
- `openQuestions`
- `optionPaths`
- `updatedAt`

Additional rules:
- when the feature already exists, resume and update its current artifacts instead of creating duplicates
- create `.plan-original.md` on first initialization, then update it only when you need to capture a new baseline draft
- `handoff.md` may exist as a draft during planning, but only treat it as final after the feature reaches `approved`

If the request is ambiguous, ask the smallest useful clarifying question first.
