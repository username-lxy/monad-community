import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Art",
    name: "Art",
    component: () => import(/* webpackChunkName: "about" */ "../views/Art.vue"),
  },
  {
    path: "/Allnft",
    name: "Allnft",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Allnft.vue"),
  },
  {
    path: "/Draw",
    name: "Draw",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Draw.vue"),
  },
  {
    path: "/Welcome",
    name: "Welcome",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Welcome.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
