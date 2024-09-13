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
  isLoggedIn: boolean;
}

const loginReducer = (state = initialState, action: Action) => {
  const { type, isLoggedIn } = action;
  switch (type) {
    case SET_LOGIN:
      return setLogin(state, isLoggedIn);
    default:
      return state;
  }
};

export default loginReducer;