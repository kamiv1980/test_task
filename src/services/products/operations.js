import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { items } from './actions';
import { url, baseUrl } from '../baseUrl';

toast.configure();

export const getLimitProducts = (amount) => (dispatch) => {
  dispatch(items.getLimit.request());

  const options = {
    method: 'GET',
    url: url.getLimitProducts(amount),
  };
  axios(options)
    .then((res) => {
      dispatch(items.getLimit.success(res));
    })
    .catch((err) => {
      dispatch(items.getLimit.error(err));
      toast.error(err.message);
    });
};
export const getAllProducts = () => (dispatch) => {
  dispatch(items.getAll.request());

  const options = {
    method: 'GET',
    url: baseUrl,
  };
  axios(options)
    .then((res) => {
      dispatch(items.getAll.success(res));
    })
    .catch((err) => {
      dispatch(items.getAll.error(err));
      toast.error(err.message);
    });
};

export const addProduct = (item) => (dispatch) => {
  dispatch(items.add.request());

  const options = {
    method: 'POST',
    url: baseUrl,
    data: { ...item },
  };

  axios(options)
    .then(({ data }) => dispatch(items.add.success(data)))
    .catch((err) => {
      dispatch(items.add.error(err));
      toast.error(err.message);
    });
};

export const editProduct = (item) => (dispatch) => {
  dispatch(items.edit.request());

  const options = {
    method: 'PUT',
    url: url.product(item.id),
    data: { ...item },
  };

  axios(options)
    .then(({ data }) => dispatch(items.edit.success(data)))
    .catch((err) => {
      dispatch(items.edit.error(err));
      toast.error(err.message);
    });
};

export const deleteProduct = (id) => (dispatch) => {
  dispatch(items.delete.request());

  const options = {
    method: 'DELETE',
    url: url.product(id),
  };

  axios(options)
    .then(({ data }) => dispatch(items.delete.success(data)))
    .catch((err) => {
      dispatch(items.delete.error(err));
      toast.error(err.message);
    });
};
