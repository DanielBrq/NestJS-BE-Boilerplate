import { Injectable } from '@nestjs/common';
import { DriverRequestRepository } from '@/driver-request/driver-request.repository';
// import { CreateDriverRequestDto } from '@/driver-request/dto/create-driver-request.dto';
// import { UpdateDriverRequestDto } from '@/driver-request/dto/update-driver-request.dto';

@Injectable()
export class DriverRequestService {
    constructor(private readonly driverRequestRepository: DriverRequestRepository) { }

}
