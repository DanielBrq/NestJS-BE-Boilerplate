---
name: prisma-postgres
description: Prisma Postgres setup/ops. Console, create-db CLI, Mgmt API, SDK.
license: MIT
metadata:
  author: prisma
  version: "7.6.0"
---

# Prisma Postgres

## When Apply
Setup from Console, instant DB via `create-db`, link project via `prisma postgres link`, Mgmt API & SDK.

## Core Workflows

### 1. Console
`console.prisma.io` → Workspace → Project. Get connection details.

### 2. create-db
Instant DB: `npx create-db@latest`
Aliases: `create-pg`, `create-postgres`.
Auto-delete ~24h unless claimed.

### 3. Link Local
`prisma postgres link`.
Updates `.env` with `DATABASE_URL`. Run `prisma generate` and `migrate dev`.
CI/headless: `prisma postgres link --api-key "..." --database "db_..."`

### 4. Mgmt API
URL: `https://api.prisma.io/v1`.
Auth: Service token or OAuth 2.0.

### 5. SDK
`npm install @prisma/management-api-sdk`.
Use `createManagementApiClient` (token) or `createManagementApiSdk` (OAuth).
