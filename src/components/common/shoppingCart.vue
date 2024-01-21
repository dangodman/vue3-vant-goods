<template>
  <van-action-bar>
    <van-action-bar-icon icon="like-o" size="20" text="想要" />
    <van-action-bar-icon icon="certificate" text="我有" />
    <van-action-bar-icon icon="service" text="客服" color="black" />
    <van-action-bar-button type="warning" @click="addCart" text="加入购物车" />
    <van-action-bar-button type="default" color="#00cacc" text="立即购买" />
  </van-action-bar>
</template>

<script setup>
import { showToast } from "vant";
import { getInformation, postCart } from "@/api";
const goods = defineProps(["goodData"]);
console.log(goods.goodData.desc);
const addCart = async () => {
  const user = localStorage.getItem("user");
  const {
    data: { id },
  } = await getInformation(user);
  const params = {
    product_name: goods.goodData.p_name,
    product_desc: goods.goodData.desc,
    product_img: goods.goodData.images,
    product_price: goods.goodData.price,
    product_num: 1,
    user_id: id,
  };
  const data = await postCart(params);
  console.log(data);
  if ((data.code = "8000")) {
    showToast({
      message: "添加成功",
    });
  }
};
</script>

<style scoped></style>
