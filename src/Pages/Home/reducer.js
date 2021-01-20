import {
  YOUR_CONSTANTS,
  LOAD_DATA,
  LOAD_DATA_ERROR,
  LOAD_DATA_SUCCESS,
} from "./constants";
import produce from "immer";

export const initialState = {
  item: {},
  loading: false,
  error: false,
  list: [],
};

const homeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case YOUR_CONSTANTS:
        draft.item = action.value;
        break;
      default:
        return draft;

      case LOAD_DATA:
        draft.loading = true;
        break;

      case LOAD_DATA_SUCCESS:
        draft.list = action.value;
        draft.loading = false;
        break;

      case LOAD_DATA_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default homeReducer;
