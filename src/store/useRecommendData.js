// recommendData 数据管理模块 state actions
import { ref } from "vue";
import { defineStore } from "pinia";

export const useRecommendStore = defineStore("recommend", () => {
  const recommendData = ref([
    {
      id: "1",
      image:
        "https://th.bing.com/th/id/OIP.ZcjidB6ytMyNAjg9clT4PAHaNK?rs=1&pid=ImgDetMain",
      content: "我是一只小猫",
      avatar:
        "https://th.bing.com/th/id/R.0bae22e498f409b11760aa748770b026?rik=bfRtaA5JMNTPmw&pid=ImgRaw&r=0",
      author: "dante",
      thumbsUp: 65,
    },
    {
      id: "2",
      image:
        "https://th.bing.com/th/id/OIP.ZcjidB6ytMyNAjg9clT4PAHaNK?rs=1&pid=ImgDetMain",
      content: "我是一只小猫",
      avatar:
        "https://th.bing.com/th/id/R.0bae22e498f409b11760aa748770b026?rik=bfRtaA5JMNTPmw&pid=ImgRaw&r=0",
      author: "dante",
      thumbsUp: 65,
    },
    {
      id: "3",
      image:
        "https://th.bing.com/th/id/OIP.ZcjidB6ytMyNAjg9clT4PAHaNK?rs=1&pid=ImgDetMain",
      content: "我是一只小猫",
      avatar:
        "https://th.bing.com/th/id/R.0bae22e498f409b11760aa748770b026?rik=bfRtaA5JMNTPmw&pid=ImgRaw&r=0",
      author: "dante",
      thumbsUp: 65,
    },
    {
      id: "4",
      image:
        "https://th.bing.com/th/id/OIP.ZcjidB6ytMyNAjg9clT4PAHaNK?rs=1&pid=ImgDetMain",
      content: "我是一只小猫",
      avatar:
        "https://th.bing.com/th/id/R.0bae22e498f409b11760aa748770b026?rik=bfRtaA5JMNTPmw&pid=ImgRaw&r=0",
      author: "dante",
      thumbsUp: 65,
    },
  ]);
  return {
    recommendData,
  };
});
