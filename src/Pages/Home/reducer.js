import {
  LOAD_DATA,
  LOAD_DATA_ERROR,
  LOAD_DATA_SUCCESS,
  POST_DATA,
  POST_DATA_ERROR,
  POST_DATA_SUCCESS,
} from "./constants";
import produce from "immer";

export const initialState = {
  list: [],
  loading: undefined,
  error: false,
  postSuccess: false,
  postLoad: false,
  postError: false,
};

const homeReducer = (state = initialState, action) =>
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
      case POST_DATA:
        draft.postLoad = true;
        break;
      case POST_DATA_SUCCESS:
        draft.postLoad ? (draft.postSuccess = true) : (draft.postError = false);
        draft.postLoad = false;
        break;
      case POST_DATA_ERROR:
        draft.postError = true;
        draft.postLoad = false;
        break;
    }
  });

export default homeReducer;
