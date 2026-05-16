import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DriverRequestService } from '@/driver-request/driver-request.service';
// import { CreateDriverRequestDto } from '@/driver-request/dto/create-driver-request.dto';
// import { UpdateDriverRequestDto } from '@/driver-request/dto/update-driver-request.dto';

@Controller('driver-request')
export class DriverRequestController {
  constructor(private readonly driverRequestService: DriverRequestService) { }


}
