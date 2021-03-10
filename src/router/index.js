import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/demo",
    name: "demo",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Demo.vue"),
  },
  {
    path: "/demo2",
    name: "demo2",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Demo2.vue"),
  },
  {
    path: "/basic",
    name: "basic",
    component: () => import("../views/basic.vue"),
  },
  {
    path: "/changeStyle",
    name: "changeBorderStyle",
    component: () => import("../views/changeBorderStyle.vue"),
  },
  {
    path: "/useCellGridPlugin",
    name: "useCellGridPlugin",
    component: () => import("../views/useCellGridPlugin.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
