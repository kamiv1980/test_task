/** @format */
/** @format */

export const actionTypes = {
  ADD_PRODUCT: 'ADD_PRODUCT',
  DELETE_PRODUCT: 'DELETE_PRODUCT',
  EDIT_PRODUCT: 'EDIT_PRODUCT',
  IS_PUBLICATION: 'IS_PUBLICATION',
};

export const isPublication = (isPublication) => ({
  type: actionTypes.IS_PUBLICATION,
  payload: {
    isPublication,
  },
});

export const addProductCopy = (item) => ({
  type: actionTypes.ADD_PRODUCT,
  payload: { ...item },
});

export const editProductCopy = (item) => ({
  type: actionTypes.EDIT_PRODUCT,
  payload: { ...item },
});

export const deleteProductCopy = (id) => ({
  type: actionTypes.DELETE_PRODUCT,
  payload: {
    id,
  },
});
