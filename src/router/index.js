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
  {
    path: "/options",
    name: "options",
    component: () => import("@/views/LoginRegisterPage/Options.vue"),
  },
  {
    path: "/options/login",
    name: "login",
    component: () => import("@/views/LoginRegisterPage/Login.vue"),
  },
  {
    path: "/options/register",
    name: "register",
    component: () => import("@/views/LoginRegisterPage/Register.vue"),
  },
  {
    path:'/home/search',
    name:'search',
    component:()=>import("@/views/home/components/Search.vue")
  },
  {
    path:'/my/settings',
    name:'settings',
    component:()=>import("@/views/mine/components/Settings.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

const EnterableRoutes = [
  "home",
  "mine",
  "login",
  "options",
  "register",
  "purchase",
  "explore",
];
router.beforeEach((to, _from, next) => {
  if (EnterableRoutes.includes(to.name)) {
    next();
  } else {
    if (localStorage.getItem("token")) {
      next();
    } else {
      next("/options");
    }
  }
});

export default router;
