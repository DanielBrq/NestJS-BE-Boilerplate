import { Injectable } from '@nestjs/common';
import { UserRideRepository } from '@/user-ride/user-ride.repository';
// import { CreateUserRideDto } from '@/user-ride/dto/create-user-ride.dto';
// import { UpdateUserRideDto } from '@/user-ride/dto/update-user-ride.dto';

@Injectable()
export class UserRideService {
    constructor(private readonly userRideRepository: UserRideRepository) { }

}
