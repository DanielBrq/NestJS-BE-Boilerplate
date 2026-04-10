// ======== Imports ==============
import 'dotenv/config';
import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { bearer } from 'better-auth/plugins';
import { PrismaClient } from '../generated/prisma/client.js';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';

// ======== Database Connection =============
const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) throw new Error('DATABASE_URL no esta definido');
const pool = new pg.Pool({ connectionString: databaseUrl });
const adapter = new PrismaPg(pool);
export const prisma = new PrismaClient({ adapter });

// ======== Better Auth Configuration =============
export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  emailAndPassword: {
    enabled: true,
  },
  plugins: [bearer()], // Delete if you want to use cookies instead of tokens
  advanced: {
    useSecureCookies: process.env.NODE_ENV === 'production',
  },
});
