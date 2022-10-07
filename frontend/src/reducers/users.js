import { LOGIN_STATUS_SUCCESS } from "../actions/types";

const initialState = {
  userLoginDeatils: {},
  loginStatus: false,
  loginDate: null,
};

const userInfo = (state = initialState, action) => {
  const { type, payload } = action;
  if (typeof state === "undefined") {
    return state;
  }
  switch (type) {
    case LOGIN_STATUS_SUCCESS:
      return {
        ...state,
        userLoginDeatils: payload,
        loginStatus: true,
        loginDate: new Date(),
      };

    default:
      return state;
  }
};

export default userInfo;
