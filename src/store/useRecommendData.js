// recommendData 数据管理模块 state actions
import { defineStore } from "pinia";
import { getSocial } from "@/api";
export const useRecommendStore = defineStore("recommend", {
  state: () => {
    return {
      recommendData: [],
    };
  },
  getters: {},

  actions: {
    async getRecommendData() {
      const { data } = await getSocial();
      this.recommendData = data;
    },
  },
});
