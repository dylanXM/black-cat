import { getTwitters, GetTwittersParams, GetTwittersResponse, Twitter } from '@/common/apis/twitter';
import { RootState } from '@/store';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { from, Subject } from 'rxjs';
import { client } from '@/common/utils/query-client';

export const fetchActivitiesSubject$ = new Subject();

const pageSize = 5;
let renderTimes = 1;

export function useFetchActivity() {
  const [page, setPage] = useState(1);
  const search = useSelector((state: RootState) => state.search);

  const searchParams = useMemo((): GetTwittersParams => {
    return {
      ...search,
      page,
      pageSize,
      channel: search.channel === 'All' ? '' : search.channel || '',
    };
  }, [page, search]);

  const { data, isLoading } = useQuery({
    queryKey: [{ queryIdentifier: 'fetchTwitters', ...searchParams }],
    queryFn: async () => {
      const res = await getTwitters({ ...searchParams });
      return res;
    },
  });

  const { count, data: activities } = data as GetTwittersResponse || {};

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
  const fetchNextPageActivities = useCallback(() => {
    setPage(1);
  }, []);

  return { isDone, activities, loading: isLoading, fetchNextPageActivities, count };
}