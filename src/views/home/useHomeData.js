import Recommend from "./components/Recommend.vue";
export function useHomeData() {
  const homeData = [
    {
      id: 1,
      title: "推荐",
      component: Recommend,
    },
    {
      id: 1,
      title: "推荐",
      component: Recommend,
    },
    {
      id: 1,
      title: "推荐",
      component: Recommend,
    },
    {
      id: 1,
      title: "推荐",
      component: Recommend,
    },
  ];
  return {
    homeData,
  };
}
