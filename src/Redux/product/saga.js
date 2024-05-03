import { put, takeEvery } from "redux-saga/effects";
import {
  GET_PRODUCT_LIST,
  SEARCH_PRODUCT,
  SET_PRODUCT_LIST,
} from "./actionType";

function* getProductsList() {
  let data = yield fetch(`http://localhost:3500/product`);
  data = yield data.json();
  console.warn("get Product List action called", data);
  yield put({ type: SET_PRODUCT_LIST, data });
}

function* productSearch(data) {
  let result = yield fetch(`http://localhost:3500/product?q=${data.query}`);
  result = yield result.json();
  console.warn("Search Product List action called", result);
  yield put({ type: SET_PRODUCT_LIST, data: result });
}

function* productSaga() {
  yield takeEvery(GET_PRODUCT_LIST, getProductsList);
  yield takeEvery(SEARCH_PRODUCT, productSearch);
}

export default productSaga;
