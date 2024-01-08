<template>
  <div class="flex flex-wrap w-full h-screen overflow-y-auto overflow-x-hidden">
    <div class="w-1/2 bg-white" v-for="product in productData" :key="product.id">
      <router-link :to="{ path: '/purchase/product', query: { id: product.id } }">
        <div class="card_img">
          <img
            class="w-full"
            :src="product.image[0].url"
            alt=""
          />
        </div>
        <p class="w-full p-1 text-lg double-line">dfdfdfdfef</p>
        <div class="flex items-center p-1 justify-between">
          <span class="text-sm font-bold">￥{{ product.price }}</span>
          <span class="text-sm text-[#9b9b9b]">{{ product.Payment }}人付款</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { userProductData } from "@/store/useProductData.js";
const { productData } = userProductData();
console.log(productData);
</script>

<style scoped></style>
