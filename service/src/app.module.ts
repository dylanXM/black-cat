import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { RedisCacheModule } from './modules/redis-cache/redis-cache.module';
import { resolve } from 'path';
import { ConfigModule } from 'nestjs-config';

@Module({
  imports: [
    AuthModule,
    RedisCacheModule,
    ConfigModule.load(resolve(__dirname, 'config', '**/!(*.d).{ts,js}')),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
