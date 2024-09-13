export const SET_LOGIN = 'SET_LOGIN';

export const setLogin = (isLoggedIn: boolean) => {
  return {
    type: SET_LOGIN,
    isLoggedIn,
  };
};