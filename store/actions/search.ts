import { getStartEndTimestamps } from '@/common/utils/search-time';

export const SET_TIME_RANGE = 'SET_TIME_RANGE';
export const SET_CHANNEL = 'SET_CHANNEL';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';
export const SET_SEARCH = 'SET_SEARCH';

export interface TimeRange {
  start: string;
  end: string;
}

const channelList = ['All', 'Channel 1', 'Channel 2', 'Channel 3', 'Channel 4', 'Channel 5', 'Channel 6', 'Short', 'Channel Long Name'] as const;

// 获取 channel 的类型
export type TypeChannel = typeof channelList[number];

const timeRangeList = ['ANY', 'TODAY', 'TOMORROW', 'THIS WEEK', 'THIS MONTH'] as const;

// 获取 time range 的类型
export type TypeTimeRange = typeof timeRangeList[number];

export const timeRangeOptions = timeRangeList.map((timeRange) => getStartEndTimestamps(timeRange));

export const channelOptions = channelList.map((channel) => ({
  label: channel,
  value: channel,
}));

export interface SearchState {
  timeRange: TimeRange;
  channel: TypeChannel;
}

export const initialState: SearchState = {
  timeRange: {
    start: '',
    end: '',
  },
  channel: '' as TypeChannel,
};

export const setTimeRange = (state: SearchState, timeRange: TimeRange) => {
  return {
    ...state,
    timeRange: {
      ...state.timeRange,
      ...timeRange,
    },
  };
};

export const setChannel = (state: SearchState, channel: TypeChannel) => {
  return {
    ...state,
    channel,
  };
};

export const clearSearch = () => {
  return {
    ...initialState,
  };
};

export const setSearch = (state: SearchState, search: SearchState) => {
  return {
    ...state,
    ...search,
  };
};