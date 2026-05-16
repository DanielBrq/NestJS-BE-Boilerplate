import { Injectable } from '@nestjs/common';
import { ScheduleRequestRepository } from '@/schedule-request/schedule-request.repository';
// import { CreateScheduleRequestDto } from '@/schedule-request/dto/create-schedule-request.dto';
// import { UpdateScheduleRequestDto } from '@/schedule-request/dto/update-schedule-request.dto';

@Injectable()
export class ScheduleRequestService {
    constructor(private readonly scheduleRequestRepository: ScheduleRequestRepository) { }

}
