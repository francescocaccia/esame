import { PLAY_SONG } from "../actions";

const initialState = {};

const PlayerState = (state = initialState, action) => {
  switch (action.type) {
    case PLAY_SONG:
      return action.payload;
  }
  return state;
};

export default PlayerState;
