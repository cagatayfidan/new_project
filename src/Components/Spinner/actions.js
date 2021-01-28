import { LOADING, LOAD_ERROR, LOAD_SUCCESS, CLOSE } from "./constants";

export function loading() {
  return {
    type: LOADING,
  };
}
export function loadError() {
  return {
    type: LOAD_ERROR,
  };
}
export function loadSuccess() {
  return {
    type: LOAD_SUCCESS,
  };
}
export function close() {
  return {
    type: CLOSE,
  };
}
