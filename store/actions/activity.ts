import { Twitter } from "@/common/apis/twitter";

export const SET_ACTIVITY = 'SET_ACTIVITY';

export interface TwitterState {
  activity: Twitter | null;
}

export const initialState: TwitterState = {
  activity: null,
};

export const setActivity = (state: TwitterState, activity: Twitter) => {
  return {
    ...state,
    activity: activity,
  };
};