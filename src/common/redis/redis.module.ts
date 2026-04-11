// =========== Imports ============
import { Module, Global } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { ConfigService } from '@nestjs/config';
import KeyvRedis from '@keyv/redis';

// ==================== Module ========================
@Global()
@Module({
  imports: [
    CacheModule.registerAsync({
      isGlobal: true,
      useFactory: (configService: ConfigService) => {
        const redisEnabled =
          configService.get<string>('REDIS_ENABLED') === 'true';

        const config: any = {
          ttl: 600,
        };

        if (redisEnabled) {
          const host = configService.get<string>('REDIS_HOST', 'localhost');
          const port = Number(
            configService.get<string | number>('REDIS_PORT', 6379),
          );

          config.store = new KeyvRedis(`redis://${host}:${port}`);
        }

        return config;
      },
      inject: [ConfigService],
    }),
  ],
  exports: [CacheModule],
})
export class RedisModule {}
