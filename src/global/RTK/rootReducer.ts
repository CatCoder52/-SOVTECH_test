import { combineReducers } from "@reduxjs/toolkit";
import movieSearchAction from "./movieSearchAction"

const rootReducer = combineReducers({
    movieSearchAction
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
