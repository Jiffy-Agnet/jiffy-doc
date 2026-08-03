# Agent Instructions for jiffy-doc

This file is read by Jiffy's coding agent (OpenCode) when working in this repository.

## Roadmap awareness

This repository tracks documentation work in `ROADMAP.md` at the repo root. Each roadmap item has a short ID (e.g. `R5`).

### When completing a task

1. Check the originating Issue body for a line formatted as `Roadmap item: R#`.
2. If present, after implementing the task, edit `ROADMAP.md` in the same Pull Request and change that item's checkbox from `[ ]` to `[x]`.
3. If no `Roadmap item:` line is present, do not modify `ROADMAP.md` for checkbox state.

### When discovering new work

If while completing a task you identify additional documentation work that is not already tracked in `ROADMAP.md`:

1. Do NOT create a new Issue for it.
2. Do NOT execute it.
3. Append a single unchecked, unnumbered line describing it under the `## Proposed` section of `ROADMAP.md`, as part of the same Pull Request.
4. A human will review the `Proposed` section and decide whether to promote it into a numbered roadmap item and dispatch it as a separate Issue.

### Constraints

- Never mark an item done unless the corresponding work was actually completed in this PR.
- Never remove or renumber existing roadmap IDs.
- Never mention `@jiffy` inside `ROADMAP.md`.
