import {
  LOAD_DATA,
  LOAD_DATA_ERROR,
  LOAD_DATA_SUCCESS,
  POST_DATA,
  POST_DATA_SUCCESS,
  POST_DATA_ERROR
} from "./constants";

export function loadData() {
  return {
    type: LOAD_DATA,
  };
}
export function loadDataSuccess(value) {
  return {
    type: LOAD_DATA_SUCCESS,
    value,
  };
}
export function loadDataError(error) {
  return {
    type: LOAD_DATA_ERROR,
    error,
  };
}
export function postData() {
  return {
    type: POST_DATA,
  };
}
export function postDataSuccess() {
  return {
    type: POST_DATA_SUCCESS,
  };
}export function postDataError() {
  return {
    type: POST_DATA_ERROR,
  };
}