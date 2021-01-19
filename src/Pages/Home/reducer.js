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
  yourData: false,
  yourData2: false,
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
        draft.error = false;
        draft.yourData.repositories = false;
        break;

      case LOAD_DATA_SUCCESS:
        draft.yourData.repositories = action.BURAYA_NE_GELIYOSA;
        draft.loading = false;
        draft.yourData = action.BURAYA_NE_GELIYOSA;
        break;

      case LOAD_DATA_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });
  
export default homeReducer;
