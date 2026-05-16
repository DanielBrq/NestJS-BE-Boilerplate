import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { AuthModule, AuthGuard } from '@thallesp/nestjs-better-auth';
import { auth } from '@/auth/auth';
import { UserModule } from '@/user/user.module';
import { OrganizationController } from '@/organization/organization.controller';
import { OrganizationModule } from '@/organization/organization.module';
import { VehicleModule } from '@/vehicle/vehicle.module';
import { DriverRequestModule } from '@/driver-request/driver-request.module';
import { DriverScheduleModule } from '@/driver-schedule/driver-schedule.module';
import { UserRideModule } from '@/user-ride/user-ride.module';
import { ScheduleRequestModule } from '@/schedule-request/schedule-request.module';
import { ChatModule } from '@/chat/chat.module';
import { MessageModule } from '@/message/message.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ThrottlerModule.forRoot([
      {
        name: 'short',
        ttl: 1000,
        limit: 5,
      },
      {
        name: 'medium',
        ttl: 60000,
        limit: 150,
      },
      {
        name: 'long',
        ttl: 3600000,
        limit: 2500,
      },
    ]),
    AuthModule.forRoot({
      auth,
      bodyParser: {
        json: true,
        urlencoded: { extended: true },
        rawBody: true,
      },
    }),
    UserModule,
    OrganizationModule,
    VehicleModule,
    DriverRequestModule,
    DriverScheduleModule,
    UserRideModule,
    ScheduleRequestModule,
    ChatModule,
    MessageModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
  controllers: [OrganizationController],
})
export class AppModule { }
