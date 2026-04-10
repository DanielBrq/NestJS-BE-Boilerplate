# Context Interaction Rules (Antigravity / Gemini)

This environment defines priority rules for Antigravity integration with this NestJS backend. Works alongside `AGENT.md`.

## UTF-8 Stability and Encoding (Critical)
There is a known UTF-8 encoding vulnerability in the terminal bridge.
- If issues are detected, avoid printing characters with accents (á, é, í, ó, ú) or (ñ) if they compromise the log or corrupt command output.
- Minimize the use of emojis or smart quotes during direct file editing and commands.
- Use 'ascii' safe console output if tools report failures, but interact with users in proper Spanish.

## MCP Memory and Engram
`Engram persistent memory` is enabled.
- Call `mem_save` immediately (without waiting for instruction) after DB refactors, structural descriptions, or severe architectural changes (e.g., Fastify <> better-auth integration shifts).
- Before starting work that involves aggressive overwriting, invoke `mem_search` to check for past rules/decisions.
- Mandatory: Before ending any prolonged session in this service, you must provide a `mem_session_summary`.

## Ecosystem Intelligence
- Keep recommendations brief and directly applicable to NestJS Fastify contexts.
- For recurring workflows regarding Prisma or migrations, refer to the global system rules under `.agents/`.

