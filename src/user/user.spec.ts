// =========== Imports ===========
import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { PrismaClient } from '../generated';
import { auth, prisma } from '../auth/auth';

// =========== Tests ===========
describe('UserController', () => {
  let controller: UserController;

  // Setup =====================
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
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
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  // Test
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // Sign Up =====================
  describe('signUpEmail', () => {
    it('should create a new user', async () => {
      const response = await controller.signUpEmail({
        email: 'test@example.com',
        password: 'Password123!',
        name: 'John Doe',
      });
      expect(response).toBeDefined();
    });
  });

  // Sign In =====================
  describe('signInEmail', () => {
    it('should sign in a user', async () => {
      // Primero creamos el usuario
      await controller.signUpEmail({
        email: 'signin@example.com',
        password: 'Password123!',
        name: 'Jane Doe',
      });

      const response = await controller.signInEmail({
        email: 'signin@example.com',
        password: 'Password123!',
      });
      expect(response).toBeDefined();
      expect(response).toHaveProperty('token');
    });
  });
});
