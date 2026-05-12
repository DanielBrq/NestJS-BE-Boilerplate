---
name: prisma-client-api
description: Prisma Client API reference. Queries, filters, relations, methods.
license: MIT
metadata:
  author: prisma
  version: "7.6.0"
---

# Prisma Client API

## When Apply
Write DB queries, CRUD, filter/sort, relations, txns.

## Setup
```ts
import { PrismaClient } from '../generated/client'
import { PrismaPg } from '@prisma/adapter-pg'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
const prisma = new PrismaClient({ adapter })
```

## Methods
- `findUnique()`, `findUniqueOrThrow()`
- `findFirst()`, `findFirstOrThrow()`
- `findMany()`
- `create()`, `createMany()`, `createManyAndReturn()`
- `update()`, `updateMany()`, `updateManyAndReturn()`
- `upsert()`
- `delete()`, `deleteMany()`
- `count()`, `aggregate()`, `groupBy()`

## Options
- `where`: Filters
- `select`: Fields to get
- `include`: Relations
- `omit`: Fields skip
- `orderBy`: Sort
- `take` / `skip` / `cursor`: Paginaton
- `distinct`: Unique

## Client Methods
- `$transaction()`: Array or interactive txn.
- `$queryRaw()`, `$executeRaw()`: Raw SQL.
- `$connect()`, `$disconnect()`, `$extends()`.

## Filter Operators
- `equals`, `not`, `in`, `notIn`
- `lt`, `lte`, `gt`, `gte`
- `contains`, `startsWith`, `endsWith`
- `mode` (case sens)

## Relation Filters
- `some`, `every`, `none`
- `is`, `isNot` (1-to-1)

## Txn Example
```ts
const [user, post] = await prisma.$transaction([
  prisma.user.create({ data: { email: 'alice@prisma.io' } }),
  prisma.post.create({ data: { title: 'Hello', authorId: 1 } })
])
```
