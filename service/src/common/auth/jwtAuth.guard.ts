import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import * as jwt from 'jsonwebtoken';
import { ModuleRef } from '@nestjs/core';
import { RedisCacheService } from 'src/modules/redis-cache/redis-cache.service';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(
    private redisCacheService: RedisCacheService,
    private readonly moduleRef: ModuleRef,
  ) {
    super();
  }

  async canActivate(context) {
    if (!this.redisCacheService) {
      this.redisCacheService = this.moduleRef.get(RedisCacheService, {
        strict: false,
      });
    }
    const request = context.switchToHttp().getRequest();
    // TODO 域名检测
    const token = this.extractToken(request);
    request.user = this.validateToken(token);
    await this.redisCacheService.checkTokenAuth(token, request);
    return true;
  }

  private extractToken(request) {
    const parts = request.headers.authorization.split(' ');
    if (parts.length !== 2 || parts[0] !== 'Bearer') {
      return null;
    }
    return parts[1];
  }

  private validateToken(token) {
    try {
      return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      throw new HttpException(
        '亲爱的用户,请登录后继续操作,我们正在等您的到来！',
        HttpStatus.UNAUTHORIZED,
      );
    }
  }

  handleRequest(err, user) {
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    return user;
  }
}
