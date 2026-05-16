import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrganizationService } from '@/organization/organization.service';
import { } from '@/organization/dto';
@Controller('organization')
export class OrganizationController {
  constructor(private readonly organizationService: OrganizationService) { }

}
