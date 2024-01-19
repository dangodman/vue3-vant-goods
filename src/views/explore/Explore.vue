<template>
  <div class="w-screen h-screen bg-[#f4f3f8]">
    <div class="p-2 fixed top-0 inset-x-0 z-10 bg-white">
      <div class="flex items-center justify-between">
        <span class="text-lg font-bold">购物车</span>
        <span class="text-sm">管理</span>
      </div>
    </div>
    <div class="h-[44px]"></div>
    <div class="mt-10" v-if="false">
      <van-empty
        image="https://th.bing.com/th/id/OIP.jvgK3bw5W4ZwmxVU-qQnYQAAAA?w=264&h=211&c=7&r=0&o=5&pid=1.7"
        description="购物车竟然是空的"
      />
    </div>
    <div v-else>
      <Card />
    </div>
    <div class="text-center font-bold">猜你喜欢</div> 
  </div>
</template>

<script setup>
import Card from "./components/Card.vue";
</script>

<style scoped></style>
