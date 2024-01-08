<template>
  <div class="h-14"><Search class="fixed inset-x-0" /></div>
  <div>
    <van-tabs swipeable>
      <van-tab v-for="item in homeData" :title="item.title">
        <Component :is="item.component" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script setup>
import { useHomeData } from "./useHomeData.js";
const { homeData } = useHomeData();
</script>

<style scoped></style>
