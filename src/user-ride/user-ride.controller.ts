import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserRideService } from '@/user-ride/user-ride.service';
// import { CreateUserRideDto } from '@/user-ride/dto/create-user-ride.dto';
// import { UpdateUserRideDto } from '@/user-ride/dto/update-user-ride.dto';

@Controller('user-ride')
export class UserRideController {
  constructor(private readonly userRideService: UserRideService) { }


}
