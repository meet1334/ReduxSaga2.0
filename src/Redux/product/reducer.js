import { GET_PRODUCT_LIST } from "./actionType";

export const productData = (data = [], action) => {
  switch (action.type) {
    case GET_PRODUCT_LIST:
      console.warn("Reducer called GET PRODUCT LIST", action);
      return [action.payload];
    default:
      return data;
  }
};
