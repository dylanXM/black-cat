import {
  initialState,
  SET_CHANNEL,
  SET_TIME_RANGE,
  setChannel,
  setTimeRange,
  TimeRange,
  TypeChannel,
  CLEAR_SEARCH,
  clearSearch,
  SET_SEARCH,
  setSearch,
  SearchState,
} from '../actions/search';

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
      return setChannel(state, payload.channel as TypeChannel);
    case CLEAR_SEARCH:
      return clearSearch();
    case SET_SEARCH:
      return setSearch(state, payload as SearchState);
    default:
      return state;
  }
};

export default searchReducer;