import { put, takeLatest } from "redux-saga/effects";
import { POST_DATA } from "./constants";

import {
  loadError,
  loadSuccess,
  loading,
} from "../../Components/Spinner/actions";
//import request from "../../utils/request";
import ApiStore from "../../utils/request";

/**
 * Github repos request/response handler
 */
// export function* loadData() {
//   try {
//       const response = yield ApiStore.users.get()
//     yield put(loadDataSuccess(response.data.data))
//   } catch (err) {
//     yield put(loadDataError(err));
//   }
// }
export function* postDataSaga(action) {
  try {
    yield put(loading());
    yield ApiStore.users.post("/", action.values);
    yield put(loadSuccess());
  } catch (error) {
    yield put(loadError());
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
  // yield takeLatest(LOAD_DATA, loadData);
  yield takeLatest(POST_DATA, postDataSaga);
}
