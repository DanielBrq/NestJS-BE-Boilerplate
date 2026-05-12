---
name: nodejs-best-practices
description: Node.js decision-making. Frameworks, async, security, arch. Think, do not copy blind.
risk: unknown
source: community
date_added: "2026-02-27"
---

# Node.js Best Practices

**Learn THINK, not memorize.**

## When Use
Decide arch, frameworks, async patterns, security.

## ⚠️ How Use
Teach **decisions**, not fixed code.
- ASK user context.
- Choose based on CONTEXT.
- No blind default.

---

## 1. Frameworks (2025)

### Decision
- Edge/Serverless → Hono (fast cold start)
- High Perf API → Fastify
- Enterprise/Team → NestJS
- Legacy/Max Ecosystem → Express
- Full-stack → Next.js/tRPC

### Compare
| Factor | Hono | Fastify | Express |
|--------|------|---------|---------|
| Best | Edge | Perf | Legacy |
| Start| Fast | Fast | Med |

---

## 2. Runtime (2025)

### TS Native
Node 22+: `--experimental-strip-types`. Run `.ts` direct.

### Modules
- **ESM** (`import`): Modern, tree-shake. Use for new.
- **CJS** (`require`): Legacy.

### Runtime
- **Node**: General, huge ecosystem.
- **Bun**: Perf, built-in bundler.
- **Deno**: Secure, TS native.

---

## 3. Architecture

### Layers
- **Controller**: HTTP, validate input.
- **Service**: Business logic. Framework-agnostic.
- **Repository**: DB/ORM only.

Why? Testable, flexible, clear.
Simplify for small scripts/prototypes.

---

## 4. Error Handle

### Centralized
Custom errors → Throw → Catch in middleware → Format res.

### Response
- Client: Status code, code string, safe msg. NO internal details.
- Logs: Stack, context, user ID, timestamp.

### Status
- 400: Bad input
- 401: No auth
- 403: No perm
- 404: Not found
- 409: Conflict
- 422: Validation fail
- 500: Server error (log!)

---

## 5. Async Patterns

- `async/await`: Sequential.
- `Promise.all`: Parallel independent.
- `Promise.allSettled`: Parallel, handle mixed fail/success.
- `Promise.race`: Timeout/first wins.

### Event Loop
- I/O (async helps): DB, HTTP, FS.
- CPU (async no help): Crypto, image. Use workers.
**NEVER** block loop (no sync `fs`, offload CPU).

---

## 6. Validation

Validate at boundaries: API entry, before DB, external data.
Libraries: Zod (TS), Valibot (small), ArkType (fast).
Fail fast, be specific, trust nothing.

---

## 7. Security

- Input validate.
- Parameterized SQL (no concat).
- Hash passwords (bcrypt/argon2).
- Verify JWT.
- Rate limit.
- Security headers (Helmet).
- HTTPS.
- CORS.
- Env vars for secrets.

Trust nothing (headers, cookies, body, DB).

---

## 8. Testing

- Unit: Business logic (`node:test`, Vitest).
- Integration: APIs (Supertest).
- E2E: Full flow (Playwright).

Test critical paths, edge cases, error handle.
Node 22 built-in: `node --test`.

---

## 10. Anti-Patterns
❌ Express for edge.
❌ Sync methods in prod.
❌ Logic in controllers.
❌ Trust external data.
❌ Block event loop.

✅ Choose by context.
✅ Layered arch.
✅ Validate all.
✅ Secrets in env.

---

## 11. Decision Check
Before code:
- Asked user preference?
- Chosen framework for CONTEXT?
- Error strategy?
- Validation points?
- Security?
