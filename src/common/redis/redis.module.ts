// =========== Imports ============
import { Module, Global } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { ConfigService } from '@nestjs/config';
import { redisStore } from 'cache-manager-redis-yet';

// ==================== Module ========================
@Global()
@Module({
  imports: [
    CacheModule.registerAsync({
      isGlobal: true,
      useFactory: async (configService: ConfigService) => {
        const redisEnabled =
          configService.get<string>('REDIS_ENABLED') === 'true';

        if (!redisEnabled) {
          return {
            ttl: 600,
          };
        }

        const host = configService.get<string>('REDIS_HOST', 'localhost');
        const port = Number(
          configService.get<string | number>('REDIS_PORT', 6379),
        );
        // const password = configService.get<string>('REDIS_PASSWORD');
        // const username = configService.get<string>('REDIS_USER', 'default');

        return {
          store: await redisStore({
            socket: {
              host,
              port,
            },
            // password,
            // username,
            ttl: 600,
          }),
        };
      },
      inject: [ConfigService],
    }),
  ],
  exports: [CacheModule],
})
export class RedisModule {}
