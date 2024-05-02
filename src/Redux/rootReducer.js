import { combineReducers } from "redux";
import { cartData } from "./cart/reducer";
import { productData } from "./product/reducer";

export default combineReducers({ cartData, productData });
