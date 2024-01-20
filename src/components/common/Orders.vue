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
        <IconPark :icon="BankCard"  size="24" fill="#333" strokeLinejoin="miter" strokeLinecap="square" />
        <span class="text-xs mt-1  text-zinc-400">代付款</span>
      </div>
      <div class="flex flex-col items-center">
        <IconPark :icon="Commodity"  size="24" fill="#333" strokeLinejoin="miter" strokeLinecap="square" />
        <span class="text-xs mt-1  text-zinc-400">代发货</span>
      </div>
      <div class="flex flex-col items-center">
        <IconPark :icon="Transporter"  size="24" fill="#333" strokeLinejoin="miter" strokeLinecap="square" />
        <span class="text-xs mt-1  text-zinc-400">待收货</span>
      </div>
      <div class="flex flex-col items-center">
        <IconPark :icon="Currency"  size="24" fill="#333" strokeLinejoin="miter" strokeLinecap="square" />
        <span class="text-xs mt-1  text-zinc-400">退款/售后</span>
      </div>
      <div class="flex flex-col items-center">
        <IconPark :icon="MallBag"  size="24" fill="#333" strokeLinejoin="miter" strokeLinecap="square" />
        <span class="text-xs mt-1  text-zinc-400">求购/还价</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconPark from '@/components/common/IconPark.vue'
import { BankCard,Commodity,Transporter,Currency,MallBag } from '@icon-park/vue-next'
</script>

<style  scoped></style>