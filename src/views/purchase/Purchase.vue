<template>
  <div class="w-screen">
    <div class="fixed top-0 inset-x-0 w-full z-10">
      <Search />
      <van-tabs v-model:active="active" swipeable>
        <van-tab v-for="item in purchaseData" :title="item.title">
          <div class="w-full h-screen overflow-y-scroll no-scrollbar  flex flex-wrap ">
            <Component  :is="item.component" />
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script setup>
import { usePurchaseData } from './usePurchase.js'
const { purchaseData } = usePurchaseData() 
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>