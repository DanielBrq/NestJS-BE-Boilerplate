import { Logger } from '@nestjs/common';
import { auth, prisma } from '../auth/auth';
import { AuthRole } from '../common/enums/roles';
import * as dotenv from 'dotenv';

dotenv.config();

class AdminSeed {
    private readonly logger = new Logger(AdminSeed.name);

    private getEnvAdmin() {
        const adminEmail = process.env.ADMIN_EMAIL;
        const adminPassword = process.env.ADMIN_PASSWORD;

        if (!adminEmail || !adminPassword) {
            throw new Error('ADMIN_EMAIL o ADMIN_PASSWORD no están definidos en el entorno.');
        }

        return { adminEmail, adminPassword };
    }

    async run() {
        this.logger.log('Iniciando seed de base de datos...');
        await this.seedAdminUser();
        this.logger.log('Seed de base de datos completado.');
        await prisma.$disconnect();
    }

    private async seedAdminUser() {
        const { adminEmail, adminPassword } = this.getEnvAdmin();
        const existingAdmin = await prisma.user.findUnique({
            where: { email: adminEmail }
        });

        if (existingAdmin) {
            this.logger.log('Admin ya existe, saltando seed.');
            return;
        }

        const res = await auth.api.signUpEmail({
            body: {
                email: adminEmail,
                password: adminPassword,
                name: 'Super Admin',
                nationalId: '0000000000',
                bornDate: new Date(),
                isDriver: false,
            }
        });

        await prisma.user.update({
            where: { email: adminEmail },
            data: { role: AuthRole.SUPER_ADMIN }
        });

        this.logger.log(`Admin creado con éxito: ${adminEmail}`);
    }
}

async function bootstrap() {
    console.log('Iniciando Seeding (Standalone)...');
    try {
        const seeder = new AdminSeed();
        await seeder.run();
        console.log('Proceso de Seeding finalizado con éxito.');
    } catch (error) {
        console.error('Error durante el seeding:', error);
        process.exit(1);
    }
}

bootstrap();