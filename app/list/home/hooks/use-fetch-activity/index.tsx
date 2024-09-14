import { getTwitters, GetTwittersParams, Twitter } from '@/common/apis/twitter';
import { RootState } from '@/store';
import { useCallback, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { client } from '@/common/utils/query-client';
import { Subject } from 'rxjs';

export const fetchActivitiesSubject$ = new Subject();

const pageSize = 5;
let renderCount = 1;

export function useFetchActivity() {
  const [activities, setActivities] = useState<Twitter[]>([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const search = useSelector((state: RootState) => state.search);

  const { refetch, isLoading } = useQuery('fetchTwitters', async () => {
    const params: GetTwittersParams = {
      ...search,
      page,
      pageSize,
    };
    const res = await getTwitters({ ...params });
    const { count, data } = res || {};
    setActivities((prev) => (page === 0 ? data : [...prev, ...data]));
    setCount(count);
  });

  useEffect(() => {
    console.log('render', renderCount++, activities);
  }, [activities]);

  // 当 page 页码变化时需要重新出发请求
  // useEffect(() => {
  //   refetch();
  // }, [page, client]);

  // 点击清除按钮 或者 search 条件改变后需要点击搜索按钮触发
  useEffect(() => {
    const subscription = fetchActivitiesSubject$.subscribe(() => {
      refetch();
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const isDone = count === 0 || (count !== 0 && activities.length === count);

  // 页码加 1
  const fetchNextPageActivities = useCallback(() => {
    setPage((prev) => prev + 1);
  }, []);

  return { isDone, activities, loading: isLoading, fetchNextPageActivities };
}