import { createRouter, createWebHistory } from "vue-router";

const ISO2 = () => import("../pages/ISO2.vue");
const ISO20 = () => import("../pages/ISO20.vue");

const routes = [
  { path: "/", component: ISO2 },
  { path: "/ISO20", component: ISO20 },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
