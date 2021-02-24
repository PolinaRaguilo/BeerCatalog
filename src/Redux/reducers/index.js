import { combineReducers } from "redux";
import { beerReducer } from "./beerReducer";

const mainReducer = combineReducers({ beerReducer });

export default mainReducer;
