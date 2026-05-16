// =========== Imports ===========
import { Module } from '@nestjs/common';
import { UserService } from '@/user/user.service';
import { UserController } from '@/user/user.controller';
import { UserRepository } from '@/user/user.repository';
import { PrismaClient } from '@/generated';
import { auth, prisma } from '@/auth/auth';

// =========== Module ===========
@Module({
  providers: [
    UserService,
    UserRepository,
    {
      provide: PrismaClient,
      useValue: prisma,
    },
    {
      provide: 'BETTER_AUTH',
      useValue: auth,
    },
  ],
  controllers: [UserController],
  exports: [UserService, UserRepository],
})
export class UserModule { }
