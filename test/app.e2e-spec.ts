import { Test, TestingModule } from '@nestjs/testing';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './../src/app.module';
import { v4 as uuidv4 } from 'uuid';
import { VersioningType } from '@nestjs/common';

describe('AuthController (e2e)', () => {
  let app: NestFastifyApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication<NestFastifyApplication>(
      new FastifyAdapter(),
    );

    app.enableVersioning({
      type: VersioningType.URI,
      defaultVersion: '1',
    });

    await app.init();
    await app.getHttpAdapter().getInstance().ready();
  });

  afterAll(async () => {
    await app.close();
  });

  const email = `t${uuidv4().substring(0, 10)}@test.com`;
  const password = 'Password123!';
  const name = 'Test User';

  it('/v1/user/sign-up-email (POST)', async () => {
    const response = await app.inject({
      method: 'POST',
      url: '/v1/user/sign-up-email',
      payload: {
        email,
        password,
        name,
      },
    });

    expect(response.statusCode).toBe(201);
    const body = JSON.parse(response.payload);
    expect(body).toBeDefined();
    expect(body.user.email).toBe(email);
  });

  it('/v1/user/sign-in-email (POST)', async () => {
    const response = await app.inject({
      method: 'POST',
      url: '/v1/user/sign-in-email',
      payload: {
        email,
        password,
      },
    });

    expect(response.statusCode).toBe(200);
    const body = JSON.parse(response.payload);
    expect(body).toHaveProperty('token');
    expect(body.user.email).toBe(email);
  });
});
