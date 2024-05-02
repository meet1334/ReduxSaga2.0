import { ADD_TO_CART } from "./actionType";

export const addToCart = (data) => {
  console.warn("added to cart action called", data);
  return {
    type: ADD_TO_CART,
    payload: data,
  };
};

//---> ACTION WILL PASSING DATA FROM REACT TO REDUCERS
//---> ACTION IS CALLED WITH THE HELP OF USEDISPATCH HOOK .
//---> ACTION IS SENDING THE DATA TO PARTICULAR REDUCER WITH THE HELP OF WELL DEFINED TYPE IN ACTION
