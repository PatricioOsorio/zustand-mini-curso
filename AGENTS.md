# AGENTS.md

This file provides guidance to agents when working with code in this repository.

## Project context

Course project ("zustand-mini-curso") demonstrating Zustand state management in a Vite + React 18 + TypeScript + Tailwind + React Router DOM app. Pages under `src/pages/` are organized by lesson section (`01-basic/`, `02-objects/`, `03-slices/`) — each section showcases a different Zustand pattern, so a new feature usually belongs to whichever section's pattern it extends rather than to a shared module.

The lockfile is `bun.lock`, but scripts run via Vite/Node and the README documents the `npm` flow. Use `bun install` to match the committed lockfile; `npm install` works but will regenerate `package-lock.json`.

## Commands

- `npm run dev` — Vite dev server
- `npm run build` — `tsc` typecheck then `vite build` (typecheck errors fail the build)
- `npm run lint` — ESLint with `--max-warnings 0` (CI-grade strictness; warnings break the build expectation)
- `npm run preview` — serve the production build

There is no test runner configured.

## Architecture

### Routing

`src/router/router.tsx` defines a `createBrowserRouter` tree: `Root` → `DashboardLayout` (course demo pages) and `AuthLayout` (login). New course pages are added as children of the `dashboard` route and re-exported from `src/pages/index.ts` so the router import line stays flat.

### Zustand stores (`src/stores/`)

Three stores demonstrate increasingly advanced middleware composition — when adding behavior, match the existing pattern for that store rather than introducing a new one:

- **`bears/bears.store.ts`** — plain `create` + `persist` to `localStorage`, keyed by `LOCAL_STORAGE_KEY.BEAR`. Uses a typed `StateCreator<IBearState>` factory then wraps it at `create(...)` time.
- **`person/person.store.ts`** — `devtools(persist(...))` composition with a **custom Firebase REST storage** (`stores/storages/firebase.storage.ts`) plugged in via `createJSONStorage`. The `StateCreator` type parameter explicitly lists both middleware mutators (`['zustand/devtools', never], ['zustand/persist', unknown]`) — required so the typed `set(value, undefined, actionName)` devtools signature compiles. Action-name strings (`'person/setFirstName'`) are the devtools labels; keep the `slice/action` convention when adding actions.
- **`tasks/task.store.ts`** — `devtools`-only, stores tasks as a `Record<string, ITask>` (not an array) for O(1) lookup; the `getTaskByStatus` selector calls `Object.values(...).filter(...)`. Drag-and-drop state lives in the same store (`draggingTaskId`).

A custom `logger` middleware exists at `stores/middlewares/logger.middleware.ts` (currently commented out in `person.store.ts`) — it patches both `set` and `store.setState` so external mutations are also logged. Use it as the reference when implementing other Zustand middleware in this codebase.

### Firebase storage adapter

`stores/storages/firebase.storage.ts` implements the `StateStorage` interface against Firebase Realtime Database REST endpoints under `FIREBASE_BASE_URL` (`src/utils/constants.ts`). `getItem` `JSON.stringify`s the parsed response because `createJSONStorage` will `JSON.parse` it again — do not remove the double-encode. `removeItem` is a no-op stub.

### Path aliases — must be edited in two places

Aliases (`@components/*`, `@layouts/*`, `@pages/*`, `@router/*`, `@stores/*`, `@utils/*`, `@interfaces/*`) are declared in **both** `tsconfig.json` (`compilerOptions.paths`) and `vite.config.ts` (`resolve.alias`). Adding or renaming an alias requires updating both files or imports will resolve at typecheck time but fail at bundle time (or vice versa).

### Conventions

- Interfaces are prefixed `I` (`IBear`, `ITask`, `IPersonState`).
- Barrel files (`components/index.ts`, `layouts/index.ts`, `pages/index.ts`) re-export everything in the folder — add new exports there so router/page imports stay one-liners.
- Tailwind is the styling layer; `classnames` and `clsx` + `tailwind-merge` are both available. `src/utils/cn.ts` is the canonical `cn(...)` helper for merged conditional classes.
