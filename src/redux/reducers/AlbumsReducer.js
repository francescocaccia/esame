import { ADD_ALBUM } from "../actions";

const initialState = {};

const AlbumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ALBUM:
      return {
        ...state,
        [action.payload.id]: action.payload.data,
      };
  }
  return state;
};

export default AlbumsReducer;
