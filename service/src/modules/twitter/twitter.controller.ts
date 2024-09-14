import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { TwitterService } from './twitter.service';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/common/auth/jwtAuth.guard';
import { GetTwittersDto } from './dto/get-twitter.dto';

@Controller('twitter')
export class TwitterController {
  constructor(private readonly twitterService: TwitterService) {}

  @Get('getTwitters')
  @ApiOperation({ summary: '获取用户个人信息' })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async getTwitters(@Query() params: GetTwittersDto) {
    return await this.twitterService.getTwitters(params);
  }
}
