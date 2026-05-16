import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { auth } from '@/auth/auth';
import { UserRepository } from '@/user/user.repository';
import { AuthRole } from '@/common/enums/roles';

@Injectable()
export class DatabaseSeedService implements OnModuleInit {
    private readonly logger = new Logger(DatabaseSeedService.name);
    private readonly userRepo: UserRepository;

    constructor(userRepo: UserRepository) {
        this.userRepo = userRepo;
    }

    private getEnvAdmin() {
        const adminEmail = process.env.ADMIN_EMAIL as string;
        const adminPassword = process.env.ADMIN_PASSWORD as string;
        return { adminEmail, adminPassword };
    }

    async onModuleInit() {
        this.logger.log('Iniciando seed de base de datos...');
        await this.seedAdminUser();
        this.logger.log('Seed de base de datos completado.');
    }

    private async seedAdminUser() {
        const { adminEmail, adminPassword } = this.getEnvAdmin();
        const existingAdmin = await this.userRepo.existEmail(adminEmail);
        if (existingAdmin) {
            this.logger.log('Admin ya existe, saltando seed');
            return;
        }
        const adminUser = await auth.api.signUpEmail({
            body: {
                email: adminEmail,
                password: adminPassword,
                name: 'Super Admin',
                role: AuthRole.SUPER_ADMIN,
            }
        });
        this.logger.log('Admin creado:', adminUser);
    }
}