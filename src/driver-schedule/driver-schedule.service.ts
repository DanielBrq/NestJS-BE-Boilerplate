import { Injectable } from '@nestjs/common';
import { DriverScheduleRepository } from '@/driver-schedule/driver-schedule.repository';
// import { CreateDriverScheduleDto } from '@/driver-schedule/dto/create-driver-schedule.dto';
// import { UpdateDriverScheduleDto } from '@/driver-schedule/dto/update-driver-schedule.dto';

@Injectable()
export class DriverScheduleService {
    constructor(private readonly driverScheduleRepository: DriverScheduleRepository) { }

}
