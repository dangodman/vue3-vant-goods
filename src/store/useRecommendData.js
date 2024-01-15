// recommendData 数据管理模块 state actions
import { defineStore } from "pinia";
import { getSocial } from "@/api";
export const useRecommendStore = defineStore("recommend", {
  // const recommendData = ref([
  //   {
  //     id: "1",
  //     image:
  //       "https://images.pexels.com/photos/13804085/pexels-photo-13804085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     content: "我是一只小猫",
  //     avatar:
  //       "https://th.bing.com/th/id/R.0bae22e498f409b11760aa748770b026?rik=bfRtaA5JMNTPmw&pid=ImgRaw&r=0",
  //     author: "dante",
  //     thumbsUp: 65,
  //   },
  // ]);
  // return {
  //   recommendData,
  // };
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
