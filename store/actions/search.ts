export const SET_TIME_RANGE = 'SET_TIME_RANGE';
export const SET_CHANNEL = 'SET_CHANNEL';

export interface TimeRange {
  start: string;
  end: string;
}

const channelList = ['All', 'Channel 1', 'Channel 2', 'Channel 3', 'Channel 4', 'Channel 5', 'Channel6', 'Short', 'Channel Long Name'];

// 获取 channel 的类型
export type TypeChannel = typeof channelList[number];

export const timeRangeOptions = [
  {
    label: 'ANY',
    value: {
      start: '',
      end: '',
    },
  },
  {
    label: 'TODAY',
    value: {
      // 点击 TODAY 时，设置 start 和 end 为当天的开始和结束时间
      start: '',
      end: '',
    },
  },
  {
    label: 'TOMORROW',
    value: {
      start: '',
      end: '',
    },
  },
  {
    label: 'THIS WEEK',
    value: {
      start: '',
      end: '',
    },
  },
  {
    label: 'THIS MONTH',
    value: {
      start: '',
      end: '',
    },
  },
]

export const channelOptions = channelList.map((channel) => ({
  label: channel,
  value: channel,
}));

export interface SearchState {
  timeRange: TimeRange;
  channel: TypeChannel;
}

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
}