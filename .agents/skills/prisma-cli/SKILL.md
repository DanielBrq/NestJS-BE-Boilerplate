---
name: prisma-cli
description: Prisma CLI commands. Setup, generate, migrate, db, studio, mcp.
license: MIT
metadata:
  author: prisma
  version: "7.6.0"
---

# Prisma CLI

## When Apply
Setup, generate client, migrations, db state, local dev DB, debug.

## Core Categories

1. Setup: `init`
2. Generate: `generate`
3. Dev: `dev`
4. DB: `db pull|push|seed|execute`
5. Migrate: `migrate dev|deploy|reset|status`
6. Util: `studio|mcp|debug|format|validate`

## Quick Ref

### Setup
`prisma init`
`prisma init --datasource-provider postgresql`
`prisma init --db` (Prisma Postgres cloud)

### Generate
`prisma generate`
`prisma generate --watch`

### Bun
Bun runtime: `bunx --bun prisma ...`

### Local Dev DB
`prisma dev` (Prisma Postgres local)
`prisma dev --detach`
`prisma dev ls|stop|rm`

### DB Ops
`prisma db pull` (Introspect)
`prisma db push` (Push schema without migrations)
`prisma db seed`
`prisma db execute --file script.sql`

### Migrate
`prisma migrate dev` (Create + Apply)
`prisma migrate dev --create-only`
`prisma migrate reset`
`prisma migrate deploy` (Prod/CI)
`prisma migrate diff`

### Utils
`prisma studio` (GUI)
`prisma mcp` (AI Tooling)
`prisma validate`
`prisma format`

## Prisma 7 Setup
Config in `prisma.config.ts`:
```ts
import 'dotenv/config'
import { defineConfig, env } from 'prisma/config'

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: { path: 'prisma/migrations', seed: 'tsx prisma/seed.ts' },
  datasource: { url: env('DATABASE_URL') },
})
```

## Behavior
- Re-run `prisma generate` after `migrate dev` / `db push`.
- Re-run `prisma db seed` after reset.
