import { User } from '@/common/apis/user/user';

export const SET_USER = 'SET_USER';

export interface UserState {
  user: User;
}

export const initialState: UserState = {
  user: {
    username: '',
    password: '',
    avatar: '',
    email: '',
    activityIds: [],
    goingIds: [],
    likeIds: [],
    activities: [],
    goings: [],
    likes: [],
  },
};

export function setUser(state: UserState, user: User) {
  return {
    ...state,
    user: {
      ...state.user,
      ...user,
    },
  };

}