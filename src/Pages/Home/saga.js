import { put, takeLatest } from "redux-saga/effects";
import { LOAD_DATA } from "./constants";
import {loadDataError, loadDataSuccess } from "./actions";

//import request from "../../utils/request";
import ApiStore from "../../utils/request";

/**
 * Github repos request/response handler
 */
export function* loadData() {
  try {
      const response =yield ApiStore.users.get()
    yield put(loadDataSuccess(response.data.data))
  } catch (err) {
    yield put(loadDataError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* homeSaga() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_DATA, loadData);
}
