import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { RedisCacheService } from '../redis-cache/redis-cache.service';
import { findUserById, verifyUserCredentials } from 'src/data/user';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private readonly redisCacheService: RedisCacheService,
  ) {}

  /**
   * 登录
   * @param loginDto
   * @returns
   */
  async login(loginDto: LoginDto) {
    try {
      console.log('loginDto', loginDto);
      const user = await verifyUserCredentials(loginDto);
      const { username, id } = user;
      const token = await this.jwtService.sign({ name: username, id });
      await this.redisCacheService.saveToken(id, token);
      return token;
    } catch (err) {
      console.log(err);
    }
  }

  /**
   * 获取用户信息
   * @param req
   * @returns
   */
  async getInfo(req: Request) {
    const { id } = (req as any).user;
    return await findUserById(id);
  }
}
