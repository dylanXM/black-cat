import { formatTimeToDay } from '@/common/utils/format-time';
import { SearchState } from '@/store/actions/search';
import { useMemo } from 'react';

interface UseSearchTip {
  searchParams: SearchState;
}

export function useSearchTip({ searchParams }: UseSearchTip) {
  const { channel, timeRange } = searchParams;

  const tip = useMemo(() => {
    let tips = '';
    if (channel) {
      tips += `${channel} activities`;
    }
    if (!timeRange.start && !timeRange.end) {
      return tips;
    }
    tips += ` form ${formatTimeToDay(timeRange.start)} to ${formatTimeToDay(timeRange.end)}`;
    return tips;
  }, [channel, searchParams]);

  return { tip };
}