import { combineReducers } from "redux";
import profileReducer from "./profileReducer";
import registerReducer from "./register";
import polls from "./polls";
import createPoll from "./create";

const rootReducers = combineReducers({
  profile: profileReducer,
  register: registerReducer,
  polls,
  createPoll
});

export default rootReducers;
