import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import history from "./utils/history";

import homeReducer from "./Pages/Home/reducer";
import userReducer from "./Pages/User/reducer";

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    home: homeReducer,
    user: userReducer,
    router: connectRouter(history),
    ...injectedReducers,
  });
  return rootReducer;
}
