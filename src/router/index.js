import { createRouter, createWebHistory } from "vue-router";

const children = [
  {
    path: "home",
    name: "home",
    component: () => import("@/views/home/Home.vue"),
  },
  {
    path: "purchase",
    name: "purchase",
    component: () => import("@/views/purchase/Purchase.vue"),
  },
  {
    path: "explore",
    name: "explore",
    component: () => import("@/views/explore/Explore.vue"),
  },
  {
    path: "my",
    name: "mine",
    component: () => import("@/views/mine/Mine.vue"),
  },
];
const routes = [
  {
    path: "/",
    name: "Root",
    component: () => import("@/Root.vue"),
    children: children,
    redirect: { name: "home" },
  },
  {
    path: "/detail",
    name: "detail",
    component: () => import("@/views/home/components/Detail.vue"),
  },
  {
    path: "/purchase/product",
    name: "product",
    component: () => import("@/components/common/Product.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
