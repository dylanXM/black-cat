import { ApiType, request } from '@/common/utils/request';
import { Twitter } from '../twitter';

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

export async function getInfo(): Promise<User> {
  const res = await request<ApiType<User>>({
    url: '/auth/getInfo',
    method: 'GET',
  });
  return res.data;
}