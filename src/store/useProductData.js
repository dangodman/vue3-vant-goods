import { defineStore } from "pinia";
import { getGoodsList } from "@/api";
export const useProductData = defineStore("product", {
  state: () => {
    return {
      productData: [],
    };
  },
  actions: {
    async getProductData() {
      const data = await getGoodsList();
      if (data.code === "200") {
        this.productData = [...this.productData, ...data.data];
      }
    },
  },
});
