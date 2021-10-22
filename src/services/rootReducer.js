/** @format */

import { combineReducers } from 'redux';

import { productsReducer } from './products/reducer';
import { overlayReducer } from './overlay/reducer';
import { newProductsReducer } from './newProducts/reducer';
import { usersReducer } from './users/reducer';

export const rootReducer = combineReducers({
  products: productsReducer,
  newProducts: newProductsReducer,
  users: usersReducer,
  overlay: overlayReducer,
});
