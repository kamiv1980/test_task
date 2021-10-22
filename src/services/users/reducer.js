/** @format */
import { actionTypes } from './actions';

const initialState = {
  data: JSON.parse(window.localStorage.getItem('users')) ?? [{ name: 'jhon', password: '123' }],
  isAuth: false,
};

export function usersReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_USER:
      return { ...state, data: [...state.data, action.payload] };

    case actionTypes.SET_IS_AUTH:
      return {
        ...state,
        isAuth: (state.isAuth = action.payload.isAuth),
      };

    default:
      return state;
  }
}
