import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/scss/reset.scss";
Vue.config.productionTip = false;
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// mock
import "./mock/mock.js";
import http from "@/api/http.js";
Vue.prototype.$http = http;
Vue.use(ElementUI);
// console.log(process.env);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
