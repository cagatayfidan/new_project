/**
 * Homepage selectors
 */

import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectHome = (state) => state.home || initialState;

const makeSelectHome = () =>
  createSelector(selectHome, (homeState) => homeState);

const makeSelectLoading = () => {
  createSelector(selectHome, (globalState) => globalState.loading);
};

const makeSelectError = () => {
  createSelector(selectHome, (globalState) => globalState.error);
};

export { selectHome, makeSelectHome, makeSelectError, makeSelectLoading };
