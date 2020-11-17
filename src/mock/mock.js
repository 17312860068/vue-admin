import Mock from "mockjs"; // 引入mockjs

import tableData from "./mockData/tableData";
import homeApi from "./mockData/home";
import userApi from "./mockData/user";
import permissionApi from "./mockData/permission";

Mock.mock(/\/api\/data\/tableData/, "get", tableData); // tableData
// 首页相关
// 拦截的是 /home/getData
Mock.mock(/\/api\/home\/getData/, "get", homeApi.getStatisticalData);

// 用户相关
Mock.mock(/\/api\/user\/getUser/, "get", userApi.getUserList);
Mock.mock(/\/api\/user\/del/, "get", userApi.deleteUser);
Mock.mock(/\/api\/user\/batchremove/, "get", userApi.batchremove);
Mock.mock(/\/api\/user\/add/, "post", userApi.createUser);
Mock.mock(/\/api\/user\/edit/, "post", userApi.updateUser);
Mock.mock(/\/api\/home\/getData/, "get", homeApi.getStatisticalData);

// 权限相关
Mock.mock(/\/api\/permission\/getMenu/, "post", permissionApi.getMenu);
