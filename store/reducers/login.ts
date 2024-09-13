import {
  SET_LOGIN,
} from '../actions/login';

const initialState = {
  isLoggedIn: false,
};

interface Action {
  type: string;
  isLoggedIn: boolean;
}

const loginReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_LOGIN:
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
      };
    default:
      return state;
  }
};

export default loginReducer;