import { LOGIN_STATUS_SUCCESS } from "../types";

export const login = (data, onSuccess, onerror) => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_STATUS_SUCCESS,
      payload: data,
    });
    onSuccess();
  } catch (e) {
    onerror();
  }
};
