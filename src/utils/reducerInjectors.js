import invariant from "invariant";
import { isEmpty, isFunction, isString } from "lodash";

import checkStore from "./checkStore";
import createReducer from "../reducers";

export function injectReducerFactory(store, isValid) {
  return function injectReducer(key, reducer) {
    if (!isValid) checkStore(store);

    invariant(
      isString(key) && !isEmpty(key) && isFunction(reducer),
      "(app/utils...)injectReducer: Expected `reducer` to be a reducer function"
    );

    if (
      Reflect.has(store.injectReducers, key) &&
      store.injectReducer[key] === reducer
    )
      return;

    store.injectReducer[key] = reducer; //eslint-disable-line no-param-reassign
    store.replaceReducer(createReducer(store.injectReducer));
  };
}
export default function getInjectors(store) {
  checkStore(store);
  return {
    injectReducer: injectReducerFactory(store, true),
  };
}
