import { getInfo } from '@/common/apis/user/user';
import { client } from '@/common/utils/query-client';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';

// 在组件外部预取数据
// client.prefetchQuery('fetchUserInfo', getInfo);

export function useFetchUser() {
  const dispatch = useDispatch();
  const { data, refetch } = useQuery('fetchUserInfo', getInfo, {
    enabled: false, // 初始时不执行查询
  });
  
  useEffect(() => {
    if (data) {
      return;
    }
    client.fetchQuery('fetchUserInfo').then((res) => {
      dispatch({ type: 'SET_USER', payload: { user: res } });
    });
  }, [data]);
  
  return { refetchUser: refetch };
}