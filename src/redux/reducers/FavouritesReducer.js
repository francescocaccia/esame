import { TOGGLE_FAVOURITE } from "../actions";

const initialState = {};

const FavouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVOURITE:
      return {
        ...state,
        [action.payload]: !state[action.payload],
      };
  }
  return state;
};

export default FavouritesReducer;
