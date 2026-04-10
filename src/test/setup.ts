// =========== Test Setup ===========
import { PrismaClient } from '../generated/prisma/client.js';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';

// Test Database connection
const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) throw new Error('DATABASE_URL no esta definido para tests');
const pool = new pg.Pool({ connectionString: databaseUrl });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

// Truncate tables after each test
afterEach(async () => {
  await prisma.$transaction([
    prisma.verification.deleteMany(),
    prisma.session.deleteMany(),
    prisma.account.deleteMany(),
    prisma.user.deleteMany(),
  ]);
});

// Disconnect from the database after all tests
afterAll(async () => {
  await prisma.$disconnect();
  await pool.end();
});
