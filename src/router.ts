import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import ColumnDetail from "./views/ColumnDetail.vue";

const routerHistory = createWebHistory();
export const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    // 动态路由
    {
      path: "/column/:id",
      name: "column",
      component: ColumnDetail,
    },
  ],
});
