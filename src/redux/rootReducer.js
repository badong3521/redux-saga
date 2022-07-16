import { combineReducers } from "redux";
import Reducer from "../reducer";

const rootReducer = combineReducers({
  posts: Reducer,
});

export default rootReducer;
