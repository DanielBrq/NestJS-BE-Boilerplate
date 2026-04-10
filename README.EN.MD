<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# NestJS Boilerplate 2026

This is a high-performance boilerplate for **NestJS (v11+)** designed for the year 2026. Its primary goal is to provide a solid, pre-configured, and production-ready foundation, allowing developers to focus directly on **business logic** and **business entities** without wasting time on repetitive configurations or initial dependency management.

## 🚀 Key Features

- **NestJS 11 + Fastify**: High-performance engine using Fastify instead of Express to minimize latency.
- **SWC (Speedy Web Compiler)**: Ultra-fast compilation for development and builds, replacing TSC.
- **Prisma 7**: The leading ORM with the perfect balance between Developer Experience (DX) and optimized performance in its version 7+.
- **Better Auth**: Complete and ready-to-use authentication system, with basic methods integrated (email/password, sessions, etc.).
- **Testing with Vitest**: Modern, extremely fast testing suite compatible with the Vite ecosystem.
- **Husky & Lint-Staged**: Git hooks to ensure code quality and prevent pushing bugs to the repository.
- **Vine.js**: Robust and efficient data validation, replacing the traditional `class-validator` for better performance and typing.
- **PostgreSQL**: Default relational database, optimized for scalability.
- **Swagger UI**: Automatic API documentation available at `/docs`.
- **SOLID Architecture**: Layer-based structure: `Controller` -> `Service` -> `Repository` for better maintainability and decoupling.
- **Throttler**: Built-in protection against brute force attacks and request abuse (Rate Limiting).
- **PNPM**: Efficient, fast package management with disk space savings.
- **🤖 AI-Ready & Productivity**: Configured with context files (`AGENT.md`, `GEMINI.md`) and an `.agents` folder with specialized skills to boost productivity through AI agents.

## 🤖 Powered by AI (AI Context)

This boilerplate is designed to be "AI-First". It includes specific configurations so that coding assistants (like Antigravity/Gemini) perfectly understand the project context:

- **`.agents/`**: Directory containing specialized "Skills" (NestJS, Prisma, Better Auth best practices, etc.) that the agent consults to make decisions aligned with the project architecture.
- **`AGENT.md`**: Defines the agent's role as a senior engineer and sets technical and scope restrictions to avoid hallucinations or unnecessary changes.
- **`GEMINI.md`**: Specific rules for interacting with advanced models, including persistent memory management (Engram) and encoding stability.

### Directory Structure

```text
.
├── .agents/                    #  AI Skills and rules
│   └── skills/                 #  Best practices and prompts for the agent
├── prisma/                     #  Database schema and migrations
├── src/
│   ├── auth/                   #  Better Auth configuration
│   ├── common/                 #  Interceptors, Guards, and shared code
│   ├── generated/              #  Generated Prisma Client
│   ├── user/                   #  User and authentication module
│   │   ├── dto/                #  Vine.js DTO validators
│   │   ├── user.spec.ts        #  Unit tests for the controller
│   │   ├── user.controller.ts  #  Route handling
│   │   ├── user.service.ts     #  Pure business logic
│   │   ├── user.repository.ts  #  Prisma / Database connection
│   │   └── user.module.ts
│   ├── app.module.ts           #  Root NestJS module
│   └── main.ts                 #  Entry point (bootstrap)
├── AGENT.md                    #  Execution rules for AI
├── GEMINI.md                   #  Context rules and Engram
└── README.EN.MD                #  Documentation
```


## 🏗️ Project Architecture

The project follows a layered architecture to improve organization and facilitate unit testing:

- **Controllers**: Handle HTTP requests and responses.
- **Services**: Contain pure business logic.
- **Repositories**: Abstraction layer for data access (Prisma and Better Auth methods), allowing persistence changes without affecting business logic.
- **Validators**: Vine.js schemas for data input validation.

## 🛠️ Installation

Install [PNPM](https://pnpm.io/installation).

```bash
# Install dependencies
$ pnpm install
```

## ⚙️ Configuration

Copy the `.env.example` file to `.env` and configure your environment variables (Database, Better Auth secret, etc.).

```bash
$ cp .env.example .env
```

Generate the Prisma client and run initial migrations:

```bash
$ pnpm db:generate
$ pnpm db:migrate
```

## 🚀 Execution

```bash
# Development with hot-reload
$ pnpm dev

# Production mode
$ pnpm build
$ pnpm start:prod
```

## 🧪 Testing

```bash
# Run all tests (Unit and E2E)
$ pnpm test

# Test coverage
$ pnpm test:cov

# e2e tests
$ pnpm test:e2e
```

## 📚 API Documentation

Once the application is running, you can access the interactive Swagger documentation at:
`http://localhost:3001/docs`

---
