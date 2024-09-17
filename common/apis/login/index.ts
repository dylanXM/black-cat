import { ApiType, request } from '@/common/utils/request';

export interface LoginParams {
  username: string;
  password: string;
}

export async function doLogin(params: LoginParams): Promise<string> {
  const res = await request<ApiType<string>>({
    url: '/auth/login',
    method: 'POST',
    data: params,
  });
  return res.data;
}