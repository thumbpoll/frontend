import { combineReducers } from "redux";
import profileReducer from "./profileReducer";

const rootReducers = combineReducers({
  profile: profileReducer
});

export default rootReducers;
