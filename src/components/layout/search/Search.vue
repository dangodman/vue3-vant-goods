<template>
  <div class="flex items-center bg-white" >
    <van-search class="flex-1" @focus="Search" v-model="value" placeholder="请输入搜索关键词" />
    <span class="mr-2">
      <IconPark :icon="Viewfinder" size="24" fill="#333" strokeLinejoin="miter" strokeLinecap="square" />
    </span>
  </div>
</template>

<script setup>
import IconPark from '@/components/common/IconPark.vue'
import { Viewfinder } from '@icon-park/vue-next'
import {ref} from 'vue'
import {useRouter} from 'vue-router'
const router = useRouter()
const value = ref('')
const Search = () =>{ 
  router.push({path:'/home/search'})
}
</script>

<style  scoped></style>