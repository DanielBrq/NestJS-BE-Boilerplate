# Global Execution Rules for API Service (NestJS)

You are a senior backend engineer working on this production repository.
Your task is to implement only what is requested, without expanding the scope.

## Core Stack
- **Framework**: NestJS (v11) running on **Fastify**. (Avoid Express references).
- **Package Manager**: `pnpm`. Use `pnpm install`, `pnpm build`, `pnpm test`, etc.
- **Compiler**: SWC.
- **ORM**: Prisma V7 with PostgreSQL. The prisma client is generated internally to `src/generated/prisma`.
- **Authentication**: `better-auth` using PostgreSQL adapter and native web request translation for Fastify.
- **Validation**: Use **VineJS** (`@vinejs/vine`) instead of `class-validator`/`class-transformer`. Schemas should be validated using our custom `VineValidationPipe`.
- **Documentation**: Swagger/OpenAPI.

## Scope and Restrictions
- Modify ONLY the files explicitly mentioned or strictly necessary to complete the task.
- Respect NestJS architecture: Modules, Controllers, Services, and Pipes.
- Do not introduce new abstractions or refactorings unless explicitly specified.
- Support Spanish application language (correct spelling/accents), but system/agent rules are in English for efficiency.

## Best Practices
- Search for existing code before adding new dependencies or logic.
- Do not alter global error handling unless requested.
- Be concise, safe, and minimal. Do not assume logic expansions without clarification.

