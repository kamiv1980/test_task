/** @format */
import { actionTypes } from './actions';

const initialState = {
  data: JSON.parse(window.localStorage.getItem('newProducts')) ?? [
    {
      title: 'Car',
      price: '30000',
      category: 'Auto',
      description: 'Best auto',
      publication: true,
      date: 1634804290181,
      id: '81f0853-d407-8d75-b73a-f033f4c240d',
      image: 'https://i.pravatar.cc/420',
    },
  ],
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
