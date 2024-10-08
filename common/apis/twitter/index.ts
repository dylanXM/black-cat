import { ApiType, request } from '@/common/utils/request';
import { User } from '../user/user';

export interface GetTwittersParams {
  page: number;
  pageSize: number;
  startDate?: number;
  endDate?: number;
  channel?: string;
}

export interface Comment {
  id: number;
  userId: number;
  content: string;
  likes: number[];
  time: string;
  user: User;
}

export interface Twitter {
  id: number;
  userId: number;
  channel: string;
  title: string;
  startTime: string;
  endTime: string;
  content: string;
  goings: number[];
  likes: number[];
  comments: Comment[];
  address: string;
  pictures: string[];
  user?: User;
  likesUsers?: User[];
  goingsUsers?: User[];
}

export interface GetTwittersResponse {
  data: Twitter[];
  count: number;
}

export async function getTwitters(params: GetTwittersParams): Promise<GetTwittersResponse> {
  const res = await request<ApiType<GetTwittersResponse>>({
    url: '/twitter/getTwitters',
    method: 'GET',
    params,
  });
  return res.data;
}