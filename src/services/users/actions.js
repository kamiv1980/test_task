/** @format */
/** @format */

export const actionTypes = {
  ADD_USER: 'ADD_USER',
  SET_IS_AUTH: 'SET_IS_AUTH',
};

export const setIsAuth = (isAuth) => ({
  type: actionTypes.SET_IS_AUTH,
  payload: {
    isAuth,
  },
});

export const addUser = (name, password) => ({
  type: actionTypes.ADD_USER,
  payload: { name, password },
});
