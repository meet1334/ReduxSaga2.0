import { ADD_TO_CART, DELETE_CART, REMOVE_FROM_CART } from "./actionType";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.warn("Reducer called ADD TO CART", action);
      return [action, ...data];

    case REMOVE_FROM_CART:
      console.warn("Reducer called REMOVE FROM CART", action);
      data.length = data.length ? data.length - 1 : [];
      return [...data];

    case DELETE_CART:
      console.warn("Reducer called DELETED CART", action);
      data = [];
      return [...data];

    default:
      return data;
  }
};
