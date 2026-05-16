// =========== Imports ============  
import { Injectable } from '@nestjs/common';
import { OrganizationRepository } from '@/organization/organization.repository';
import { } from '@/organization/dto';

@Injectable()
export class OrganizationService {

  constructor(
    private readonly organizationRepository: OrganizationRepository,
  ) { }


}
