import { ADD_TO_CART } from "./actionType";

export const cartData = (data = [], action) => {
  if (action.type === ADD_TO_CART) {
    console.warn("Reducer called", action);
    return action.payload;
  } else {
    return "No action called";
  }
};
