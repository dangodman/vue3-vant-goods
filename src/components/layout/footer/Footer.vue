<template>
  <div class="bg-sky-200 fixed inset-x-0 bottom-0 pl-4 pr-4 pt-2">
    <ul class="flex justify-between">
      <li v-for="(item, index) in footer" :key="index">
        <router-link :to="item.path" class="flex flex-col items-center" @click="current = index">
          <IconPark :icon="item.icon" :theme="item.theme" size="28" :fill="current === index ? '#fff' : '#333'"
            strokeLinejoin="miter" strokeLinecap="butt" />
          <span class="text-black text-sm">{{ item.title }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useFooter } from './useFooter.js'
import IconPark from '@/components/common/IconPark.vue'
const { footer,current } = useFooter()
</script>
<style scoped></style>