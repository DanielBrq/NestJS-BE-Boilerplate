import { Module } from '@nestjs/common';
import { DriverScheduleService } from '@/driver-schedule/driver-schedule.service';
import { DriverScheduleController } from '@/driver-schedule/driver-schedule.controller';

@Module({
  controllers: [DriverScheduleController],
  providers: [DriverScheduleService],
})
export class DriverScheduleModule {}
