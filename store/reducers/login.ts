import {
  LoginState,
  SET_LOGIN,
  setLogin,
} from '../actions/login';

const initialState: LoginState = {
  isLoggedIn: false,
};

interface Action {
  type: string;
  payload: {
    isLoggedIn: boolean;
  }
}

const loginReducer = (state = initialState, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_LOGIN:
      return setLogin(state, payload.isLoggedIn);
    default:
      return state;
  }
};

export default loginReducer;