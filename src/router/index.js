import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    redirect:{name:'home'}
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/home/Home.vue"),
  },
  {
    path:"/purchase",
    name:"purchase",
    component:()=>import("@/views/purchase/Purchase.vue"),
  },
  {
    path:"/explore",
    name:"explore",
    component:()=>import("@/views/explore/Explore.vue"),
  },
  {
    path:"/my",
    name:"mine",
    component:()=>import("@/views/mine/Mine.vue"),
  },
  {
    path:"/detail",
    name:"detail",
    component:() => import("@/views/home/components/Detail.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
