import { combineReducers } from "redux";

import movieReducer from "./moviewReducer";

const rootReducer = combineReducers({
  movie: movieReducer,
});

export default rootReducer;
