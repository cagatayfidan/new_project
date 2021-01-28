import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import history from "./utils/history";

import homeReducer from "./Pages/Home/reducer";
import spinnerReducer from "./Components/Spinner/reducer";

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    home: homeReducer,
    spinner: spinnerReducer,
    router: connectRouter(history),
    ...injectedReducers,
  });
  return rootReducer;
}
