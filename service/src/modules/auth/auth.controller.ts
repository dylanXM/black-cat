import { Controller, Post, Body, Get, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from 'src/common/auth/jwtAuth.guard';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: '登录' })
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Get('getInfo')
  @ApiOperation({ summary: '获取用户个人信息' })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async getInfo(@Req() req: Request) {
    return this.authService.getInfo(req);
  }
}
