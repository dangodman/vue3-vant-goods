import { ref } from "vue";
import { defineStore } from "pinia";

export const userProductData = defineStore("product", () => {
  const productData = ref([
    {
      id: 1,
      image: [
        {
          url: "https://webimg.dewucdn.com/pro-img/cut-img/20231008/af515c1532134375b7c73296ac16d98b.jpg?x-oss-process=image/resize,w_1125",
          alt: "product-1",
        },
      ],
      price: "200",
      title: "伊利 纯牛奶200ml*24盒",
      desc: "甄选牧场 生态奶源 科技赋能 安享浓醇",
      evaluate: 200,
      Payment: 7000,
    },
    {
      id: 2,
      image: [
        {
          url: "https://webimg.dewucdn.com/pro-img/cut-img/20231008/af515c1532134375b7c73296ac16d98b.jpg?x-oss-process=image/resize,w_1125",
        },
      ],
      price: "200",
      title: "伊利 纯牛奶200ml*24盒",
      desc: "甄选牧场 生态奶源 科技赋能 安享浓醇",
      evaluate: 200,
      Payment: 7000,
    },
    {
      id: 3,
      image: [
        {
          url: "https://webimg.dewucdn.com/pro-img/cut-img/20231008/af515c1532134375b7c73296ac16d98b.jpg?x-oss-process=image/resize,w_1125",
        },
      ],
      price: "200",
      title: "伊利 纯牛奶200ml*24盒",
      desc: "甄选牧场 生态奶源 科技赋能 安享浓醇",
      evaluate: 200,
      Payment: 7000,
    },
    {
      id: 4,
      image: [
        {
          url: "https://webimg.dewucdn.com/pro-img/cut-img/20231008/af515c1532134375b7c73296ac16d98b.jpg?x-oss-process=image/resize,w_1125",
        },
      ],
      price: "200",
      title: "伊利 纯牛奶200ml*24盒",
      desc: "甄选牧场 生态奶源 科技赋能 安享浓醇",
      evaluate: 200,
      Payment: 7000,
    },
    {
      id: 5,
      image: [
        {
          url: "https://webimg.dewucdn.com/pro-img/cut-img/20231008/af515c1532134375b7c73296ac16d98b.jpg?x-oss-process=image/resize,w_1125",
        },
      ],
      price: "200",
      title: "伊利 纯牛奶200ml*24盒",
      desc: "甄选牧场 生态奶源 科技赋能 安享浓醇",
      evaluate: 200,
      Payment: 7000,
    },
    {
      id: 6,
      image: [
        {
          url: "https://webimg.dewucdn.com/pro-img/cut-img/20231008/af515c1532134375b7c73296ac16d98b.jpg?x-oss-process=image/resize,w_1125",
        },
      ],
      price: "200",
      title: "伊利 纯牛奶200ml*24盒",
      desc: "甄选牧场 生态奶源 科技赋能 安享浓醇",
      evaluate: 200,
      Payment: 7000,
    },
  ]);

  return {
    productData,
  };
});
