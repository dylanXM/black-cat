import axios, { AxiosRequestConfig } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from '@/constants/config';

export interface ApiType<T> {
  code: number;
  message: string;
  success: boolean;
  data: T
}

async function getToken() {
  let token = '';
  try {
    token = (await AsyncStorage.getItem('token')) || '';
    return token;
  } catch {
    return '';
  }
}

// 定义请求参数的类型
interface RequestParams {
  method: string;
  url: string;
  data?: unknown;
  config?: AxiosRequestConfig;
  params?: unknown;
}

const instance = axios.create({
  timeout: 10000, // 设置超时时间
});

// 封装通用的 Axios 请求函数
export async function request<T>(params: RequestParams): Promise<T> {
  const token = await getToken();
  const res = await instance({
    ...params,
    headers: {
      'Content-Type': 'application/json', // 设置请求头
      'Authorization': `Bearer ${token}` // 设置请求头
    },
    method: params.method,
    url: `${API_URL}${params.url}`,
    data: params.data,
    ...params.config,
  });
  return res.data as T;
}

// 封装通用的fetch请求函数
// export async function request<T>(params: RequestParams): Promise<T> {
//   try {
//     const token = await getToken();
//     console.log('token', token);
//     const res = await fetch(params.url, {
//       method: params.method,
//       headers: {
//         'Content-Type': 'application/json', // 设置请求头
//         'Authorization': `Bearer ${token}` // 设置请求头
//       },
//       body: JSON.stringify(params.data),
//     });
//     const data = await res.json();
//     console.log('data', data);
//     return data as T;
//   } catch (error) {
//     console.log(JSON.stringify(error));
//     throw error;
//   }
// }