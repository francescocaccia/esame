import { combineReducers, configureStore } from "@reduxjs/toolkit";
import firstReducer from "../reducers/firstRerducer";

const rootReducer = combineReducers({
  first: firstReducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
