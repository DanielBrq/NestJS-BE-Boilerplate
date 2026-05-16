import { Module } from '@nestjs/common';
import { VehicleService } from '@/vehicle/vehicle.service';
import { VehicleController } from '@/vehicle/vehicle.controller';

@Module({
  controllers: [VehicleController],
  providers: [VehicleService],
})
export class VehicleModule {}
