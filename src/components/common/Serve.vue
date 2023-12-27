<template>
  <div class="flex p-2 bg-white overflow-x-auto">
    <router-link to="path" class="flex flex-col items-center p-2 mr-1.5">
      <div class="rounded-full w-10 h-10  bg-slate-200 flex items-center justify-center">
        <IconPark :icon="Config" theme="filled" size="24" fill="#333" strokeLinejoin="miter" strokeLinecap="square" />
      </div>
      <span class="text-xs w-12 mt-2">客服中心</span>
    </router-link>
    <router-link to="path" class="flex flex-col items-center p-2 mr-1.5">
      <div class="rounded-full w-10 h-10  bg-slate-200 flex items-center justify-center">
        <IconPark :icon="Config" theme="filled" size="24" fill="#333" strokeLinejoin="miter" strokeLinecap="square" />
      </div>
      <span class="text-xs w-12 mt-2">客服中心</span>
    </router-link>
    <router-link to="path" class="flex flex-col items-center p-2 mr-1.5">
      <div class="rounded-full w-10 h-10  bg-slate-200 flex items-center justify-center">
        <IconPark :icon="Config" theme="filled" size="24" fill="#333" strokeLinejoin="miter" strokeLinecap="square" />
      </div>
      <span class="text-xs w-12 mt-2">客服中心</span>
    </router-link>
    <router-link to="path" class="flex flex-col items-center p-2 mr-1.5">
      <div class="rounded-full w-10 h-10  bg-slate-200 flex items-center justify-center">
        <IconPark :icon="Config" theme="filled" size="24" fill="#333" strokeLinejoin="miter" strokeLinecap="square" />
      </div>
      <span class="text-xs w-12 mt-2">客服中心</span>
    </router-link>
    <router-link to="path" class="flex flex-col items-center p-2 mr-1.5">
      <div class="rounded-full w-10 h-10  bg-slate-200 flex items-center justify-center">
        <IconPark :icon="Config" theme="filled" size="24" fill="#333" strokeLinejoin="miter" strokeLinecap="square" />
      </div>
      <span class="text-xs w-12 mt-2">客服中心</span>
    </router-link>
   
    
    
  </div>
</template>

<script setup>
import IconPark from '@/components/common/IconPark.vue'
import { Config } from '@icon-park/vue-next'
</script>

<style  scoped></style>