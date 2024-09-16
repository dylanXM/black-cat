import { Twitter } from '@/common/apis/twitter';
import { setActivity, SET_ACTIVITY, initialState } from '../actions/activity';

interface Action {
  type: string;
  payload: {
    activity: Twitter;
  }
}

const activityReducer = (state = initialState, action: Action) => {
  const { type, payload } = action;
  // console.log('activityReducer', type, JSON.stringify(payload));
  switch (type) {
    case SET_ACTIVITY:
      return setActivity(state, payload.activity);
    default:
      return state;
  }
};

export default activityReducer;