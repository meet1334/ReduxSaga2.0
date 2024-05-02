import { GET_PRODUCT_LIST } from "./actionType";

export const getProductList = async () => {
  //   const data = "Hello how are you";
  let data = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
  data = await data.json();

  console.warn("get Product List action called", data);
  return {
    type: GET_PRODUCT_LIST,
    payload: data,
  };
};
