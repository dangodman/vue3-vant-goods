<template>
  <Search class="fixed inset-x-0 z-10" />
  <div class="w-full h-14"></div>
  <van-tabs swipeable>
    <van-tab v-for="item in purchaseData" :title="item.title">
      <Component :is="item.component" />
    </van-tab>
  </van-tabs>
</template>

<script setup>
import { usePurchaseData } from "./usePurchase.js";
const { purchaseData } = usePurchaseData();
console.log(purchaseData);
</script>

<style scoped></style>
