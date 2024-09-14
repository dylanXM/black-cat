import { getInfo } from '@/common/apis/user/user';
import { client } from '@/common/utils/query-client';
import { RootState } from '@/store';
import { useEffect } from 'react';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';

// 在组件外部预取数据
// client.prefetchQuery('fetchUserInfo', getInfo);

export function useFetchUser() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const { data } = useQuery('fetchUserInfo', getInfo, {
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
  
  return user;
}