import { Module } from '@nestjs/common';
import { OrganizationService } from '@/organization/organization.service';
import { OrganizationController } from '@/organization/organization.controller';

@Module({
  controllers: [OrganizationController],
  providers: [OrganizationService],
})
export class OrganizationModule {}
