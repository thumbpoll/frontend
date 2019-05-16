import { combineReducers } from "redux";
import profileReducer from "./profileReducer";
import registerReducer from "./register";
import polls from "./polls";

const rootReducers = combineReducers({
  profile: profileReducer,
  register: registerReducer,
  polls
});

export default rootReducers;
