/** @format */
import { actionTypes } from './actions';

const initialState = {
  hasProducts: false,
  data: [],
};

export function productsReducer(state = initialState, { type, payload }) {
  switch (type) {
    case actionTypes.GET_LIMIT_PRODUCTS_SUCCESS:
      return { ...payload, hasProducts: true };

    case actionTypes.GET_ALL_PRODUCTS_SUCCESS:
      return { ...payload, hasProducts: true };

    case actionTypes.ADD_PRODUCT_SUCCESS:
      return { ...state, data: [...state.data, payload] };

    case actionTypes.EDIT_PRODUCT_SUCCESS:
      return {
        ...state,
        data: state.data.map((product) => (product.id === payload.id ? payload : product)),
      };

    case actionTypes.DELETE_PRODUCT_SUCCESS:
      return { ...state, data: state.data.filter(({ id }) => id !== payload) };

    default:
      return state;
  }
}
