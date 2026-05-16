import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VehicleService } from '@/vehicle/vehicle.service';
// import { CreateVehicleDto } from '@/vehicle/dto/create-vehicle.dto';
// import { UpdateVehicleDto } from '@/vehicle/dto/update-vehicle.dto';

@Controller('vehicle')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) { }


}
