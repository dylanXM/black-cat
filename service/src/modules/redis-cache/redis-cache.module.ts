import { Module, Global, Logger } from '@nestjs/common';
import { RedisCacheService } from './redis-cache.service';
import { RedisCacheController } from './redis-cache.controller';
import { ConfigModule, ConfigService } from 'nestjs-config';
import { createClient } from 'redis';

@Global()
@Module({
  imports: [ConfigModule],
  controllers: [RedisCacheController],
  providers: [
    {
      provide: 'REDIS_CLIENT',
      useFactory: async () => {
        const port = 16379;
        const host = '43.138.202.234';
        const password = '1a2b3c4dQWER';
        const username = process.env.REDIS_USER;

        if (!host || !port) {
          Logger.error(
            `Please config Redis config | 未配置 Redis 配置信息 请确认配置redis服务以获得更好的体验`,
            'RedistCacheModule',
          );
          return;
        }

        const client = createClient({
          socket: { host, port },
          username,
          password,
        });

        await client.connect();

        client.on('ready', () => {
          Logger.debug(`Your Redis connection successful`, 'RedistCacheModule');
        });
        client.on('error', () => {
          Logger.error(
            `Your Redis connection failed | 您的 Redist 连接失败`,
            'RedistCacheModule',
          );
        });
        return client;
      },
      inject: [ConfigService],
    },
    RedisCacheService,
  ],
  exports: ['REDIS_CLIENT'],
})
export class RedisCacheModule {}
