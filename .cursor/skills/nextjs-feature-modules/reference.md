# Reference: layout and migration

## Target tree (aligned with this monorepo)

Conceptual layout combining the article’s ideas with **next-imobiliaria**:

```text
next-imobiliaria/
├── apps/web/
│   ├── app/                    # App Router (or src/app/ if using src/)
│   │   ├── [locale]/           # optional — when i18n is added
│   │   ├── api/                # route handlers (Next “API routes”)
│   │   ├── layout.tsx
│   │   └── ...
│   ├── modules/
│   │   ├── core/               # shared app logic (not design system)
│   │   ├── authentication/     # example feature module
│   │   └── ...
│   ├── lib/                    # utilities, env, generic helpers
│   ├── i18n/                   # optional — dictionaries, routing helpers
│   ├── components/             # thin app wrappers if needed (e.g. theme)
│   └── hooks/                  # only if not yet moved into modules/core
├── packages/ui/                # @workspace/ui — global UI primitives
│   └── src/
│       ├── components/
│       ├── hooks/
│       ├── lib/
│       └── styles/
└── package.json
```

## Mapping from “article root” to this repo

| Article path | Here |
|--------------|------|
| `src/app/` | `apps/web/app/` or `apps/web/src/app/` |
| `src/lib/` | `apps/web/lib/` |
| `src/modules/` | `apps/web/modules/` |
| `src/i18n/` | `apps/web/i18n/` |
| Shared UI / “design system” | `packages/ui` (`@workspace/ui`) |
| `public/` | `apps/web/public/` |

## When to create a new module

Create `modules/<name>/` when:

- Multiple routes need the same hooks, services, and types.
- The feature has a clear boundary (e.g. auth, search, favorites).

Keep **one-off** page-specific UI in `modules/<feature>/` if that feature owns the page; avoid a new module for a single tiny page unless you expect growth.

## Anti-patterns

- Putting API business rules only inside React components — use `services/` (and Server Actions or route handlers at the boundary).
- Duplicating the same fetch logic across `app/` segments — move to `modules/<feature>/services`.
- Moving **primitive** UI into `modules/core/components` — prefer `packages/ui` unless it is truly app-specific chrome.
