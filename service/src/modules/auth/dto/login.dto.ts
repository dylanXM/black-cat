import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength, MaxLength, IsOptional } from 'class-validator';

export class LoginDto {
  @ApiProperty({ example: 'super', description: '邮箱' })
  @IsNotEmpty({ message: '用户名不能为空！' })
  @MinLength(2, { message: '用户名最短是两位数！' })
  @MaxLength(30, { message: '用户名最长不得超过30位！' })
  @IsOptional()
  username: string;

  @ApiProperty({ example: '123456', description: '密码' })
  @IsNotEmpty({ message: '密码不能为空！' })
  @MinLength(6, { message: '密码最短是六位数！' })
  @MaxLength(30, { message: '密码最长不得超过30位！' })
  @IsOptional()
  password: string;
}
