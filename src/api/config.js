import axios from "axios";
import qs from 'qs';

const sql_axios = axios.create({
  // 设置超时时间,单位毫秒
  timeout: 1500,
  baseURL: "http://127.0.0.1:5000",
});

const _post = (api, data, headers = {}) => {
  return new Promise((resolve, reject) => {
    sql_axios
      .post(api, data, { headers })
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const filename_get = (api, params = {}, headers = {}) => {
  return new Promise((resolve, reject) => {
    sql_axios
      .get(api, { params, headers })
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const post = (api, data, headers = {}) => {
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  return _post(api, qs.stringify(data), headers);
};

const postJson = (api, data, headers = {}) => {
  headers["Content-Type"] = "application/json;charset=utf-8";
  return _post(api, JSON.stringify(data), headers);
};
const postFormData = (api, data, headers = {}) => {
  headers["Content-Type"] = "multipart/form-data";
  return _post(api, data, headers);
};

export default {filename_get, postJson, post, postFormData};
