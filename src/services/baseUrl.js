export const baseUrl = 'https://fakestoreapi.com/products';

export const url = {
  getLimitProducts: (amount) => baseUrl + `?limit=${amount}`,
  product: (id) => baseUrl + `/${id}`,
};
