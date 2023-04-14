import { combineReducers, configureStore } from "@reduxjs/toolkit";
import SongsReducer from "../reducers/SongsRerducer";
import AlbumsReducer from "../reducers/AlbumsReducer";
import PlayerReducer from "../reducers/PlayerReducer";
import FavouritesReducer from "../reducers/FavouritesReducer";

const rootReducer = combineReducers({
  songs: SongsReducer,
  albums: AlbumsReducer,
  player: PlayerReducer,
  favourites: FavouritesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
