import { HttpException, HttpStatus } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { Twitter } from './twitter';

// 123456
const bcryptPassword =
  '$2a$10$jfLw0SqAuTqpkELBaKNE3exbC2IAat7Ue2qyTS68EX3QUAoDTFT0e';

export interface User {
  id?: number;
  username: string;
  password: string;
  avatar?: string;
  email?: string;
  activityIds?: number[];
  goingIds?: number[];
  likeIds?: number[];
  activities?: Twitter[];
  goings?: Twitter[];
  likes?: Twitter[];
}

const users: User[] = [
  {
    id: 1,
    username: 'admin',
    password: bcryptPassword,
    email: '123456@123.com',
    avatar:
      'https://yangxm-1317654405.cos.ap-guangzhou.myqcloud.com/ai/tmp_885f4e6f1806cf82aa38d4989f3b0ed5.jpg',
    activityIds: [4, 5, 6],
    goingIds: [1, 2, 3],
    likeIds: [7, 8, 9],
  },
  {
    id: 2,
    username: 'user',
    password: bcryptPassword,
    email: '123456@123.com',
    avatar:
      'https://yangxm-1317654405.cos.ap-guangzhou.myqcloud.com/ai/tmp_885f4e6f1806cf82aa38d4989f3b0ed5.jpg',
  },
  {
    id: 3,
    username: 'guest',
    password: bcryptPassword,
    email: '123456@123.com',
    avatar:
      'https://yangxm-1317654405.cos.ap-guangzhou.myqcloud.com/ai/tmp_885f4e6f1806cf82aa38d4989f3b0ed5.jpg',
  },
  {
    id: 4,
    username: 'test',
    password: bcryptPassword,
    email: '123456@123.com',
    avatar:
      'https://yangxm-1317654405.cos.ap-guangzhou.myqcloud.com/ai/tmp_885f4e6f1806cf82aa38d4989f3b0ed5.jpg',
  },
  {
    id: 5,
    username: 'demo',
    password: bcryptPassword,
    email: '123456@123.com',
    avatar:
      'https://yangxm-1317654405.cos.ap-guangzhou.myqcloud.com/ai/tmp_885f4e6f1806cf82aa38d4989f3b0ed5.jpg',
  },
];

export function findUser(username: string) {
  return users.find((user) => user.username === username);
}

export function findUserById(id: number) {
  return users.find((user) => user.id === id);
}

export async function verifyUserCredentials(user: User) {
  const { username, password: userPassword } = user;
  const foundUser = findUser(username);
  if (!foundUser) {
    throw new HttpException('账户不存在！请重试～', HttpStatus.BAD_REQUEST);
  }
  const isPasswordMatching = await bcrypt.compare(
    userPassword,
    foundUser.password,
  );
  if (!isPasswordMatching) {
    throw new HttpException('密码错误！请重试～', HttpStatus.BAD_REQUEST);
  }
  return foundUser;
}

export default users;
