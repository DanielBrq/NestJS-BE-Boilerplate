import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DriverScheduleService } from '@/driver-schedule/driver-schedule.service';
// import { CreateDriverScheduleDto } from '@/driver-schedule/dto/create-driver-schedule.dto';
// import { UpdateDriverScheduleDto } from '@/driver-schedule/dto/update-driver-schedule.dto';

@Controller('driver-schedule')
export class DriverScheduleController {
  constructor(private readonly driverScheduleService: DriverScheduleService) { }


}
