import { Injectable } from '@nestjs/common';
import { VehicleRepository } from '@/vehicle/vehicle.repository';
// import { CreateVehicleDto } from '@/vehicle/dto/create-vehicle.dto';
// import { UpdateVehicleDto } from '@/vehicle/dto/update-vehicle.dto';

@Injectable()
export class VehicleService {
    constructor(private readonly vehicleRepository: VehicleRepository) { }

}
