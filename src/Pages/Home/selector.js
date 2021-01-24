/**
 * Homepage selectors
 */

import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectHome = (state) => state.home || initialState;
const makeSelectHome = () =>
  createSelector(selectHome, (homeState) => homeState);

export { selectHome, makeSelectHome };
