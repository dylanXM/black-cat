import {
  SearchState,
  SET_CHANNEL,
  SET_TIME_RANGE,
  setChannel,
  setTimeRange,
  TimeRange,
} from '../actions/search';

const initialState: SearchState = {
  timeRange: {
    start: '',
    end: '',
  },
  channel: 'ALL',
}

interface Action {
  type: string;
  timeRange?: TimeRange;
  channel?: string;
}

const searchReducer = (state = initialState, action: Action) => {
  const { type, timeRange, channel } = action;
  switch (type) {
    case SET_TIME_RANGE:
      return setTimeRange(state, timeRange as TimeRange);
    case SET_CHANNEL:
      return setChannel(state, channel as string);
    default:
      return state;
  }
};

export default searchReducer;