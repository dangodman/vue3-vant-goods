// recommendData 数据管理模块 state actions
import { ref } from "vue";
import { defineStore } from "pinia";

export const useRecommendStore = defineStore("recommend", () => {
  const recommendData = ref([
    {
      id: "1",
      image:
        "https://images.pexels.com/photos/13804085/pexels-photo-13804085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      content: "我是一只小猫",
      avatar:
        "https://th.bing.com/th/id/R.0bae22e498f409b11760aa748770b026?rik=bfRtaA5JMNTPmw&pid=ImgRaw&r=0",
      author: "dante",
      thumbsUp: 65,
    },
    {
      id: "2",
      image:
        "https://images.pexels.com/photos/16844098/pexels-photo-16844098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      content: "我是一只小猫",
      avatar:
        "https://th.bing.com/th/id/R.0bae22e498f409b11760aa748770b026?rik=bfRtaA5JMNTPmw&pid=ImgRaw&r=0",
      author: "dante",
      thumbsUp: 65,
    },
    {
      id: "3",
      image:
        "https://images.pexels.com/photos/13972469/pexels-photo-13972469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      content: "我是一只小猫",
      avatar:
        "https://th.bing.com/th/id/R.0bae22e498f409b11760aa748770b026?rik=bfRtaA5JMNTPmw&pid=ImgRaw&r=0",
      author: "dante",
      thumbsUp: 65,
    },
    {
      id: "4",
      image:
        "https://images.pexels.com/photos/19726016/pexels-photo-19726016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      content: "我是一只小猫",
      avatar:
        "https://th.bing.com/th/id/R.0bae22e498f409b11760aa748770b026?rik=bfRtaA5JMNTPmw&pid=ImgRaw&r=0",
      author: "dante",
      thumbsUp: 65,
    },
    {
      id: "5",
      image:
        "https://images.pexels.com/photos/18111144/pexels-photo-18111144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      content: "我是一只小猫",
      avatar:
        "https://th.bing.com/th/id/R.0bae22e498f409b11760aa748770b026?rik=bfRtaA5JMNTPmw&pid=ImgRaw&r=0",
      author: "dante",
      thumbsUp: 65,
    },
    {
      id: "1",
      image:
        "https://images.pexels.com/photos/13804085/pexels-photo-13804085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      content: "我是一只小猫",
      avatar:
        "https://th.bing.com/th/id/R.0bae22e498f409b11760aa748770b026?rik=bfRtaA5JMNTPmw&pid=ImgRaw&r=0",
      author: "dante",
      thumbsUp: 65,
    },
    {
      id: "2",
      image:
        "https://images.pexels.com/photos/16844098/pexels-photo-16844098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      content: "我是一只小猫",
      avatar:
        "https://th.bing.com/th/id/R.0bae22e498f409b11760aa748770b026?rik=bfRtaA5JMNTPmw&pid=ImgRaw&r=0",
      author: "dante",
      thumbsUp: 65,
    },
    {
      id: "3",
      image:
        "https://images.pexels.com/photos/13972469/pexels-photo-13972469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      content: "我是一只小猫",
      avatar:
        "https://th.bing.com/th/id/R.0bae22e498f409b11760aa748770b026?rik=bfRtaA5JMNTPmw&pid=ImgRaw&r=0",
      author: "dante",
      thumbsUp: 65,
    },
    {
      id: "4",
      image:
        "https://images.pexels.com/photos/19726016/pexels-photo-19726016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      content: "我是一只小猫",
      avatar:
        "https://th.bing.com/th/id/R.0bae22e498f409b11760aa748770b026?rik=bfRtaA5JMNTPmw&pid=ImgRaw&r=0",
      author: "dante",
      thumbsUp: 65,
    },
    {
      id: "5",
      image:
        "https://images.pexels.com/photos/18111144/pexels-photo-18111144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      content: "我是一只小猫",
      avatar:
        "https://th.bing.com/th/id/R.0bae22e498f409b11760aa748770b026?rik=bfRtaA5JMNTPmw&pid=ImgRaw&r=0",
      author: "dante",
      thumbsUp: 65,
    },
    {
      id: "1",
      image:
        "https://images.pexels.com/photos/13804085/pexels-photo-13804085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      content: "我是一只小猫",
      avatar:
        "https://th.bing.com/th/id/R.0bae22e498f409b11760aa748770b026?rik=bfRtaA5JMNTPmw&pid=ImgRaw&r=0",
      author: "dante",
      thumbsUp: 65,
    },
    {
      id: "2",
      image:
        "https://images.pexels.com/photos/16844098/pexels-photo-16844098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      content: "我是一只小猫",
      avatar:
        "https://th.bing.com/th/id/R.0bae22e498f409b11760aa748770b026?rik=bfRtaA5JMNTPmw&pid=ImgRaw&r=0",
      author: "dante",
      thumbsUp: 65,
    },
    {
      id: "3",
      image:
        "https://images.pexels.com/photos/13972469/pexels-photo-13972469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      content: "我是一只小猫",
      avatar:
        "https://th.bing.com/th/id/R.0bae22e498f409b11760aa748770b026?rik=bfRtaA5JMNTPmw&pid=ImgRaw&r=0",
      author: "dante",
      thumbsUp: 65,
    },
    {
      id: "4",
      image:
        "https://images.pexels.com/photos/19726016/pexels-photo-19726016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      content: "我是一只小猫",
      avatar:
        "https://th.bing.com/th/id/R.0bae22e498f409b11760aa748770b026?rik=bfRtaA5JMNTPmw&pid=ImgRaw&r=0",
      author: "dante",
      thumbsUp: 65,
    },
    {
      id: "5",
      image:
        "https://images.pexels.com/photos/18111144/pexels-photo-18111144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      content: "我是一只小猫",
      avatar:
        "https://th.bing.com/th/id/R.0bae22e498f409b11760aa748770b026?rik=bfRtaA5JMNTPmw&pid=ImgRaw&r=0",
      author: "dante",
      thumbsUp: 65,
    },
    {
      id: "1",
      image:
        "https://images.pexels.com/photos/13804085/pexels-photo-13804085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      content: "我是一只小猫",
      avatar:
        "https://th.bing.com/th/id/R.0bae22e498f409b11760aa748770b026?rik=bfRtaA5JMNTPmw&pid=ImgRaw&r=0",
      author: "dante",
      thumbsUp: 65,
    },
    {
      id: "2",
      image:
        "https://images.pexels.com/photos/16844098/pexels-photo-16844098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      content: "我是一只小猫",
      avatar:
        "https://th.bing.com/th/id/R.0bae22e498f409b11760aa748770b026?rik=bfRtaA5JMNTPmw&pid=ImgRaw&r=0",
      author: "dante",
      thumbsUp: 65,
    },
    {
      id: "3",
      image:
        "https://images.pexels.com/photos/13972469/pexels-photo-13972469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      content: "我是一只小猫",
      avatar:
        "https://th.bing.com/th/id/R.0bae22e498f409b11760aa748770b026?rik=bfRtaA5JMNTPmw&pid=ImgRaw&r=0",
      author: "dante",
      thumbsUp: 65,
    },
    {
      id: "4",
      image:
        "https://images.pexels.com/photos/19726016/pexels-photo-19726016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      content: "我是一只小猫",
      avatar:
        "https://th.bing.com/th/id/R.0bae22e498f409b11760aa748770b026?rik=bfRtaA5JMNTPmw&pid=ImgRaw&r=0",
      author: "dante",
      thumbsUp: 65,
    },
    {
      id: "5",
      image:
        "https://images.pexels.com/photos/18111144/pexels-photo-18111144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
