// =========== Imports ============
import { auth } from '../auth/auth';
import { Injectable, Inject } from '@nestjs/common';
import { PrismaClient } from '../generated';

// =========== Repository ============

@Injectable()
export class UserRepository {
  constructor(
    private prisma: PrismaClient,
    @Inject('BETTER_AUTH') private betterAuth: typeof auth,
  ) {}

  // ==================== BetterAuth methods ========================

  // CREATE
  async signUpEmail(
    email: string,
    password: string,
    name: string,
  ): Promise<unknown> {
    return this.betterAuth.api.signUpEmail({
      body: {
        email,
        password,
        name,
      },
    });
  }

  // READ
  async signInEmail(email: string, password: string): Promise<unknown> {
    const response = await this.betterAuth.api.signInEmail({
      body: { email, password },
      asResponse: true,
    });
    const body = (await response.json()) as Record<string, unknown>;
    const token =
      response.headers.get('set-auth-token') || (body.token as string);
    return { ...body, token };
  }

  async signOut(req: { headers: Headers }): Promise<unknown> {
    return this.betterAuth.api.signOut({ headers: req.headers as any });
  }

  // UPDATE
  async changePassword(): Promise<unknown> {
    return this.betterAuth.api.changePassword({
      body: {
        newPassword: '',
        currentPassword: '',
      },
    });
  }

  // DELETE
  // async method()...

  // ==================== Prisma methods ========================

  // CREATE
  // async method()...

  // READ
  async existEmail(email: string): Promise<boolean> {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });
    return user !== null;
  }

  // UPDATE
  // async method()...

  // DELETE
  // async method()...

  //Private
  //private async method()...
}
