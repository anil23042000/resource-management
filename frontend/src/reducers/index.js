import { combineReducers } from "redux";
import { LOGOUT_STATUS_SUCCESS } from "../actions/types";
import loader from "./loader";


const appReducer = combineReducers({
  loader,
});

// reset the state of a redux store
const rootReducer = (state, action) => {
  if (action.type === LOGOUT_STATUS_SUCCESS) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
