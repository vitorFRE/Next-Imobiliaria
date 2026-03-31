---
name: nextjs-feature-modules
description: Applies the next-imobiliaria feature-module layout for Next.js App Router in a pnpm/Turbo monorepo. Use when scaffolding features, moving code, choosing where hooks or API logic live, or aligning folders with modules/core vs feature boundaries.
---

# Next.js feature modules (next-imobiliaria)

## Scope

This repo uses **Turbo + pnpm**. The web app lives in `apps/web`; shared UI and design tokens live in `packages/ui` (`@workspace/ui`). Route files stay under the App Router; **business logic and feature UI** live in **modules**, not scattered in `app/` trees.

## Where things go

| Concern | Location |
|--------|----------|
| Routes, layouts, `loading.tsx`, `page.tsx` | `apps/web/app/` |
| Cross-app design system (buttons, inputs, tokens) | `packages/ui/src/` — import via `@workspace/ui/...` |
| App-wide shared code (clients, env, generic hooks) | `apps/web/lib/` and/or `apps/web/modules/core/` |
| A vertical slice (auth, checkout, listings, …) | `apps/web/modules/<feature>/` |

Optional: wrap `app/`, `modules/`, `lib/` under `apps/web/src/` for a cleaner root; Next.js supports both. If you add `src/`, move `app` to `src/app` and keep the same inner names.

## Module shape (feature)

Each **feature module** is self-contained:

```text
modules/<feature>/
├── components/   # UI only for this feature
├── constants/
├── hooks/
├── services/     # API calls and orchestration for this feature
├── store/        # Optional (Zustand, etc.)
├── types/
└── utils/
```

## Module shape (core)

**core** holds what many features reuse (not primitive UI — that is `@workspace/ui`):

```text
modules/core/
├── components/   # App-level composites (shells, app-specific layouts)
├── configs/
├── constants/
├── context/
├── hooks/
├── services/     # Shared API clients, auth helpers
├── store/
├── types/
└── utils/
```

## `app/` folder rules

- **`app/`** = routing and route-level concerns: segments, `layout.tsx`, `page.tsx`, route handlers under `app/api/` if used.
- **Do not** grow huge component trees inside `app/<segment>/`. Import from `modules/<feature>/components` instead.
- Subfolders like `app/auth/`, `app/blog/` map to URL structure; they **compose** modules, they do not replace them.

## Monorepo imports

- App-local: `@/*` → `apps/web/*` (see `apps/web/tsconfig.json`).
- Shared UI: `@workspace/ui/components/...`, `@workspace/ui/lib/...`.

## i18n (when added)

- Route segment: `app/[locale]/...` for locale in the path.
- Messages and config: prefer `apps/web/i18n/` (or `src/i18n/`) next to `app/`.

## File size

Prefer **small files** (roughly under ~150 lines per file). Split components, hooks, or services instead of growing single files.

## Deeper reference

For a full directory tree and migration notes, see [reference.md](reference.md).
