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
  channel: '',
}

interface Action {
  type: string;
  payload: {
    timeRange?: TimeRange;
    channel?: string;
  }
}

const searchReducer = (state = initialState, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_TIME_RANGE:
      return setTimeRange(state, payload.timeRange as TimeRange);
    case SET_CHANNEL:
      return setChannel(state, payload.channel as string);
    default:
      return state;
  }
};

export default searchReducer;