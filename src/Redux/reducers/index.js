import { combineReducers } from "redux";
import { beerReducer } from "./beerReducer";
import { favoriteReducer } from "./favoriteReducer";
import { authReducer } from "./authReducer";

const mainReducer = combineReducers({
  beerReducer,
  favoriteReducer,
  authReducer,
});

export default mainReducer;
