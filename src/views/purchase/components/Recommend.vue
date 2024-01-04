<template>
  <div class="w-1/2 bg-white" v-for="index in 10">
    <router-link :to="{ path: '/detail', query: { id: 1 } }">
      <div class="card_img ">
        <img class="w-full" src="https://img01-gms.17zwd.com/imgextra/222189/i2/663544131565387776.jpg" alt="">
      </div>
      <p class="w-full p-1 text-lg double-line">dfdfdfdfef</p>
      <div class="flex items-center p-1 justify-between">
        <span class="text-sm font-bold">￥122</span>
        <span class="text-sm text-[#9b9b9b]">23人付款</span>
      </div>
    </router-link>
  </div>
</template>

<script setup>

</script>

<style scoped></style>