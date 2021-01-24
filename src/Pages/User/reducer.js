import { LOAD_DATA, LOAD_DATA_ERROR, LOAD_DATA_SUCCESS } from "./constants";
import produce from "immer";

export const initialState = {
  list: [],
  loading: undefined,
  error: false,
};

const userReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
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

export default userReducer;
