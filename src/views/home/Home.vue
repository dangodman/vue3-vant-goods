<template>
  <div class="h-14"><Search class="fixed inset-x-0" /></div>
  <div>
      <!-- <van-tab v-for="item in homeData" :title="item.title">
        <Component :is="item.component" />
      </van-tab> -->
      <Recommend />
  </div>
</template>

<script setup>
import { useHomeData } from "./useHomeData.js";
import Recommend from './components/Recommend.vue'
const { homeData } = useHomeData();
</script>

<style scoped></style>
