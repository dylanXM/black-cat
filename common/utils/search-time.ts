import { TypeTimeRange } from '@/store/actions/search';

export function getStartEndTimestamps(dateType: TypeTimeRange) {
  if (dateType === 'ANY') {
    return {
      label: dateType,
      value: { start: '', end: '' },
    };
  }

  const now = new Date();
  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999);

  function getStartEndOfToday() {
    return { start: startOfDay.getTime(), end: endOfDay.getTime() };
  }

  function getStartEndOfTomorrow() {
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    return { start: tomorrow.getTime(), end: new Date(tomorrow.getTime() + 86399999).getTime() };
  }

  function getStartEndOfWeek() {
    const firstDayOfWeek = new Date(now.setDate(now.getDate() - now.getDay()));
    const lastDayOfWeek = new Date(firstDayOfWeek);
    lastDayOfWeek.setDate(firstDayOfWeek.getDate() + 6);
    return { start: firstDayOfWeek.getTime(), end: new Date(lastDayOfWeek.getTime() + 86399999).getTime() };
  }

  function getStartEndOfMonth() {
    const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const lastDayOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    return { start: firstDayOfMonth.getTime(), end: new Date(lastDayOfMonth.getTime() + 86399999).getTime() };
  }

  const dateRanges = {
    'TODAY': getStartEndOfToday(),
    'TOMORROW': getStartEndOfTomorrow(),
    'THIS WEEK': getStartEndOfWeek(),
    'THIS MONTH': getStartEndOfMonth()
  };

  return {
    label: dateType,
    value: {
      start: Math.floor(dateRanges[dateType].start),
      end: Math.floor(dateRanges[dateType].end)
    }
  };
}
