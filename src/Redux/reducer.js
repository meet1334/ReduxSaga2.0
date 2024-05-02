import { ADD_TO_CART } from "./actionType";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.warn("Reducer called", action);
      return [action, ...data];

    default:
      return data;
  }
};
