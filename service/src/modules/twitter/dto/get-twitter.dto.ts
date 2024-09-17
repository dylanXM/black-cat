import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class GetTwittersDto {
  @ApiProperty({ example: 'channel 1', description: '渠道', required: false })
  @IsOptional()
  channel?: string;

  @ApiProperty({
    example: '123121231123',
    description: '开始时间',
    required: false,
  })
  @IsOptional()
  startDate?: number;

  @ApiProperty({
    example: '123121231123',
    description: '结束时间',
    required: false,
  })
  @IsOptional()
  endDate?: number;

  @ApiProperty({ example: 1, description: '页码', required: true })
  @IsOptional()
  page: number;

  @ApiProperty({ example: 10, description: '每页数量', required: true })
  @IsOptional()
  pageSize: number;
}
