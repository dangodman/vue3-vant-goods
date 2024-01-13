<template>
  <div class="w-screen h-screen border-t">
    <div class="flex flex-wrap divide-x">
      <div
        class="w-1/2 bg-white border-b"
        v-for="product in productData"
        :key="product.id"
      >
        <router-link
          :to="{ path: '/purchase/product', query: { id: product.id } }"
        >
          <div class="card_img">
            <img class="w-full" :src="product.image[0].url" alt="" />
          </div>
          <p class="w-full p-1 text-lg double-line">dfdfdfdfef</p>
          <div class="flex items-center p-1 justify-between mb-2">
            <span class="text-sm font-bold">￥{{ product.price }}</span>
            <span class="text-sm text-[#9b9b9b]"
              >{{ product.Payment }}人付款</span
            >
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  productData: {
    type: Array,
    default: () => [],
  },
});
</script>

<style scoped></style>
