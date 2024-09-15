import { getTwitters, GetTwittersParams, Twitter } from '@/common/apis/twitter';
import { RootState } from '@/store';
import { useCallback, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { from, Subject } from 'rxjs';
import { client } from '@/common/utils/query-client';

export const fetchActivitiesSubject$ = new Subject();

const pageSize = 5;
let renderTimes = 1;

export function useFetchActivity() {
  const [activities, setActivities] = useState<Twitter[]>([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const search = useSelector((state: RootState) => state.search);

  const { data, isLoading } = useQuery('fetchTwitters', async () => {
    const params: GetTwittersParams = {
      ...search,
      page,
      pageSize,
      channel: search.channel === 'All' ? '' : search.channel || '',
    };
    console.log('搜索条件：params', params);
    const res = await getTwitters({ ...params });
    console.log('搜索结果：结果总条数', res.count, '当前返回的结果数量', res.data.length);
    const { count, data } = res || {};
    setActivities((prev) => (page === 1 ? data : [...prev, ...data]));
    setCount(count);
    return res;
  }, {
    enabled: false,
  });

  useEffect(() => {
    console.log('search changed', search);
  }, [search]);

  useEffect(() => {
    console.log('render times', renderTimes++, activities.length);
  }, [activities]);

  const fetchQuery = useCallback(() => client.fetchQuery('fetchTwitters'), []);

  useEffect(() => {
    if (data) {
      return;
    }
    fetchQuery();
  }, [data]);

  // 点击清除按钮 或者 search 条件改变后需要点击搜索按钮触发
  useEffect(() => {
    const subscription = fetchActivitiesSubject$.subscribe(() => {
      const pageUp$ = from(Promise.resolve(setPage(1)));
      const fetch$ = from(Promise.resolve(fetchQuery()));
      pageUp$.subscribe(() => fetch$.subscribe());
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [fetchQuery]);

  const isDone = count === 0 || (count !== 0 && activities.length === count);

  // 页码加 1
  const fetchNextPageActivities = useCallback(() => {
    const pageUp$ = from(Promise.resolve(setPage(1)));
    const fetch$ = from(Promise.resolve(fetchQuery()));
    pageUp$.subscribe(() => fetch$.subscribe());
  }, [fetchQuery]);

  return { isDone, activities, loading: isLoading, fetchNextPageActivities, count };
}