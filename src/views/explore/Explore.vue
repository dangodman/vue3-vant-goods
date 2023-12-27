<template>
  <div class="w-screen h-screen bg-[#f4f3f8]">
    <div class="p-2 fixed top-0 inset-x-0  z-10 bg-white">
      <span class="text-lg font-bold ">探索</span>
    </div>
    <div class="pt-10">
      <van-pull-refresh v-model="loading" @refresh="onRefresh">
        <div class="flex m-2 h-16 p-3 justify-between items-center bg-white">
          <h3 class="">消息中心</h3>
          <span>></span>
        </div>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </van-pull-refresh>
    </div>
  </div>
</template>

<script setup>
import Card from './components/Card.vue'
</script>

<style scoped></style>