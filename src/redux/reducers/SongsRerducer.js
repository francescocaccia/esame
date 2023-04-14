import { ADD_SONGS } from "../actions";

const initialState = {};

const SongsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SONGS:
      return {
        ...state,
        [action.payload.key]: action.payload.data.slice(0, 4),
      };
  }
  return state;
};

export default SongsReducer;
