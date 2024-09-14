import { formatTimeToDay } from '@/common/utils/format-time';
import { RootState } from '@/store';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

export function useSearchTip() {
  const search = useSelector((state: RootState) => state.search);
  console.log('搜索条件', search);
  const { channel, timeRange } = search;

  const tip = useMemo(() => {
    let tips = '';
    if (channel) {
      tips += `${channel} activities`;
    }
    if (!timeRange.start && !timeRange.end) {
      return tips;
    }
    if (timeRange.start !== timeRange.end) {
      tips += ` from ${formatTimeToDay(timeRange.start)}`;
      return tips;
    }
    tips += ` form ${formatTimeToDay(timeRange.start)} to ${formatTimeToDay(timeRange.end)}`;
    return tips;
  }, [channel, search]);

  const isShowTip = !!tip;

  return { tip, isShowTip };
}