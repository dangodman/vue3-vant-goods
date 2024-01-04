import Recommend from "./components/Recommend.vue";
export function usePurchaseData() {
  const purchaseData = [
    {
      id: 1,
      title: "推荐",
      component: Recommend,
    },
    {
      id: 2,
      title: "潮鞋",
    },
    {
      id: 3,
      title: "女装",
    },
    {
      id: 4,
      title: "车品",
    },
  ];
  return {
    purchaseData,
  };
}
