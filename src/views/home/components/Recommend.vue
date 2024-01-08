<template>
  <div class=" w-full h-screen overflow-auto  relative bg-[#f4f3f8]" ref="waterfall">
    <div class="w-1/2 p-0.5 float-left bg-white" v-for="item in recommendData">
      <router-link :to="{ path: '/detail', query: { id: item.id } }">
        <div class="card_img ">
          <img class="w-full" :src="item.image" alt="">
        </div>
        <p class="w-full p-1 text-lg double-line">{{ item.content }}</p>
        <div class="flex items-center p-1 justify-between">
          <div class="flex items-center"><img class="w-5 h-5 rounded-full"
              :src="item.avatar" alt="">
            <span class="ml-1 text-sm">{{ item.author }}</span>
          </div>
          <div class="flex items-center">
            <ThumbsUp theme="outline" size="20" fill="#9b9b9b" strokeLinejoin="miter" strokeLinecap="square" />
            <span class="text-sm">{{ item.thumbsUp }}</span>
          </div>
        </div>
      </router-link>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { ThumbsUp } from '@icon-park/vue-next'
import { useWaterFall } from './useWaterFall.js'
import { useRecommendStore } from '@/store/useRecommendData.js'
const waterfall = ref(null)
const { recommendData } = useRecommendStore()
onMounted(() => {
  useWaterFall(waterfall)
})
</script>

<style  scoped>
.double-line {
  @apply break-all overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [-webit-line-clamp:2] line-clamp-2;
}
</style>