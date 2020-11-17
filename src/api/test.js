import request from "./http.js";
export default class Test {
  static test() {
    return request.get("/index/test", {});
  }
}
