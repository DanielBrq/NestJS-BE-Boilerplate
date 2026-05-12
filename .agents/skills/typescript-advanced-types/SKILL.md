---
name: typescript-advanced-types
description: TS advanced types. Generics, conditionals, mapped, templates, utility.
---

# TS Advanced Types

## 1. Generics
Reusable types.
```ts
function identity<T>(value: T): T { return value; }
// Constraints:
function logLength<T extends { length: number }>(item: T) { ... }
```

## 2. Conditionals
Type logic.
```ts
type IsString<T> = T extends string ? true : false;
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
```

## 3. Mapped Types
Transform props.
```ts
type Readonly<T> = { readonly [P in keyof T]: T[P]; };
type Partial<T> = { [P in keyof T]?: T[P]; };
// Remap keys:
type Getters<T> = { [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K]; };
```

## 4. Template Literals
String patterns.
```ts
type EventName = "click";
type EventHandler = `on${Capitalize<EventName>}`; // "onClick"
```

## 5. Utilities
`Partial`, `Required`, `Readonly`, `Pick`, `Omit`, `Exclude`, `Extract`, `NonNullable`, `Record`.

## Patterns

### Type-Safe Event Emitter
```ts
type EventMap = { "event": { id: string } };
class Emitter<T> { on<K extends keyof T>(ev: K, cb: (d: T[K]) => void) {} }
```

### Type-Safe API Client
Infer method/path/body/params to ensure exact API shape.

### Deep Readonly/Partial
Recursive mapped types for nested objects.

### Form Validation
Infer errors based on input shape.

### Discriminated Unions
State machines.
```ts
type State = { type: "idle" } | { type: "success"; data: any };
switch (state.type) { ... } // Safe
```

## Inference & Guards
- `infer`: Extract nested type. `T extends Promise<infer U> ? U : never`.
- Type guards: `function isStr(v: unknown): v is string { return typeof v === 'string'; }`.
- Asserts: `function assertStr(v: unknown): asserts v is string`.

## Best Practices
1. `unknown` > `any`.
2. `interface` for objects, `type` for unions.
3. No `any`. Use guards.
4. Strict mode ON.
