// ======== Imports =============
import 'dotenv/config';
import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from '@fastify/helmet';
import { AppModule } from './app.module';
import { TimeoutInterceptor } from './common/interceptors/timeout.interceptor';

// ======== Bootstrap =============
async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    { bodyParser: false },
  );

  // Helmet
  await app.register(helmet, {
    contentSecurityPolicy: {
      directives: {
        defaultSrc: [`'self'`],
        styleSrc: [`'self'`, `'unsafe-inline'`],
        imgSrc: [`'self'`, 'data:', 'validator.swagger.io'],
        scriptSrc: [`'self'`, `https: 'unsafe-inline'`],
      },
    },
  });

  // Timeout Interceptor
  app.useGlobalInterceptors(new TimeoutInterceptor());

  // Logger
  if (process.env.NODE_ENV !== 'development') app.useLogger(false);

  // API Versioning
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });

  const config = new DocumentBuilder()
    .setTitle('API Service')
    .setDescription('API documentation')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  // Swagger
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(process.env.PORT ?? 3001, 'localhost');

  if (process.env.NODE_ENV === 'development')
    console.log(
      `Application is running on: http://localhost:${process.env.PORT ?? 3001}/docs`,
    );
}
void bootstrap();
