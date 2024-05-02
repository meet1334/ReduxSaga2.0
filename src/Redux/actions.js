import { ADD_TO_CART, DELETE_CART, REMOVE_FROM_CART } from "./actionType";

export const addToCart = (data) => {
  console.warn("added to cart action called", data);
  return {
    type: ADD_TO_CART,
    payload: data,
  };
};

export const removeFromCart = (data) => {
  console.warn("item remove from the cart action called", data);
  return {
    type: REMOVE_FROM_CART,
    payload: data,
  };
};

export const deleteCart = () => {
  console.warn("deleted cart action called");
  return {
    type: DELETE_CART,
  };
};

//---> ACTION WILL PASSING DATA FROM REACT TO REDUCERS
//---> ACTION IS CALLED WITH THE HELP OF USEDISPATCH HOOK .
//---> ACTION IS SENDING THE DATA TO PARTICULAR REDUCER WITH THE HELP OF WELL DEFINED TYPE IN ACTION
