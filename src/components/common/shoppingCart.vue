<template>
  <van-action-bar>
    <van-action-bar-icon icon="like-o" size="20" text="想要" badge="447" />
    <van-action-bar-icon icon="certificate" text="我有" />
    <van-action-bar-icon icon="service" text="客服" color="black" />
    <van-action-bar-button type="warning" @click="addCart" text="加入购物车" />
    <van-action-bar-button type="default" color="#00cacc" text="立即购买" />
  </van-action-bar>
</template>

<script setup>
import { showToast } from 'vant';

const goods = defineProps(["goodData"]);
console.log(goods);
const addCart = () => {
  showToast({
    message: "添加成功",
  });
};
</script>

<style scoped></style>
