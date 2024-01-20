<template>
  <div class="w-screen border-t">
    <div class="flex flex-wrap">
      <div
        class="w-1/2 bg-white border-b"
        v-for="product in productData"
        :key="product.id"
      >
        <router-link
          :to="{ path: '/purchase/product', query: { id: product.id } }"
        >
          <div class="card_img">
            <img
              class="w-full aspect-square"
              :src="formatImgone(product.images)"
              alt=""
            />
          </div>
          <p class="w-full h-12 p-1 font-bold text-sm overflow-hidden">
            {{ product.p_name }}
          </p>
          <div class="flex items-center p-1 justify-between mb-2">
            <span class="text-sm font-bold">￥{{ product.price }}</span>
            <span class="text-sm text-[#9b9b9b]"
              >{{ product.payment }}人付款</span
            >
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { formatImgone } from "@/utils";
defineProps({
  productData: {
    type: Array,
    default: () => [],
  },
});
</script>

<style scoped></style>
