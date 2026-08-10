# jiffy-doc

Documentation site for **Jiffy**, the self-hosted autonomous software engineering
platform. Mention `@jiffy` on an Issue in your GitHub, GitLab, or Gitea
repository and Jiffy turns that request into a reviewed Pull Request.

This site is built with [Next.js](https://nextjs.org) and
[Fumadocs](https://fumadocs.dev), and documents the Jiffy ecosystem end to end:
the **Edge Component** that watches for `@jiffy` mentions, the **Gateway** that
authenticates and queues tasks, the **Agent/Sandbox** that executes them in an
isolated container, and the callback that reports the PR back on the Issue
thread.

## Getting started

```bash
pnpm install       # install dependencies
pnpm dev           # run the development server on http://localhost:3000
pnpm build         # production build
pnpm lint          # lint with ESLint
pnpm types:check   # type-check with TypeScript (includes Next.js typegen)
```

## Project layout

- `content/` — the MDX source for the documentation pages (organized under
  `content/docs/ecosystem/`).
- `lib/source.ts` — the Fumadocs content source adapter ([`loader()`](https://fumadocs.dev/docs/headless/source-api)), which exposes the docs content to the app.
- `app/(home)/` — the landing page route group.
- `app/docs/` — the documentation layout and pages.
- `app/api/search/route.ts` — the search Route Handler.

## Documentation work tracking

Documentation work for this repository is tracked in `ROADMAP.md`. Each item
has a short ID (`R#`); when an Issue includes a `Roadmap item: R#` line,
Jiffy's agent marks the corresponding item done in the same Pull Request.
`AGENTS.md` contains the full instructions Jiffy's agent follows, including how
newly discovered work gets appended to `ROADMAP.md`'s `## Proposed` section for
human review.

---

Built with [Fumadocs](https://fumadocs.dev).
