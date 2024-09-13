import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { RedisCacheService } from './redis-cache.service';
import { RedisDto } from './dto/redis.dto';

@Controller('redis-cache')
export class RedisCacheController {
  constructor(private readonly redisCacheService: RedisCacheService) {}

  @Post('set')
  set(@Body() body: RedisDto) {
    return this.redisCacheService.set(body);
  }

  @Get('get')
  get(@Query() body: RedisDto) {
    return this.redisCacheService.get(body);
  }
}
