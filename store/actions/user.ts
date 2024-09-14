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
    activities: [],
    goings: [],
    likes: [],
  },
};