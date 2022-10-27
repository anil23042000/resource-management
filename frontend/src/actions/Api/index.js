import axios from "axios";

const baseURL = "http://localhost:4002/api/";

const customAxios = (dynamicBaseURL) => {
    const axiosInstance = axios.create({
      baseURL: dynamicBaseURL,
    });
    return axiosInstance;
  };
  
  const instance = customAxios(baseURL);

  const apiConfig = {
    baseURL: baseURL,
    getData: (url, headers, params) => {
      return instance({
        method: "GET",
        url: url,
        headers: headers,
        params: params,
      });
    },
    postData: (url, headers, dataValue) => {
      return instance({
        method: "POST",
        url: url,
        headers: headers,
        data: dataValue,
      });
    },
    putData: (url, headers, dataValue) => {
      return instance({
        method: "PUT",
        url: url,
        headers: headers,
        data: dataValue,
      });
    },
    deleteData: (url, headers) => {
      return instance({
        method: "DELETE",
        url: url,
        headers: headers,
      });
    },
  };
  
  export default apiConfig;