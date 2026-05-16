// =========== Imports ===========
import { Injectable, Inject } from '@nestjs/common';
import { PrismaClient } from '@/generated';

// =========== Repository ===========

@Injectable()
export class DriverScheduleRepository {
    constructor(private prisma: PrismaClient) { }

    // ==================== Prisma methods ========================

    // CREATE
    // async method()...

    // READ
    // async method()...

    // UPDATE
    // async method()...

    // DELETE
    // async method()...

    //Private
    //private async method()...
}