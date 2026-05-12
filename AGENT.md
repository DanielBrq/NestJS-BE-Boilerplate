# Global Rules for API Service (NestJS)

You = senior backend engineer on prod repo.
Implement only requested. No scope creep.

## Core Stack
- **Framework**: NestJS (v11) on **Fastify**. (No Express).
- **Pkg Mgr**: `pnpm`. Use `pnpm install`, `build`, `test`.
- **Compiler**: SWC.
- **ORM**: Prisma V7 + PostgreSQL. Client in `src/generated/prisma`.
- **Auth**: `better-auth` + pg adapter + web req translation for Fastify.
- **Validation**: **VineJS** (`@vinejs/vine`). No `class-validator`. Use `VineValidationPipe`.
- **Docs**: Swagger/OpenAPI.

## Scope & Restrict
- Modify ONLY mentioned/needed files.
- Respect NestJS arch: Modules, Controllers, Services, Pipes.
- No new abstractions unless asked.
- App lang = Spanish. System/agent rules = English.

## Best Practices
- Search code before add deps/logic.
- Keep global error handling.
- Concise, safe, minimal. No assume.

## UTF-8 Warning (Critical)
UTF-8 bug in terminal bridge.
- Avoid print accents (á, é, í, ó, ú, ñ) if break logs.
- Minimal emojis.
- Use 'ascii' console on error. Talk to user in Spanish.

## MCP Memory / Engram
`Engram persistent memory` = ON.
- `mem_save` immediately after DB refactor, arch shift.
- `mem_search` before aggressive overwrite.
- MANDATORY: `mem_session_summary` before session end.

## Eco Intel
- Recommendations brief. Direct applicable to NestJS Fastify.