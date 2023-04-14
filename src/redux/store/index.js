import { combineReducers, configureStore } from "@reduxjs/toolkit";
import SongsReducer from "../reducers/SongsRerducer";
import AlbumsReducer from "../reducers/AlbumsReducer";

const rootReducer = combineReducers({
  songs: SongsReducer,
  albums: AlbumsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
