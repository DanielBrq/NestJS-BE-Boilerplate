import { Module } from '@nestjs/common';
import { OrganizationService } from '@/organization/organization.service';
import { OrganizationController } from '@/organization/organization.controller';
import { OrganizationRepository } from '@/organization/organization.repository';

@Module({
  controllers: [OrganizationController],
  providers: [OrganizationService, OrganizationRepository],
  exports: [OrganizationService, OrganizationRepository],
})
export class OrganizationModule {}
