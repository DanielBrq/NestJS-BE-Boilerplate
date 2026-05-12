---
name: nestjs-best-practices
description: NestJS arch/patterns for prod apps. Modules, DI, security, performance.
license: MIT
metadata:
  author: Kadajett
  version: "1.1.0"
---

# NestJS Best Practices

40 rules, 10 categories. Prioritize high impact.

## When Apply
- Write new NestJS modules/controllers/services
- Auth/Authz
- Code review
- Refactor
- Optimize DB/Perf
- Microservices

## Priorities

| Priority | Category | Impact | Prefix |
|----------|----------|--------|--------|
| 1 | Architecture | CRITICAL | `arch-` |
| 2 | Dependency Injection | CRITICAL | `di-` |
| 3 | Error Handling | HIGH | `error-` |
| 4 | Security | HIGH | `security-` |
| 5 | Performance | HIGH | `perf-` |
| 6 | Testing | MEDIUM-HIGH | `test-` |
| 7 | DB & ORM | MEDIUM-HIGH | `db-` |
| 8 | API Design | MEDIUM | `api-` |
| 9 | Microservices | MEDIUM | `micro-` |
| 10 | DevOps | LOW-MEDIUM | `devops-` |

## Quick Ref

### 1. Arch (CRITICAL)
- `arch-avoid-circular-deps` - No circular deps.
- `arch-feature-modules` - Organize by feature.
- `arch-module-sharing` - Export/import properly. No duplicate providers.
- `arch-single-responsibility` - Focused services. No god objects.
- `arch-use-repository-pattern` - Abstract DB.
- `arch-use-events` - Event-driven decoupling.

### 2. DI (CRITICAL)
- `di-avoid-service-locator` - No service locator.
- `di-interface-segregation` - ISP.
- `di-liskov-substitution` - LSP.
- `di-prefer-constructor-injection` - Constructor > property DI.
- `di-scope-awareness` - Know singleton/request/transient.
- `di-use-interfaces-tokens` - Inject tokens.

### 3. Error (HIGH)
- `error-use-exception-filters` - Centralized errors.
- `error-throw-http-exceptions` - NestJS HTTP exceptions.
- `error-handle-async-errors` - Handle async throw.

### 4. Security (HIGH)
- `security-auth-jwt` - Secure JWT.
- `security-validate-all-input` - class-validator (or VineJS per AGENT.md).
- `security-use-guards` - Auth/Authz guards.
- `security-sanitize-output` - Prevent XSS.
- `security-rate-limiting` - Rate limit.

### 5. Perf (HIGH)
- `perf-async-hooks` - Async hooks.
- `perf-use-caching` - Caching.
- `perf-optimize-database` - Optimize DB queries.
- `perf-lazy-loading` - Lazy load modules.

### 6. Test (MEDIUM-HIGH)
- `test-use-testing-module` - NestJS testing.
- `test-e2e-supertest` - Supertest E2E.
- `test-mock-external-services` - Mock deps.

### 7. DB (MEDIUM-HIGH)
- `db-use-transactions` - Txns.
- `db-avoid-n-plus-one` - Fix N+1.
- `db-use-migrations` - Migrations.

### 8. API (MEDIUM)
- `api-use-dto-serialization` - DTO serialize.
- `api-use-interceptors` - Interceptors for cross-cutting.
- `api-versioning` - Version API.
- `api-use-pipes` - Transform pipes.

### 9. Microservices (MEDIUM)
- `micro-use-patterns` - Msg/event patterns.
- `micro-use-health-checks` - Health checks.
- `micro-use-queues` - Background jobs.

### 10. DevOps (LOW-MEDIUM)
- `devops-use-config-module` - Env config.
- `devops-use-logging` - Structured logs.
- `devops-graceful-shutdown` - Zero-downtime shutdown.

## Usage
Read rules in `rules/`. E.g.: `rules/arch-avoid-circular-deps.md`.
Compiled doc: `AGENTS.md`.
