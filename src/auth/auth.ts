import { v7 as uuidv7 } from 'uuid';
// ======== Imports ==============
import 'dotenv/config';
import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { bearer, admin, organization } from 'better-auth/plugins';
import * as accessControl from "../auth/permissions";
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
export const auth: any = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  advanced: {
    generateId: () => uuidv7(),
    useSecureCookies: process.env.NODE_ENV === 'production',
  },
  emailAndPassword: {
    enabled: true,
  },
  plugins: [
    bearer(),  // Delete if you want to use cookies instead of tokens
    admin(),
    organization({
      statements: accessControl.ac,
      roles: {
        member: accessControl.member,
        owner: accessControl.owner,
        admin: accessControl.admin,
        superAdmin: accessControl.superAdmin,
      },
    })
  ],
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60 * 1000, // 5 minutes
      staleWhileRevalidate: true,
    }
  },
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BASE_URL,
  trustedOrigins: [process.env.BETTER_AUTH_TRUSTED_ORIGINS!],
});
