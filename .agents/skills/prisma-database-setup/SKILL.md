---
name: prisma-database-setup
description: Configure Prisma with DB providers (Postgres, MySQL, SQLite, MongoDB).
license: MIT
metadata:
  author: prisma
  version: "7.6.0"
---

# Prisma Database Setup

## When Apply
Init project, change DB, troubleshoot connection, generate client.

## Requirements
Node 20.19.0+. TS 5.4.0+.
Bun: Use `bunx --bun prisma ...`.

## Databases
- PostgreSQL (`postgresql`)
- MySQL (`mysql`)
- SQLite (`sqlite`)
- MongoDB (`mongodb`)
- Prisma Postgres (`postgresql`)

## Config Files
- All: `prisma/schema.prisma`
- Prisma 7 SQL: `prisma.config.ts` for URLs.
- MongoDB: Stay Prisma 6.x. URL in schema.

## Driver Adapters (SQL)
- Postgres: `@prisma/adapter-pg` + `pg`
- MySQL: `@prisma/adapter-mariadb` + `mariadb`
- SQLite: `@prisma/adapter-better-sqlite3` + `better-sqlite3`

**Do NOT use SQL adapters for MongoDB.**

## Client Setup
1. `pnpm install prisma --save-dev`
2. `pnpm install @prisma/client`
3. Schema:
   ```prisma
   generator client {
     provider = "prisma-client"
     output   = "../generated"
   }
   ```
4. Generate: `npx prisma generate`
5. Connect:
   ```typescript
   import { PrismaClient } from '../generated/client'
   import { PrismaPg } from '@prisma/adapter-pg'

   const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
   const prisma = new PrismaClient({ adapter })
   ```

Re-generate after schema change.
