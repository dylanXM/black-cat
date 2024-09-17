import { User } from '@/common/apis/user/user';
import { initialState, SET_USER, setUser } from '../actions/user';

type Action = {
  type: string;
  payload: {
    user: User;
  }
}

const userReducer = (state = initialState, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_USER:
      return setUser(state, payload.user);
    default:
      return state;
  }
};

export default userReducer;