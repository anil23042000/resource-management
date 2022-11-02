import { LOGIN_STATUS_SUCCESS } from "../types";
import ApiConfig from "../Api";

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

export const getEmployee = async () => {
  try {
    const url = "/listemployee";
    return await ApiConfig.getData(url);

  } catch (err) {
    return err;
  }
}

export const postemployee = async (data) => {
  try {
    const url = "/postemployee";
    return await ApiConfig.postData(url, {}, data);
  } catch (err) {
    return err;
  }
}

export const postuser = async (data) => {
  try {
    const url = "/postuser";
    return await ApiConfig.postData(url, {}, data);
  } catch (err) {
    return err;
  }
}
export const LoginUser = async (data) => {
  try {
    const url = "/find";
    return await ApiConfig.postData(url, {}, data);
  } catch (err) {
    return err;
  }
}
export const updateemployee = async (id, data) => {
  try {
    const url = "/updateemployee/" + id;
    return await ApiConfig.putData(url, {}, data);
  } catch (err) {
    return err;
  }
}

export const deleteemployee = async (id) => {
  try {
    const url = "/deleteemp/" + id;
    return await ApiConfig.deleteData(url, {});
  } catch (err) {
    return err;
  }
}

export const getsingleemployee = async (id) => {
  try {
    const url = "/getemployee/" + id;
    return await ApiConfig.getData(url);
  } catch (err) {
    return err;
  }
}



export const getproject = async () => {
  try {
    const url = "/listproject";
    return await ApiConfig.getData(url);

  } catch (err) {
    return err;
  }
}

export const postproject = async (data) => {
  try {
    const url = "/postproject";
    return await ApiConfig.postData(url, {}, data);
  } catch (err) {
    return err;
  }
}
export const updateproject = async (id, data) => {
  try {
    const url = "/updateproject/" + id;
    return await ApiConfig.putData(url, {}, data);
  } catch (err) {
    return err;
  }
}

export const deleteproject = async (id) => {
  try {
    const url = "/deletepro/" + id;
    return await ApiConfig.deleteData(url, {});
  } catch (err) {
    return err;
  }
}

export const getsingleproject = async (id) => {
  try {
    const url = "/getproject/" + id;
    return await ApiConfig.getData(url);
  } catch (err) {
    return err;
  }
}


export const getresource = async () => {
  try {
    const url = "/listresource";
    return await ApiConfig.getData(url);

  } catch (err) {
    return err;
  }
}

export const postresource = async (data) => {
  try {
    const url = "/postresource";
    return await ApiConfig.postData(url, {}, data);
  } catch (err) {
    return err;
  }
}
export const updateresource = async (id, data) => {
  try {
    const url = "/updateresource/" + id;
    return await ApiConfig.putData(url, {}, data);
  } catch (err) {
    return err;
  }
}

export const deleteresource = async (id) => {
  try {
    const url = "/deletereso/" + id;
    return await ApiConfig.deleteData(url, {});
  } catch (err) {
    return err;
  }
}

export const getsingleresource = async (id) => {
  try {
    const url = "/getresource/" + id;
    return await ApiConfig.getData(url);
  } catch (err) {
    return err;
  }
}



export const getfiles = async () => {
  try {
    const url = "/listfile";
    return await ApiConfig.getData(url);

  } catch (err) {
    return err;
  }
}

export const postfile = async (data) => {
  try {
    const url = "/postfile";
    console.log(data)
    return await ApiConfig.postData(url, {}, data);
  } catch (err) {
    return err;
  }
}
export const updatefile = async (id, data) => {
  try {
    console.log(data + "  " + id)
    console.log(data)
    const url = "/updatefile/" + id;
    return await ApiConfig.putData(url,{},data);
  } catch (err) {
    return err;
  }
}

export const deletefile = async (id) => {
  try {
    const url = "/filedelete/" + id;
    return await ApiConfig.deleteData(url, {});
  } catch (err) {
    return err;
  }
}

export const getsinglefile = async (id) => {
  try {
    const url = "/fileupdate/" + id;
    return await ApiConfig.getData(url);
  } catch (err) {
    return err;
  }
}


export const readsinglefile = async (id) => {
  try {
    const url = "/fileread/" + id;
    return await ApiConfig.getData(url);
  } catch (err) {
    return err;
  }
}
