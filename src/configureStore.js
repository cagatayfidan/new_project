import { createStore, compose, applyMiddleware } from "redux";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import createReducer from "./reducers";

export default function configureStore(initialState = {}, history) {
  let composeEnhancers = compose;
  const reduxSagaMonitorOptions = {};

  if (process.env.NODE_ENV !== "production" && typeof window === "object") {
    /* eslint-disable no-underscore-dangle */
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});

    // NOTE: Uncomment the code below to restore support for Redux Saga
    // Dev Tools once it supports redux-saga version 1.x.x
    // if (window.SAGA_MONITOR_EXTENSION)
    //   reduxSagaMonitorOptions = {
    //     sagaMonitor: window.SAGA_MONITOR_EXTENSION,
    //   };
    /* eslint-enable */
  }
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

  const middleWares = [sagaMiddleware, routerMiddleware(history)];

  const enhancers = [applyMiddleware(...middleWares)];

  const store = createStore(
    createReducer(),
    initialState,
    composeEnhancers(...enhancers)
  );
  store.runSaga = sagaMiddleware.run;
  store.injectedReducers = {}; //Reducer registry
  store.injectedSagas = {}; //Saga registry
  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  store.injectedReducers = {}; // Reducer registry
  if (module.hot) {
    module.hot.accept("./reducers", () => {
      store.replaceReducer(createReducer(store.injectedReducers));
    });
  }

  return store;
}
