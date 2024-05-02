// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import productSaga from "./product/saga";

// const store = createStore(rootReducer);
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(productSaga);

export default store;

//--->  createStore version in redux was deprecated , so now onwards we use redux toolkit
//--->  Using redux toolkit we need to change only configureStore in store only
//--->  No need to change in any redux files
