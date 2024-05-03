import { GET_PRODUCT_LIST, SET_PRODUCT_LIST } from "./actionType";

export const productData = (data = [], action) => {
  switch (action.type) {
    // no need to add in reducer bcz it will run in saga file

    // case GET_PRODUCT_LIST:
    //   console.warn("Reducer called GET PRODUCT LIST", action);
    //   return [action.payload];

    case SET_PRODUCT_LIST:
      console.warn("Reducer called GET PRODUCT LIST", action);
      return [...action.data];
    default:
      return data;
  }
};
