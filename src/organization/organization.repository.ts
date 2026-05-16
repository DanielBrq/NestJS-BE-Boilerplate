// =========== Imports ============
import { auth } from '@/auth/auth';
import { Injectable, Inject } from '@nestjs/common';
import { PrismaClient } from '@/generated';

export class OrganizationRepository {
    constructor(
        private prisma: PrismaClient,
        @Inject('BETTER_AUTH') private betterAuth: typeof auth,
    ) { }


}