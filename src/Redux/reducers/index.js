import { combineReducers } from "redux";
import { beerReducer } from "./beerReducer";
import { favoriteReducer } from "./favoriteReducer";

const mainReducer = combineReducers({ beerReducer, favoriteReducer });

export default mainReducer;
