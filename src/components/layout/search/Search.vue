<template>
  <div class="flex items-center bg-white">
    <van-search class="flex-1" v-model="value" placeholder="请输入搜索关键词" />
    <span class="mr-2">
      <!-- <viewfinder theme="filled" size="24" fill="#333" strokeLinejoin="miter" strokeLinecap="square"/> -->
      <IconPark :icon="Viewfinder" size="24" fill="#333" strokeLinejoin="miter" strokeLinecap="square" />
    </span>
  </div>
</template>

<script setup>
import IconPark from '@/components/common/IconPark.vue'
import { Viewfinder } from '@icon-park/vue-next'
import {ref} from 'vue'
const value = ref('')
</script>

<style  scoped></style>