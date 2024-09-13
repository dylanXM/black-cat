import { HttpException, HttpStatus } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';

// 123456
const bcryptPassword =
  '$2a$10$jfLw0SqAuTqpkELBaKNE3exbC2IAat7Ue2qyTS68EX3QUAoDTFT0e';

export interface User {
  id?: number;
  username: string;
  password: string;
}

const users = [
  {
    id: 1,
    username: 'admin',
    password: bcryptPassword,
  },
  {
    id: 2,
    username: 'user',
    password: bcryptPassword,
  },
];

export const findUser = (username: string) => {
  return users.find((user) => user.username === username);
};

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
