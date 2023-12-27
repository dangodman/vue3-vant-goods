<template>
  <div class="bg-white">
    <van-cell  value="心意礼品卡" is-link>
      <!-- 使用 title 插槽来自定义标题 -->
      <template #title>
        <span class="font-bold">钱包</span>
      </template>
    </van-cell>
    <div class="flex justify-between items-center p-3">
      <div class="flex flex-col items-center">
        <span class="font-bold text-sm mb-1">1</span>
        <span class="text-xs text-zinc-400">优惠券</span>
      </div>
      <div class="flex flex-col items-center">
        <span class="font-bold text-sm mb-1">￥20万</span>
        <span class="text-xs text-zinc-400">优惠券</span>
      </div>
      <div class="flex flex-col items-center">
        <span class="font-bold text-sm mb-1">￥5万</span>
        <span class="text-xs  text-zinc-400">差分期额度</span>
      </div>
      <div class="flex flex-col items-center">
        <span class="font-bold text-sm  mb-1">0</span>
        <span class="text-xs  text-zinc-400">津贴</span>
      </div>
      <div class="flex flex-col items-center">
        <span class="font-bold text-sm  mb-1">￥0</span>
        <span class="text-xs  text-zinc-400">礼品卡</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconPark from '@/components/common/IconPark.vue'
import { Config } from '@icon-park/vue-next'
</script>

<style  scoped></style>