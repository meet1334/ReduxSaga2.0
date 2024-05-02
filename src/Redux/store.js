import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

// const store = createStore(rootReducer);
const store = configureStore({ reducer: rootReducer });

export default store;



//--->  createStore version in redux was deprecated , so now onwards we use redux toolkit 
//--->  Using redux toolkit we need to change only configureStore in store only 
//--->  No need to change in any redux files