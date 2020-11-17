import Vue from "vue";
import Vuex from "vuex";
import Menu from "./menu.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { Menu },
});
