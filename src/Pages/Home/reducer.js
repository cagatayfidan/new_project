import produce from "immer";

export const initialState = {};

const homeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      default:
        return draft;
    }
  });

export default homeReducer;
