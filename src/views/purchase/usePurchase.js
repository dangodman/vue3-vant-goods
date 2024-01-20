import Recommend from "./components/Recommend.vue";
import TrendyShop from "./components/TrendyShop.vue";
import WomenClothing from "./components/WomenClothing.vue";
import CarProducts from "./components/CarProducts.vue";

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
      component: TrendyShop,
    },
    {
      id: 3,
      title: "女装",
      component: WomenClothing,
    },
    {
      id: 4,
      title: "车品",
      component: CarProducts,
    },
  ];
  return {
    purchaseData,
  };
}
