import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ScheduleRequestService } from '@/schedule-request/schedule-request.service';
// import { CreateScheduleRequestDto } from '@/schedule-request/dto/create-schedule-request.dto';
// import { UpdateScheduleRequestDto } from '@/schedule-request/dto/update-schedule-request.dto';

@Controller('schedule-request')
export class ScheduleRequestController {
  constructor(private readonly scheduleRequestService: ScheduleRequestService) { }


}
