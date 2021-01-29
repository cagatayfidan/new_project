import produce from "immer";
import { LOADING, LOAD_ERROR, LOAD_SUCCESS, CLOSE } from "./constants";

export const initialState = {
  status: "LOADING",
};

const homeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOADING:
        draft.status = "LOADING";
        break;
      case LOAD_ERROR:
        draft.status = "LOAD_ERROR";
        break;
      case LOAD_SUCCESS:
        draft.status = "LOAD_SUCCESS";
        break;
      case CLOSE:
        draft.status = null;
        break;
      default:
        return draft;
    }
  });

export default homeReducer;
