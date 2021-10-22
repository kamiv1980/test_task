/** @format */

export const actionTypes = {
  GET_LIMIT_PRODUCTS_REQUEST: 'GET_LIMIT_PRODUCTS_REQUEST',
  GET_LIMIT_PRODUCTS_SUCCESS: 'GET_LIMIT_PRODUCTS_SUCCESS',
  GET_LIMIT_PRODUCTS_ERROR: 'GET_LIMIT_PRODUCTS_ERROR',

  GET_ALL_PRODUCTS_REQUEST: 'GET_ALL_PRODUCTS_REQUEST',
  GET_ALL_PRODUCTS_SUCCESS: 'GET_ALL_PRODUCTS_SUCCESS',
  GET_ALL_PRODUCTS_ERROR: 'GET_ALL_PRODUCTS_ERROR',

  ADD_PRODUCT_REQUEST: 'ADD_PRODUCT_REQUEST',
  ADD_PRODUCT_SUCCESS: 'ADD_PRODUCT_SUCCESS',
  ADD_PRODUCT_ERROR: 'ADD_PRODUCT_ERROR',

  EDIT_PRODUCT_REQUEST: 'EDIT_PRODUCT_REQUEST',
  EDIT_PRODUCT_SUCCESS: 'EDIT_PRODUCT_SUCCESS',
  EDIT_PRODUCT_ERROR: 'EDIT_PRODUCT_ERROR',

  DELETE_PRODUCT_REQUEST: 'DELETE_PRODUCT_REQUEST',
  DELETE_PRODUCT_SUCCESS: 'DELETE_PRODUCT_SUCCESS',
  DELETE_PRODUCT_ERROR: 'DELETE_PRODUCT_ERROR',
};

export let items = {
  getLimit: {
    request: () => ({ type: actionTypes.GET_LIMIT_PRODUCTS_REQUEST }),
    success: (payload) => ({ type: actionTypes.GET_LIMIT_PRODUCTS_SUCCESS, payload }),
    error: (payload) => ({ type: actionTypes.GET_LIMIT_PRODUCTS_ERROR, payload }),
  },
  getAll: {
    request: () => ({ type: actionTypes.GET_ALL_PRODUCTS_REQUEST }),
    success: (payload) => ({ type: actionTypes.GET_ALL_PRODUCTS_SUCCESS, payload }),
    error: (payload) => ({ type: actionTypes.GET_ALL_PRODUCTS_ERROR, payload }),
  },
  add: {
    request: () => ({ type: actionTypes.ADD_PRODUCT_REQUEST }),
    success: (payload) => ({ type: actionTypes.ADD_PRODUCT_SUCCESS, payload }),
    error: (payload) => ({ type: actionTypes.ADD_PRODUCT_ERROR, payload }),
  },
  edit: {
    request: () => ({ type: actionTypes.EDIT_PRODUCT_REQUEST }),
    success: (payload) => ({ type: actionTypes.EDIT_PRODUCT_SUCCESS, payload }),
    error: (payload) => ({ type: actionTypes.EDIT_PRODUCT_ERROR, payload }),
  },
  delete: {
    request: () => ({ type: actionTypes.DELETE_PRODUCT_REQUEST }),
    success: (payload) => ({ type: actionTypes.DELETE_PRODUCT_SUCCESS, payload }),
    error: (payload) => ({ type: actionTypes.DELETE_PRODUCT_ERROR, payload }),
  },
};
