import { GET_PRODUCT_LIST, SEARCH_PRODUCT } from "./actionType";

export const getProductList = () => {
  return {
    type: GET_PRODUCT_LIST,
  };
};

export const productSearch = (query) => {
  return {
    type: SEARCH_PRODUCT,
    query,
  };
};
