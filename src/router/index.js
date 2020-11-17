import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
const VueRouterPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch((err) => err);
};

//replace
const VueRouterReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(to) {
  return VueRouterReplace.call(this, to).catch((err) => err);
};

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/user",
    name: "User",
    component: () => import(/* webpackChunkName: "about" */ "../views/UserManage/UserManage.vue"),
  },
  {
    path: "/video",
    name: "video",
    component: () => import(/* webpackChunkName: "about" */ "../views/Video.vue"),
  },
  {
    path: "/role",
    name: "role",
    component: () => import(/* webpackChunkName: "about" */ "../views/Role.vue"),
  },
  {
    path: "/article",
    name: "article",
    component: () => import(/* webpackChunkName: "about" */ "../views/Article.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
