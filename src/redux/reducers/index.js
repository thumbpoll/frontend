import { combineReducers } from "redux";
import profileReducer from "./profileReducer";
import registerReducer from "./register";

const rootReducers = combineReducers({
  profile: profileReducer,
  register: registerReducer
});

export default rootReducers;
