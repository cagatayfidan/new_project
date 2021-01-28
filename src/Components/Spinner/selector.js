import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectSpinner = (state) => state.spinner || initialState;
const makeSelectSpinner = () =>
  createSelector(selectSpinner, (spinnerState) => spinnerState);

export { selectSpinner, makeSelectSpinner };
