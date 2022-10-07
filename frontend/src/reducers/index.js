import { combineReducers } from "redux";
import { LOGOUT_STATUS_SUCCESS } from "../actions/types";
import loader from "./loader";
import userInfo from "./users";


const appReducer = combineReducers({
  loader,
  userInfo,
});

// reset the state of a redux store
const rootReducer = (state, action) => {
  if (action.type === LOGOUT_STATUS_SUCCESS) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
