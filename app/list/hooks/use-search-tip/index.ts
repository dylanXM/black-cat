import { formatTimeToDay } from '@/common/utils/format-time';
import { RootState } from '@/store';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

export function useSearchTip() {
  const search = useSelector((state: RootState) => state.search);
  const { channel, timeRange } = search;

  const tip = useMemo(() => {
    let tips = '';
    if (channel) {
      tips += `${channel}`;
    }
    if (!timeRange.start && !timeRange.end) {
      return tips;
    }
    tips += ` activities form ${formatTimeToDay(timeRange.start)} to ${formatTimeToDay(timeRange.end)}`;
    return tips;
  }, [channel, search]);

  const isShowTip = !!tip;

  return { tip, isShowTip };
}