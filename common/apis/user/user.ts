import { ApiType, request } from '@/common/utils/request';

export interface User {
  id?: number;
  username: string;
  password: string;
  avatar?: string;
  email?: string;
  activityIds?: number[];
  goingIds?: number[];
  likeIds?: number[];
}

export async function getInfo(): Promise<User> {
  const res = await request<ApiType<User>>({
    url: '/user/getInfo',
    method: 'GET',
  });
  return res.data;
}