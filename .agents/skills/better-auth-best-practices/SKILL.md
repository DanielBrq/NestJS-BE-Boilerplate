---
name: better-auth-best-practices
description: Configure Better Auth server/client, DB adapters, sessions, plugins, env vars. Use for auth.ts, TS auth, OAuth, plugin config.
---

# Better Auth Guide

**Check [better-auth.com/docs](https://better-auth.com/docs) for latest API.**

---

## Setup

1. `npm install better-auth`
2. Set `BETTER_AUTH_SECRET`, `BETTER_AUTH_URL`
3. Create `auth.ts` + DB config
4. Create route handler
5. `npx @better-auth/cli@latest migrate`
6. Verify: `GET /api/auth/ok` → `{ status: "ok" }`

---

## Quick Ref

### Env Vars
- `BETTER_AUTH_SECRET` - Encryption secret (32+ chars). Generate: `openssl rand -base64 32`
- `BETTER_AUTH_URL` - Base URL
Define in config ONLY if env vars missing.

### File Location
CLI checks: `./`, `./lib`, `./utils`, `./src`. Custom: `--config`.

### CLI
- `npx @better-auth/cli@latest migrate` - Apply schema (built-in adapter)
- `npx @better-auth/cli@latest generate` - Gen schema (Prisma/Drizzle)
- `npx @better-auth/cli mcp --cursor` - Add MCP

**Re-run after add/change plugin.**

---

## Core Config

| Option | Notes |
|--------|-------|
| `appName` | Display name |
| `baseURL` | If env var missing |
| `basePath` | Default `/api/auth`. `/` for root |
| `secret` | If env var missing |
| `database` | Required for most. See docs |
| `secondaryStorage` | Redis/KV for sessions/limits |
| `emailAndPassword` | `{ enabled: true }` |
| `socialProviders` | Google, etc. |
| `plugins` | Array of plugins |
| `trustedOrigins` | CSRF whitelist |

---

## Database

**Direct:** `pg.Pool`, `mysql2`, `better-sqlite3`, `bun:sqlite`.
**ORM:** `better-auth/adapters/drizzle|prisma|mongodb`.

**Critical:** Use adapter model names, NOT DB tables. Prisma `User` (table `users`) → `modelName: "user"`.

---

## Sessions

**Storage:**
1. `secondaryStorage` → sessions go there
2. `session.storeSessionInDatabase: true` → also to DB
3. No DB + `cookieCache` → stateless

**Cookies:** `compact` (base64url+HMAC), `jwt`, `jwe` (encrypted).
**Options:** `session.expiresIn`, `session.updateAge`, `cookieCache.maxAge`, `version`.

---

## User / Account

**User:** `modelName`, `fields`, `additionalFields`, `changeEmail`, `deleteUser`.
**Account:** `modelName`, `accountLinking`, `storeAccountCookie`.
**Required:** `email`, `name`.

---

## Emails
- `emailVerification.sendVerificationEmail` - Required for verify
- `sendOnSignUp` / `sendOnSignIn`
- `emailAndPassword.sendResetPassword`

---

## Security
- `useSecureCookies` - Force HTTPS
- `disableCSRFCheck` / `disableOriginCheck` - ⚠️ Risk
- `crossSubDomainCookies.enabled`
- `ipAddress.ipAddressHeaders`
- `database.generateId`
**Rate limit:** `rateLimit.enabled`, `window`, `max`, `storage`.

---

## Hooks
**Endpoints:** `hooks.before/after`. Access `ctx.path`, `ctx.context`.
**Database:** `databaseHooks.user.create.before/after`.
**Context:** `session`, `secret`, `authCookies`, `password`, `adapter`, `baseURL`.

---

## Plugins
Import explicit:
```ts
import { twoFactor } from "better-auth/plugins/two-factor"
```
Client plugins go in `createAuthClient({ plugins: [...] })`.

---

## Client
Import: `better-auth/client|react|vue|svelte|solid`.
Methods: `signUp.email()`, `signIn.email()`, `signOut()`, `useSession()`.

---

## Type Safety
Infer: `typeof auth.$Infer.Session`.
Client: `createAuthClient<typeof auth>()`.

---

## Gotchas
1. Model != table name. Use ORM model.
2. Re-run CLI after plugin add.
3. Secondary storage default for sessions.
4. Cookie cache skips custom fields.
5. Change email sends to old first.

---

## Resources
- Docs: https://better-auth.com/docs