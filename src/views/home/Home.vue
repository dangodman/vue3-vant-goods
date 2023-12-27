<template>
  <!-- search -->
  <div class="fixed top-0 inset-x-0 w-full z-10">
    <Search />
  </div>
  <div class="mt-14">
    <van-tabs swipeable>
      <van-tab  v-for="item in homeData" :title="item.title">
        <Component  :is="item.component" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script setup>
import { useHomeData } from './useHomeData.js'
const { homeData } = useHomeData()
</script>

<style  scoped></style>