import { Module } from '@nestjs/common';
import { UserRideService } from '@/user-ride/user-ride.service';
import { UserRideController } from '@/user-ride/user-ride.controller';

@Module({
  controllers: [UserRideController],
  providers: [UserRideService],
})
export class UserRideModule {}
