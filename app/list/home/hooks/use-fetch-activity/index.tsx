import { getTwitters, GetTwittersParams, GetTwittersResponse, Twitter } from '@/common/apis/twitter';
import { RootState } from '@/store';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { Subject } from 'rxjs';
import { useLatest } from '@/hooks/useLatest';

export const fetchActivitiesSubject$ = new Subject();
const pageSize = 5;

export function useFetchActivity() {
  const [page, setPage] = useState(1);
  const search = useSelector((state: RootState) => state.search);
  const [refreshCount, setRefreshCount] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const [activities, setActivities] = useState<Twitter[] | null>([]);

  const searchParams = useMemo((): GetTwittersParams & { refreshCount: number } => {
    return {
      ...search,
      page,
      pageSize,
      channel: search.channel === 'All' ? '' : search.channel || '',
      refreshCount,
    };
  }, [page, search, refreshCount]);

  const { data, isLoading } = useQuery({
    queryKey: [{ queryIdentifier: 'fetchTwitters', ...searchParams }],
    queryFn: async () => {
      const res = await getTwitters({ ...searchParams });
      return res;
    },
  });

  const { count } = data as GetTwittersResponse || {};

  const pageRef = useLatest(page);
  useEffect(() => {
    setRefreshing(false);
    const list = (data as GetTwittersResponse)?.data || [];
    setActivities(prev => {
      if (pageRef.current === 1) {
        return list;
      }
      return [...(prev || []), ...list];
    });
  }, [(data as GetTwittersResponse)?.data]);
  
  useEffect(() => {
    console.log('activities返回数量', activities?.length, 'count', count);
  }, [activities, count]);

  // 点击清除按钮 或者 search 条件改变后需要点击搜索按钮触发
  useEffect(() => {
    const subscription = fetchActivitiesSubject$.subscribe(() => {
      setPage(1);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const isDone = count === 0 || (count !== 0 && (activities || []).length === count);

  // 页码加 1
  const loadMore = useCallback(() => {
    if (isDone || isLoading) {
      return;
    }
    setPage(prev => prev + 1);
  }, [isLoading, isDone]);

  // refresh
  const refresh = useCallback(() => {
    if (isLoading) {
      return;
    }
    setRefreshing(true);
    if (pageRef.current === 1) {
      setRefreshCount(prev => prev + 1);
      return;
    }
    setPage(1);
  }, [isLoading]);

  return {
    isDone,
    activities,
    loading: isLoading,
    loadMore,
    count,
    refresh,
    refreshing,
  };
}