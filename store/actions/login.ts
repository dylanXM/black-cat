export const SET_LOGIN = 'SET_LOGIN';

export interface LoginState {
  isLoggedIn: boolean;
}

export const setLogin = (state: LoginState, isLoggedIn: boolean) => {
  return {
    ...state,
    isLoggedIn
  };
};