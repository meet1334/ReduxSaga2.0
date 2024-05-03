import { put, takeEvery } from "redux-saga/effects";
import { GET_PRODUCT_LIST, SET_PRODUCT_LIST } from "./actionType";

function* getProductsList() {
  let data = yield fetch(`http://localhost:3500/product`);
  data = yield data.json();
  console.warn("get Product List action called", data);
  yield put({ type: SET_PRODUCT_LIST, data });
}

function* productSaga() {
  yield takeEvery(GET_PRODUCT_LIST, getProductsList);
}

export default productSaga;