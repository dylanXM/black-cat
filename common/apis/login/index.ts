import { ApiType, request } from '@/common/utils/request';
import { API_URL } from '@/constants/config';

export interface LoginParams {
  username: string;
  password: string;
}

export async function doLogin(params: LoginParams): Promise<string> {
  console.log(123123);
  const res = await request<ApiType<string>>({
    url: `${API_URL}/auth/login`,
    method: 'POST',
    data: params,
  });
  return res.data;
}