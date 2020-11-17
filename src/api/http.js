// import Vue from "vue";
import axios from "axios";
// import router from "../router";
import baseConfig from "@/config/base.js";

/* 创建axios实例 */
const service = axios.create({
  baseURL: baseConfig().baseUrl, // 基础地址 要请求的url前缀
  // headers: { 'Content-Type': 'multipart/form-data' }
  timeout: 8000, // 请求超时时间
});

/* request拦截器 */
service.interceptors.request.use(
  (config) => {
    config.headers.token = sessionStorage.getItem("token");
    // config.headers.sign = Utils.signStringify(config.data);
    if (config.method === "post") {
      config.data = {
        private_key: baseConfig().privateKey,
        ...config.data,
      };
    } else {
      config.params = {
        private_key: baseConfig().privateKey,
        ...config.data,
      };
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

/* respone拦截器 */
service.interceptors.response.use(
  (response) => {
    return response;
    // 获取返回数据，并处理。按自己业务需求修改。下面只是个demo
    // if (response.status !== 200) {
    //   if (response.status === 401) {
    //     if (location.hash === "#/") {
    //       return response;
    //     } else {
    //       location.href = "/#/";
    //     }
    //   }
    //   return Promise.reject("error");
    // } else {
    //   return response.data;
    // }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
