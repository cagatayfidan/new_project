import {
  YOUR_CONSTANTS,
  LOAD_DATA,
  LOAD_DATA_ERROR,
  LOAD_DATA_SUCCESS,
} from "./constants";

export function setUser(item) {
  return {
    type: YOUR_CONSTANTS,
    value: item,
  };
}
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
