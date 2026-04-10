<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# NestJS Boilerplate 2026

Este es un boilerplate de alto rendimiento para **NestJS (v11+)** diseñado para el año 2026. El propósito principal es proporcionar una base sólida, pre-configurada y lista para producción, permitiendo a los desarrolladores enfocarse directamente en la **lógica de negocio** y **entidades** sin perder tiempo en configuraciones repetitivas o gestión de dependencias iniciales.

## 🚀 Características Principales

- **NestJS 11 + Fastify**: Motor de alto rendimiento utilizando Fastify en lugar de Express para minimizar la latencia.
- **SWC (Speedy Web Compiler)**: Compilación ultra rápida para desarrollo y builds, sustituyendo a TSC.
- **Prisma 7**: El ORM líder con el balance perfecto entre Experience Developer (DX) y rendimiento optimizado en su versión 7+.
- **Better Auth**: Sistema de autenticación completo y listo para usar, con métodos básicos integrados (email/password, sesiones, etc.).
- **Testing con Vitest**: Suite de pruebas moderna, extremadamente rápida y compatible con el ecosistema de Vite.
- **Husky & Lint-Staged**: Ganchos de Git para asegurar la calidad del código y evitar subir bugs al repositorio.
- **Vine.js**: Validación de datos robusta y eficiente, sustituyendo al tradicional `class-validator` para un mejor rendimiento y tipado.
- **PostgreSQL**: Base de datos relacional por defecto, optimizada para escalabilidad.
- **Swagger UI**: Documentación automática de la API disponible en `/docs`.
- **Arquitectura SOLID**: Estructura basada en capas: `Controller` -> `Service` -> `Repository` para una mejor mantenibilidad y desacoplamiento.
- **Throttler**: Protección integrada contra ataques de fuerza bruta y abuso de peticiones (Rate Limiting).
- **PNPM**: Gestión de paquetes eficiente, rápida y con ahorro de espacio en disco.
- **🤖 IA-Ready & Productividad**: Configurado con archivos de contexto (`AGENT.md`, `GEMINI.md`) y una carpeta `.agents` con skills especializadas para potenciar la productividad mediante agentes de IA.

## 🤖 Potenciado por IA (AI Context)

Este boilerplate está diseñado para ser "AI-First". Incluye configuraciones específicas para que los asistentes de codificación (como Antigravity/Gemini) entiendan perfectamente el contexto del proyecto:

- **`.agents/`**: Directorio que contiene "Skills" especializadas (mejores prácticas de NestJS, Prisma, Better Auth, etc.) que el agente consulta para tomar decisiones alineadas con la arquitectura del proyecto.
- **`AGENT.md`**: Define el rol del agente como ingeniero senior y establece las restricciones técnicas y de scope para evitar alucinaciones o cambios innecesarios.
- **`GEMINI.md`**: Reglas específicas para la interacción con modelos avanzados, incluyendo manejo de memoria persistente (Engram) y estabilidad de codificación.

### Estructura de Directorios

```text
.
├── .agents/                    # Skills y reglas de IA
│   └── skills/                 # Mejores prácticas y prompts para el agente
├── prisma/                     # Esquema de base de datos y migraciones
├── src/
│   ├── auth/                   # Configuración de Better Auth
│   ├── common/                 # Interceptors, Guards y código compartido
│   ├── generated/              # Prisma Client generado
│   ├── user/                   # Módulo de usuario y autenticación
│   │   ├── dto/                # Validadores de Vine.js DTO
│   │   ├── user.spec.ts        # Pruebas unitarias del controller
│   │   ├── user.controller.ts  # Manejo de rutas
│   │   ├── user.service.ts     # Lógica de negocio pura
│   │   ├── user.repository.ts  # Conexión a Prisma / Base de datos
│   │   └── user.module.ts
│   ├── app.module.ts           # Módulo raíz de NestJS
│   └── main.ts                 # Punto de entrada (bootstrap)
├── AGENT.md                    # Reglas de ejecución para IA
├── GEMINI.md                   # Reglas de contexto y Engram
└── README.md                   # Documentación
```


## 🏗️ Arquitectura del Proyecto

El proyecto sigue una arquitectura de capas que mejora la organización y facilita las pruebas unitarias:

- **Controllers**: Manejan las peticiones HTTP y las respuestas.
- **Services**: Contienen la lógica de negocio pura.
- **Repositories**: Capa de abstracción para el acceso a datos (Prisma y métodos de Better Auth), permitiendo cambiar la persistencia sin afectar la lógica de negocio.
- **Validators**: Esquemas de Vine.js para validación de entrada de datos.

## 🛠️ Instalación

Instalar [PNPM](https://pnpm.io/installation).

```bash
# Instalar dependencias
$ pnpm install
```

## ⚙️ Configuración

Copia el archivo `.env.example` a `.env` y configura tus variables de entorno (Base de datos, Better Auth secret, etc.).

```bash
$ cp .env.example .env
```

Genera el cliente de Prisma y ejecuta las migraciones iniciales:

```bash
$ pnpm db:generate
$ pnpm db:migrate
```

## 🚀 Ejecución

```bash
# Desarrollo con hot-reload
$ pnpm dev

# Modo producción
$ pnpm build
$ pnpm start:prod
```

## 🧪 Testing

```bash
# Ejecutar todas las pruebas (Unitarias y E2E)
$ pnpm test

# Cobertura de tests
$ pnpm test:cov

# e2e tests
$ pnpm test:e2e
```

## 📚 Documentación de la API

Una vez que la aplicación esté corriendo, puedes acceder a la documentación interactiva de Swagger en:
`http://localhost:3001/docs`

---
