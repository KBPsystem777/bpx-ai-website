<!-- OPENSPEC:START -->
# OpenSpec Instructions

These instructions are for AI assistants working in this project.

Always open `@/openspec/AGENTS.md` when the request:
- Mentions planning or proposals (words like proposal, spec, change, plan)
- Introduces new capabilities, breaking changes, architecture shifts, or big performance/security work
- Sounds ambiguous and you need the authoritative spec before coding

Use `@/openspec/AGENTS.md` to learn:
- How to create and apply change proposals
- Spec format and conventions
- Project structure and guidelines

Keep this managed block so 'openspec update' can refresh the instructions.

<!-- OPENSPEC:END -->
<!-- PR-SCOPE-DISCIPLINE:START -->
## PR Scope Discipline (mandatory for every PR review and commit)

When reviewing or authoring pull requests, **every commit and every
changed file in the PR must serve the PR's stated scope** (title + body
+ linked issue + branch name + commit messages). Anything else gets
flagged for redaction before approval.

### As a reviewer

Add a dedicated **"Unrelated / Low-Value Changes"** section to the
summary review. Flag pure-churn diffs (reformatting, em-dash → hyphen,
JSDoc trims, import reordering), drive-by refactors, bundled unrelated
fixes, dependency bumps not required by the change, config/tooling
churn, and tests for files not touched by the PR.

For each unrelated change:

```markdown
🟠 [important] **Unrelated churn — please revert this file from the PR.**

`{file}` has -X/+Y changes but no functional change for this PR's scope.

**Fix:** `git checkout {base} -- {file}` and ship any formatting
cleanup as a separate PR.
```

A PR with any unrelated change cannot be approved on the first pass.
Verdict is at minimum **Comment**, and **Request Changes** if the
unrelated change is non-trivial (>20 lines, sensitive file, or
user-facing reformat). Write `None — every change in this PR is in
scope. ✅` if genuinely surgical, so the section is never silent.

Walk every commit (`gh pr view <num> --json commits`). Flag commits
whose messages don't match the PR scope, and flag empty/`wip`/`fix`/
`lint`/`format` messages — ask for squash or reword before merge.

### As an author

- One PR = one logical change. Split feature + cleanup into two PRs.
- Don't sneak formatting or unrelated refactors into a feature commit.
- Commit messages must describe the change, not the task instruction.
- Empty / placeholder commit messages are not acceptable.

This rule mirrors `~/.claude/CLAUDE.md` and the `elite-pr-code-review`
skill. If your editor uses Copilot, also create
`.github/copilot-instructions.md` referencing this rule.
<!-- PR-SCOPE-DISCIPLINE:END -->
