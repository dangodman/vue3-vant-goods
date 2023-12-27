<template>
  <div class="bg-white">
    <van-cell  value="0" is-link>
      <!-- 使用 title 插槽来自定义标题 -->
      <template #title>
        <span class="font-bold">订单</span>
      </template>
    </van-cell>
    <div class="flex justify-between items-center p-3">
      <div class="flex flex-col items-center">
        <IconPark :icon="Config" theme="filled" size="24" fill="#333" strokeLinejoin="miter" strokeLinecap="square" />
        <span class="text-xs mt-1  text-zinc-400">代付款</span>
      </div>
      <div class="flex flex-col items-center">
        <IconPark :icon="Config" theme="filled" size="24" fill="#333" strokeLinejoin="miter" strokeLinecap="square" />
        <span class="text-xs mt-1  text-zinc-400">代付款</span>
      </div>
      <div class="flex flex-col items-center">
        <IconPark :icon="Config" theme="filled" size="24" fill="#333" strokeLinejoin="miter" strokeLinecap="square" />
        <span class="text-xs mt-1  text-zinc-400">代付款</span>
      </div>
      <div class="flex flex-col items-center">
        <IconPark :icon="Config" theme="filled" size="24" fill="#333" strokeLinejoin="miter" strokeLinecap="square" />
        <span class="text-xs mt-1  text-zinc-400">代付款</span>
      </div>
      <div class="flex flex-col items-center">
        <IconPark :icon="Config" theme="filled" size="24" fill="#333" strokeLinejoin="miter" strokeLinecap="square" />
        <span class="text-xs mt-1  text-zinc-400">代付款</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconPark from '@/components/common/IconPark.vue'
import { Config } from '@icon-park/vue-next'
</script>

<style  scoped></style>