/** @format */
import { actionTypes } from './actions';

const initialState = {
  data: JSON.parse(window.localStorage.getItem('newProducts')) ?? [],
  isPublication: true,
};

export function newProductsReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT:
      return { ...state, data: [...state.data, action.payload] };

    case actionTypes.IS_PUBLICATION:
      return {
        ...state,
        isPublication: (state.isPublication = action.payload.isPublication),
      };

    case actionTypes.EDIT_PRODUCT:
      return {
        ...state,
        data: state.data.map((product) =>
          product.id === action.payload.id ? { ...product, ...action.payload } : product,
        ),
      };

    case actionTypes.DELETE_PRODUCT:
      return { ...state, data: state.data.filter((product) => product.id !== action.payload.id) };

    default:
      return state;
  }
}
